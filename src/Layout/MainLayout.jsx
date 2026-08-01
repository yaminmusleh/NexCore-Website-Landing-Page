import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <Toolbar sx={{ minHeight: { xs: 64, md: 84 } }} />

      <Outlet />

      <Footer />
    </>
  );
}
