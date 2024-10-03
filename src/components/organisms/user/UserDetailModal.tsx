import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react"
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  isAdmin?: boolean; //optional
}

export const UserDetailModal: FC<Props> = memo((props) => {
  const {isOpen, onClose, user, isAdmin = false} = props;

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    //if null or undefined -> ""
    setUsername(user?.username ?? ""); 
    setFullname(user?.name ?? "" );
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  // Input Value
  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangeFullname = (e: ChangeEvent<HTMLInputElement>) => setFullname(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

  const onClickUpdate = () => alert("Updated");
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>User Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>NAME</FormLabel>
              <Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>FULL NAME</FormLabel>
              <Input value={fullname} onChange={onChangeFullname} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
            </FormControl>
            <ModalFooter>
              {isAdmin &&
                <PrimaryButton onClick={onClickUpdate} >更新</PrimaryButton> 
              }
            </ModalFooter>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})