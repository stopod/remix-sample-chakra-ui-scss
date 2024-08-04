import { Input } from "@chakra-ui/react";
import { DefaultButton } from "~/components/atoms/button";

type InputFromProps = {
  children?: React.ReactNode;
  placeholder?: string;
  name: string;
};
export const InputForm = ({ children, placeholder, name }: InputFromProps) => {
  return (
    <div className="flex">
      <Input placeholder={placeholder} bg={"white"} name={name} />
      <DefaultButton type="submit">{children}</DefaultButton>
    </div>
  );
};
