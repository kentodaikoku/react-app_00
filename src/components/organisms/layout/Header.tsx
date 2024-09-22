import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  const {isOpen, onClose, onOpen} = useDisclosure();
  const navigate = useNavigate();
  const home = '/home';

  const toHome = useCallback(() => { navigate(home); onClose() }, [navigate, onClose]);
  const toUserManagement = useCallback(() => { navigate(`${home}/user_management`); onClose() }, [navigate, onClose]);
  const toSetting = useCallback(() => { navigate(`${home}/setting`); onClose() }, [navigate, onClose]);

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
        <Flex as={'a'} align={"center"} mr={8} _hover={{ cursor: 'pointer' }} onClick={toHome}>
          <Heading as={'h1'} fontSize={{ base: 'md', md: 'lg' }}>ユーザー管理アプリ</Heading>   
        </Flex>
        {/* Link */}
        <Flex align={"center"} fontSize={"sm"} flexGrow={1} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link onClick={toUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={toSetting}>設定</Link>
        </Flex>
        {/* Mobile Link */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      
      {/* Mobile link drawer */}
      <MenuDrawer 
        isOpen={isOpen} 
        onClose={onClose} 
        toHome={toHome} 
        toUserManagement={toUserManagement} 
        toSetting={toSetting} 
      />
    </>
  )
})