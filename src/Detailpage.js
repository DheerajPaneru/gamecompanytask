import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
const Detailpage = () => {
    const [data, setdata] = useState([])

    const { id } = useParams();
    const fetchdata = async () => {
        const x = await axios.get("https://fakestoreapi.com/products")
        const c = await x.data.filter((c) => c.id == id)
        setdata(c)
    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <>

<h1 style={{ fontSize: 30, fontWeight: 'bold', margin: 3, padding: 4 }} >Detail of Product-<span style={{color:"green"}}>
    { data[0]?.title} </span></h1>

            <div style={{ padding: 9, margin: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
                
                <div style={{ padding: 3, margin: 4 }}>

                    <img style={{ width: "20%", objectFit: "contain" }} src={data[0]?.image} alt="" />
                    <p style={{ fontSize: 17, fontWeight: 'bold', color: "green" }}>Price-{data[0]?.price}</p>
                    <p style={{ fontSize: 17, fontWeight: 'bold', color: "blue" }} >Description-{data[0]?.description}</p>
                    <p style={{ fontSize: 17, fontWeight: 'bold', color: "red" }}>Rating-{data[0]?.rating?.rate}</p>

                </div>


            </div>


        </>
    )
}

export default Detailpage
