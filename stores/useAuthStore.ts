import { defineStore } from "pinia";

interface User {
  id: number;
  username: string;
  email: string;
}

interface Admin {
  id: number;
  username: string;
  email: string;
}

export interface Credentials {
  email: string;
  password: string;
  remember: boolean;
}

export interface SignupCredentials {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const useAuthStore = defineStore("auth", () => {
  const authUser = ref<User | Admin | null>(null);
  const isAuthenticated = computed<boolean>(() => authUser.value !== null);

  async function fetchUser() {
    const { data } = await useApiFetch("/api/me");
    authUser.value = data.value as User;
  }

  async function login(credentials: Credentials) {
    await useApiFetch("/sanctum/csrf-cookie");

    const login = await useApiFetch("/login", {
      method: "POST",
      body: credentials,
    });

    await fetchUser();

    return login;
  }

  async function logout() {
    await useApiFetch("/logout", { method: "POST" });
    authUser.value = null;
    navigateTo("/login");
  }

  async function signup(credentials: SignupCredentials) {
    await useApiFetch("/sanctum/csrf-cookie");

    const login = await useApiFetch("/signup", {
      method: "POST",
      body: credentials,
    });

    await fetchUser();

    return login;
  }

  return { authUser, login, isAuthenticated, fetchUser, logout, signup };
});
