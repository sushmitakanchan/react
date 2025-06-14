import { useEffect, useState } from "react";

export function ChaiCounter(){
    const [count, setCount] = useState(0)

    const servedChai = ()=>{
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h1>Chai Counter</h1>
            <p>You have served {count} cups of chai</p>
            <button onClick={servedChai}>Chai served</button>
        </div>
    )

}