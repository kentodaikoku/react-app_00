import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";


export const UserManagement: FC = memo(() => {
  const {loading, users, getUsers} = useAllUsers();
  useEffect(() =>{
    getUsers();
  }, [getUsers]);
  
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
                <UserCard imgUrl="https://picsum.photos/800" nickName={user.username} fullName={user.name} />
              </WrapItem>
            )
          })}
        </Wrap>
      )} 
    </>
  )
})
