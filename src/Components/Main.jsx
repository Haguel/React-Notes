import React from 'react'
import '../Styles/main.css'

import TextColorIcon from '../Images/TextColorIcon.svg'
import TextBackgroundIcon from '../Images/TextBackgroundIcon.svg'
import TextBoldIcon from '../Images/TextBoldIcon.svg'
import TextItalicIcon from '../Images/TextItalicIcon.svg'
import TextUnderlineIcon from '../Images/TextUnderlineIcon.svg'

export default function Main() {
  return (
    <main>
      <div className='text-interaction'>
        <div className='text-interaction__font'>
          <select className='font-family-select'>
            <option className='font-family'>Roboto</option>
            <option className='font-family'>Arial</option>
            <option className='font-family'>Verdana</option>
            <option className='font-family'>Sans-serif</option>
            <option className='font-family'>Fantasy</option>
            <option className='font-family'>Sans</option>
            <option className='font-family'>Italic</option>
            <option className='font-family'>Paris</option>
          </select>
          <select className='font-size-select'>
            <option className='font-size'>18</option>
            <option className='font-size'>20</option>
            <option className='font-size'>24</option>
            <option className='font-size'>28</option>
            <option className='font-size'>32</option>
            <option className='font-size'>36</option>
            <option className='font-size'>48</option>
            <option className='font-size'>60</option>
          </select>
        </div>
        <div className='text-interaction__styles'>
          <button className='font-style--clicked'>
            <img src={TextColorIcon} />
          </button>
          <button className='font-style'>
            <img src={TextBackgroundIcon}/>
          </button>
          <button className='font-style'>
            <img src={TextBoldIcon}/>
          </button>
          <button className='font-style'>
            <img src={TextItalicIcon}/>
          </button>
          <button className='font-style'>
            <img src={TextUnderlineIcon}/>
          </button>
        </div>
      </div>
      <div className='note-background'>
        <div className='note-container'>
          <div>
            <input type='text' className='note-name' placeholder='Название'/>
          </div>
          <div>
            <textarea type='text' className='note-text' spellCheck='true'> </textarea>
        </div>
        </div>
      </div>
    </main>
  )
}
