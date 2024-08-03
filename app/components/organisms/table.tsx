import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

type TableHeader = {
  headers: string[];
};

type TableRow = {
  rows: string[];
};

type BasicTableProps = {
  tableHeader: TableHeader;
  tableRows: TableRow[];
};

export const BasicTable = ({ tableHeader, tableRows }: BasicTableProps) => {
  return (
    <TableContainer bg={"white"}>
      <Table variant="simple">
        <Thead>
          <Tr>
            {tableHeader.headers.map((header, index) => (
              <Th key={index} whiteSpace={"normal"}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableRows.map((tableRow, index) => (
            <Tr key={index}>
              {tableRow.rows.map((row, index) => (
                <Td key={index} whiteSpace={"normal"}>
                  {row}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
