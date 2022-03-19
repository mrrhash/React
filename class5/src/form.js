import React, { useReducer, useState } from "react";
import Modal from "./modal";

const intitialState = {
    allcandidates:[],
    isNotified : false,
    message:''
}

const reducer = (state,action) =>{
    if(action.type==='save'){
        const candidates = [...state.allcandidates,action.newcandidate]

        return{...state,
            allcandidates:candidates,
            isNotified:true,
            message:"Data Inserted Successfully!"
        }
    }
    else if(action.type==='closeModal'){
         return {...state,isNotified:false}
    }
    else if(action.type==='Remove'){
        const updatecandidate = state.allcandidates.filter(candidate=>candidate.id!==action.value)
        return{...state,
            allcandidates:updatecandidate,
            isNotified:true,
            message:"Data Deleted Successfully!"
        }
   }
}

const Form = () =>{

const [candidate,setCandidate] = useState({name:"",email:"",age:0,bloodgroup:"",mobile:0,address:""}) 


//reeact type 
//react ts particle

const [state,dispatch] = useReducer(reducer,intitialState)

const formhandler = (e) =>{
    e.preventDefault();
    
if(candidate.name && candidate.email && candidate.address && candidate.age && candidate.bloodgroup && candidate.mobile){
   
   const newcandidate = {id:new Date().getTime().toString(),name:candidate.name,email:candidate.email,age:candidate.age,bloodgroup:candidate.bloodgroup,mobile:candidate.mobile,address:candidate.address}
    dispatch({type:"save" , newcandidate});
}
else{
    throw Error("Required");
}

}    

const closemodal = () =>{
    dispatch({type:"closeModal"})
}

return (
    <>
    {state.isNotified && <Modal closemodal={closemodal} message={state.message} />}
    <div className="container">
        <form onSubmit={formhandler} className="bg-danger text-white">
            <div className="row justify-content-center">
                <h1 className="text-center text-white">BLOOD DONATE CANDIDATES</h1>
                    <div className="text-center col-6">
                        <label>FullName:</label>
                        <input value={candidate.name} onChange={(e)=>setCandidate({...candidate,name:e.target.value})} required className="form-control" type="text"></input>

                        <label>Email:</label>
                        <input value={candidate.email} onChange={(e)=>setCandidate({...candidate,email:e.target.value})} required className="form-control" type="text"></input>

                        <label>Age:</label>
                        <input value={candidate.age} onChange={(e)=>setCandidate({...candidate,age:e.target.value})} required className="form-control" type="number"></input>
                    </div>
                <div className="text-center col-6">
                    <label>Blood Group:</label>
                    <select className="form-control"value={candidate.bloodgroup} onChange={(e)=>setCandidate({...candidate,bloodgroup:e.target.value})} required >
                        <option value="">Select Blood Group</option>
                        <option>A +ve</option>
                        <option>A -ve</option>
                        <option>B +ve</option>
                        <option>B -ve</option>
                        <option>AB +ve</option>
                        <option>AB -ve</option>
                    </select>

                    <label>Mobile:</label>
                    <input value={candidate.mobile} onChange={(e)=>setCandidate({...candidate,mobile:e.target.value})} required className="form-control" type="number"></input>

                    <label>Address:</label>
                    <input value={candidate.address} onChange={(e)=>setCandidate({...candidate,address:e.target.value})} required className="form-control" type="text"></input>

                </div>
                <button type="submit" className="btn btn-outline-success col-11 mt-5">Save</button>                  

            </div>
        </form> 
        <table className="table table-striped table-secondary mt-5">
        <thead>
            <tr >
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Blood Group</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                state.allcandidates.map((person)=>{
                    return (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.email}</td>
                        <td>{person.bloodgroup}</td>
                        <td>{person.age}</td>
                        <td>{person.mobile}</td>
                        <td>{person.address}</td>
                        <td><a onClick={()=>{dispatch({type:"Remove",value:person.id})}} className="btn btn-outline-danger">Delete</a></td>
                    </tr>
                    );
                })
            }
        </tbody>
        </table>
    </div>

  

    </> 
);

}

export default Form;