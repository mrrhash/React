import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';



const url ='https://api.github.com/users';
 


const Effect = () =>{

  const [users,setuser] = useState([]);

  const getusers = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    setuser(data);
  }

  useEffect(()=>{
    getusers(); 
  })

  return(
    <>
      <div className='container'>
        <div className="row">
          {
            users.map((user)=>{
              return <Card key={user.id} {...user}/> 
            })
          }
        </div>
      </div>
    </>
  );
  
}

ReactDOM.render(<Effect/>,document.getElementById('root'));


