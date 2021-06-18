import React, { useState } from 'react'
import './service.css'
export default function Services() {
    const [input,setInput] = useState({
        name:"",
        pass:""
    })
    
    const changeHandle = (e)=>{
        const {name,value} = e.target


        setInput(Previnput=>{
            return{ 
                ...Previnput,
                [name]:value
                
            }

        })
    }

    const handle = (e) =>{
        e.preventDefault()
        console.log(input);
        setInput({
            name:"",
            pass:""
        })
    }

    return (
        <div className="Height">
            <h2>services</h2>
            <form >
                <input type="text" value={input.name} spellCheck="false" name='name' onChange={changeHandle} placeholder="first Name"/>
                <input type="text" value={input.pass} spellCheck="false" name='pass' onChange={changeHandle} placeholder="Password"/>
                <input type="button" onClick={handle} value="Submit"/>
            </form>
        </div>
    )
}
