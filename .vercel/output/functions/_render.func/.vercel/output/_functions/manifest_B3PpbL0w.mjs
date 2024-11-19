import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CFgGX3lA.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_D-C59eaK.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///F:/Portafolio/Portafolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.RQhK8md7.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",a=>{document.querySelectorAll('a[href^=\"#\"]').forEach(r=>{r.addEventListener(\"click\",function(n){n.preventDefault();const o=n.currentTarget.getAttribute(\"href\");if(o){const e=o.substring(1),t=document.getElementById(e);t&&t.scrollIntoView({behavior:\"smooth\",block:\"start\"})}})})});document.addEventListener(\"DOMContentLoaded\",a=>{const r=document.getElementById(\"navbar\"),n=document.querySelectorAll(\".btnd\");window.addEventListener(\"scroll\",()=>{window.scrollY>100?r?.classList.add(\"navbar-scrolled\"):r?.classList.remove(\"navbar-scrolled\")}),n.forEach(e=>{e.addEventListener(\"click\",t=>{t.preventDefault();const c=e.getAttribute(\"href\");if(c){const s=c.substring(1),d=document.getElementById(s);d&&d.scrollIntoView({behavior:\"smooth\",block:\"start\"})}})});const o=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const c=t.target.id,s=document.querySelector(`a[href=\"#${c}\"]`);s&&(n.forEach(d=>d.classList.remove(\"text-fcd34d\")),s.classList.add(\"text-fcd34d\"))}})},{threshold:.5});document.querySelectorAll(\"section[id]\").forEach(e=>{o.observe(e)})});\n"}],"styles":[{"type":"external","src":"/_astro/index.RQhK8md7.css"},{"type":"external","src":"/_astro/index.Ba6MYIF4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["F:/Portafolio/Portafolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["F:/Portafolio/Portafolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","F:/Portafolio/Portafolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","F:/Portafolio/Portafolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_B3PpbL0w.mjs","F:/Portafolio/Portafolio/src/components/ContactForm":"_astro/ContactForm.CVx4QHM1.js","F:/Portafolio/Portafolio/src/components/Projects":"_astro/Projects.CJ5-Megf.js","F:/Portafolio/Portafolio/src/components/buttons/ButtonDownload":"_astro/ButtonDownload.BwkAyGUC.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.BlEDtCBq.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/onest-cyrillic-wght-normal.CiQTuMoU.woff2","/_astro/onest-latin-ext-wght-normal.0BME-IPC.woff2","/_astro/onest-latin-wght-normal.DJzCSW5i.woff2","/_astro/index.RQhK8md7.css","/_astro/index.Ba6MYIF4.css","/escritorio.jpeg","/escritorio2.jpeg","/escritorio3.jpeg","/escritorio4.jpeg","/escritorio4.webp","/escritorio5.jpeg","/favicon.svg","/cv/Tomas Joaquin Ramos-2.pdf","/_astro/ButtonDownload.BwkAyGUC.js","/_astro/client.BIGLHmRd.js","/_astro/ContactForm.CVx4QHM1.js","/_astro/createLucideIcon.DNUpOw0j.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/Projects.CJ5-Megf.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"zaRUur9K36VDraK7ByRPfzI7boalmiQ3kYz2Kwo+gew=","experimentalEnvGetSecretEnabled":false});

export { manifest };
