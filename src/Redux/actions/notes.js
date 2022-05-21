export const addNote = () => ({
    type: 'ADD_NOTE',
})

export const deleteNote = () => ({
    type: 'DELETE_NOTE',
})

export const saveNote = (noteName, noteContent) => ({
    type: 'SAVE_NOTE',
    payload: {
        name: noteName,
        content: noteContent,
    }
})

export const setActiveNote = (id) => ({
    type: 'SET_ACTIVE_NOTE',
    payload: id
})

export const setSearchedWord = (word) => ({
    type: 'SET_SEARCHED_WORD',
    payload: word,
})

export const transferSortType = (id) => ({
    type: 'SORT_ITEMS',
    payload: id,
})