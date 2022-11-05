import { Link } from "react-router-dom"
import "../styles/TopBar.scss"
import { Logo } from "../components/Logo"
import { useState, useEffect } from "react"
import { Spin as Hamburger } from "hamburger-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/fontawesome-free-solid'
import {SideBar} from "./Sidebar"

export const TopBar = () => {
    const [isOpen, setOpen] = useState(false)


    useEffect(() => {
        // Disable scrolling while sidemenu is open
        window.document.body.style["overflow"] = (isOpen) ? "hidden" : "auto"
    }, [isOpen])


    return (
        <>
            <nav id="nav">
                <span id="menu-icon">
                    <Hamburger rounded size={40} color="#dedede" toggled={isOpen} toggle={setOpen} />
                </span>

                <Link onClick={() => setOpen(false)} to="/" id="logo-link">
                    <FontAwesomeIcon id="bell-icon" color="#dedede" icon={faBell} />
                </Link>
            </nav>
            <SideBar isOpen={isOpen} setOpen={setOpen} />
        </>
    )
}
