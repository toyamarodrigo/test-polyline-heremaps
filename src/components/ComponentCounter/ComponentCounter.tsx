import React from "react";
import { Text, Button, Stack } from "@chakra-ui/react";

import { decrement, increment, incrementByAmount } from "../../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const ComponentCounter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <>
      <Text fontSize="2xl">ComponentCounter</Text>
      <Text>{counter}</Text>
      <Stack direction="row" justifyContent="center">
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(incrementByAmount(4))}>Increment by 4</Button>
      </Stack>
    </>
  );
};
