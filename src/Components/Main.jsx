import React from 'react'
import '../Styles/main.css'
import { useDispatch, useSelector } from 'react-redux'
import { saveNote } from '../Redux/actions/notes'

export default function Main() {
  
  const dispatch = useDispatch()
  const {items} = useSelector((state) => state);
  const {activeItemID} = useSelector((state) => state);

  const [note, changeNote] = React.useState({})

  const saveChanges = () => {
    dispatch(saveNote(note))
  }

  React.useEffect(() => {

    let noteName = document.querySelector('.note-name')
    let noteContent = document.querySelector('.note-text')

    let noteObj = {
      name: items[activeItemID].name,
      content: items[activeItemID].content,
    }

    // обновляем данные
    changeNote(noteObj)
    noteName.value = noteObj.name
    noteContent.value = noteContent.name
    
    // отправляем в локальный стэйт измененный объект с данными
    noteName.addEventListener('input', () => {
      noteObj.name = noteName.value
      changeNote(noteObj)
    })

    noteContent.addEventListener('input', () => {
      noteObj.content = noteContent.value
      changeNote(noteObj)
    })

  }, [activeItemID])
  return (
    <main>
      <div className='note-menu'>
        <div className='note-menu-buttons'>
          <button className='save-button' onClick={saveChanges}>
            Сохранить
          </button>
          <button className='delete-button'>
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
