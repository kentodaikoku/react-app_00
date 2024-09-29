import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  id: number;
  imgUrl: string;
  nickName: string;
  fullName: string;
  onClickUser: (id: number) => void;
}

export const UserCard: FC<Props> = memo((props) => {
  const {id, imgUrl, nickName, fullName, onClickUser} = props;
  return (
      <Box 
        w="260px" 
        h="260px" 
        bg="white" 
        borderRadius="10px" 
        shadow="md" 
        p="4" 
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() => onClickUser(id)}
      >
        <Stack textAlign="center">
          <Image src={imgUrl} boxSize="160px" borderRadius="full" m="auto" alt={nickName} />
          <Text fontSize="lg" fontWeight="bold">{nickName}</Text>
          <Text fontSize="sm" color="gray">{fullName}</Text>
        </Stack>
      </Box>
  )
})