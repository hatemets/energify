import React from "react"
import { TopBar } from "./components/TopBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Leaderboard } from "./components/Leaderboard"
import { Devices } from "./components/Devices"
import { Dashboard } from "./components/Dashboard"
import { Logistics } from "./components/Logistics"
import Box from '@mui/material/Box';


const App = () => {
    return (
        <div id="App">
            <Router>
                <Box className="app" sx={{
                    width: "100vw",
                    height: "100vh",
                    maxWidth: 375,
                    // maxHeight: 1000-70,
                    minHeight: 812,
                    margin: "auto",
                    position: "relative"
                    // display: "flex",
                    // justifyContent: "center",
                    // alighItems: "center"
                }}>
                    <TopBar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/logistics" element={<Logistics />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/devices" element={<Devices />} />
                    </Routes>
                </Box>
            </Router>
        </div>
    )
}

export default App;
