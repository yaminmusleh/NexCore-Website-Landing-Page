import React from 'react'
import HeroSection from '../components/landingpage/HeroSection'
import Features from '../components/landingpage/Features'
import PixelCharacterFooterDecoration from '../components/landingpage/PixelCharacterFooterDecoration'

export default function LandingPage() {
  return (
    <>
    <HeroSection/>
    <Features/>
    <PixelCharacterFooterDecoration speed={10} direction="ltr" />
    
    </>
  )
}
