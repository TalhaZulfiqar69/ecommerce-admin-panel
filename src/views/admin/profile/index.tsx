import { Box, Grid } from "@chakra-ui/react";
import Banner from "views/admin/profile/components/Banner";
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        // templateColumns={{
        //   base: "1fr",
        //   lg: "1.34fr 1fr 1.62fr",
        // }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Banner
          banner={banner}
          avatar={avatar}
          name="Muhammad Talha Zulfiqar"
          job="Project Manager"
          posts="17"
          followers="9.7k"
          following="274"
        />
      </Grid>
    </Box>
  );
}
