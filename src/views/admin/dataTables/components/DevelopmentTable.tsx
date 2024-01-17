import * as React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row: any) => row.title,
  },
  {
    name: "Year",
    selector: (row: any) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

export default function ComplexTable() {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card w="100%" px="0px" overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          REACT DATATABLE COMPONENTS
        </Text>
        <Menu />
      </Flex>
      <Box color="gray.500" mb="24px" mt="12px">
        <DataTable columns={columns} data={data} />
      </Box>
    </Card>
  );
}
