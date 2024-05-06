"use client";

import { useCallback, useTransition } from "react";

export const useLoading = () => {
  const [isLoading, startLoading] = useTransition();

  const load = useCallback(() => {
    startLoading(
      () =>
        new Promise((resolve) => {
          setInterval(resolve, 1000);
        })
    );
  }, []);

  return [isLoading, load];
};
