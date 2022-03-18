const initialState = {
    activeItemID: 0,
    items: [
        {
            name: 'Новая заметка',
            content: '',
        },
    ],
}


const notes = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            let initialNote = {
                name: 'Новая заметка',
                content: '',
            }
            return {
                ...state,
                items: [...state.items, initialNote],
            };
        case 'SAVE_NOTE':{
            // let newItems = state.items
            // newItems[state.activeItemID] = action.payload

            state.items[state.activeItemID] = action.payload
            return {
                ...state,
            };
        }
        case 'SET_ACTIVE_NOTE':{
            return{
                ...state,
                activeItemID: action.payload,
            }
        }
        default:
            return state;
    }
}

export default notes