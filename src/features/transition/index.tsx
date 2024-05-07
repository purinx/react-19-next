"use client";

import { Box, Button, Heading, Spinner } from "@radix-ui/themes";
import { useCallback, useTransition } from "react";

export const Transition = () => {
  const [isLoading, startLoading] = useTransition();

  const load = useCallback(() => {
    startLoading(
      () =>
        new Promise((resolve) => {
          setInterval(resolve, 1000);
        }),
    );
  }, []);

  return (
    <Box m="2">
      <Heading mb="2" as="h2">
        useTransition
      </Heading>
      {isLoading ? <Spinner /> : <Button onClick={load}>Load</Button>}
    </Box>
  );
};
