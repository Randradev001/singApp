/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  serverPlatform: "node",
  // en dev no impacta mucho, pero déjalo listo para build:
  serverDependenciesToBundle: [/^@mui\//, /^@emotion\//, /^@babel\/runtime\//],
  // si ves otro error ESM en build, cambia a: serverDependenciesToBundle: "all"

   // 🔒 Rutas definidas a mano (URL → archivo)
  routes(defineRoutes) {
    return defineRoutes((route) => {
      // raíz "/"
      route("/", "routes/index.js");

      // /sample-page
      route("sample-page", "routes/sample-page/index.jsx");

      // /dashboard/default
      route("dashboard/default", "routes/dashboard/default/index.jsx");

      // /pages/login  (tu archivo es Login3.jsx)
      route("pages/login", "routes/pages/login/Login3.jsx");

      // /master/dataGridCompany
      route("master/dataGridCompany", "routes/pages/master/dataGridCompany.jsx");

          // /master/dataGridCompany
      route("master/dataGridOperation", "routes/pages/master/dataGridOperation.jsx");
      
          // /master/dataGridCompany
      route("master/dataGridDayliReport", "routes/pages/master/dataGridDayliReport.jsx");

      // /register  (si quieres esta ruta directa)
      route("register", "routes/pages/register/Register3.jsx");

      // si quieres exponer /utils:
      // route("utils", "routes/utils/index.js");
    });
  },

};