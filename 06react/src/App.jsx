import { useState, useEffect } from "react"
import { AllProducts } from "./AllProducts";
import { userInfo } from "./hooks/useEmail";

export function App(){
    const {email, loading, error} = useEmail()
    const [message, setMessage] = useState("Loading...");


    useEffect(()=>{
    fetch("https://api.freeapi.app/api/v1/public/randomproducts")
        .then((res)=> res.json())
        .then((data) => {
          // data → data → array → second item's title
         setMessage(data.data.data[1].title);
        })
        .catch((err) => {
            console.log(err);
            setMessage("Failed to load")});

    }, [])

    // if(loading) return <h2>loading...</h2>
    // if(error) return <h2>Error: {error}</h2>
    return (
        <div>
            <h1>Welcome to chaicode</h1>
            <p>Serving react</p>
            <h2>{message}</h2>
            <AllProducts/>
            <h3>User Email: {email}</h3>
        </div>
    )
}