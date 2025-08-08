"use client";

import axios from "axios";
import { useEffect, useState } from "react"


export default function User() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(()=> {
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
        .then(response => {
            setData(response.data);
            setIsLoading(false);
        })
    },[])

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            User Page
            {data?.name}
            {data?.email}
        </div>
    )
}