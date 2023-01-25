import React from 'react'
import { ITask } from '../interfaces/Task'


type Props = {
  taskList: ITask[],
  handleDelete(id:number): void;
  handleEdit(task:ITask): void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className='task'>
            <div className='styles_datails'>
              <h4 className='font-bold'>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>

            <div className='styles_actions'>
              <i className='bi bi-pencil' onClick={() => handleEdit(task)}></i>
              <i className='bi bi-trash' onClick={
                () => {handleDelete(task.id)}
              }></i>
            </div>
          </div>
        ))
      ):(
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList