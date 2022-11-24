import React from 'react'
// import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
// import PropTypes from 'prop-types'

function FeedBackList({}) {
   
  const {feedback} = useContext(FeedbackContext)

  // console.log(feedback) //able to print in the console--feedback Data
    if(!feedback || feedback.length === 0){
        return <p> No Feedback Yet </p>
    }
  return (
    <div className='feedback-list'>
        {/* <AnimatePresence> */}
        {feedback.map((item)=> (
           // @ts-ignore
           <FeedbackItem key ={item.id} 
           item={item} 
          />
        ))}
         {/* </AnimatePresence> */}
    </div>
  )
}

// FeedBackList.propTypes ={
//     feedback: PropTypes.arrayOf(PropTypes.shape({
//         id:PropTypes.number.isRequired,
//         text: PropTypes.string.isRequired,
//         rating:PropTypes.number.isRequired,
//     }
//     ))
// }
export default FeedBackList