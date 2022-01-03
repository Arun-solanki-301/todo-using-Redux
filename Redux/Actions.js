export const addTodo = (item) =>{
    return (dispatch)=>{
        dispatch({
        type : "ADD_TODO",
        Payload : item
        })
    }
}

export const UpdateTodo = (item) =>{
    return (dispatch)=>{
        dispatch({
        type : "UPDATE_TODO",
        })
    }
}