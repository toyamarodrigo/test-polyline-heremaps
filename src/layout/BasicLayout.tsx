import React from "react";
import { Box, Stack } from "@chakra-ui/react";

interface BasicLayoutProps {
  children: React.ReactNode;
}

export const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <Stack alignItems="center" h="100vh" justifyContent="center" position="relative" w="100vw">
      <Box
        alignItems="center"
        h="100%"
        spacing={6}
        style={{ position: "relative", marginTop: 0 }}
        w="100%"
      >
        {children}
      </Box>
    </Stack>
  );
};
