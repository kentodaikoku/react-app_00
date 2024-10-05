import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
  const [userID, setUserID] = useState('');
  const onChangeUserID = (e: ChangeEvent<HTMLInputElement>) => setUserID(e.target.value);
  
  const { login, loading } = useAuth();
  const onClickLogin = () => login(userID);

  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' p={4} w='sm' borderRadius='md' shadow='md'>
        <Heading as='h1' size='lg' textAlign='center'>User Management APP</Heading>
        <Divider my={4} />
        <Stack spacing={6} px={10} py={4}>
          <Input placeholder="User ID" value={userID} onChange={onChangeUserID} />
          <PrimaryButton disabled={userID === ''} loading={loading} onClick={onClickLogin}>Log in</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
})
