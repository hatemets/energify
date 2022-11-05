import { useState, useEffect } from "react"
import { DarkRegular, GreenDarker, GreenRegular, BoxShadow} from "../constants"

const boxStyle = {
    width: "46vw",
    height: 180,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: BoxShadow,
}

export const Leaderboard = () => {
    const [position, setPosition] = useState(5)
    const [people, setPeople] = useState([
        { name: "Abdi", energySaved: 78 },
        { name: "Nil", energySaved: 72 },
        { name: "Mark", energySaved: 69 },
        { name: "Tuukka", energySaved: 68 },
        { name: "Jason", energySaved: 63 }
    ])

    const targetPerson = "Jason"

    return (
        <div id="leaderboard">
            <div style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "end", color: "#dedede" }}>
                <span style={{ marginBottom: 8, marginRight: 8, fontStyle: "italic", fontWeight: "bold", fontSize: "2.5rem" }}># </span><span style={{ fontSize: "5rem", fontWeight: "bold" }} id="pos">{ position }</span>
            </div>

            <div className="center-children">
                <p style={{
                    margin: "auto"
                }}>Leaderboard Position</p>
            </div>

            <div style={{
                background: "#222226",
                margin: "auto",
                width: "70vw",
                height: "30vh",
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
                <ul style={{ width: "70%" }}>
                    {
                        people.map((p, i) => <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "0.5rem 0"
                            }}>
                            <span style={{ color: `${targetPerson === p.name ? "orange" : "#dedede"}` }}>{i + 1} - {p.name}</span>
                            <span>{p.energySaved}% saved</span>
                        </div>)
                    }
                </ul>
            </div>

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
                    }}>4</p>
                    <p style={{
                        fontWeight: "bold",
                        margin: 0
                    }}>Unused appliances</p>
                </div>
                <div className="two" style={{
                    ...boxStyle,
                    background: GreenRegular,
                    color: "white",
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center"
                    }}>
                    OPTIMIZE NOW
                </div>
            </div>
        </div>
    )
}
