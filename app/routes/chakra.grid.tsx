import { Grid as ChakraGrid, GridItem, useBoolean } from "@chakra-ui/react";
import Select from "react-select";
import { chakraComponents, ChakraStylesConfig } from "chakra-react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const chakraStyles: ChakraStylesConfig = {
  control: (provided) => ({
    ...provided,
    borderRadius: "md",
    borderColor: "gray.200",
    _hover: {
      borderColor: "gray.300",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "blue.500" : "white",
    color: state.isSelected ? "white" : "black",
    _hover: {
      backgroundColor: state.isSelected ? "blue.600" : "gray.100",
    },
  }),
};

const SearchableSelect = () => {
  return (
    <Select
      options={options}
      components={chakraComponents}
      chakraStyles={chakraStyles}
      placeholder="Select an option..."
      isSearchable
    />
  );
};

export default function Grid() {
  const [flag, setFlag] = useBoolean();
  return (
    <ChakraGrid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
        <div className="mb-5">
          <p>Boolean state: {flag.toString()}</p>
          <button onClick={setFlag.toggle}>Click me to toggle the boolean value</button>
        </div>
        <div>
          <SearchableSelect />
        </div>
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </ChakraGrid>
  );
}
