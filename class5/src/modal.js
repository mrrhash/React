import React from "react";

const Modal = (props) =>{
setTimeout(()=>{
 props.closemodal();
},3000)
    return(
        <div className="alert alert-success alert-dismissible fade show mt-2">
          <strong>Success!</strong>{props.message}
        </div>
    );
}

export default Modal;   