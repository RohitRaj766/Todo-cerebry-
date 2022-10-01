import React,{ useReducer,useState} from 'react'
import ListBox from './component/ListBox';
import Reducer from './Store';
import './App.css'

// rohitraj2k04@


function App() {
  const [state, dispatch] = useReducer(Reducer,[]);
  const [InputState, setInputState] = useState('');
  const [Alert, setAlert] = useState(false);

  const InputHandle =(e)=>{
    let x = e.target.value
    if(x){
      setAlert(false)
    }
    setInputState(x)   
    // 
  }

  const onClickHandle = ()=>{ 
    if(InputState.length > 0){
      dispatch({type :"ADD",payload : { newItem : InputState}});
      setInputState('')
    }else{
      setAlert(true)
    }
  }

  const removeItem = (k)=>{
      dispatch({type:'REMOVE',payload : {removeItem : k}})
  }

  const clearList=()=>{
     dispatch({type:'CLEAR'})
  }
  return (
    <div className='todoBox'>
        <div className='todohead'>
            <input placeholder='Your item' className={`${(Alert)? 'TodoInput alertInput' : 'TodoInput todoItems Input'}`} onChange={(e)=>{ InputHandle(e)}}  value={InputState} />
            <button className='Todobtn todoItems' onClick={()=>{ onClickHandle()}}>Add Item</button>
            <button className='Todobtn todoItems' onClick={()=>{ clearList()}}>Clear List</button>
        </div>

        <div className='TodoDisplay'>
            {state.map( (i,k_)=>{
              return(<React.Fragment key={k_} >
                <ListBox todoText={i} callback={()=>{removeItem(k_)}}  />
              </React.Fragment>)
            })}
        </div>
    </div>
  )
}

export default App