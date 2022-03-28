import './App.css';
import {Button, Col, Container, Form, FormControl, InputGroup, ListGroup, ListGroupItem, Row,} from "react-bootstrap"
import { useReducer, useState } from 'react';
import Toast from "./toast"

const initialState = {
  allItems: [],
  isNotified : false,
  message : ""
} 

const reducer = (state , action) =>{
    if(action.type==='save'){
      const item = [...state.allItems,action.newitem]
      return{
        ...state,
        allItems:item,
        isNotified:true,
        message:"Item Added Successfully..."
      }
    }
    else if(action.type==='closeModal'){
      return {...state,isNotified:false}
    }
    else if(action.type==="remove"){
      const updateItem = state.allItems.filter(item=>item.id!==action.id)
      return{
        ...state,
        allItems:updateItem,
        isNotified:true,
        message:"Item Deleted Successfully..."
      }
    }
}

function App() {

  const [item , setItem] = useState("");

  const [state , dispatch] = useReducer(reducer, initialState)

  const formHandler = (e) =>{
      e.preventDefault();
      if(item){
      const  newitem= {id:new Date().getTime().toString(),name:item}
        dispatch({type:'save', newitem})
        setItem("");
      }
  }
  const closemodal = () =>{
    dispatch({type:"closeModal"})
}
  const remove = (id) =>{
   
   
  }
  return (
    <>
     <Container>
       <Row>
         <Col xs={4}>
           {state.isNotified && <Toast closeModal={closemodal} message={state.message} />}
         </Col>
         <Col xs={12} lg={4} className='text-center shadow-lg'>
           
           <h1 className='font-weight-bold p-2'>ToDo List</h1><hr></hr>
            <Form onSubmit={formHandler} >
              <InputGroup>
                <FormControl value={item} onChange={(e)=>setItem(e.target.value)} type="text" className='input' placeholder='Add an item..' />
                <div className='input-group-append'>
                <Button  type='submit' className='btn rounded-circle m-1'><i className="fa fa-plus"></i></Button>
                </div>
                </InputGroup>
           </Form>
           <hr></hr>
           <ListGroup className='mb-4'>
             {
               state.allItems.map((item)=>{
                 return(
                  <ListGroupItem className="fw-bold " key={item.id}>{item.name}
                 <Button className='dlt-btn rounded-circle float-end'onClick={()=>{dispatch({type:"remove" , id:item.id})}}><i class="fa fa-times" aria-hidden="true"></i></Button>
                 </ListGroupItem>
                 );
               })
             }
              
           </ListGroup>
         </Col>
       </Row>
     </Container>
    </>
  );
}

export default App;
