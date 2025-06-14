import { useState, useEffect } from "react";

export function AllProducts(){
    const[items, setItems] = useState([])
    const[error, setError] = useState("")

useEffect(()=>{
    fetch("https://api.freeapi.app/api/v1/public/randomproducts")
    .then(res => res.json())
    .then(data =>setItems(data.data.data))
    .catch(err => setError(err.message))
}, [])

return(
    <div>
        <h2>Available Items</h2>
        <ul>
            {items.length > 0 ? (items.map((data) => <li key={data.id}>{data.title} </li>)) : <p> no products </p>}
        </ul>
    </div>
)
}