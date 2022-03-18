import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../Redux/actions/notes'

export default React.memo(function Note({name, id, searchedWord}) {
    const dispatch = useDispatch()
    const notesSwitcher = () => {
        dispatch(setActiveNote(id))
    }

    const [visibility, changeVisibility] = React.useState(true)
    
    const checkSearchedWord = React.useMemo(() => {
        searchedWord == '' || name.includes(searchedWord.toLowerCase())
        ? changeVisibility(true)
        : changeVisibility(false)
    }, [searchedWord])

    console.log(visibility)
    return (
        <>
            {
                visibility && <div className='note' onClick={notesSwitcher}>
                    {name}
                </div>
            }
        </>
        
    )
});
