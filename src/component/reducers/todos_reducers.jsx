const todos_list = [
    {
        id : 1,
        text : "PHP"
    },
    {
        id : 2,
        text : "CSS"
    },
    {
        id : 3,
        text : "JAVASCRIPT"
    },
    {
        id : 4,
        text : "REACT JS"
    },
    {
        id : 5,
        text : "BootStrap"
    }

];


export const  todos_reducers = (state = todos_list, action) =>{
    switch(action.type){
        case 'ADD_LIST' : 
            // get total length of array object add 1 +
             const id_length = Object.keys(state).length + 1;
            // adding data in object
            const newData = { id: id_length, text: action.add_text}
            //structuring into object
            return [...state,  newData];
        case 'REMOVE_LIST' : 
            return state.filter(todo_data => todo_data.id !== action.id);
        default : return state;
    }
}