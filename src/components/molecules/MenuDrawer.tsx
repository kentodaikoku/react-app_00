import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  handleToLink: (path: string) => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const {isOpen, onClose, handleToLink} = props;
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size='xs'>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%' onClick={() => handleToLink('')}>TOP</Button>
            <Button w='100%' onClick={() => handleToLink('/user_management')}>ユーザー一覧</Button>
            <Button w='100%' onClick={() => handleToLink('/setting')}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})