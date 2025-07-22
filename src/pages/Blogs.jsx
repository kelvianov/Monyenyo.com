import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../hooks/useLanguage'
import './Blogs.css'


const Blogs = () => {
  const { t } = useLanguage()
  return (
    <>
      <Helmet>
        <title>Blogs - Monyenyo</title>
        <meta name="description" content="KABAR MONYENYO - PROMO & INFO TERBARU" />
        <link rel="icon" href="/images/favicon_large.ico" type="image/x-icon" />
      </Helmet>
      <div className="blogs-page">
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <div className="hero-text-center">
                <span className="company-label">{t('KABAR MONYENYO')}</span>
                <h1 className="hero-main-title">{t('KONTEN PROMO SEDANG KAMI SIAPKAN')}</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Blogs