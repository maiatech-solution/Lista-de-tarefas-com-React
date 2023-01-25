import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { ITask } from "../interfaces/Task"

type Props = {
    btnText: string,
    taskList: ITask[],
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>,
    task?: ITask | null,
    handleUpdate?(id:number,title:string, difficulty: number): void
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficulty] = useState<number>(0);

    useEffect(() => {
        if (task) {
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (handleUpdate) {
            handleUpdate(id,title,difficulty)
        } else {
            const id = Math.floor(Math.random() * 1000);

            const newTask: ITask = { id, title, difficulty };

            setTaskList!([...taskList, newTask]);

            setTitle('');
            setDifficulty(0);
        }

    }

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name) {
            setTitle(e.target.value);
        }

    };

    const handleChangeDifficulty = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.value) {
            setDifficulty(parseInt(e.target.value))
        }
    };

    return (
        <form onSubmit={addTaskHandler} className='form'>
            <div className='input_container'>
                <label htmlFor="title"></label>
                <input type="text" name="title" placeholder='Título da tarefa' onChange={handleChangeTitle} value={title} />
            </div>
            <div className='input_container'>
                <label htmlFor="defficulty"></label>
                <input type="text" name="defficulty" placeholder='Dificuldade da tarefa' onChange={handleChangeDifficulty} value={difficulty} />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm