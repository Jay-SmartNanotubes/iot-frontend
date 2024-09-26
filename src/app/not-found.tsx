"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <Grid
      container
      className="fixed left-0 top-0 h-screen w-screen p-5"
      alignItems="center"
      justifyContent="center"
      spacing={4}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box className="flex items-center pb-24 text-[100px] font-[900] text-primary md:text-[200px] md:font-[1000]">
          <span className="rotate-12 transform">4</span>
          <span className="transform">0</span>
          <span className="-rotate-12 transform">4</span>
        </Box>
        <Typography variant="h3" sx={{ mt: 3 }}>
          You didn&apos;t break the internet, but we can&apos;t find what you
          are looking for.
        </Typography>
        <Button
          onClick={goToHome}
          color="primary"
          variant="contained"
          size="large"
          sx={{ mt: 4 }}
        >
          <ArrowBackIcon className="mr-2" />
          Go to Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
