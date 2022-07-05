const redux = require("redux");

const initialState = {
    owner: "Tomas",
    toDo: [],
    completed: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD":
            return({
                ...state,
                toDo: [...state.toDo, action.text]
            })
        case "REMOVE":
            return ({
                ...state,
                toDo: state.toDo.filter((text, i)=> i !== action.index),
                completed: [...state.completed, state.toDo[action.index]]
            })
        default:
            return state;
    }
};

function addToDo(text){
    return({type: "ADD", text})
};

function removeToDo(index){
    return({type: "REMOVE, index"})
};

store.subscribe(()=>{
    console.log(store.getStore())
});

// console.log(store.getState());
store.dispatch(addToDo("comprar pan"));
// console.log(store.getState());
store.dispatch(addToDo("comprar tomate"));
// console.log(store.getState());
store.dispatch(addToDo("comprar lechuga"));
// console.log(store.getState());
store.dispatch(removeToDo(1));
// console.log(store.getState());

const store = redux.createStore();



