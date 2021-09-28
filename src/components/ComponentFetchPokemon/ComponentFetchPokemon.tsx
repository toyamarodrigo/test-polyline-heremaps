import React from "react";
import { Text } from "@chakra-ui/react";

import { useGetPokemonByNameQuery } from "../../services/pokemon";

export const ComponentFetchPokemon = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  if (error) return <Text>Error!</Text>;

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <>
      <Text fontSize="4xl">ComponentFetchPokemon</Text>
      <Text fontSize="2xl">useGetPokemonByNameQuery Pokemon: {data.name}</Text>
    </>
  );
};
