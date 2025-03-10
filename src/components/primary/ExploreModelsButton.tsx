import { ExploreModelsIcon } from "@/icons/sidebar-icons";
import { Circle, HStack, Link, Text } from "@chakra-ui/react";

const ExploreGptButton = () => {
  return (
    <HStack
      _hover={{ layerStyle: "fill.muted", textDecoration: "none" }}
      px="1"
      h="10"
      borderRadius="lg"
      w="100%"
      whiteSpace="nowrap"
    >
      <Link
        href="#"
        variant="plain"
        _hover={{ textDecoration: "none" }}
        w={"full"}
        outline={"none"}
      >
        <Circle size="6" borderWidth="1px">
          <ExploreModelsIcon fontSize="md" />
        </Circle>
        <Text fontSize="sm" fontWeight="md">
          Explore Models
        </Text>
      </Link>
    </HStack>
  );
};

export default ExploreGptButton;
