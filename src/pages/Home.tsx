import React, { useState } from "react";
import {
  Button,
  Textarea,
  Stack,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  IconButton,
} from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa";
import { LatLngExpression } from "leaflet";

import { LeafletMap } from "../components";
import { BasicLayout } from "../layout";
import { decode } from "../utils/flexible-polyline";

export const Home = () => {
  const [encodedPolyline, setEncodedPolyline] = useState<string>("");
  const [polyline, setPolyline] = useState<LatLngExpression[]>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (event) => {
    const { value } = event.target;

    setEncodedPolyline(value);
  };

  const getPolyline = () => {
    const decodeStartPolyline = decode(encodedPolyline);

    setPolyline(decodeStartPolyline.polyline);
  };

  const clearPolyline = () => {
    setEncodedPolyline("");
    setPolyline(null);
  };

  return (
    <BasicLayout>
      <LeafletMap polyline={polyline} />
      <Stack direction="row" left="20px" position="absolute" top="20px">
        <Textarea
          _focus={{ backgroundColor: "white" }}
          bgColor="white"
          borderColor="black"
          left="20px"
          minH="90px"
          placeholder="BG7gn_hCnxmrvDwJgFwH3NsdrxBoLjXwMvWsJvRgFrJgKjSnG3DzP3InQrJvHrE7G3DriBvRzenQnVjIrOrEjXjDAwWz3BA_O8BvMsEUjsDAz9DrY0Z31BsJnf4D_gC0FsD08B"
          position="relative"
          resize="none"
          top="20px"
          value={encodedPolyline}
          variant="filled"
          w="500px"
          onChange={(e) => handleInputChange(e)}
        />
        <Stack direction="column" position="relative">
          <Button
            colorScheme="blue"
            left="20px"
            position="relative"
            top="20px"
            variant="solid"
            onClick={() => getPolyline()}
          >
            POLYLINE
          </Button>
          <Button
            colorScheme="gray"
            left="20px"
            top="20px"
            variant="solid"
            onClick={() => clearPolyline()}
          >
            CLEAN
          </Button>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Button
          colorScheme="blackAlpha"
          left="40px"
          position="absolute"
          size="sm"
          top="150px"
          variant="solid"
          onClick={() => onOpen()}
        >
          output
        </Button>
      </Stack>
      <Stack direction="row">
        <IconButton
          aria-label="Github repo"
          as="a"
          colorScheme="blackAlpha"
          href="https://github.com/toyamarodrigo/test-polyline-heremaps"
          icon={<FaGithubAlt />}
          position="absolute"
          right="40px"
          rounded="full"
          target="_blank"
          top="40px"
        />
      </Stack>
      <Modal isOpen={isOpen} scrollBehavior="inside" onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="700px">
          <ModalHeader>Polyline Array</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <pre>
              [
              {polyline &&
                polyline
                  .map((point) => {
                    return `[${point[0]}, ${point[1]}]`;
                  })
                  .join("\n")}
              ]
            </pre>
          </ModalBody>
        </ModalContent>
      </Modal>
    </BasicLayout>
  );
};
