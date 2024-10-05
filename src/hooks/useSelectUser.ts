import { useCallback, useState } from "react"
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}

export const useSelectUser = () => {
  const [seletedUser, setSelectUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUers = users.find((user) => user.id === id);
    setSelectUser(targetUers!); // '!' is used when it defenitely has data in there

    onOpen();
  }, []);

  return {onSelectUser, seletedUser};
}