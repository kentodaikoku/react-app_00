import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  imgUrl: string;
  nickName: string;
  fullName: string;
}

export const UserCard: FC<Props> = memo((props) => {
  const {imgUrl, nickName, fullName} = props;
  return (
      <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p="4" _hover={{ cursor: "pointer", opacity: 0.8 }}>
        <Stack textAlign="center">
          <Image src={imgUrl} boxSize="160px" borderRadius="full" m="auto" alt={nickName} />
          <Text fontSize="lg" fontWeight="bold">{nickName}</Text>
          <Text fontSize="sm" color="gray">{fullName}</Text>
        </Stack>
      </Box>
  )
})