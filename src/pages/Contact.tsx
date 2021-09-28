import { Text } from "@chakra-ui/react";
import React from "react";

import { ComponentFetchPokemon } from "../components";
import { BasicLayout } from "../layout";

export const Contact = () => {
  return (
    <BasicLayout>
      <Text fontSize="6xl">CONTACT</Text>
      <Text fontWeight="bold">
        ViteJS - Typescript - React - Redux Toolkit - ChakraUI - React Router - Axios
      </Text>
      <ComponentFetchPokemon />
    </BasicLayout>
  );
};
