import React from "react"
import { TopBar } from "./components/TopBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Leaderboard } from "./components/Leaderboard"
import { Devices } from "./components/Devices"
import { Dashboard } from "./components/Dashboard"
import { Logistics } from "./components/Logistics"


const App = () => {
    return (
        <div id="App">
            <Router>
                <TopBar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/logistics" element={<Logistics />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/devices" element={<Devices />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
