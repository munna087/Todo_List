import React from 'react'

const TodoListItem = ({listItems,deleteItem,editItem}) => {


    const items = listItems;
    const createdList = items.map(item => {
        return(
                <p key={item.todoId}>
                    {item.todoValue}
                    <span style={{marginLeft: '5px'}}>
                        <button>delete</button>
                    </span>
                    <input />
                </p>
            
        )
    }) 

    return (
        <div>
            {createdList}
        </div>
    )
}

export default TodoListItem
