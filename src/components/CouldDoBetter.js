import { GreenRegular, BoxShadow} from "../constants"

const boxStyle = {
    width: "46vw",
    height: 180,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: BoxShadow,
}

export const CouldDoBetter = () => (
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
