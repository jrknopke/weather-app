import { Outlet } from "remix";

export default function Weather() {
    return (
        <div>
            <h1> Weather App </h1>
            <Outlet /> 
        </div>
    );
}