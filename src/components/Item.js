import { Switch } from "@mui/material"
import { useState } from "react"

export const Item = ({ name, isOn }) => {
    const [isChecked, setIsChecked] = useState(isOn)

    return (
        <div style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "86%",
        }}>
            <div style={{
                fontSize: 14
            }}>{ name }</div>
            <Switch checked={isChecked} onClick={() => setIsChecked(!isChecked)} color="success" />
        </div>
    )
}
