import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./user.css"
export default function User() {
    const [detail,setDetail]=useState([])
     const [select, setSelect] = useState(null)


     const toggle = (i) =>{
        if(select === i) {
            return setSelect(null)
        }

        setSelect(i)
     }
      useEffect(()=>{
          axios.get("https://jsonplaceholder.typicode.com/users")
          .then(({data})=>{ 
            setDetail(data)
            console.log("data",data)
          })
            
      },[])
  return (
    <div className='wrap'>
      <div className='accord'> 
      {
        detail.map((item,i)=>(
            <div key={item.id} className="item">
                <div className='title'  >
                 <h4>Name</h4>
            <p>{item.name}</p>
              <h4>City</h4>
              <p>{item.address.city}</p>
              <button onClick={()=> toggle(i)}>{select === i? 'Hide Details' :'View Details'}</button>
            </div>
            <div className={select === i? 'content show' :'content'}>
               <div> 
              <h4>Company</h4>
               {item.company.name}
               <br/>
               {item.company.catchPhrase}
               <h4>Website</h4>
               {item.website}
               <h4>Address</h4>
               {item.address.city}
               </div>
               <div>
               <h4>Username</h4>
               {item.username}
               <h4>Email</h4>
               {item.email}
              <h4>Phone no</h4>
               {item.phone}
            </div>
           </div>
           </div>
        ))
      }
      </div>
    </div>
  )
}
