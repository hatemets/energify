import { Room } from "./Room"

export const Devices = () => {
    const kitchenItems = [
        { name: "Oven", isOn: true },
        { name: "Microwave", isOn: false },
        { name: "Toaster", isOn: false },
        { name: "Ventilation", isOn: false },
        { name: "Dishwasher", isOn: true },
        { name: "Rice Cooker", isOn: true },
    ]

    const bathroomItems = [
        { name: "Sink Lights", isOn: true },
        { name: "Shaver", isOn: false },
        { name: "Toothbrush", isOn: false },
        { name: "Ventilation", isOn: false },
        { name: "Hairdryer", isOn: true },
    ]

    const bedroomItems = [
        { name: "Desk Lamp", isOn: true },
        { name: "Television", isOn: false },
        { name: "Overhead Light", isOn: false },
        { name: "Phone Charger", isOn: false },
        { name: "Laptop Charger", isOn: true }
    ]

    const livingRoomItems = [
        { name: "Television", isOn: true },
        { name: "Overhead Light", isOn: false },
        { name: "PlayStation", isOn: false },
        { name: "Space Heater", isOn: false },
        { name: "Lamp", isOn: true },
        { name: "SmartWatch Charger", isOn: false }
    ]

    return (
        <div style={{ paddingTop: 70, width: "100%", height: "100%", overflow: "auto" }}>
            <div className="first-row" style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "375 !important"
            }}>
                <Room name="Kitchen" items={kitchenItems} />
            </div>

            <div className="first-row" style={{
                display: "flex",
                justifyContent: "space-evenly",
            }}>
                <Room name="Bathroom" items={bathroomItems} />
            </div>

            <div className="second-row" style={{
                display: "flex",
                justifyContent: "space-evenly"
            }}>
                <Room name="Bedroom" items={bedroomItems} />
            </div>

            <div className="second-row" style={{
                display: "flex",
                justifyContent: "space-evenly"
            }}>
                <Room name="Living Room" items={livingRoomItems} />
            </div>
        </div>
    )
}
