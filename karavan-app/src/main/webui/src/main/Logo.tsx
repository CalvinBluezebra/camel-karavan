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

import React from "react";

function Icon(className?: string) {
    // return (
    //     <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         xmlnsXlink="http://www.w3.org/1999/xlink"
    //         id="svg50"
    //         width="256"
    //         height="256"
    //         preserveAspectRatio="xMidYMid"
    //         version="1.1"
    //         viewBox="0 0 256 256"
    //         className={className ? className : "logo"}
    //     >
    //         <defs id="defs31">
    //             <linearGradient id="linearGradient1351">
    //                 <stop
    //                     id="stop1347"
    //                     offset="0"
    //                     stopColor="#dcffff"
    //                     stopOpacity="1"
    //                 ></stop>
    //                 <stop
    //                     id="stop1349"
    //                     offset="1"
    //                     stopColor="#96d2e6"
    //                     stopOpacity="1"
    //                 ></stop>
    //             </linearGradient>
    //             <circle id="path-1" cx="128" cy="128" r="128"></circle>
    //             <linearGradient
    //                 id="linearGradient-3"
    //                 x1="-26.051"
    //                 x2="254.316"
    //                 y1="271.331"
    //                 y2="0.048"
    //                 gradientUnits="userSpaceOnUse"
    //             >
    //                 <stop
    //                     id="stop10"
    //                     offset="0%"
    //                     stopColor="#4790bb"
    //                     stopOpacity="1"
    //                 ></stop>
    //                 <stop
    //                     id="stop12"
    //                     offset="10.996%"
    //                     stopColor="#64b7db"
    //                     stopOpacity="1"
    //                 ></stop>
    //                 <stop
    //                     id="stop14"
    //                     offset="94.502%"
    //                     stopColor="#326ea0"
    //                     stopOpacity="1"
    //                 ></stop>
    //             </linearGradient>
    //             <linearGradient
    //                 id="linearGradient-4"
    //                 x1="-32.163"
    //                 x2="259.338"
    //                 y1="277.029"
    //                 y2="-5.028"
    //                 gradientUnits="userSpaceOnUse"
    //             >
    //                 <stop id="stop17" offset="0%" stopColor="#F69923"></stop>
    //                 <stop id="stop19" offset="8.048%" stopColor="#F79A23"></stop>
    //                 <stop id="stop21" offset="41.874%" stopColor="#E97826"></stop>
    //             </linearGradient>
    //             <linearGradient
    //                 id="linearGradient-5"
    //                 x1="217.945"
    //                 x2="99.459"
    //                 y1="67.505"
    //                 y2="247.005"
    //                 gradientTransform="scale(.96442 1.0369)"
    //                 gradientUnits="userSpaceOnUse"
    //                 xlinkHref="#linearGradient-4"
    //             >
    //                 <stop
    //                     id="stop24"
    //                     offset="0%"
    //                     stopColor="#92d6d5"
    //                     stopOpacity="1"
    //                 ></stop>
    //                 <stop
    //                     id="stop26"
    //                     offset="41.191%"
    //                     stopColor="#79b7cc"
    //                     stopOpacity="1"
    //                 ></stop>
    //                 <stop
    //                     id="stop28"
    //                     offset="73.271%"
    //                     stopColor="#5891c5"
    //                     stopOpacity="1"
    //                 ></stop>
    //             </linearGradient>
    //             <mask id="mask-2" fill="#fff">
    //                 <use id="use33" xlinkHref="#path-1"></use>
    //             </mask>
    //             <mask id="mask-2-7" fill="#fff">
    //                 <use id="use137" xlinkHref="#path-1"></use>
    //             </mask>
    //             <linearGradient
    //                 id="linearGradient1345"
    //                 x1="233.122"
    //                 x2="2.24"
    //                 y1="56.015"
    //                 y2="242.78"
    //                 gradientUnits="userSpaceOnUse"
    //                 xlinkHref="#linearGradient1351"
    //             ></linearGradient>
    //         </defs>
    //         <circle
    //             id="circle38"
    //             cx="127.994"
    //             cy="127.994"
    //             r="123.111"
    //             fill="url(#linearGradient-3)"
    //             fillRule="nonzero"
    //             mask="url(#mask-2)"
    //         ></circle>
    //         <g id="g2266">
    //             <path
    //                 id="path42"
    //                 fill="url(#linearGradient-5)"
    //                 fillOpacity="1"
    //                 fillRule="nonzero"
    //                 d="M98.044 75.517c-1.751-.002-3.524.01-5.292.061-2.056.06-4.817.713-8 1.785 53.775 40.834 73.108 114.497 39.875 178.514 1.129.03 2.249.123 3.385.123 60.736 0 111.492-42.323 124.609-99.071-38.542-45.178-90.813-81.314-154.578-81.412z"
    //                 mask="url(#mask-2)"
    //                 opacity="0.75"
    //             ></path>
    //         </g>
    //         <path
    //             id="path44"
    //             fill="#1e4b7b"
    //             fillOpacity="1"
    //             fillRule="nonzero"
    //             d="M84.752 77.368C66.895 83.378 32.83 104.546.079 132.81c2.487 67.334 57.028 121.313 124.548 123.07 33.233-64.016 13.901-137.68-39.875-178.513z"
    //             mask="url(#mask-2)"
    //             opacity="0.75"
    //         ></path>
    //         <path
    //             id="path150"
    //             fill="url(#linearGradient1345)"
    //             fillOpacity="1"
    //             fillRule="nonzero"
    //             d="M128.747 54.005c-10.985 5.495 0 27.466 0 27.466C95.774 108.954 102.78 155.9 64.312 155.9c-20.97 0-42.242-24.077-64.233-38.828-.283 3.479-.785 6.972-.785 10.524 0 48.095 26.263 89.924 65.42 111.897 10.952-1.38 22.838-4.114 31.05-9.592 43.146-28.765 53.857-83.491 71.487-109.925 10.979-16.492 62.434-15.061 65.906-22.01 5.502-10.991-10.99-27.467-16.491-27.467h-43.958c-3.071 0-7.897-5.456-10.974-5.456h-16.492s-7.307-11.085-13.794-11.526c-.93-.066-1.83.053-2.7.488z"
    //             mask="url(#mask-2-7)"
    //             transform="translate(-.769 -.133)"
    //         ></path>
    //         <path
    //             id="path40"
    //             fill="#2d4150"
    //             fillOpacity="1"
    //             fillRule="nonzero"
    //             d="M128 256C57.308 256 0 198.692 0 128 0 57.308 57.308 0 128 0c70.692 0 128 57.308 128 128 0 70.692-57.308 128-128 128zm0-9.768c65.298 0 118.232-52.934 118.232-118.232S193.298 9.768 128 9.768 9.768 62.702 9.768 128 62.702 246.232 128 246.232z"
    //             mask="url(#mask-2)"
    //             transform="translate(-.59) scale(1.00078)"
    //         ></path>
    //     </svg>
    // );
    return (
        <img
            className={className ? className : "logo"}
            src="data:image/png;base64,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"
            width="256"
            height="256"
            alt="Icon"
        />
    );
}

export default Icon;
