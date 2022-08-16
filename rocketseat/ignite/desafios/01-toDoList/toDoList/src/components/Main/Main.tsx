import { PlusCircle, TextOutdent } from 'phosphor-react';
import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import { Todo } from '../ToDo/Todo';
import styles from './Main.module.css';

export function Main() {

  const [ tasks, setTasks] = useState([
    'Sua tarefa ...'
  ]);

  const [ newTask, setNewTask ] = useState('');

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    // console.log(event?.target?.value);
    setNewTask(event?.target?.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    
    setTasks([...tasks, newTask]);
    setNewTask('');

    console.log(setNewTask);
  }

  function deleteTask(taskdeleted: string) {

    const deleted = tasks.filter(task => {
      return task !== taskdeleted;
    })

    setTasks(deleted);
  }

  function countTaks() {
    
  }

  // console.log(tasks.map(task => task.status));

  

  return (
    <>
      <form
        onSubmit={handleCreateNewTask}>
        <div className={styles.input}>

          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTask}
          />

          <button>
            <span>Criar</span>
              <PlusCircle
                size={22}
              />
          </button>
        </div>
      </form>

      <div className={styles.control}>
        <div className={styles.counts}>
          <div className={styles.create}>
            Tarefas criadas
            <span>{tasks.length}</span>
          </div>

          <div className={styles.completed}>
            Concluídas
            <span> xx </span>
          </div>
        </div>
      </div>

      {tasks.map( task => {
        return(
          <Todo
            key={task}
            texto={task}
            onDeleteTask={deleteTask}
          />
        )
      }

      )}
    </>

  )
}