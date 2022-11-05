import { LineChart, BarChart, Line, XAxis, ReferenceLine, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {BoxShadow, GreenRegular, NavbarHeight} from "../constants"
import avgEnergyData from "../data/averageEnergyUsage.json"
import avgCostData from "../data/averageCost.json"

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
                    <YAxis tick={{ fontSize: 12 }} unit="kWh"/>
                    <ReferenceLine x={getFullHour()} stroke="white"/>
                    <Line type="monotone" dataKey="Energy Usage" stroke="green" strokeWidth="2" dot={false} />
                </LineChart>
            </div>
        </div>
    )
}
