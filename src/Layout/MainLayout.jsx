import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <Container maxWidth="lg">
      <Outlet/>
    </Container>
    <Footer/>
    </>
  )
}
