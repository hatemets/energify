import { Link } from "react-router-dom"
import "../styles/TopBar.scss"
import { useState, useEffect } from "react"
import { Spin as Hamburger } from "hamburger-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/fontawesome-free-solid'
import {SideBar} from "./Sidebar"
import {LightGrey} from "../constants"
import { useNavigate } from "react-router-dom";

export const TopBar = () => {
    const [isOpen, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const history = useNavigate()

    useEffect(() => {
        const parts = window.location.href.split("/")
        const extension = parts[parts.length - 1]

        switch (extension) {
            case "devices":
                setTitle("Devices")
                break
            case "leaderboard":
                setTitle("Leaderboard")
                break
            case "logistics":
                setTitle("Logistics")
                break
            default:
                setTitle("Dashboard")
                break
        }
    }, [history])

    useEffect(() => {
        // Disable scrolling while sidemenu is open
        window.document.body.style["overflow"] = (isOpen) ? "hidden" : "auto"
    }, [isOpen])

    return (
        <>
            <nav id="nav">
                <span id="menu-icon">
                    <Hamburger rounded size={40} color={LightGrey} toggled={isOpen} toggle={setOpen} />
                </span>

                <p style={{ fontSize: 24, fontWeight: "bold" }}>{ title }</p>

                <Link onClick={() => setOpen(false)} to="/" id="logo-link">
                    <FontAwesomeIcon id="bell-icon" color={LightGrey} icon={faBell} />
                </Link>
            </nav>
            <SideBar isOpen={isOpen} setOpen={setOpen} />
        </>
    )
}
