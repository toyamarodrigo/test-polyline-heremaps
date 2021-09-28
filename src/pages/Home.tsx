import React from "react";
import { Text } from "@chakra-ui/react";

import { BasicLayout } from "../layout";
import { ComponentCounter, ComponentFetchPokemon } from "../components";

export const Home = () => {
  return (
    <BasicLayout>
      <Text fontSize="6xl">HOME</Text>
      <Text fontWeight="bold">
        ViteJS - Typescript - React - Redux Toolkit - ChakraUI - React Router - Axios
      </Text>
      <ComponentCounter />
      <ComponentFetchPokemon />
    </BasicLayout>
  );
};
