export const addNote = () => ({
    type: 'ADD_NOTE',
})

export const saveNote = (noteObj) => ({
    type: 'SAVE_NOTE',
    payload: noteObj
})

export const setActiveNote = (id) => ({
    type: 'SET_ACTIVE_NOTE',
    payload: id
})