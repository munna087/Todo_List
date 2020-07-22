import React, {useState} from 'react'
import ListCreateDelete from './ListCreateDelete'



const TodoIndex = () => {

    const todoItemsFromLocalStorage = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : []

    const [todoItem, setTodoItem] = useState('')
    const [todoItems,setTodoItems] = useState(todoItemsFromLocalStorage)
    const [addOrUpdate,setAddOrUpdate] = useState(true)
    const [editedTodo,setEditedTodo] = useState(null)
    const [searchingText,setSearchingText] = useState('')


    const handleChange = (e) => {
        setTodoItem(e.target.value)
    }

    const addTodoItem = (e) => {
        e.preventDefault()

        if(addOrUpdate){
            const newItem = todoItem;
            console.log(newItem);
            if(newItem !== ''){
                const newItems = [...todoItems,{todoId: todoItems.length, todoValue: todoItem}]
            
                localStorage.setItem('todolist', JSON.stringify(newItems))
                setTodoItems((JSON.parse(localStorage.getItem('todolist'))))
                setTodoItem('')
            }
        }
        else{
            const upadatedTodos = todoItems.map(item => {
                if(item.todoId === editedTodo.todoId){
                    return({...editedTodo, todoValue: todoItem})
                }
                else{
                    return item
                }
            })

            setTodoItems(upadatedTodos)
            localStorage.setItem('todolist', JSON.stringify(upadatedTodos))
            setTodoItem('')
            setAddOrUpdate(true)

        }
    }

    const deleteTodoItem = (todoDeleteid) => {
        const todoSafeItems = todoItems.filter(item => item.todoId !== todoDeleteid);
        setTodoItems(todoSafeItems) 
        localStorage.setItem('todolist', JSON.stringify(todoSafeItems)) 
    }
    
    const editTodoItem = (todoItem) => {
        setAddOrUpdate(false)
        setEditedTodo(todoItem)
        setTodoItem(todoItem.todoValue)
    }


    return (
        <div>
            <div>
                <header>
                    <br></br>
                    <form onSubmit={addTodoItem}>
                        <input type='text' value={todoItem} onChange={handleChange} required placeholder='enter you work...'></input>
                        <button type='submit'>{addOrUpdate ? 'add' : 'update'}</button>
                    </form>
                </header>

                <br></br>
                <input type = 'text' placeholder='@search' onChange={(e) => setSearchingText(e.target.value)}></input>

                < ListCreateDelete key={todoItems.todoValue} listItems = {todoItems} deleteItem = {deleteTodoItem} editItem = {editTodoItem} searchingText= {searchingText}/>
            </div>
        </div>
    )
}

export default TodoIndex
