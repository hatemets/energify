import { GreenRegular, BoxShadow} from "../constants"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {Link} from "react-router-dom"
import { useState } from "react"

const boxStyle = {
    width: "46vw",
    height: 180,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: BoxShadow,
}


export const CouldDoBetter = () => {
    const [count, setCount] = useState(4)

    const handleClick = () => {
        toast.success("Turned off the desk lamp!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })

        setCount(3)
    }

    return (
        <div>
            <h1 style={{
                margin: "2rem 1.5rem",
                textAlign: "center"
            }}>You can do even better!</h1>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "1rem",
            }}>
                <div className="one" style={{
                    ...boxStyle,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly"
                }}>
                    <p style={{
                        fontWeight: "bold",
                        margin: 0
                    }}>Optimization</p>
                    <p style={{
                        fontSize: 48,
                        margin: 0,
                        padding: 0,
                        fontWeight: "bold"
                    }}>{ count }</p>
                    <p style={{
                        fontWeight: "bold",
                        margin: 0
                    }}>Unused appliances</p>
                </div>
                <Link onClick={handleClick}>
                    <div className="two" style={{
                        ...boxStyle,
                        cursor: "pointer",
                        background: GreenRegular,
                        color: "white",
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "center"
                    }}>
                        OPTIMIZE NOW
                    </div>
                </Link>
            </div>
            <ToastContainer
                theme="dark"
                position="top-center"
                autoClose={1000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        </div>
    )
}
