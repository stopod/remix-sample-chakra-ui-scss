import { Input } from "@chakra-ui/react";
import { Button } from "~/components/atoms/button/Button";

type InputFromProps = {
  children?: React.ReactNode;
  placeholder?: string;
  name: string;
};
export const InputForm = ({ children, placeholder, name }: InputFromProps) => {
  return (
    <div className="flex">
      <Input placeholder={placeholder} bg={"white"} name={name} />
      <Button type="submit" colorScheme="gray">
        {children}
      </Button>
    </div>
  );
};
