const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@chakra-ui_theme_dist_index_esm_ccc298.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_fa_index_mjs_275a22._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_lib_6322da._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_framer-motion_dist_es_25082c._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_f1e547._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__df422f._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
