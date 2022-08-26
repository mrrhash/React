import React from "react";

const Toast = (props) =>{

setTimeout(()=>{
 props.closeModal();
},2000)

    return(
        <div className="alert alert-success alert-dismissible fade show mt-2">
          <strong>Success!</strong>{props.message}
        </div>
    );
}

export default Toast;