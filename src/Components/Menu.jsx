import React from 'react'
import '../Styles/menu.css'

export default function Menu() {
  return (
    <>
        <section>
            <div className='search-container'>
                <input type='text' placeholder='Поиск' className='search-input'/>
                <span className='sort'>
                    Сортировать по...
                </span>
            </div>
            <div className='notes'>

            </div>
            <div className='add-note-button-container'>
              <button className='add-note-button'>
                Добавить заметку
              </button>
            </div>
        </section>
    </>
  )
}
