import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


function Header(){
  return <React.Fragment>
    
      <div class="p-0 m-0row bg-secondary">
          <div class="col-12">        
              <a href="#" class="p-5"><i class="text-light fa fa-envelope-open  d-none d-md-inline-block" aria-hidden="true"></i> <span class="text-light d-none d-md-inline-block">info@yourdomain.com</span></a>
                      
              <a href="#" class=""> <i class="text-light fa fa-mobile  d-none d-md-inline-block" aria-hidden="true"></i> <span class=" text-light d-none d-md-inline-block">1+ (234) 5678 9101</span></a>
              <div class="float-end" >
              <a href="#" class=""><i class=" text-light fa fa-twitter d-none d-md-inline-block" aria-hidden="true"></i> <span class="text-light d-none d-md-inline-block">Twiter</span></a>
                      
              <a href="#" class="p-5"> <i class="p-1 text-light fa fa-facebook d-none d-md-inline-block " aria-hidden="true"></i><span class=" text-light d-none d-md-inline-block">Facebook</span></a>
              </div>          
            </div>

      </div>
 

  </React.Fragment>
}
function Navbar(){
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
function Section(){
  return <React.Fragment>

<div class="mt-5 container">

   <table class="table table-dark table-striped">
   <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
  </React.Fragment>
}
function Footer(){
  return <React.Fragment>
  
    <footer class="text-center text-lg-start bg-light text-muted">
  
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
   
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fa fa-google" aria-hidden="true"></i>
      </a>
      <a href="" class="me-4 text-reset">
       <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="" class="me-4 text-reset">
       <i class="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
   
  </section>
  </footer>
  </React.Fragment>
}

function Main(){
  return (
    <React.Fragment>
      <Header/>
      <Navbar/>
      <Section/>
      <Footer/>
    </React.Fragment>
  )
}

ReactDOM.render(<Main></Main>,document.getElementById("root"));