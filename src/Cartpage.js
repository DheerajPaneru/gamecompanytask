import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD } from './Action';
import { DEL } from './Action';


const Cartpage = () => {
    const navigate =useNavigate()

    const [data, setdata] = useState()
    const getData = useSelector((state) => state.cartreducer)

    const dispatch = useDispatch();

    const totalitemprice = () => {
        let sum = 0;
        for (let i = 0; i < getData.cart.length; i = i + 1) {
            sum = sum + (getData.cart[i].qnty * getData.cart[i].price)

        }
        return Math.floor(sum)
    }

    useEffect(() => {
        totalitemprice()
    }, [getData.cart])

    const totalitems=()=>{
        let sum = 0;
        for (let i = 0; i < getData.cart.length; i = i + 1) {
            sum = sum + (getData.cart[i].qnty)

        }
        return sum
   
    }
    useEffect(()=>{
        totalitems()
    },[getData.cart])
    return (
        <div style={{ width: "96%", display: 'flex', flexDirection: "row", margin: 4, padding: 4 }}>
            <div style={{ width: "65%", display: 'flex', flexDirection: "column", margin: 4, padding: 4 }}>

                {getData.cart && getData.cart.map((c, id) => {
                    return (
                        <>
                            <div key={id} style={{ width: "100%",height:560, margin: 8, padding: 7, backgroundColor: "yellowgreen",boxSizing:"border-box" }}>
                                <h3 style={{ color: "green" }}>{c?.category}</h3>
                                <div>

                                    <img style={{ margin: 3, padding: 4, width: "85%",height:310, objectFit: "fill" }} src={c?.image} alt="" />
                                </div>
                                <p style={{ fontSize: 15, fontWeight: 'bold', color: "green", margin: 3, padding: 4 }} >{c?.title}</p>
                                <p style={{ fontSize: 17, fontWeight: 'bold', margin: 3, padding: 4 }} >Price-{c?.price}</p>
                                <p style={{ fontSize: 17, fontWeight: 'bold', margin: 3, padding: 4 }} >Quantity {c?.qnty}</p>
                                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <button style={{ marginRight: "auto", marginLeft: "auto", height: 44, textAlign: "center", fontSize: 20, fontWeight: 'bold', margin: 3, padding: 4 }} onClick={() => dispatch(ADD(c))}>+</button>
                                    {c?.qnty}
                                    <button style={{ marginRight: "auto", marginLeft: "auto", height: 44, textAlign: "center", fontSize: 20, fontWeight: 'bold', margin: 3, padding: 4 }} onClick={() => dispatch(DEL(c))}>-</button>

                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <div style={{ width: "28%", display: 'flex', flexDirection:"column", margin: 5, padding: 2, height: 200, color: "aqua", backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
      <p  style={{fontSize: 17, fontWeight: 'bold' ,color:"green"}}>Total Price={totalitemprice()} </p> 
      <p>Total items={totalitems()} </p> 
      <button style={{marginRight:"auto",marginLeft:"auto",height: 44, textAlign: "center", fontSize: 20, fontWeight: 'bold', margin: 3, padding: 4}}  onClick={()=>navigate("/payment")}>Payment</button>
                
            </div>
        </div>
    )
}

export default Cartpage
