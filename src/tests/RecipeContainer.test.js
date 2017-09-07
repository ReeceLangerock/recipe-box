import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { shallow, mount, find, render, simulate } from 'enzyme'
import enzymeSerializer from 'enzyme-to-json/serializer'
import { RecipeContainer } from './../components/RecipeContainer'
import configureStore from 'redux-mock-store'
import Recipe from '../components/Recipe'
import AddRecipe from '../components/AddRecipe'

import * as actions from '../redux/actions/actions'

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = {}
const store = mockStore(initialState)
expect.addSnapshotSerializer(enzymeSerializer)
describe('RecipeContainer', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      populateFromLocalStorage: jest.fn(),
      recipes: [{ name: 'Cookies', id: 1, ingredients: ['sugar'] }, { name: 'Pizza', id: 2, ingredients: ['cheese'] }]
    }
    component = mount(
      <Provider store={store}>
        <RecipeContainer {...props} />
      </Provider>
    )
  })

  it('renders each recipe', () => {
    expect(component.find(Recipe).length).toEqual(props.recipes.length)
  })

  it('renders AddRecipe component', () => {
    expect(component.find(AddRecipe).length).toEqual(1)
  })

  it('matches snapshot', () => {
    const snapComponent = shallow(<RecipeContainer {...props} />)

    expect(snapComponent).toMatchSnapshot()
  })
})
