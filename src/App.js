import React from "react"
import { TopBar } from "./components/TopBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Leaderboard} from "./components/Leaderboard"
import {Devices} from "./components/Devices"
// import Home from "./pages/Home"
// import Projects from "./pages/Projects"
// import Contact from "./pages/Contact"
// import NotFound from "./pages/NotFound"
// import Footer from "./components/Footer"
// import ScrollWrapper from "./components/ScrollWrapper"


const App = () => {
    return (
        <div id="App">
            <Router>
                {/* <ScrollWrapper> */}
                    <TopBar />
                    <Routes>
                        {/* <Route path="/" element={<Dashboard />} /> */}
                        {/* <Route path="/logistics" element={<Logistics />} /> */}
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/devices" element={<Devices />} />
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                    {/* <Footer /> */}
                {/* </ScrollWrapper> */}
            </Router>
        </div>
    )
}

export default App;
