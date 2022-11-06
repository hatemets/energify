import { BoxShadow } from "../constants"
import {CouldDoBetter} from "./CouldDoBetter"

const people = [
    { name: "Abdi", energySaved: 78 },
    { name: "Nil", energySaved: 72 },
    { name: "Jason", energySaved: 69 },
    { name: "Tuukka", energySaved: 68 },
    { name: "You", energySaved: 63 }
]
const targetPerson = "You"

export const Leaderboard = () => {

    return (
        <div id="leaderboard">
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end", color: "#dedede" }}>
                <span style={{ marginBottom: 8, marginRight: 8, fontStyle: "italic", fontWeight: "bold", fontSize: "2.5rem" }}># </span><span style={{ fontSize: "5rem", fontWeight: "bold" }} id="pos">5</span>
            </div>

            <div className="center-children">
                <p style={{
                    margin: "auto",
                    fontSize: 18,
                    marginBottom: 0,
                    paddingBottom: 0
                }}>Leaderboard Position</p>
            </div>

            <div style={{
                background: "#222226",
                margin: "auto",
                width: "70%",
                height: "30%",
                borderRadius: 7,
                boxShadow: BoxShadow,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2.5rem"
            }}>
                <h5 style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    margin: 0,
                    marginTop: 0
                }}>Top 5</h5>
                <ul style={{ width: "80%" }}>
                    {
                        people.map((p, i) => <div key={i} style={{
                            display: "flex",
                            fontSize: 18,
                            justifyContent: "space-between",
                            margin: "0.5rem 0"
                        }}>
                            <span style={{ color: `${targetPerson === p.name ? "orange" : "#dedede"}` }}>{i + 1} - {p.name}</span>
                            <span style={{ color: `${targetPerson === p.name ? "orange" : "#dedede"}` }}>{p.energySaved}% saved</span>
                        </div>)
                    }
                </ul>
            </div>

            <CouldDoBetter />

        </div>
    )
}
