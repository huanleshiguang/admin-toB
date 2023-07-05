import { UserConfig } from "vite";
import { useServer } from "./server";

export function configSetting(env: Recordable): UserConfig {
  return {
    root: process.cwd(),
    base: env.VITE_BASE_PATH,
    server: useServer(env.VITE_BASE_API, env.VITE_GLOB_API_URL)
  };
}
