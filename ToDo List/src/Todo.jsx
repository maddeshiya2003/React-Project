import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../src/Todo.css"

export default function Todo () {

    let [arr,setArr] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    function updateTodo () {
        setArr((prevArr) => {
            return [...arr,{task:newTodo,id:uuidv4(),isDone:false}];
        });
        setNewTodo("");
    }

    function updateTodoList(event) {
        setNewTodo(event.target.value);

    }

    function deleteTodo(id) {
        setArr( (prevToDos) => prevToDos.filter((todo) => todo.id != id ))
    }

    function doneAll() {
        setArr((prevToDo) => (prevToDo.map((todo) => {
                return({...todo,isDone:true});
            }))
        );
    }

    function changeToDone (id) {
        setArr((prevToDo) => (prevToDo.map((todo) => {
            if(id == todo.id) {
                return({...todo,isDone:true})
            } else {
                return todo
            }
        })));
        console.log(arr)
    }

    return (
        <div>
            <h1>Add Your ToDo Here</h1>
            <input placeholder="Enter Your Task Here" type="text" value={newTodo} onChange={updateTodoList} />
            <button onClick={updateTodo}>Add </button>

            <br/><br/><br/><hr/>

            <ul>
                <h3>Here Your All Task To Do --</h3>
                {
                    arr.map((todo) => 
                        <li className="list" key={todo.id} >

                            <span style={ todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                            
                            <button onClick = { () => deleteTodo(todo.id)}>Delete</button>

                            <button onClick = { () => changeToDone(todo.id)}>Done</button>
                        </li>
                    )
                }
            </ul>

            <hr/>
            <br />

            <button className="done-btn" onClick={doneAll}>Done All</button>
        </div>
    )

}