import { Link } from "react-router-dom"

export const SideBar = ({ isOpen, setOpen }) => {
    return (
        <>
            { isOpen && 
            <div id="sidebar">
                <div className="container">
                    <Link to="/">Dashboard</Link>
                    <Link to="/logistics">Logistics</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/devices">Devices</Link>
                </div>
            </div>
            }
        </>
    )
}
