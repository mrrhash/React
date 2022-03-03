import React from "react";

const Card = ({login,avatar_url}) =>{
    
    return(
        <>
        <div className='col-md-3 p-5'>
            <div className='card'>
              
                <img src={avatar_url} alt="Avatar_image" className="card-img-top" />
            
              <div className='card-body text-center'>
                
                <h5 className="card-title">{login}</h5>                
              </div>
            </div>
          </div>
        </>
    );

}

export default Card;