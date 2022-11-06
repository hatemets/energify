import { LightGrey } from "../constants"

const boxStyle = {
    position: "relative",
    background: "#232328",
    margin: "auto",
    width: "44vw",
    height: "20vh",
    borderRadius: 7,
    boxShadow: "rgba(0, 0, 0, 0.20) 3px 3px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.9rem"
}

const boxStyle2 = {
    position: "relative",
    background: "#232328",
    margin: "auto",
    width: "92vw",
    height: "20vh",
    borderRadius: 7,
    boxShadow: "rgba(0, 0, 0, 0.20) 3px 3px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

const boxStyle3 = {
    position: "relative",
    background: "#232328",
    margin: "auto",
    padding: 0,
    width: "44vw",
    height: "18vh",
    borderRadius: 7,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

export const Dashboard = () => {
    return (
        <div style={{position: "absolute", top: 89.3}}>
            <div className="heading" style={{height: "auto", width: "100vw", textAlign: "center", marginBottom: 20,}}>
                <p style={{fontSize: 90, margin: "0", padding: "0", color: "#1BB565",  fontWeight: "bolder"}}>67%<i style={{fontSize: 20, color: LightGrey, fontWeight: "lighter"}}>/kWh</i></p>
                <p style={{textDecoration: "underline", margin: "0", padding: "0", color: LightGrey, textDecorationColor: "#1BB565",}}>compared to last month</p>
            </div>

            <div className="tiles" style={{}}>
                <div style={{...boxStyle, float: "left", marginLeft: 14,}}>
                    <p style={{color: "#1BB565", fontSize: "2.4rem", margin: 0, padding: 0,}}>81%</p>
                    <p style={{color: LightGrey, fontSize: "0.8rem", margin: 0, padding: 0, position: "absolute", bottom: 15}}>avg, Daily / Historic</p>
                </div>
                <div style={{...boxStyle, float: "right", marginRight: 14,}}>
                    <p style={{color: LightGrey, fontSize: "2.4rem", margin: 0, padding: 0,}}>$117</p>
                    <p style={{color: LightGrey, fontSize: "0.8rem", margin: 0, padding: 0, position: "absolute", bottom: 15}}>$ saved since <b>October</b></p>
                </div>
            </div>

            <div className="tiles" style={{}}>
                <div style={{...boxStyle, float: "left", marginLeft: 14, marginBottom: 15,}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 75 85" fill="none">
                        <g filter="url(#filter0_d_21_1084)">
                            <path d="M35.424 1.96816L35.424 1.96819L35.4318 1.95949C35.6884 1.67418 36.0746 1.5 36.5 1.5C36.9254 1.5 37.3116 1.67419 37.5682 1.95949L37.5681 1.95952L37.576 1.96816L61.7899 28.473L61.7953 28.479L61.8008 28.4848C62.1665 28.8767 62.375 29.4143 62.375 29.974C62.375 31.2091 61.3635 32.2188 60.1109 32.2188H56.0536H52.419L54.9956 34.7821L66.9559 46.681C67.3563 47.0793 67.5893 47.6365 67.5893 48.2113C67.5893 49.402 66.6224 50.375 65.4067 50.375H59.9643H56.7507L58.8145 52.8383L70.9702 67.347C70.9702 67.347 70.9703 67.3471 70.9703 67.3471C71.312 67.755 71.5 68.2723 71.5 68.8154C71.5 70.0872 70.4679 71.125 69.1708 71.125H41.7143H40.2143V72.625V77.8125C40.2143 79.8461 38.563 81.5 36.5 81.5C34.437 81.5 32.7857 79.8461 32.7857 77.8125V72.625V71.125H31.2857H3.82924C2.53207 71.125 1.5 70.0872 1.5 68.8154C1.5 68.2723 1.68805 67.755 2.0297 67.3471C2.02974 67.3471 2.02977 67.347 2.02981 67.347L14.1855 52.8383L16.2493 50.375H13.0357H7.5933C6.37761 50.375 5.41071 49.402 5.41071 48.2113C5.41071 47.6365 5.64367 47.0793 6.04409 46.681L18.0044 34.7821L20.581 32.2188H16.9464H12.8891C11.6245 32.2188 10.625 31.2133 10.625 29.974C10.625 29.4143 10.8335 28.8767 11.1992 28.4848L11.2047 28.479L11.2101 28.473L35.424 1.96816Z" stroke="#48BF53" strokeWidth="3" shapeRendering="crispEdges"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_21_1084" x="0" y="0" width="75" height="85" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="2" dy="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_1084"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_1084" result="shape"/>
                            </filter>
                        </defs>

                    </svg>
                    <p style={{color: "#1BB565", fontWeight: "bold", fontSize: "2rem", margin: 0, padding: 0,}}>23</p>
                    <p style={{color: LightGrey, fontSize: "0.8rem", margin: 0, padding: 0, position: "absolute", bottom: 15}}>Trees Saved</p>
                </div>
                <div style={{...boxStyle, float: "right", marginRight: 14,}}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <span style={{marginTop: 20, fontSize: "1.5rem", marginRight: 5, fontWeight: "bold" }}>#</span><span style={{color: LightGrey, fontWeight: "bold", fontSize: "3.4rem", margin: 0, padding: 0,}}>5</span>
                    </div>
                    <p style={{color: LightGrey, fontSize: "0.8rem", margin: 0, padding: 0, position: "absolute", bottom: 15}}>Leaderboard Position</p>
                </div>
            </div>

            <div style={{...boxStyle2, paddingTop: 0,}}>
                <div className="tiles-energy" style={{marginBottom: 25,}}>
                    <div style={{...boxStyle3, float: "left", marginLeft: 0,}}>
                        <p style={{color: "#1BB565", fontSize: "2.4rem", margin: 0, padding: 0,}}>81%</p>
                        <p style={{color: LightGrey, fontSize: "0.8rem", margin: 0, padding: 0, position: "absolute", bottom: 15}}>avg, Daily / Historic</p>
                    </div>
                    <div style={{...boxStyle3, float: "right", marginRight: 0,}}>
                        <p style={{color: LightGrey, fontSize: "2.4rem", margin: 0, padding: 0,}}>$117</p>
                        <p style={{color: LightGrey, fontSize: "0.8rem", margin: 0, padding: 0, position: "absolute", bottom: 15}}>$ saved since <b>October</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
