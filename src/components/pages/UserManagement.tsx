import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserDetailModal } from "../organisms/user/UserDetailModal";


export const UserManagement: FC = memo(() => {
  const {loading, users, getUsers} = useAllUsers();
  const {onSelectUser, seletedUser} = useSelectUser();

  useEffect(() =>{
    getUsers();
  }, [getUsers]);

  const {isOpen, onOpen, onClose} = useDisclosure();

  const onClickUser = useCallback((id: number) => {
    onSelectUser({id, users, onOpen});
  }, [onOpen, onSelectUser, users]);
  
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => {
            return (
              <WrapItem key={user.id} mx="auto" >
                <UserCard 
                  id={user.id}
                  imgUrl="https://picsum.photos/800" 
                  nickName={user.username} 
                  fullName={user.name} 
                  onClickUser={onClickUser}
                />
              </WrapItem>
            )
          })}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={seletedUser} />
    </>
  )
})
