/* empty css                                 */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D-C59eaK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_J8R5VzgY.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio app error 404 " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex overflow-hidden flex-col justify-center items-center px-20 py-24 bg-amber-400 max-md:px-5 w-full h-screen"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/401b005c7c805ccf776513768fdb5fe2c6bdcc7868a55f1e2a6df86f34c13634?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac" alt="Hero section banner" class="object-contain rounded-3xl aspect-[1.41] max-w-full max-md:max-w-full"> </section> ` })}`;
}, "F:/Portafolio/Portafolio/src/pages/404.astro", void 0);

const $$file = "F:/Portafolio/Portafolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
