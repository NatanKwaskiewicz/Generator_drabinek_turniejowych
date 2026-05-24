import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Home from './scenes/Home'
import Footer from './components/Footer'
import CreateTournament from './scenes/CreateTournament'
import BracketPage from './scenes/BracketPage'
import CreateTeam from './scenes/CreateTeam'
import TournamentBrowser from './scenes/TournamentBrowser'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route
                    path="/bracketGenerator"
                    element={<CreateTournament />}
                />
                <Route path="/createTeam" element={<CreateTeam />} />
                <Route path="/bracket/:id" element={<BracketPage />} />
                <Route path="/tournaments" element={<TournamentBrowser />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
