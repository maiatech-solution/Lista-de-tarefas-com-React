import {Footer} from "./components/Footer"
import {Header} from "./components/Header"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { ITask  } from "./interfaces/Task"
import { useState } from "react"
import Modal from "./components/Modal"

const App = () => {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById('modal');
    if(display){
      modal!.classList.remove('hide');
    }else{
      modal!.classList.add('hide')
    }
  };


  const editTask = (task: ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task)
  }

  //function update
  const updateTask = (id:number,title:string, difficulty: number)=>{
    const updatedTask: ITask = {id,title,difficulty}
    const updatedItems = taskList.map((task)=>{
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)
  }
  
  return (

    <div className="App">

      <Modal children={<TaskForm btnText="Editar tarefa" 
        taskList={taskList} 
        task={taskToUpdate}
        handleUpdate={updateTask}/>} />

      <Header />

      <main className='main'>
        <div>
          <h2>O que vai fazer</h2>
          <TaskForm btnText="Criar Tarefa" 
            taskList={taskList} 
            setTaskList={setTaskList}
            />
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList taskList={taskList} 
            handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
      
      <Footer />

    </div>
  )
}

export default App
