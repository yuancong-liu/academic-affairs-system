export default defineNuxtRouteMiddleware((to, from) => {
  const accessibleUnauthorized =
    to.path === "/login" || to.path.startsWith("/reset");

  if (accessibleUnauthorized) return true;

  if (!localStorage || !localStorage.getItem("login_timestamp"))
    return { path: "/login" };
});
