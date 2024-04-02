import { useState } from "react"
import styles from "./form.module.css"

export default function Form({todos, setTodos}){
    //const [todo, setTodo] = useState("")
    const [todo, setTodo] = useState({ name: "", done: false})
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo({ name: "", done: false})
    }
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputCont}>
                    <input
                    className={styles.input} 
                    onChange={(e)=>setTodo({name: e.target.value, done: false})} 
                    value={todo.name}
                    type="text" 
                    placeholder="Write your plans here..."
                    />
                    <button className={styles.btn} type="submit">Add</button>
                </div>
            </form>   
        </div>
    )
}