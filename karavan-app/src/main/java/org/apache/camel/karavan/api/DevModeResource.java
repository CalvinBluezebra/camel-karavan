/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.apache.camel.karavan.api;

import io.vertx.core.json.JsonObject;
import io.vertx.mutiny.core.eventbus.EventBus;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.apache.camel.karavan.project.model.Project;
import org.apache.camel.karavan.manager.CamelManager;
import org.apache.camel.karavan.manager.docker.DockerManager;
import org.apache.camel.karavan.manager.kubernetes.KubernetesManager;
import org.apache.camel.karavan.manager.ProjectManager;
import org.apache.camel.karavan.config.ConfigService;
import org.apache.camel.karavan.status.StatusCache;
import org.apache.camel.karavan.status.model.ContainerStatus;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.jboss.logging.Logger;

import static org.apache.camel.karavan.status.StatusEvents.CONTAINER_UPDATED;

@Path("/ui/devmode")
public class DevModeResource {

    private static final Logger LOGGER = Logger.getLogger(DevModeResource.class.getName());

    @ConfigProperty(name = "karavan.environment")
    String environment;

    @Inject
    CamelManager camelManager;

    @Inject
    StatusCache statusCache;

    @Inject
    KubernetesManager kubernetesManager;

    @Inject
    DockerManager dockerManager;

    @Inject
    ProjectManager projectManager;

    @Inject
    EventBus eventBus;

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/{jBangOptions}")
    public Response runProjectWithJBangOptions(Project project, @PathParam("jBangOptions") String jBangOptions) {
        try {
            String containerName = projectManager.runProjectWithJBangOptions(project, jBangOptions);
            if (containerName != null) {
                return Response.ok(containerName).build();
            } else {
                return Response.notModified().build();
            }
        } catch (Exception e) {
            LOGGER.error(e);
            return Response.serverError().entity(e).build();
        }
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response runProject(Project project) throws Exception {
        return runProjectWithJBangOptions(project, "");
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/reload/{projectId}")
    public Response reload(@PathParam("projectId") String projectId) {
        camelManager.reloadProjectCode(projectId);
        return Response.ok().build();
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/{projectId}/{deletePVC}")
    public Response deleteDevMode(@PathParam("projectId") String projectId, @PathParam("deletePVC") boolean deletePVC) {
        setContainerStatusTransit(projectId, ContainerStatus.ContainerType.devmode.name());
        if (ConfigService.inKubernetes()) {
            kubernetesManager.deleteDevModePod(projectId, deletePVC);
        } else {
            dockerManager.deleteContainer(projectId);
        }
        return Response.accepted().build();
    }

    private void setContainerStatusTransit(String name, String type) {
        ContainerStatus status = statusCache.getContainerStatus(name, environment, name);
        if (status == null) {
            status = ContainerStatus.createByType(name, environment, ContainerStatus.ContainerType.valueOf(type));
        }
        status.setInTransit(true);
        eventBus.publish(CONTAINER_UPDATED, JsonObject.mapFrom(status));
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/container/{projectId}")
    public Response getPodStatus(@PathParam("projectId") String projectId) throws RuntimeException {
        ContainerStatus cs = statusCache.getDevModeContainerStatus(projectId, environment);
        if (cs != null) {
            return Response.ok(cs).build();
        } else {
            return Response.noContent().build();
        }
    }
}