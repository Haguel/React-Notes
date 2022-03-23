import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../Redux/actions/notes'

export default React.memo(function Note({name, id, activeItemID}) {
    const dispatch = useDispatch()
    console.log(id, name, activeItemID)
    const {searchedWord} = useSelector((state) => state)
    
    const notesSwitcher = () => {
        dispatch(setActiveNote(id))
    }

    const canBeDisplayed = () => {
        return name.toLowerCase().includes(searchedWord.toLowerCase())
    }

    return (
        <>
        {
            canBeDisplayed &&
            id == activeItemID
            ? <div className='note--active' onClick={notesSwitcher}>
                {name}
              </div>
            : <div className='note' onClick={notesSwitcher}>
                {name}
              </div>
        }
        </>
        
    )
});
