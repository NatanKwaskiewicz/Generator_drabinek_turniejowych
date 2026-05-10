import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Home from './scenes/Home'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
