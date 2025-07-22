import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Blogs from './pages/Blogs'
import Outlets from './pages/Outlets'
import Contact from './pages/Contact'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  // Initialize smooth scroll functionality
  useSmoothScroll()
  
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/outlets" element={<Outlets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
