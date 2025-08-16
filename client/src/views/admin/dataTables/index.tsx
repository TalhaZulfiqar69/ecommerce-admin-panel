import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";

export default function Settings() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid mb="20px" spacing={{ base: "20px", xl: "20px" }}>
        <DevelopmentTable />
      </SimpleGrid>
    </Box>
  );
}
