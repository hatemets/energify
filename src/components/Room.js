import {GreenDarker, GreenRegular} from "../constants"
import { Item } from "./Item"

export const Room = ({ name, items }) => {
    return (
        <div style={{
            width: "47vw",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 12px",
            marginTop: "1rem",
            marginBottom: -8,
            background: GreenRegular,
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
            }}>
            <div style={{
                background: GreenDarker,
                borderRadius: 7,
                padding: "0.2rem 0"
                }}>
                <p style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 20,
                    padding: 8,
                    fontWeight: "bold",
                    margin: 0
                }}>{ name }</p>
            </div>

            <ul style={{
                background: GreenRegular,
                padding: "1rem 0",
                margin: 0,
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
                }}>
                {
                    items.map(item => <li><Item name={item.name} isOn={item.isOn} /></li>)
                }
            </ul>
        </div>
    )
}
