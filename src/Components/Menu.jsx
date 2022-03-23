import React from 'react'
import '../Styles/menu.css'
import { useSelector, useDispatch } from 'react-redux'
import { addNote, setSearchedWord, transferSortType } from '../Redux/actions/notes'
import Note from './Note'

export default function Menu() {

  const dispatch = useDispatch()
  const {items} = useSelector((notes) => notes);
  const {sortTypes} = useSelector((notes) => notes);
  const {activeItemID} = useSelector((state) => state)

  const [activeSortType, setActiveSortType] = React.useState(sortTypes[0])
  const [arrow, changeArrow] = React.useState('▼')

  const dropDawn = React.useRef(null)
  const dropDawnContainer = React.useRef(null)

  const addNoteHandler = () => {
    dispatch(addNote())
  }

  const getInputValue = (value) => {
    dispatch(setSearchedWord(value))
  }
     
  const getSortType = (id) => {
    setActiveSortType(sortTypes[id])
    dispatch(transferSortType(sortTypes[id].type))
  } 

  const setSelectVisibility = () => {
    arrow == '▼' 
    ? changeArrow('▲') 
    : changeArrow('▼')
  }

  const handleOutsideClick = (e) => {
      if(!(e.target.closest('div') == dropDawn.current) && !(e.target.closest('div') == dropDawnContainer.current)){
        changeArrow('▼')
      }
  }


  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <>
        <section>
            <div className='search-container'>
                <input onInput={(e) => getInputValue(e.target.value)}
                 type='text' 
                 placeholder='Поиск' 
                 className='search-input'/>
                <div className='sort-container'>
                  <span className='sort-text'>
                    Сортировать по
                  </span>
                  <div className='dropdawn-container' onClick={setSelectVisibility} ref={dropDawnContainer}>
                    <span className='dropdawn-select'>
                      <span className='active-sort-type'>{activeSortType.name}</span>
                      <span className='dropdawn-arrow'>{arrow}</span>
                    </span>
                    <div className='dropdawn' ref={dropDawn}>
                      {
                        arrow == '▲' && sortTypes.map((sortType, id) => (
                          sortType.name == activeSortType.name
                          ? <span className='dropdawn-item--active'
                            key={id} 
                            onClick={() => getSortType(id)}>{sortType.name}</span>
                          : <span className='dropdawn-item'
                            key={id} 
                            onClick={() => getSortType(id)}>{sortType.name}</span>
                        ))
                      }
                    </div>
                  </div>
                </div>
            </div>
            <div className='notes'>
              {
                items.map((note, id) => (
                   <Note name={note.name} id={id} activeItemID={activeItemID} key={id}/>
                ))
              }
            </div>
            <div className='add-note-button-container'>
              <button className='add-note-button' onClick={addNoteHandler}>
                Добавить заметку
              </button>
            </div>
        </section>
    </>
  )
}
