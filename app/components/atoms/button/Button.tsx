import { Button as ChakraButton } from "@chakra-ui/react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  colorScheme?: "gray" | "blue";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, type, colorScheme, onClick }: ButtonProps) => {
  return (
    <ChakraButton type={type} colorScheme={colorScheme} onClick={onClick}>
      {children}
    </ChakraButton>
  );
};
