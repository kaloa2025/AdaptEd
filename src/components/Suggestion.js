import React from 'react'
import '../styles/suggestion.css'
import add from '../assests/add.png'

function Suggestion() {
  return (
    <div>
        <div className='Sugg-container'>
            <div>
                <img src={add}/>
                <p>Get New Suggestions</p>
            </div>
        </div>
    </div>
  )
}

export default Suggestion
