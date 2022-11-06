import * as React from 'react';
import { GreenRegular, BoxShadow } from "../constants"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const boxStyle = {
    width: 175,
    height: 175,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: BoxShadow,
    border: 0,
    background: "#darkgrey"
}

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{
            position: 'relative', display: 'inline-flex',
            transform: "scale(3)"
        }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

export const CouldDoBetter = () => {
    const [count, setCount] = useState(4)
    const [progress, setProgress] = React.useState(0);
    const timeouts = React.useRef([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        for (let i = 0; i < 22; i++) {
            const timeout = setTimeout(() => {
                let newProgress = 5*i + Math.random()*5;
                if (newProgress > 100) {
                    newProgress = 100;
                    setCount(0);
                    timeouts.current.push(timeout);
                }
                setProgress(newProgress)
            }, 500*i + Math.random()*500)
            timeouts.current.push(timeout)
        }
    };
    const handleClose = () => {
        setOpen(false);
        timeouts.current.forEach(x => clearTimeout(x))
    }

    return (
        <div>
            <h1 style={{
                margin: "2rem 1.5rem",
                textAlign: "center"
            }}>
                {count > 0
                    ?
                    "You can do even better!"
                    :
                    "All done!"
                }
            </h1>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "1rem",
            }}>
                <div className="one" style={{
                    ...boxStyle,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    background: count === 0 ? "#131" : "#222226"
                }}>
                    <p style={{
                        fontWeight: "bold",
                        margin: 0
                    }}>Optimization {count === 0 && <CheckCircleIcon sx={{ fontSize: 16, color: "grey" }} color="primary" />}</p>
                    <p style={{
                        fontSize: 48,
                        margin: 0,
                        padding: 0,
                        fontWeight: "bold",
                    }}>{count}</p>
                    <p style={{
                        fontWeight: "bold",
                        margin: 0
                    }}>Unused appliances</p>
                </div>
                {count > 0 &&
                    <Link onClick={handleOpen}>
                        <div className="two" style={{
                            ...boxStyle,
                            cursor: "pointer",
                            background: count > 0 ? GreenRegular : "#222226",
                            color: "white",
                            boxShadow: count > 0 ? BoxShadow : false,
                            fontSize: 24,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>
                            OPTIMIZE NOW
                        </div>
                    </Link>
                }
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
            <Modal
                open={open}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grow in={open}>
                    <Box sx={{
                        width: 300,
                        // height: 400,
                        bgcolor: GreenRegular,
                        border: '0px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 3,
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 8 }}>
                            OPTIMIZING
                        </Typography>
                        <CircularProgressWithLabel value={progress} />
                        <div style={{marginTop: 45, marginBottom: -220, height: 227, maxHeight: 227}}>
                            {progress >= 0 && <div className="line-up">Turned off bathroom ventilation</div>}
                            {progress >= 25 && <div className="line-up">Turned off the oven</div>}
                            {progress >= 50 && <div className="line-up">Turned off a desk lamp</div>}
                            {progress >= 75 && <div className="line-up">Turned down the heating</div>}
                        </div>
                        <Typography id="modal-modal-description" sx={{ mt: 12 }}>

                            {progress >= 100 &&
                                <Button variant="contained" sx={{background: "#222226"}} onClick={handleClose}>Done!</Button>
                            }
                        </Typography>
                    </Box>
                </Grow>
            </Modal>
        </div>
    )
}
