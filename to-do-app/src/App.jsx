import { Button, TextField } from "@mui/material"
import "./style.css"
import { useState } from "react"

function App() {
const [textTarefa,setTextTarefa] = useState("");
const [listTarefa,setListaTarefa] = useState([]);

function click(){
  setListaTarefa((old)=> [...old,textTarefa]);
  setTextTarefa("");
  
}

function some(){
  setTextTarefa("")
}

  return (
    <>
   <form className="form-container">
    
    <TextField value={textTarefa} 
    id="standard-basic" 
    label="Tarefa" 
    variant="standard" 
    placeholder="Digite a tarefa" 
    onChange={({target})=> setTextTarefa(target.value)}
    />

    <Button variant="contained" color="success" onClick={click}>ADD</Button>
    <button onClick={some}>limpar</button>
   


   </form>
   <div className="fundo">
  
   {
    
    listTarefa.map((tarefa,index) => (
    <> 
    <div key={String(index)}>{tarefa}</div> 
    <div className="linha"></div> 
    </>
    ))
    
  }
  </div>
</>
  )
}

export default App
