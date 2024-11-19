import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as l}from"./index.DhYZZe0J.js";import{c as i}from"./createLucideIcon.DNUpOw0j.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=i("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);function m({fileName:n="cv.pdf"}){const[o,r]=l.useState(!1),s=async()=>{r(!0);try{const a=`/cv/${n}`,t=document.createElement("a");t.href=a,t.download=n,document.body.appendChild(t),t.click(),document.body.removeChild(t)}catch(a){console.error("Error al descargar el archivo:",a)}finally{setTimeout(()=>{r(!1)},800)}};return e.jsxs("button",{onClick:s,disabled:o,className:`
        relative overflow-hidden px-8 py-3 rounded-lg
        bg-gradient-to-r from-purple-500 to-indigo-600
        text-white font-semibold text-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
        ${o?"cursor-not-allowed opacity-75":"hover:from-purple-600 hover:to-indigo-700"}
      `,children:[e.jsxs("span",{className:"flex items-center justify-center",children:[e.jsx(c,{className:`mr-2 h-5 w-5 ${o?"animate-bounce":"animate-pulse"}`}),o?"Descargando...":"Descargar CV"]}),e.jsx("span",{className:`
          absolute inset-0 flex items-center justify-center w-full h-full
          transition-all duration-300 ease-in-out transform
          ${o?"scale-100 opacity-100":"scale-0 opacity-0"}
        `,children:e.jsxs("svg",{className:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})]})}export{m as default};
