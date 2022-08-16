import { Trash } from 'phosphor-react'
import { useState } from 'react';
import styles from './Todo.module.css';

interface taskList {
    texto: string,
    status?: boolean,
    onDeleteTask: (task: string) => void,
}

export function Todo({ texto, onDeleteTask }: taskList) {

    const [status, setStatus] = useState(true);

    function handleDeleteTask() {
     
        onDeleteTask(texto);

    }

    function handleStatus() {

        setStatus(!status);

        // if (status == false) {
        //     count += 1;
        // }

    }

    return (
        <div className={styles.main}>
            <div className={styles.content}>

                <input
                    onChange={handleStatus}
                    type="checkbox"
                />

                <div className={styles.text}>
                    {status ? texto : <del>{texto}</del>}
                </div>

                <button onClick={handleDeleteTask}>
                    <Trash size={22} />
                </button>

            </div>
        </div>
    )
}