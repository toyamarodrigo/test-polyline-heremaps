import { Text } from "@chakra-ui/react";
import React from "react";

import { ComponentCounter } from "../components";
import { BasicLayout } from "../layout";

export const About = () => {
  return (
    <BasicLayout>
      <Text fontSize="6xl">ABOUT</Text>
      <Text fontWeight="bold">
        ViteJS - Typescript - React - Redux Toolkit - ChakraUI - React Router - Axios
      </Text>
      <ComponentCounter />
    </BasicLayout>
  );
};
