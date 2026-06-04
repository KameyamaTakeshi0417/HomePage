import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import TierList from './pages/TierList'
import PdfPage from './pages/PdfPage'
import MyProducts from './pages/MyProducts'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tierlist" element={<TierList />} />
        <Route path="/my-products" element={<MyProducts />} />
        
        {/* Dynamic route for PDF pages */}
        <Route path="/pdf/:type" element={<PdfPage />} />
      </Routes>
    </Layout>
  )
}

export default App
