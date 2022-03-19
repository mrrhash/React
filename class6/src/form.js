import React, { useReducer, useState } from 'react'

const initialState ={
    allProducts : [],
    isNotified : false
}

const reducer = (state,action) =>{
    if(action.type==='save'){
        const products = [...state.allProducts,action.newProduct]
        return{
            ...state,
            allProducts : products,
            isNotified : true
        }
    }
}

const Form = () => {

    const [product,setProduct] = useState({name:'',price:0});
    
    const [state,dispatch] = useReducer(reducer,initialState);

    const formhandler = (e) =>{
        e.preventDefault();

        if(product.name && product.price){
            const newProduct = {id: new Date().getTime().toString(),name:product.name,price:product.price};
            dispatch({type:"save" , newProduct})
        }
    }
  return (
    <>
    <div className='container text-center'>
        <div className='col-4 m-auto'>
            <form onSubmit={formhandler} className='bg-primary p-5 text-white border-rounded'>
                <h1>Add Products</h1>
                <label>Product Name:</label>
                <input value={product.name} onChange={(e) => setProduct({...product,name:e.target.value})} type='text' className='form-control m-2' required />

                <label>Product Price:</label>
                <input value={product.price} onChange={(e) => setProduct({...product,price:e.target.value})} type='number' className='form-control m-2' required />

                <button type='submit' className='btn btn-outline-warning w-100 m-2'>Save</button>
            </form>
        </div>
    </div>
    <div className='container'>
        <div className='row p-5'>
            {
                state.allProducts.map((product)=>{
                    return(
                        <div className='card col-4 text-center p-1'>
                            <img src="image.png"  height='200px' className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>   
  )
}

export default Form
