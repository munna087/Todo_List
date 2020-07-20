import React from 'react'

const Searching = ({key,listItems,searchingText}) => {
    
    const items = listItems;
    const searchingList = items.map(item => {

        let searchText = searchingText
        if(item.todoValue.toLowerCase().includes(searchText.toLowerCase())){
            return (
                <p key={item.todoId}>
                    {item.todoValue}
                </p>
            )
        }

        else{
            console.log(item.todoValue)
        }

    }) 

    return (
        <div>
            {searchingList}
        </div>
    )
}

export default Searching
