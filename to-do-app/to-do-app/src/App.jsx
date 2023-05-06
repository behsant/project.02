import { Button, Checkbox, TextField } from "@mui/material"
import "./style.css"
import { useState } from "react"
import ClearIcon from '@mui/icons-material/Clear';
import { Task } from "@mui/icons-material";


function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setListaTarefa] = useState([]);

  function handleClick() {
    if (!textTarefa) {
      alert('campo obrigatorio')
    } else {
      setListaTarefa((old) => [...old, { id: Date.now(), title: textTarefa, indFinished: false }]);
      setTextTarefa("")
    };

  }

  function handleSome() {
    setListaTarefa([])
  }

  function handleDeleteTask(idTask) {

    setListaTarefa(listTarefa.filter(el => el.id !== idTask))
  }

  function handleFinishedTask(idTask){
    setListaTarefa(listTarefa.map((task) => task.id === idTask ? {...task, indFinished: !task.indFinished} : task))
  }

  return (
    <>
      <form className="form-container">

        <TextField value={textTarefa}
          id="standard-basic"
          label="Tarefa"
          variant="standard"
          placeholder="Digite a tarefa"
          onChange={({ target }) => setTextTarefa(target.value)}
        />

        <Button variant="contained" color="success" onClick={handleClick}>ADD</Button>
        <Button variant="contained" color="secondary" onClick={handleSome}>LIMPAR</Button>


      </form>
      <div className="container-task">

        <div className="fundo">

          {
            listTarefa.map((tarefa) => (
              <div key={tarefa.id}>
                <div className="task">
                  <Checkbox

                  onClick={()=> handleFinishedTask(tarefa.id)}
                  
                  />
                  <span style={{color: tarefa.indFinished ? 'red' : ''}}>{tarefa.title}</span>
                  <ClearIcon onClick={() => handleDeleteTask(tarefa.id)} className="icon-delete" />
                </div>
                <div className="linha"></div>
              </div>
            ))

          }
        </div>
      </div>
    </>
  )
}

export default App
