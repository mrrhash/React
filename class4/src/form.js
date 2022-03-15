import React, { useState } from "react";

const Form = () => {

    
    const [person,setPerson] =  useState({name:'',email:'',age:''});

    const [peoples,setPeoples] = useState([]);

const formhandler = (e) =>{
    e.preventDefault();
   if(person.name && person.email && person.age){
       setPeoples([...peoples,person]);
      
   }
   else{
       console.log('error');
   }
}

return(
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-4"></div>      
            <div className="col-md-4 text-center bg-warning mt-5 p-1">
                <h1>Form</h1>
                <form onSubmit={formhandler}>
                   <label>Enter Name</label>
                   <input value={person.name} onChange={(e)=>setPerson({...person,name:e.target.value})} className="form-control" type='text' required  />

                   <label>Enter Email</label>
                   <input value={person.email} onChange={(e)=>setPerson({...person,email:e.target.value})} className="form-control" type='text' required  />

                   <label>Enter Age</label>
                   <input value={person.age} onChange={(e) =>setPerson({...person,age:e.target.value})} className="form-control" type='number' required  />

                   <button type="submit" className="btn btn-outline-danger">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div className="container p-5">
        <table className="table table-dark table-striped">
            <thead >
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
                                
                    {            
                        peoples.map((people)=>{
                            return <tr>
                                    <td>{people.name}</td>
                                    <td>{people.email}</td>
                                    <td>{people.age}</td>                                    
                                    </tr>
                        })
                    }
        
            </tbody>
        </table>
    </div>
    
    </>
)
    
}

export default Form;

