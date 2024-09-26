import { Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo } from "react";
import { UserCard } from "../organisms/user/UserCard";


export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard imgUrl="https://picsum.photos/800" nickName="aaa" fullName="bbb" />
      </WrapItem>
    </Wrap>
  )
})
