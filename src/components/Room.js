import {GreenDarker, DarkRegular, BoxShadow} from "../constants"
import { Item } from "./Item"

export const Room = ({ name, items }) => {
    return (
        <div style={{
            width: 170,
            boxShadow: BoxShadow,
            marginTop: "1rem",
            marginBottom: -8,
            background: DarkRegular,
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
                background: DarkRegular,
                padding: "1rem 0",
                margin: 0,
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
                }}>
                {
                    items.map((item, i) => <li key={i}><Item name={item.name} isOn={item.isOn} /></li>)
                }
            </ul>
        </div>
    )
}
