import { Button } from "@chakra-ui/react";

type DefaultButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const DefaultButton = ({ children, type, onClick }: DefaultButtonProps) => {
  return (
    <Button type={type} colorScheme="gray" onClick={onClick}>
      {children}
    </Button>
  );
};
