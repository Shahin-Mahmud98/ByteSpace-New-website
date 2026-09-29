const KEY = "bs_user";
export type SessionUser = { name: string; email: string };
export const getUser = (): SessionUser | null => {
  try { return JSON.parse(localStorage.getItem(KEY) ?? "null"); } catch { return null; }
};
export const setUser = (u: SessionUser) => localStorage.setItem(KEY, JSON.stringify(u));
export const clearUser = () => localStorage.removeItem(KEY);
