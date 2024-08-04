import { Grid as ChakraGrid, GridItem, useBoolean } from "@chakra-ui/react";

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
        <>
          <p>Boolean state: {flag.toString()}</p>
          <button onClick={setFlag.toggle}>Click me to toggle the boolean value</button>
        </>
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </ChakraGrid>
  );
}
