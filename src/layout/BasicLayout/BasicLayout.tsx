import React from "react";
import { Stack, Text } from "@chakra-ui/react";

import { Navbar } from "../../components";

export const BasicLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <Stack alignItems="center" h="100vh" justifyContent="center" w="100vw">
        <Text fontSize="4xl">___BasicLayout___</Text>
        <Stack spacing={6} textAlign="center">
          {children}
        </Stack>
        <Text fontSize="4xl">___BasicLayout___</Text>
      </Stack>
    </>
  );
};
