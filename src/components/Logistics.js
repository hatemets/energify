import { LineChart, Legend, Bar, BarChart, Line, XAxis, ReferenceLine, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
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

export const Logistics = () => {
    const getFullHour = () => {
        const h = (new Date()).getHours()
        return (h < 10) ? `0${h}:00` : `${h}:00`
    }

    return (
        <div id="logistics" style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: NavbarHeight
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
                    <Line type="monotone" dataKey="Energy Usage" stroke="green" strokeWidth="2" dot={false} />
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
                    <YAxis tick={{ fontSize: 12 }} unit="$"/>
                    <ReferenceLine x={getFullHour()} stroke="white"/>
                    <Line type="monotone" dataKey="Expenses" stroke="green" strokeWidth="2" dot={false} />
                </LineChart>
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
                    Average <span style={{ color: GreenRegular }}>Expenses</span> Per Month
                </h3>
                <BarChart width={330} height={300} data={monthlyEnergyComparisonData}>
                    <XAxis dataKey="Month" />
                    <YAxis unit="kWh" />
                    <Tooltip />
                    <Bar dataKey="Energy Used" fill={GreenRegular} />
                </BarChart>
            </div>
        </div>
    )
}
