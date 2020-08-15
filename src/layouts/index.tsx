import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.scss'
import About from '@/pages/About'
import Editor from '@/pages/Editor'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import Introduction from '@/pages/Introduction'

function App() {
  return (
    <div className="studio-main">
      <Header />
      <div className="studio-body">
        <Router>
          <Switch>
            <Route exact path="/">
              <Introduction />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/editor">
              <Editor />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
