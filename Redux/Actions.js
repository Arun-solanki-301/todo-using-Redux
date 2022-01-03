export const addTodo = (item) =>{
    return (dispatch)=>{
        dispatch({
        type : "ADD_TODO",
        Payload : item
        })
    }
}