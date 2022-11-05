import { Link } from "react-router-dom"

export const SideBar = ({ isOpen, setOpen }) => {
    const closeBar = () => document.querySelector(".hamburger-react").click()

    return (
        <>
            { isOpen && 
            <div id="sidebar">
                <div className="container">
                    <Link onClick={closeBar} to="/">Dashboard</Link>
                    <Link onClick={closeBar} to="/logistics">Logistics</Link>
                    <Link onClick={closeBar} to="/leaderboard">Leaderboard</Link>
                    <Link onClick={closeBar} to="/devices">Devices</Link>
                </div>
            </div>
            }
        </>
    )
}
