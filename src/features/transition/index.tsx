import { useCallback, useTransition } from "react";
import { useLoading } from "./useLoading";

export const Transition = () => {
  const [isLoading, startLoading] = useTransition();

  const load = useCallback(() => {
    startLoading(
      () =>
        new Promise((resolve) => {
          setInterval(resolve, 1000);
        })
    );
  }, []);

  return <div></div>;
};
