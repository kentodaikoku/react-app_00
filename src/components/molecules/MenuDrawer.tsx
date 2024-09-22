import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  toHome: () => void;
  toUserManagement: () => void;
  toSetting: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const {isOpen, onClose, toHome, toUserManagement, toSetting} = props;
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size='xs'>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%' onClick={toHome}>TOP</Button>
            <Button w='100%' onClick={toUserManagement}>ユーザー一覧</Button>
            <Button w='100%' onClick={toSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})