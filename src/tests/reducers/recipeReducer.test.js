import { recipeReducer } from '../../redux/reducers/reducers'
import * as actions from '../../redux/actions/actions'

describe('Deleting Recipe', () => {
  let initialState
  initialState = {
    recipes: [
      {
        name: 'Pizza',
        ingredients: ['Dough', 'Mozarella Cheese', 'Tomato Sauce', 'Sausage', 'Green Peppers', 'Onions']
      }
    ]
  }
  beforeEach(() => {})

  it('handles action with unknown type', () => {
    expect(recipeReducer(initialState, {})).toEqual(initialState)
  })

  it('action deleteRecipe returns correct object', () => {
    let ret = actions.saveDeleteRecipe(1)
    expect(ret).toEqual({ type: 'DELETE_RECIPE', index: 1 })
  })

  it('action deleteRecipe deletes a recipe item', () => {
    const newState = recipeReducer(initialState, { type: 'DELETE_RECIPE', index: 0 })

    expect(newState.recipes.length).toEqual(initialState.recipes.length - 1)
  })
})

describe('Adding Recipe', () => {
  let initialState
  initialState = {
    recipes: []
  }
  beforeEach(() => {})

  it('handles action with unknown type', () => {
    expect(recipeReducer(initialState, {})).toEqual(initialState)
  })

  it('action addRecipe returns correct object', () => {
    let ret = actions.saveNewRecipe({ name: 'Name', ingredients: 'Ingredient' })
    expect(ret).toEqual({ type: 'ADD_RECIPE', newRecipe: { name: 'Name', ingredients: 'Ingredient' } })
  })

  it('action addRecipe adds a recipe item', () => {
    const newState = recipeReducer(initialState, { type: 'ADD_RECIPE', newRecipe: { name: 'Name', ingredients: 'Ingredient' } })

    expect(newState.recipes.length).toEqual(initialState.recipes.length + 1)
  })
})

describe('Editing Recipe', () => {
  let initialState
  const editedRecipe = {
    name: 'New Name',
    ingredients: 'New Ingredient, New Ingredient 2'
  }
  initialState = {
    recipes: [
      {
        name: 'Pizza',
        ingredients: ['Dough', 'Mozarella Cheese', 'Tomato Sauce', 'Sausage', 'Green Peppers', 'Onions']
      }
    ]
  }
  beforeEach(() => {})

  it('handles action with unknown type', () => {
    expect(recipeReducer(initialState, {})).toEqual(initialState)
  })

  it('action editRecipe returns correct object', () => {
    let ret = actions.saveEditedRecipe(editedRecipe, 0)
    expect(ret).toEqual({ type: 'EDIT_RECIPE', editedRecipe: editedRecipe, index: 0 })
  })

  it("action editRecipe doesn't add a recipe item", () => {
    const newState = recipeReducer(initialState, { type: 'EDIT_RECIPE', editedRecipe: editedRecipe, index: 0 })

    expect(newState.recipes.length).toEqual(initialState.recipes.length)
  })

  it('action editRecipe edits recipe item', () => {
    const newState = recipeReducer(initialState, { type: 'EDIT_RECIPE', editedRecipe: editedRecipe, index: 0 })
    expect(newState.recipes[0]).not.toEqual(initialState.recipes[0])
  })
})
