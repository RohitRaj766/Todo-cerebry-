import React ,{useState}from 'react'




function ListBox({todoText,callback}) {
    const [state, setstate] = useState(false);
      return (
    <div className='container animate__animated animate__rubberBand py-2' style={{display:"flex",border:"1px solid blue",width:"20rem",margin:"auto",marginTop:"2rem",borderRadius:"10px"}}>
        
        <div className='animate__animated animate__fadeIn' style={{flexGrow:"1"}}>
        <button style={{background:'#fff',padding:"10px",width:"fit-content",border:"none",fontWeight:"900",borderRadius:"10px",fontSize:"1rem",textDecoration:`${(state)? "line-through": "none" }`,color:`${(state)? "red": "Black" }`,textAlign:"left"}}  onClick={()=>{ setstate(!state)}} >
        {todoText}
        </button>
        </div>
      
        <button  onClick={callback} style={{width:"3rem",borderRadius:"10px",border:".5px solid grey",marginRight:".1rem",backgroundColor:"rgb(0, 136, 255)",color:"#fff"}}>
        x
        </button>
        
    </div>
  )
}

export default ListBox