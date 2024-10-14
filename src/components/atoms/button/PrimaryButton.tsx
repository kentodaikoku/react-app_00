import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean; //optional
  loading?: boolean; //optional
  onClick: () => void;
}

export const PrimaryButton: FC<Props> = memo(({children, disabled = false, loading = false, onClick }) => {
  return (
    <Button 
      bg='teal.400' 
      color='white' 
      _hover={{ opacity: 0.8 }} 
      isDisabled={disabled}
      isLoading={loading}
      onClick={onClick}
    >
      { children }
    </Button>
  )
})
