import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { shallow, mount, find, render, simulate } from 'enzyme'
import enzymeSerializer from 'enzyme-to-json/serializer'
import { spy } from 'sinon'
import { Modal } from './../components/Modal'
import { Button } from './../components/Button'

import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = {}
const store = mockStore(initialState)
expect.addSnapshotSerializer(enzymeSerializer)
describe('Modal', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      modalButtonText: 'Save Edit',
      modalHeader: 'Edit Recipe',
      modalButtonMethod: 'editRecipe'
    }
    component = mount(
      <Provider store={store}>
        <Modal {...props} />
      </Provider>
    )
  })

  it('contains two buttons', () => {
    let button1 = component.find(Button).get(0)

    expect(component.find(Button).length).toBe(2)
  })

  it('buttons receive correct props', () => {
    let button1 = component.find(Button).get(0)
    expect(button1.props.buttonText).toEqual(props.modalButtonText)
  })

  it('recieves correct props', () => {
    expect(component.props().children.props.modalHeader).toEqual(props.modalHeader)
    expect(component.props().children.props.modalButtonText).toEqual(props.modalButtonText)
    expect(component.props().children.props.modalButtonMethod).toEqual(props.modalButtonMethod)
  })

  it('matches snapshot', () => {
    const comp = shallow(<Modal {...props} />)
    expect(comp).toMatchSnapshot()
  })
})
