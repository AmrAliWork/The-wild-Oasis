import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeprovider");
  return context;
}

export default useDarkMode;
