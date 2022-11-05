import { Room } from "./Room"
import { useState } from "react"

export const Devices = () => {
    const kitchenItems = [
        { name: "Oven", isOn: true },
        { name: "Microwave", isOn: false },
        { name: "Toaster", isOn: false },
        { name: "Ventilation", isOn: false },
        { name: "Dishwasher", isOn: true },
        { name: "Rice Cooker", isOn: true },
    ]

    // const kitchenItems = [
    //     { name: "Oven", isOn: true },
    //     { name: "Microwave", isOn: false },
    //     { name: "Toaster", isOn: false },
    //     { name: "Ventilation", isOn: false },
    //     { name: "Dishwasher", isOn: true },
    //     { name: "Rice Cooker", isOn: true },
    // ]

    // const kitchenItems = [
    //     { name: "Oven", isOn: true },
    //     { name: "Microwave", isOn: false },
    //     { name: "Toaster", isOn: false },
    //     { name: "Ventilation", isOn: false },
    //     { name: "Dishwasher", isOn: true },
    //     { name: "Rice Cooker", isOn: true },
    // ]

    // const kitchenItems = [
    //     { name: "Oven", isOn: true },
    //     { name: "Microwave", isOn: false },
    //     { name: "Toaster", isOn: false },
    //     { name: "Ventilation", isOn: false },
    //     { name: "Dishwasher", isOn: true },
    //     { name: "Rice Cooker", isOn: true },
    // ]

    return (
        <div style={{ position: "absolute", top: 89, width: "100vw", height: "100vh" }}>
            <div className="first-row" style={{
                display: "flex",
                justifyContent: "space-evenly",
                }}>
                <Room name="Kitchen" items={kitchenItems} />
                <Room name="Bathroom" items={kitchenItems} />
            </div>

            <div className="second-row" style={{
                display: "flex",
                justifyContent: "space-evenly"
                }}>
                <Room name="Kitchen" items={kitchenItems} />
                <Room name="Bathroom" items={kitchenItems} />
            </div>
        </div>
    )
}
