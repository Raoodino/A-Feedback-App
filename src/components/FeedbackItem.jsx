import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit  } from 'react-icons/fa' //icons
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem ({ item }) {
  const {deleteFeedback, editFeedback} = useContext( FeedbackContext)

  //display here
  return (
    // <Card reverse ={true}> 
   <Card >  
        <div className="num-display">{item.rating}</div>
        
        <button onClick={() => deleteFeedback(item.id)}
        className='close'>
          <FaTimes color='purple' />
        </button>

        <button  onClick={() => editFeedback(item)} className='edit'>
          <FaEdit color ='purple' />
        </button>

        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes ={
  item: PropTypes.object.isRequired,

}

export default FeedbackItem