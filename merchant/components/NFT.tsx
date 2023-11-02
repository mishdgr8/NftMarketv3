import React from "react";
import { NFT } from "@thirdweb-dev/sdk";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../const/addresses";
import {
  ThirdwebNftMedia,
  useContract,
  useValidDirectListings,
  useEnglishAuction,
} from "@thirdweb-dev/react";
import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";

type Props = {
  nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
  const { contract: marketplace, isLoading: loadingMarketPlace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const { data: directListing, isLoading: loadingDirectListing } =
    useValidDirectListings(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS,
      tokenId: nft.metadata.id,
    });

  return (
    <Flex
      direction={"column"}
      backgroundColor={"EEE"}
      justifyContent={"center"}
      padding={"20px"}
    >
      <Box borderRadius={"4px"} overflow={"hidden"}>
        <ThirdwebNftMedia
          metadata={nft.metadata}
          height={"100%"}
          width={"100"}
        />
      </Box>
      <Text fontSize={"small"} color={"darkgray"}>
        Token ID #{nft.metadata.id}
      </Text>
      <Text fontWeight={"bold"}>{nft.metadata.name}</Text>
    </Flex>
  );
}