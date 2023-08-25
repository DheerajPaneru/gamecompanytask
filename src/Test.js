import React, { useState } from 'react'
import "./App.css"
const Test = () => {
  const p = { optionkey: "" }
  //const [option, setoption] = useState([p]);
  const addmcqobject = { a: [p], b: "" };
  const [mcq, setmcq] = useState([addmcqobject])


  const addmcq = () => {
    setmcq([...mcq, addmcqobject])
  }


  const addoptiondata = (e, b, t) => {
    console.log(e)
    const p = [];
    let r = [];
    let x
    for (var i = 0; i < mcq.length; i = i + 1) {
      if (t == i) {
        x = mcq[i]
        console.log("sec")
        for (let k = 0; k < (x.a).length; k = k + 1) {
          if (k == b) {
            (x.a)[k].optionkey = e;
            console.log(x.a[k], "check")
            r.push((x.a)[k])
          }
          else {
            r.push((x.a)[k])
          }
          x.a = [...r]
        }

        p.push(x)
      }
      else {
        p.push(mcq[i])
      }
    }
    setmcq(p)
  }
  const addmoreoption = (b) => {
    const x = mcq.map((c, id) => id == b ? { ...c, ["a"]: [...(c.a), p] } : c)
    setmcq(x)
  }
  //  console.log(option, "hjkjhk")
  console.log(mcq, "jhjhjhjh")
  return (
    <>


      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div><img  style={{height:34,width:34}}src="https://boloforms-internal-images.s3.ap-south-1.amazonaws.com/BoloForms+Logo+(1)/2.svg" alt="" /></div>

        <div style={{ marginRight: 20 }}><select><option>MCQ</option>
          <option>ShortAnswerMcq</option>
          <option>PassageQuestionMcq</option></select></div>
      </div>


      <div style={{ textAlign: "center" }}>

        <h2>Mcq questions</h2>
        <button onClick={() => addmcq()}>Add more mcq...</button>
      </div>

      {mcq && mcq.map((c, k) => {
        return (
          <>

            <div style={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", marginTop: 20 }}>
              <div>
                <h3>question {k+1}</h3>
                <input type="text" placeholder="write question here ...." />
              </div>
              <h3>Options</h3>


              {c.a && c.a.map((c, id) => {
                return (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", margin: 4 }}>

                      <input key={id} name="optionkey" type="text" onChange={(e) => addoptiondata(e.target.value, id, k)} placeholder='write option...' />
                    </div>
                  </>
                )
              })
              }

              <button onClick={() => addmoreoption(k)} >Add more option...</button>
            </div>


          </>
        )
      })}




    </>
  )
}

export default Test
