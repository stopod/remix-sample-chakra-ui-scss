import { Button as ChakraButton } from "@chakra-ui/react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  colorScheme: "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink";
};

export const ColorButton = ({ children, type, colorScheme }: ButtonProps) => {
  return (
    <ChakraButton type={type} colorScheme={colorScheme}>
      {children}
    </ChakraButton>
  );
};
