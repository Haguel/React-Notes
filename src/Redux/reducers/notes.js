const initialState = {
    searchedWord: '',
    activeItemID: 0,
    isSelectedItem: true,
    items: [
        {
            name: 'Новая заметка',
            content: '',
            date: new Date().getTime(),
        },
    ],
    sortTypes: [
        {
            title: 'Новизне',
            type: 'date',
            isActive: true,
        },
        {
            title: 'Алфавиту',
            type: 'alphabet',
            isActive: false,
        }
    ],
    activeSortTypeTitle: "Новизне"
}


const notes = (state = initialState, action) => {
    const sortItems = (arr, sortType) => {
        const sortAlphabet = (a, b) => {
            if(a.name.toUpperCase() < b.name.toUpperCase()) return -1
            if(a.name.toUpperCase() > b.name.toUpperCase()) return 1
            return 0
        }
        const sortDate = (a, b) => {
            if(a.date < b.date) return -1
            if(a.date > b.date) return 1
            return 0
        }

        if(sortType == 'alphabet') arr.sort(sortAlphabet)
        else if(sortType == 'date') arr.sort(sortDate)
    }
    
    switch(action.type){
        case 'ADD_NOTE':
            let initialNote = {
                name: 'Новая заметка',
                content: '',
                date: new Date().getTime(),
            }

            return {
                ...state,
                items: [...state.items, initialNote],
            };
        case 'DELETE_NOTE': {
            state.items.splice(state.activeItemID, 1)     

            let newActiveItemID = state.activeItemID
            newActiveItemID = -1
            
            return {
                ...state,
                isSelectedItem: false,
                activeItemID: newActiveItemID
            }
        }
        case 'SAVE_NOTE':{
            let newActiveItemID
            let activeItem = state.items[state.activeItemID]
            let newItems = state.items

            newItems[state.activeItemID].name = action.payload.name
            newItems[state.activeItemID].content = action.payload.content

            // Делаем заново сортировку
            state.sortTypes.forEach((sortType) => {
                if(sortType.isActive) sortItems(newItems, sortType.type)
            })

            newItems.forEach((obj, id) => {
                if(JSON.stringify(obj) === JSON.stringify(activeItem)){
                    newActiveItemID = id
                } 
            })
            return {
                ...state,
                items: newItems,
                activeItemID: newActiveItemID,
            };
        }
        case 'SET_ACTIVE_NOTE':{
            return{
                ...state,
                activeItemID: action.payload,
                isSelectedItem: true,
            }
        }
        case 'SET_SEARCHED_WORD':{
            return{
                ...state,
                searchedWord: action.payload,
            }
        }
        case 'SORT_ITEMS': {
            let newActiveItemID
            let newActiveSortTypeTitle
            let activeItem = state.items[state.activeItemID]
            let newSortTypes = state.sortTypes
             
            
            newSortTypes.forEach((sortType, id) => {
                if(id === action.payload) {
                    sortType.isActive = true
                    newActiveSortTypeTitle = sortType.title
                    sortItems(state.items, sortType.type)
                }
                else sortType.isActive = false
            })

            state.items.forEach((obj, id) => {
                if(JSON.stringify(obj) === JSON.stringify(activeItem)){
                    newActiveItemID = id
                } 
            })
            return{
                ...state,
                activeItemID: newActiveItemID,
                sortTypes: newSortTypes,
                activeSortTypeTitle: newActiveSortTypeTitle
            }
        }
        default:
            return state;
    }
}

export default notes