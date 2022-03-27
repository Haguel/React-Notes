import React from 'react'
import '../Styles/editor.css'
import { useDispatch, useSelector } from 'react-redux'
import { saveNote, deleteNote } from '../Redux/actions/notes'

export default function Editor({items}) {
  
  console.log('test')
  const dispatch = useDispatch()

  const {activeItemID} = useSelector((state) => state);

  const [noteName, changeNoteName] = React.useState()
  const [noteContent, changeNoteContent] = React.useState()

  const saveChanges = () => {
    dispatch(saveNote(noteName, noteContent))
  }

  const deleteItem = () => {
    dispatch(deleteNote())
  }

  React.useEffect(() => {
    let noteNameInput = document.querySelector('.note-name')
    let noteContentInput = document.querySelector('.note-text')

    // обновляем данные
    changeNoteName(items[activeItemID].name)
    noteNameInput.value = items[activeItemID].name
    changeNoteContent(items[activeItemID].content)
    noteContentInput.value = items[activeItemID].content
    
    
    // отправляем в локальный стэйт измененный объект с данными
    noteNameInput.addEventListener('input', () => {
      changeNoteName(noteNameInput.value)
    })

    noteContentInput.addEventListener('input', () => {
      changeNoteContent(noteContentInput.value)
    })

  }, [activeItemID])

  return (
    <main>
      <div className='note-menu'>
        <div className='note-menu-buttons'>
          <button className='save-button' onClick={saveChanges}>
            Сохранить
          </button>
          <button className='delete-button' onClick={deleteItem}>
            Удалить
          </button>
        </div>
      </div>
      <div className='note-background'>
        <div className='note-container'>
          <div>
            <input 
            type='text' 
            className='note-name' 
            placeholder='Название'
            />
          </div>
          <div>
            <textarea 
            type='text' 
            className='note-text' 
            spellCheck='true'
            placeholder='Ваш текст'
            >
            </textarea>
        </div>
        </div>
      </div>
    </main>
  )
}
