import { useState } from "react"

export const Leaderboard = () => {
    const [position, setPosition] = useState(5)

    return (
        <div id="leaderboard">
            <div>
                <span>#</span><span style={{ fontSize: 38, fontWeight: "bold" }} id="pos">{ position }</span>
            </div>
        </div>
    )
}
