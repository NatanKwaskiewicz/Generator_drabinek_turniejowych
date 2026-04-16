import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar.tsx'
import Home from './components/Home'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </>
    )
}

export default App
