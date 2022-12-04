import React from 'react'
import { useEffect } from "react";
import Card from "./Card";

const ApiFake = () => {
    let [listElements, setlistElements] = React.useState([])
    const [start, setStart] = React.useState(0)
    const [end, setEnd] = React.useState(6)


    useEffect(() => {
            getData(start, end);    
    })

    const getData = async (start, end) => {
        if(listElements.length === 0) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${end}`).then(
            async (response) => {
                if (!response.ok) {
                    console.log(response);
                }
                const data = await response.json();
                setlistElements(data)
            }
        )
        }
        
    }

    const next = async () => {
        setStart(start + 6)
        setEnd(end + 6)
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${end}`);
            if (!res.ok) {
                console.log(res);
            }
            const data = await res.json();
            setlistElements(data)
            return
        } catch (error) {
            console.log(error)
        }
    }

    
    const back = async () => {
        if (start === 0) {
            return
        }
        setStart(start - 6)
        setEnd(end - 6)
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${end}`);
            if (!res.ok) {
                console.log(res);
            }
            const data = await res.json();
            setlistElements(data)
            return
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center'>JSON PLACEHOLDER API By: Jean Loaiza</h1>
            <hr />
            <button onClick={() => next()}>Next</button>
            <button onClick={() => back()}>Back </button>
            <div className="row mt-2">
                {listElements.map((item) => (
                    <Card key={item.id} character={item} />
                ))}
            </div>
        </div>
    )
}
export default ApiFake