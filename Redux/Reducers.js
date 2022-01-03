const initialState =[
        { title: "Start making a presentation", checked: false, id: 1 },
        { title: "Pay for rent", checked: false, id: 2 },
        { title: "Buy a milk", checked: false, id: 3 },
        {
          title: "Don’t forget to pick up Mickael from school",
          checked: false,
          id: 4,
        },
        { title: "Buy a chocolate for Charlotte", checked: false, id: 5 },
      ];

const TodoReducer = (state = initialState , Action)=>{
    let data = {title : Action.Payload, checked : false, id : Math.random()}
    switch(Action.type){
        case "ADD_TODO": return [...state , data];
        // case "REMOVE_TODO": return [...state , data];
        default : return state;
    }
}
export default TodoReducer;