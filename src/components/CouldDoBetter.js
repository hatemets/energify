import * as React from 'react';
import { GreenRegular, BoxShadow } from "../constants"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import CircularProgress from '@mui/material/CircularProgress';

const boxStyle = {
    width: 180,
    height: 180,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: BoxShadow,
}

const growstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200
};

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', 
        transform: "scale(4)"
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    }}>{count}</p>
                    <p style={{
                        fontWeight: "bold",
                        margin: 0
                    }}>Unused appliances</p>
                </div>
                <Link onClick={handleOpen}>
                    <div className="two" style={{
                        ...boxStyle,
                        cursor: "pointer",
                        background: GreenRegular,
                        color: "white",
                        fontSize: 24,
                        padding: 6,
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
                        height: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 3,
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 12 }}>
                            OPTIMIZING
                        </Typography>
                        <CircularProgressWithLabel value={10} />
                        <Typography id="modal-modal-description" sx={{ mt: 12 }}>
                            
                        </Typography>
                    </Box>
                </Grow>
            </Modal>
        </div>
    )
}
