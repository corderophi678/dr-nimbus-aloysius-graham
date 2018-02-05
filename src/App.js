import React, {Component} from 'react'

import {Header} from './components/Header'
import {About} from './components/About'
import {Contact} from './components/Contact'
import {CV} from './components/CV'

import catFace from './assets/cat-small.jpg'

class App extends Component {
  render() {
    return (
      <div className="code f5 fw6 lh-copy bg-black white">
        <Header />
        <main className="pa3 center">
          <section className="tc mt3 mt4-ns pv4 pv5-ns">
            <img
              src={catFace}
              className="br3 ba b--white-50 pa2 contain h4 h-100-ns"
              alt="Cat eating lettuce from hand"
            />
            <h1 className="f5 f4-ns fw6">Dr. Nimbus Aloysius Graham</h1>
            <h2 className="f6 fw2 ttu tracked">
              Concert Pianist and Molecular Biologist
            </h2>
          </section>
          <About />
          <CV />
          <Contact />
        </main>
      </div>
    )
  }
}

export default App
