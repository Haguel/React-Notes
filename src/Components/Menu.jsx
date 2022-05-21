import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { addNote, setSearchedWord, transferSortType } from '../Redux/actions/notes'
import Note from './Note'

import '../Styles/menu.css'

export default function Menu({items}) {

  const dispatch = useDispatch()
  const {sortTypes, activeItemID, activeSortTypeTitle} = useSelector((state) => state, shallowEqual);
  console.log(sortTypes)
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
    dispatch(transferSortType(id))
  } 

  const setSelectVisibility = () => {
    arrow === '▼' 
    ? changeArrow('▲') 
    : changeArrow('▼')
  }

  const handleOutsideClick = (e) => {
      if(!(e.target.closest('div') === dropDawn.current) && !(e.target.closest('div') === dropDawnContainer.current)){
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
                      <span className='active-sort-type'>{activeSortTypeTitle}</span>
                      <span className='dropdawn-arrow'>{arrow}</span>
                    </span>
                    <div className='dropdawn' ref={dropDawn}>
                      {
                        arrow === '▲' && sortTypes.map((sortType, id) => (
                          <span className={sortType.isActive ? "dropdawn-item--active" : "dropdawn-item"}
                            key={id} 
                            onClick={() => getSortType(id)}>
                              {sortType.title}
                            </span>
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
