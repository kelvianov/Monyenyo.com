
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import './MenuSection.css'

import desktop1 from '../../assets/images/desktop1.jpg';
import desktop2 from '../../assets/images/desktop2.jpg';
import desktop3 from '../../assets/images/desktop3.jpg';
import desktop4 from '../../assets/images/desktop4.jpg';
import desktop5 from '../../assets/images/desktop5.jpg';
import desktop6 from '../../assets/images/desktop6.jpg';

const MenuSection = () => {
  const { t } = useLanguage()
  
  const promoHTML = '<br/><span class="promo-badge promo-pulse">Click promo spesial!</span>';
  const menuItems = [
    {
      id: 1,
      image: desktop1,
      name: t('Bolu Abon Sapi'),
      description: t("Bolu abon sapi bertekstur lembut dengan taburan abon premium dan cita rasa gurih-manis yang seimbang. Satu box isi 6 potong.") + promoHTML,
      price: 'Rp 45,000',
      category: t('Bolu'),
      rating: '4.9',
      link: 'https://setoko.co/monyenyo-bakery/bolu-gulung-abon-sapi-isi-8-pcs-544268'
    },
    {
      id: 2,
      image: desktop2,
      name: t('Brownies Pastry Original'),
      description: t('Brownies fudgy dibalut dengan pastry olahan bertekstur kenyal menghadirkan rasa cokelat yang kaya dan manisnya pas di setiap gigitannya.') + promoHTML,
      price: 'Rp 62,000',
      category: t('Pastry'),
      rating: '4.8',
      link: 'https://setoko.co/monyenyo-bakery/brownies-pastry-original-544152'
    },
    {
      id: 3,
      image: desktop3,
      name: t('Choco Roll Cocol'),
      description: t('Cokelat batang pilihan dibalut pastry olahan, dengan cocolan pilihan varian stroberi dan vanila yang manis. Satu box isi 6 potong.') + promoHTML,
      price: 'Rp 55,000',
      category: t('Pastry'),
      rating: '5.0',
      link: 'https://setoko.co/monyenyo-bakery/chocoroll-monyenyo-cocol-isi-10-pcs-544267'
    },
    {
      id: 4,
      image: desktop4,
      name: t('Brownies Pastry Tabur Keju'),
      description: t('Brownies fudgy dengan keju serut berlimpah, dibalut pastry dengan rasa nyoklat, gurih, dan manis pas.') + promoHTML,
      price: 'Rp 65,000',
      category: t('Pastry'),
      rating: '5.0',
      link: 'https://setoko.co/monyenyo-bakery/brownies-pastry-insert-tabur-keju-544137'
    },
    {
      id: 5,
      image: desktop5,
      name: t('Cheese Roll Cocol'),
      description: t('Perpaduan keju batang pilihan dan pastry lembut dengan varian cocolan stroberi atau vanila. Satu box isi 10 potong.') + promoHTML,
      price: 'Rp 55,000',
      category: t('Pastry'),
      rating: '5.0',
      link: 'https://setoko.co/monyenyo-bakery/cheese-roll-monyenyo-cocol-isi-10-pcs-544204'
    },
    {
      id: 6,
      image: desktop6,
      name: t('Banana Strudel Mini'),
      description: t('Perpaduan pisang, cokelat, dan keju dalam pastry panggang yang renyah, dengan rasa manis dan gurih seimbang. Satu box isi 6 potong.') + promoHTML,
      price: 'Rp 55,000',
      category: t('Pastry'),
      rating: '5.0',
      link: 'https://setoko.co/monyenyo-bakery/banana-strudel-mini-544138'
    },
  ]

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="menu-section-header">
          <span className="menu-section-label">{t('KOLEKSI LEZAT KAMI')}</span>
          <h2 className="menu-section-title">{t('MENU CAMILAN')}</h2>
          <p className="menu-section-description">
            {t("Nikmati kreasi kuliner khas kami dengan bahan terbaik dan rasa istimewa untuk pengalaman camilan tak terlupakan.")}
          </p>
        </div>
        
        <div className="menu-section-grid">
          {menuItems.map((item) => (
            item.link ? (
              <a
                key={item.id}
                className="menu-section-item"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="menu-section-image">
                  <img src={item.image} alt={item.name} />
                  <div className="menu-section-overlay">
                    <div className="menu-section-price">{item.price}</div>
                  </div>
                </div>
                <div className="menu-section-content">
                  <h3 className="menu-section-name">{item.name}</h3>
                  <p className="menu-section-desc" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <div className="menu-section-details">
                    <span className="menu-section-category">{item.category}</span>
                    <div className="menu-section-rating">
                      {[...Array(5)].map((_, index) => (
                        <i key={index} className="fas fa-star"></i>
                      ))}
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <div key={item.id} className="menu-section-item">
                <div className="menu-section-image">
                  <img src={item.image} alt={item.name} />
                  <div className="menu-section-overlay">
                    <div className="menu-section-price">{item.price}</div>
                  </div>
                </div>
                <div className="menu-section-content">
                  <h3 className="menu-section-name">{item.name}</h3>
                  <p className="menu-section-desc">{item.description}</p>
                  <div className="menu-section-details">
                    <span className="menu-section-category">{item.category}</span>
                    <div className="menu-section-rating">
                      {[...Array(5)].map((_, index) => (
                        <i key={index} className="fas fa-star"></i>
                      ))}
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
        
        <div className="menu-section-cta">
          <Link to="/menu" className="menu-section-btn">{t('Lihat Semua Menu')}</Link>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
