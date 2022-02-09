export const addTodo=(data)=>{
    return {
        type:"ADD_TODO",
        payload: {
            id:new Date.getTime().toString(),
            data:data
        }
    }
}


export const deleteTodo=()=>{
    return {
        type:"DELETE_TODO",
        id:new Date.getTime().toString()
    }
}

export const removeTodo=()=>{
    return {
        type:"REMOVE_TODO"
    }
}