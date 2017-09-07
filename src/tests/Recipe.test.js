import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, find, render, simulate } from 'enzyme'
import enzymeSerializer from 'enzyme-to-json/serializer'
import { spy } from 'sinon'
import { Recipe } from './../components/Recipe'
import configureStore from 'redux-mock-store'

const initialState = {}
let mockStore = configureStore(initialState)
expect.addSnapshotSerializer(enzymeSerializer)
describe('Recipe', () => {
  let component
  let props
  beforeEach(() => {
    props = { name: 'Recipe Name', id: 1, ingredients: ['ingredient'] }
    component = shallow(<Recipe {...props} />)
  })

  it('receives correct props', () => {
    expect(component.instance().props.name).toEqual('Recipe Name')
    expect(component.instance().props.id).toEqual(1)
    expect(component.instance().props.ingredients).toEqual(['ingredient'])
  })

  it('matches snapshot', () => {
    const comp = shallow(<Recipe {...props} />)
    expect(comp).toMatchSnapshot()
  })
})
