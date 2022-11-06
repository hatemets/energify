import { LineChart,  Bar, BarChart, Line, XAxis, ReferenceLine, YAxis,  Tooltip, Legend} from "recharts"
import {BoxShadow, GreenDarker, GreenRegular, NavbarHeight} from "../constants"
import avgEnergyData from "../data/averageEnergyUsage.json"
import avgCostData from "../data/averageCost.json"

const monthlyEnergyComparisonData = [
    {"Month": "Jun", "Energy Used": 32.4},
    {"Month": "Jul", "Energy Used": 38.7},
    {"Month": "Aug", "Energy Used": 41.4},
    {"Month": "Sep", "Energy Used": 48.9},
    {"Month": "Oct", "Energy Used": 46.1},
    {"Month": "Nov", "Energy Used": 13.4},
]

const monthlyExpensesComparisonData = [
    {"Month": "Jun", "Expenses": monthlyEnergyComparisonData[0]["Energy Used"] * 0.721 },
    {"Month": "Jul", "Expenses": monthlyEnergyComparisonData[1]["Energy Used"] * 0.813 },
    {"Month": "Aug", "Expenses": monthlyEnergyComparisonData[2]["Energy Used"] * 0.917 },
    {"Month": "Sep", "Expenses": monthlyEnergyComparisonData[3]["Energy Used"] * 0.834 },
    {"Month": "Oct", "Expenses": monthlyEnergyComparisonData[4]["Energy Used"] * 0.958 },
    {"Month": "Nov", "Expenses": monthlyEnergyComparisonData[5]["Energy Used"] * 0.851 },
]


export const Logistics = () => {
    const getFullHour = () => {
        const h = (new Date()).getHours()
        return (h < 10) ? `0${h}:00` : `${h}:00`
    }

    return (
        <div id="logistics" style={{
            width: "100%",
            height: "100%",
            top: NavbarHeight,
            overflow: "auto",
            marginTop: 70,
            maxHeight: 1000 - 70
        }}>
            {/* Graph 1 */} 
            <div style={{
                boxShadow: BoxShadow,
                padding: 8,
                margin: 12,
                borderRadius: 7,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start"
            }}>
                <h3 style={{
                    marginLeft: 25,
                    fontSize: 20
                }}>
                    Average <span style={{ color: GreenRegular }}>Energy</span> Consumption
                </h3>
                <LineChart
                    width={330}
                    height={300}
                    data={avgEnergyData}
                >
                    <XAxis dataKey="Time" tick={{ fontSize: 10 }}/>
                    <YAxis tick={{ fontSize: 12 }} unit="kWh"/>
                    <ReferenceLine x={getFullHour()} stroke="white"/>
                    <Legend verticalAlign="top" height={60} />
                    <Line type="monotone" dataKey="Energy Usage" stroke="green" strokeWidth="1" dot={false} />
                    <Line name="Current hour" type="monotone" dataKey="Current hour" stroke="white" />
                </LineChart>
            </div>

            {/* Graph 2 */} 
            <div style={{
                boxShadow: BoxShadow,
                padding: 8,
                margin: 12,
                borderRadius: 7,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start"
            }}>
                <h3 style={{
                    marginLeft: 25,
                    fontSize: 20
                }}>
                    Average <span style={{ color: GreenRegular }}>Expenses</span>
                </h3>
                <LineChart
                    width={330}
                    height={300}
                    data={avgCostData}
                >
                    <XAxis dataKey="Time" tick={{ fontSize: 10 }}/>
                    <YAxis tick={{ fontSize: 12 }} unit="€"/>
                    <ReferenceLine name="Current hour" x={getFullHour()} stroke="white"/>
                    <ReferenceLine name="Optimal hour" x={"20:00"} stroke="gold" />
                    <Legend verticalAlign="top" height={60} />
                    <Line type="monotone" dataKey="Expenses" stroke="green" strokeWidth="1" dot={false} />
                    <Line name="Current hour" type="monotone" dataKey="Current hour" stroke="white" />
                    <Line name="Optimal hour" type="monotone" dataKey="Optimal hour" stroke="gold" />
                </LineChart>
            </div>


            {/* Personalized recommendations */}
            <div style={{
                boxShadow: BoxShadow,
                padding: 8,
                margin: 12,
                borderRadius: 7,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <p style={{
                    fontSize: 20,
                    textAlign: "center",
                    margin: 12
                }}>Your average sleep interval is</p>
                <p style={{
                    fontSize: 48,
                    margin: 0,
                    paddingTop: 0,
                    paddingBottom: 12,
                    fontWeight: "bold"
                }}>22:30 – 7.45</p>
            </div>

            <div style={{
                boxShadow: BoxShadow,
                padding: 8,
                margin: 12,
                borderRadius: 7,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <p style={{
                    fontSize: 20,
                    margin: 12,
                    textAlign: "center"
                }}>The most efficient energy usage during wake hours:</p>
                <p style={{
                    fontSize: 38,
                    margin: 0,
                    paddingTop: 0,
                    fontWeight: "bold",
                    color: GreenRegular
                }}>20:00</p>
                <p style={{
                    margin: 0,
                    padding: 0,
                    fontSize: 18,
                    fontWeight: "bold"
                }}>at</p>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                }}>
                    <p style={{
                        fontSize: 48,
                        margin: 0,
                        paddingTop: 0,
                        paddingBottom: 12,
                        color: GreenRegular
                    }}>€0.11</p>
                    <p style={{
                        marginTop: 25,
                        fontSize: 18
                    }}>/kWh</p>
                </div>
            </div>


            {/* Graph 3 */} 
            <div style={{
                boxShadow: BoxShadow,
                padding: 8,
                margin: 12,
                borderRadius: 7,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start"
            }}>
                <h3 style={{
                    marginLeft: 25,
                    fontSize: 20
                }}>
                    Monthly <span style={{ color: GreenRegular }}>Energy</span> Comparison
                </h3>
                <BarChart width={330} height={300} data={monthlyEnergyComparisonData}>
                    <XAxis dataKey="Month" />
                    <YAxis unit="kWh" />
                    <Tooltip />
                    <Bar dataKey="Energy Used" fill={GreenDarker} />
                </BarChart>
            </div>

            {/* Graph 4 */} 
            <div style={{
                boxShadow: BoxShadow,
                padding: 8,
                margin: 12,
                borderRadius: 7,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                marginBottom: 50
            }}>
                <h3 style={{
                    marginLeft: 25,
                    fontSize: 20
                }}>
                    Monthly <span style={{ color: GreenRegular }}>Expenses</span> Comparison
                </h3>
                <BarChart width={330} height={300} data={monthlyExpensesComparisonData}>
                    <XAxis dataKey="Month" />
                    <YAxis unit="€" />
                    <Tooltip />
                    <Bar dataKey="Expenses" fill={GreenDarker} />
                </BarChart>
            </div>
        </div>
    )
}
