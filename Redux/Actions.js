export const addTodo = (item) =>{
    return (dispatch)=>{
        dispatch({
        type : "ADD_TODO",
        Payload : item
        })
    }
}

// export const removeTodo = (item) =>{
//     return (dispatch)=>{
//         dispatch({
//         type : "REMOVE_TODO",
//         Payload : item
//         })
//     }
// }