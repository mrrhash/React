import './App.css';
import {Button, Col, Container, Form, FormControl, InputGroup, ListGroup, ListGroupItem, Row,} from "react-bootstrap"
import { useEffect, useReducer, useState } from 'react';
import Toast from "./toast"

const getLocalData = () =>{
  const list = localStorage.getItem("todoList");
  
  if(list){
    return JSON.parse(list);
  }
  else{
    return [];
  }
}

const initialState = {
  allItems: getLocalData(),
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
    else if(action.type==='removeAll'){
      return {...state,allItems:[]}
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
    else if(action.type==="update"){
      // const item = [...state.allItems,action.updateItem]
      return{
        ...state,
        allItems:action.updateItem,
        isNotified:true,
        message:"Item Updated Successfully..."
      }        
    }
}

function App() {

  const [item , setItem] = useState("");
  const [isEditItem , setIsEditItem] = useState("");
  const [toggleButton , setToggleButton] = useState(false);

  const [state , dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
      localStorage.setItem("todoList", JSON.stringify(state.allItems))
  },[state.allItems])

  const formHandler = (e) =>{
      e.preventDefault();
      if(item && toggleButton){       
        const updateItem = state.allItems.map((curElem)=>{
              if(curElem.id === isEditItem){
                return {...curElem,name :item}
              }
              return curElem;
         })
          dispatch({type:"update",updateItem});
          setItem("");
          setIsEditItem(null);
          setToggleButton(false);
             
      }
      else{
      const  newitem= {id:new Date().getTime().toString(),name:item}
        dispatch({type:'save', newitem})
        setItem("");
        console.log('updateItem');   
      }
      
  }
  const updateItem = (id) =>{
    const updated_todo_Item = state.allItems.find(item=>item.id===id);

   setItem(updated_todo_Item.name);
   setIsEditItem(id);
   setToggleButton(true);
  }
  const closemodal = () =>{
    dispatch({type:"closeModal"})
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
                <FormControl value={item} onChange={(e)=>setItem(e.target.value)} type="text" className='input' placeholder='✍ Add an item..' />
                <div className='input-group-append'>
                {toggleButton ? <Button type='submit' className='btn rounded-circle m-1'><i className="fa fa-edit"></i></Button> : 
                <Button  type='submit' className='btn rounded-circle m-1'><i className="fa fa-plus"></i></Button>}
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
                 <Button className='dlt-btn rounded-circle float-end' style={{marginRight:5}} onClick={()=>updateItem(item.id)}><i class="fa fa-edit" style={{fontSize:"20px"}}></i></Button>
                 </ListGroupItem>
                 );
               })
             }
              
           </ListGroup>
           {state.allItems && <Button onClick={()=>{dispatch({type:"removeAll"})}} className='button' style={{marginBottom:15}}/> }
         </Col>
       </Row>
     </Container>
    </>
  );
}

export default App;
