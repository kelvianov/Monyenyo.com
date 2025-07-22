import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const useNavbarScroll = () => {
  const lastScrollY = useRef(0)
  const location = useLocation()

  useEffect(() => {
    const header = document.querySelector('.header')
    if (!header) return

    const updateNavbar = () => {
      const scrollY = window.scrollY
      const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up'
      const isMobile = window.innerWidth <= 768

      if (isMobile) {
        // Mobile behavior
        header.classList.remove('hide-on-scroll', 'show-on-scroll-up')
        
        if (scrollY <= 50) {
          // At top - transparent navbar
        } else if (scrollDirection === 'down' && scrollY > 50) {
          header.classList.add('hide-on-scroll')
        } else if (scrollDirection === 'up' && scrollY > 50) {
          header.classList.add('show-on-scroll-up')
        }
      } else {
        // Desktop behavior
        header.classList.remove('hide-on-scroll', 'show-on-scroll-up')
        header.classList.remove('desktop-transparent', 'desktop-solid')
        
        const isAbout = location.pathname.includes('/about')
        const isMenu = location.pathname.includes('/menu')
        const isBlogs = location.pathname.includes('/blogs')
        const isOutlets = location.pathname.includes('/outlets')
        const isContact = location.pathname.includes('/contact')
        
        if (isAbout || isMenu || isBlogs || isOutlets || isContact) {
          header.classList.add('desktop-solid')
        } else {
          if (scrollY > 100) {
            header.classList.add('desktop-solid')
          } else {
            header.classList.add('desktop-transparent')
          }
        }
      }
      
      lastScrollY.current = scrollY
    }

    // Initial call
    updateNavbar()
    
    // Add scroll listener
    window.addEventListener('scroll', updateNavbar)
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateNavbar)
    }
  }, [location.pathname])
}
