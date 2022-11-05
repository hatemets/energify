import { LineChart, BarChart, Line, XAxis, ReferenceLine, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {BoxShadow} from "../constants"
import avgEnergyData from "../data/averageEnergyUsage.json"

export const Logistics = () => {
    return (
        <div id="logistics" style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 89.3167
        }}>
            <div style={{
                boxShadow: BoxShadow,
                padding: 8,
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h3>
                    Average Energy Consumption
                </h3>
                <LineChart
                    width={375}
                    height={300}
                    data={avgEnergyData}
                >
                    <XAxis dataKey="Time" tick={{ fontSize: 10 }}/>
                    <YAxis tick={{ fontSize: 12 }} unit="kWh"/>
                    <ReferenceLine x="11:00" stroke="white"/>
                    <Line type="monotone" dataKey="Energy Usage" stroke="green" strokeWidth="2" dot={false} />
                </LineChart>
            </div>
        </div>
    )
}
