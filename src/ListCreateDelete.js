import React, {useState} from 'react'

const ListCreateDelete = ({key,listItems,deleteItem,editItem,searchingText}) => {


    const deleteTodoItem = (todoId) =>{
        deleteItem(todoId)
    }

    const items = listItems;
    const createdList = items.map(item => {

        if(item.todoValue.toLowerCase().includes(searchingText.toLowerCase())){
            return(       
                <p key={item.todoId}>
                    {item.todoValue}
                    <span style={{marginLeft: '5px'}}>
                        <button onClick={() => deleteTodoItem(item.todoId)}>delete</button>
                    </span>
                    <span style={{marginLeft: '5px'}}>
                        <button onClick={() => editItem(item)}>edit</button>
                    </span>
                </p>
            
            )
        }
    }) 

    return (
        <div>
            {createdList}
        </div>
    )
}

export default ListCreateDelete