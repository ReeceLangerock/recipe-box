import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import styled from 'styled-components'

import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Modal from './components/Modal'
import RecipeContainer from './components/RecipeContainer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: #f7f7f7;
`

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Container className='App'>
          <Header />
          <RecipeContainer />

          <Footer />
          <Modal />
        </Container>
      </Provider>
    )
  }
}

export default App
