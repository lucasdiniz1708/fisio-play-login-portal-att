import { fetchMe, loginRequest } from "@/services/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = { id: string; email: string; name?: string } | null;

type AuthContextValue = {
  user: User;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  token: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem("auth.token") : null
  );
  const [user, setUser] = useState<User>(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("auth.user") : null;
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (token && !user) {
      fetchMe(token)
        .then((u) => {
          setUser(u);
          localStorage.setItem("auth.user", JSON.stringify(u));
        })
        .catch(() => {
          // ignore
        });
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    const { token: t, user: u } = await loginRequest(email, password);
    setToken(t);
    setUser(u);
    localStorage.setItem("auth.token", t);
    localStorage.setItem("auth.user", JSON.stringify(u));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("auth.token");
    localStorage.removeItem("auth.user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);