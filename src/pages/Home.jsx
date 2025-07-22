import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../hooks/useLanguage'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import FreshSection from '../components/home/FreshSection'
import MenuSection from '../components/home/MenuSection'
import BlogPreviewSection from '../components/home/BlogPreviewSection'
import About from './About'

const Home = () => {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t("Monyenyo - Indonesia's Best Brownies Pastry")}</title>
        <meta name="description" content={t("Experience the perfect fusion of traditional Indonesian flavors with modern culinary techniques. Discover Monyenyo's signature brownies and pastries.")} />
        <meta name="keywords" content={t("Indonesian brownies, traditional pastry, Monyenyo, Jakarta food, Indonesian desserts")} />
        
        {/* Favicon */}
        <link rel="icon" href="/images/favicon_large.ico" type="image/x-icon" />
        
        {/* Preload hero images */}
        <link rel="preload" href="/images/desktop1.jpg" as="image" />
        <link rel="preload" href="/images/desktop2.jpg" as="image" />
        <link rel="preload" href="/images/desktop4.jpg" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <FreshSection />
      <MenuSection />
      
    </>
  )
}

export default Home
