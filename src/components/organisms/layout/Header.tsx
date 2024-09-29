import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  const {isOpen, onClose, onOpen} = useDisclosure();
  const navigate = useNavigate();
  
  const handleToLink = (path: string) => {
    const home = '/home';
    navigate(home + path);
    onClose();
  }

  // return <div style={{ height: '50px', backgroundColor: 'teal' }}></div>
  return (
    <>
      <Flex 
        as={'nav'}
        bg={"teal.500"}
        color={"gray.50"}
        align={"center"}
        justify={"space-between"}
        padding={{ base: 3, md: 5 }}
      >
        {/* Header titile */}
        <Flex as={'a'} align={"center"} mr={8} _hover={{ cursor: 'pointer' }} onClick={() => handleToLink('')}>
          <Heading as={'h1'} fontSize={{ base: 'md', md: 'lg' }}>User Management APP</Heading>   
        </Flex>
        {/* Link */}
        <Flex align={"center"} fontSize={"sm"} flexGrow={1} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link onClick={() => handleToLink('/user_management')}>Users List</Link>
          </Box>
          <Link onClick={() => handleToLink('/setting')}>Setting</Link>
        </Flex>
        {/* Mobile Link */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      {/* Mobile link drawer */}
      <MenuDrawer 
        isOpen={isOpen} 
        onClose={onClose} 
        handleToLink={handleToLink}
      />
    </>
  )
})