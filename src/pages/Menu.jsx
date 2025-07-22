
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../hooks/useLanguage'
import './Menu.css'

import desktop1 from '../assets/images/desktop1.jpg';
import desktop2 from '../assets/images/desktop2.jpg';
import desktop3 from '../assets/images/desktop3.jpg';
import desktop4 from '../assets/images/desktop4.jpg';
import desktop5 from '../assets/images/desktop5.jpg';
import desktop6 from '../assets/images/desktop6.jpg';
import menu7 from '../assets/images/menu7.jpg';
import menu8 from '../assets/images/menu8.jpg';

const Menu = () => {
  const { t } = useLanguage()
  const [showAllMobile, setShowAllMobile] = React.useState(false);
  const isDesktop = window.innerWidth > 768;

  // Apply Menu page styles to header
  React.useEffect(() => {
    document.body.classList.add('menu-page')
    return () => {
      document.body.classList.remove('menu-page')
    }
  }, [])

  const menuItems = [
    {
      id: 1,
      image: desktop1,
      name: t('Bolu Abon Sapi'),
      desc: t("Bolu abon sapi bertekstur lembut dengan taburan abon premium dan cita rasa gurih-manis yang seimbang. Satu box isi 6 potong."),
      price: 45000,
      category: t('Bolu'),
      rating: 4.9,
      link: 'https://setoko.co/monyenyo-bakery/bolu-gulung-abon-sapi-isi-8-pcs-544268'
    },
    {
      id: 2,
      image: desktop2,
      name: t('Brownies Pastry Original'),
      desc: t('Brownies fudgy dibalut dengan pastry olahan bertekstur kenyal menghadirkan rasa cokelat yang kaya dan manisnya pas di setiap gigitannya.'),
      price: 62000,
      category: t('Pastry'),
      rating: 4.8,
      link: 'https://setoko.co/monyenyo-bakery/brownies-pastry-original-544152'
    },
    {
      id: 3,
      image: desktop3,
      name: t('Choco Roll Cocol'),
      desc: t('Cokelat batang pilihan dibalut pastry olahan, dengan cocolan pilihan varian stroberi dan vanila yang manis. Satu box isi 6 potong.'),
      price: 55000,
      category: t('Pastry'),
      rating: 4.9,
      link: 'https://setoko.co/monyenyo-bakery/chocoroll-monyenyo-cocol-isi-10-pcs-544267'
    },
    {
      id: 4,
      image: desktop4,
      name: t('Brownies Pastry Tabur Keju'),
      desc: t('Brownies fudgy dengan keju serut berlimpah, dibalut pastry dengan rasa nyoklat, gurih, dan manis pas.'),
      price: 65000,
      category: t('Pastry'),
      rating: 5.0,
      link: 'https://setoko.co/monyenyo-bakery/brownies-pastry-insert-tabur-keju-544137',
    },
    {
      id: 5,
      image: desktop5,
      name: t('Cheese Roll Cocol'),
      desc: t('Perpaduan keju batang pilihan dan pastry lembut dengan varian cocolan stroberi atau vanila. Satu box isi 10 potong.'),
      price: 55000,
      category: t('Pastry'),
      rating: 5.0,
      link: 'https://setoko.co/monyenyo-bakery/cheese-roll-monyenyo-cocol-isi-10-pcs-544204'
    },
    {
      id: 6,
      image: desktop6,
      name: t('Banana Strudel Mini'),
      desc: t('Perpaduan pisang, cokelat, dan keju dalam pastry panggang yang renyah, dengan rasa manis dan gurih seimbang. Satu box isi 6 potong.'),
      price: 55000,
      category: t('Pastry'),
      rating: 5.0,  
      link: 'https://setoko.co/monyenyo-bakery/banana-strudel-monyenyo-isi-8-pcs-544269'
    },
    {
      id: 7,
      name: t('Soft Cookies'),
      desc: t('Cookies lembut dengan rasa cokelat dan sensasi susu yang nikmat. Satu box isi 6 potongan.'),
      category: t('Cookies'),
      price: 55000,
      image: menu7,
      rating: 5.0,
      link: 'https://setoko.co/monyenyo-bakery/soft-cookies-546428'
    },
    {
      id: 8,
      name: t('Brownies Fudgy Sekat'),
      desc: t('Brownies fudgy dengan 5 varian topping bikin nyemil banyak pilihan rasa.'),
      category: t('Bolu'),
      price: 78000,
      image: menu8,
      rating: 5.0,
      link: 'https://setoko.co/monyenyo-bakery/brownies-fudgy-sekat-5-varian-topping-544162'
    },
  ]

  return (
    <>
      <Helmet>
        <title>Menu - Monyenyo</title>
        <meta name="description" content="Explore our delicious menu of traditional Indonesian brownies, pastries, and specialty items." />
        <link rel="icon" href="/favicon_large.ico" type="image/x-icon" />
        {/* Preload images handled by Vite bundler, not needed here */}
      </Helmet>
      
      <div className="menu-page">
        {/* Menu Header Section */}
        <section className="menu-hero">
          <div className="container">
            <div className="menu-header-content">
              <span className="menu-label">{t('KOLEKSI LEZAT KAMI')}</span>
              <h1 className="menu-title">{t('MENU CAMILAN')}</h1>
              <p className="menu-description">
                {t('Nikmati kreasi kuliner khas kami dengan bahan terbaik dan rasa istimewa untuk pengalaman camilan tak terlupakan.')}
              </p>
            </div>
          </div>
        </section>

        {/* Menu Items Section */}
        <section className="menu-items">
          <div className="container">
            <div className="menu-grid">
              {(isDesktop
                ? menuItems
                : showAllMobile
                  ? menuItems.slice(0, 8)
                  : menuItems.slice(0, 4)
              ).map((item, idx) => (
                item.link ? (
                  <a
                    className="menu-item"
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="menu-image">
                      <img src={item.image} alt={item.name} />
                      <div className="menu-overlay">
                        <div className="menu-price">Rp {item.price.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="menu-content">
                      <h3 className="menu-name">{item.name}</h3>
                      <p className="menu-desc">
                        {item.desc}
                      </p>
                      <div className="menu-details">
                        <span className="menu-category">{item.category}</span>
                        <div className="menu-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fas fa-star${i < Math.floor(item.rating) ? '' : '-o'}`}></i>
                          ))}
                          <span>{item.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="menu-item" key={item.id}>
                    <div className="menu-image">
                      <img src={item.image} alt={item.name} />
                      <div className="menu-overlay">
                        <div className="menu-price">Rp {item.price.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="menu-content">
                      <h3 className="menu-name">{item.name}</h3>
                      <p className="menu-desc">
                        {item.desc}
                      </p>
                      <div className="menu-details">
                        <span className="menu-category">{item.category}</span>
                        <div className="menu-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fas fa-star${i < Math.floor(item.rating) ? '' : '-o'}`}></i>
                          ))}
                          <span>{item.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
            {!isDesktop && !showAllMobile && menuItems.length > 4 && (
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <button
                  className="menu-show-more-btn"
                  onClick={() => setShowAllMobile(true)}
                  style={{ padding: '12px 32px', borderRadius: '25px', background: '#8B4513', color: 'white', fontWeight: 600, fontSize: '1rem', border: 'none', cursor: 'pointer' }}
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default Menu
