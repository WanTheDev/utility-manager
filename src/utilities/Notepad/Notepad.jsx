import { useState } from 'react'
import './notepadStyle.css'

export default function Notepad({updateSize}) {
  return(
  <div id="notepad-wrapper">
    <div className="notepad-title" contentEditable="true" placeholder="Title"></div>
    <div className="notepad-content" contentEditable="true" placeholder="Content"></div>
  </div>
  )
}