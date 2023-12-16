export const logout = () => {
  const router = useRouter();

  localStorage.removeItem("token");
  router.push("/login");
}