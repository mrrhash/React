import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import list from './data';

const Navbar = () =>{
  return <React.Fragment>
 <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
  </React.Fragment>
}

 const Data = () =>{
  const [show, setShow] = useState();
  return(
     <div className='container pt-5'>
       <table class="table ">
         <thead className='bg-dark text-white'>
           <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Age</th>
             <th>Designation</th>
           </tr>
         </thead>
         <tbody style={{ display: show }}>
        
        {list.map((list) => (
          <tr>
          <td>{list.name}</td>
          <td>{list.email}</td>
          <td>{list.age}</td>
          <td>{list.designation}</td>
        </tr> 
        ))}    
                    
         </tbody>
       </table>
       <button className='btn btn-info' onClick={()=>{setShow('none')}}>Clear List</button>
       </div>
  );
}

const Site = () =>{
  return(
    <>
    <Navbar/>
    <Data/>
    </>
  );
}

ReactDOM.render(<Site/>,document.getElementById('root'));