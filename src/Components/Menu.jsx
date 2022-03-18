import React from 'react'
import '../Styles/menu.css'
import { useSelector, useDispatch } from 'react-redux'
import { addNote } from '../Redux/actions/notes'
import Note from './Note'

export default function Menu() {

  const dispatch = useDispatch()
  const {items} = useSelector((notes) => notes);

  const addNoteHandler = () => {
    dispatch(addNote())
  }

  let searchedWord = ''
  const getInputValue = (value) => {
    searchedWord = value
    console.log(searchedWord)
  }

  return (
    <>
        <section>
            <div className='search-container'>
                <input onInput={(e) => getInputValue(e.target.value)}
                 type='text' 
                 placeholder='Поиск' 
                 className='search-input'/>
                <span className='sort'>
                    Сортировать по...
                </span>
            </div>
            <div className='notes'>
              {
                items.map((note, id) => (
                  <Note name={note.name} id={id} searchedWord={searchedWord} key={id}/>
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
