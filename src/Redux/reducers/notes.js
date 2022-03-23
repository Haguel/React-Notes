const initialState = {
    searchedWord: '',
    activeItemID: 0,
    items: [
        {
            name: 'Новая заметка',
            content: '',
            date: new Date().getTime()
        },
    ],
    sortTypes: [
        {
            name: 'Новизне',
            type: 'date',
        },
        {
            name: 'Алфавиту',
            type: 'alphabet'
        }
    ],
}


const notes = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            let initialNote = {
                name: 'Новая заметка',
                content: '',
                date: new Date().getTime()
            }
            return {
                ...state,
                items: [...state.items, initialNote],
            };
        case 'DELETE_NOTE': {
            state.items.splice(state.activeItemID, 1)
            return {
                ...state,
                activeItemID: state.activeItemID - 1
            }
        }
        case 'SAVE_NOTE':{
            let newItems = state.items
            newItems[state.activeItemID].name = action.payload.name
            newItems[state.activeItemID].content = action.payload.content
            return {
                ...state,
                items: newItems,
            };
        }
        case 'SET_ACTIVE_NOTE':{
            return{
                ...state,
                activeItemID: action.payload,
            }
        }
        case 'SET_SEARCHED_WORD':{
            return{
                ...state,
                searchedWord: action.payload,
            }
        }
        case 'SET_SORT_TYPE': {
            let newItems 
            let newActiveItemID
            let activeItem = state.items[state.activeItemID]

            if(action.payload == 'alphabet'){
                const sortAlphabet = (a, b) => {
                    if(a.name < b.name) return -1
                    if(a.name > b.name) return 1
                    return 0
                }

                newItems = state.items.sort(sortAlphabet)
            } else if(action.payload == 'date'){
                const sortDate = (a, b) => {
                    if(a.date < b.date) return -1
                    if(a.date > b.date) return 1
                    return 0
                }

                newItems = state.items.sort(sortDate)
            } 
            
            newItems.forEach((obj, id) => {
                if(JSON.stringify(obj) === JSON.stringify(activeItem)){
                    newActiveItemID = id
                } 
            })
            return{
                ...state,
                items: newItems,
                activeItemID: newActiveItemID,
            }
        }
        default:
            return state;
    }
}

export default notes