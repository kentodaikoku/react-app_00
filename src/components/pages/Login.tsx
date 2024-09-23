import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: FC = memo(() => {
  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' p={4} w='sm' borderRadius='md' shadow='md'>
        <Heading as='h1' size='lg' textAlign='center'>User Management APP</Heading>
        <Divider my={4} />
        <Stack spacing={6} px={10} py={4}>
          <Input placeholder="User ID" />
          <PrimaryButton>Log in</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
})
