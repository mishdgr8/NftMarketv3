import { Avatar, Box, Link, Heading, Flex, Text } from "@chakra-ui/react";
import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import NextLink from "next/link";

const Navbar = () => {
  const address = useAddress();

  return (
    <Box maxW={"1200"} m={"auto"} py={"10px"} px={"40px"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Link as={NextLink} href="/buy" mx={2.5}>
          <Heading> MerChant</Heading>
        </Link>
        <Flex direction={"row"}>
          <Link as={NextLink} href="/buy" mx={2.5}>
            <Text>BUY</Text>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Text>SELL</Text>
          </Link>
        </Flex>
        <Flex direction={"row"} alignItems={"center"}>
          <ConnectWallet />
          {address && (
            <Link as={NextLink} href={`profile/${address}`}>
              <Avatar src="kgjffj" ml={2.5} />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
