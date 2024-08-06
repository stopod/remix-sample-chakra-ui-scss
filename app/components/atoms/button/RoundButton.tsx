import { Button as ChakraButton } from "@chakra-ui/react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const RoundButton = ({ children, type, onClick }: ButtonProps) => {
  return (
    <ChakraButton type={type} colorScheme={"blue"} onClick={onClick} borderRadius={99}>
      {children}
    </ChakraButton>
  );
};
