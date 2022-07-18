const initialState={
    items:[],
}

const players = (state= initialState, action) => {
    switch(action.type){
        case 'SET_PLAYERS':
            return{
                ...state,
                items: action.payload,

            }
            case 'ADD_PLAYERS':{
              return{
                ...state,
                items:[...state.items, action.payload],
              }
            }
            default:
                return state;
    }
}

export default players;