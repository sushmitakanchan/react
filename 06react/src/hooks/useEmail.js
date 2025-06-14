import { useState, useEffect } from "react";

export function useEmail(){
    const [email, setEmail] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=1")
        .then((res)=>{
            if(!res.ok) throw new Error("Failed to fetch special product")
            return res.json()
        })
        .then((data)=>{
            setEmail(data.data.data[0].email)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message || "Something went wrong")
            setLoading(false)
        })
    },[])

    return {email, loading, error}
}
