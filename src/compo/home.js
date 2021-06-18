import React, { useEffect, useState } from 'react'
export default function Home() {
const [user,setUser] = useState([{}])
    useEffect(()=>{

        let up = false
        
        async function Swap() {
            try{

                
                const res  = await fetch('https://naya-hai.herokuapp.com/login')
                
                if(!up){
                    // console.log('this is inner');
                    const js = await res.json();
                    // const {age,gender,name,password,_id} = js[0]
                    setUser(js)
                }


            }
            catch(err){
                console.log(err);
            }
        }
        
        Swap()
        
        return ()=>{
            
            up = true
            // console.log('this is another')
            // setUser({});
            // console.log(user);
        }
    },[])


    
    return (
        <div>
            <h2>welcome home</h2>
        {
            user.map(({name,age,pass},k)=>{
                return(
                    <div key={k} style={{borderBottom:"2px solid red"}}>
                <h4>Name</h4><p>{name}</p>
                <h4>Age</h4><p>{age}</p>
                <h4>Password</h4><p>{pass}</p>
                
                    </div>
                )
            })
        }


        </div>
    )
}
