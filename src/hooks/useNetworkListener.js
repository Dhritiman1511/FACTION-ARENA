import { useEffect } from "react";

import { useAppStore } from "../store/app.store";

export const useNetworkListener = () => {
  const setOnline = useAppStore((state) => state.setOnline);

  useEffect(() => {
    const online = () => {
      setOnline(true);
    };

    const offline = () => {
      setOnline(false);
    };

    window.addEventListener("online", online);

    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", online);

      window.removeEventListener("offline", offline);
    };
  }, []);
};
