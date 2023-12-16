export const logout = () => {
  const router = useRouter();

  localStorage.removeItem("login_timestamp");
  router.push("/login");
};

export const login = () => {
  localStorage.removeItem("login_timestamp");
  localStorage.setItem("login_timestamp", new Date().toISOString());
};
