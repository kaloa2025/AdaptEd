import React from 'react'
import '../styles/suggestion.css'
import add from '../assests/add.png'
import { Link } from 'react-router-dom'

function Suggestion() {
  return (
    <div>
        <div className='Sugg-container'>
            <div>
                <Link to='/suggestion'><img src={add}/></Link>
                <p>Get New Suggestions</p>
            </div>
        </div>
    </div>
  )
}

export default Suggestion
