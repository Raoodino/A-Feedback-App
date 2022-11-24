import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import React from "react"
import Header from "./components/Header"

import FeedBackList from "./components/FeedBackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"
import AboutPage from "./pages/AboutPage"

// import Card from "./components/shared/Card"

function App() {
 
    return(
      <FeedbackProvider> 
        <Router>
        <Header />
        <div className="container">
         <Routes>
          <Route exact path='/' element={
            <>

            <FeedbackForm />
            <FeedbackStats/>
            <FeedBackList />
            </>

          }>
          
          </Route>

          <Route path='/about' element={<AboutPage />} /> 
          </Routes>
          <AboutIconLink />
        </div>
        </Router>
        </FeedbackProvider>
    )

    
}

export default App


  