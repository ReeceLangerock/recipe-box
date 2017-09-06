import { recipeReducer } from "../reducers/reducers";

export var deleteRecipe = index => {
  return dispatch => {
    dispatch(saveDeleteRecipe(index));
    dispatch(clearModal());
    dispatch(saveToLocalStorage());
  };
};

export var saveDeleteRecipe = index => {
  return {
    type: "DELETE_RECIPE",
    index
  };
};

export var addRecipe = (name, ingredients) => {
  ingredients = typeof ingredients === "string" ? ingredients.split(",") : ingredients;

  return dispatch => {
    const newRecipe = {
      name,
      ingredients: ingredients
    };
    dispatch(saveNewRecipe(newRecipe));
    dispatch(clearModal());
    dispatch(saveToLocalStorage());
  };
};

var saveNewRecipe = newRecipe => {
  return {
    type: "ADD_RECIPE",
    newRecipe
  };
};

export var editRecipe = (name, ingredients, index) => {
  ingredients = typeof ingredients === "string" ? ingredients.split(",") : ingredients;

  return dispatch => {
    const editedRecipe = {
      name,
      ingredients: ingredients
    };
    dispatch(saveEditedRecipe(editedRecipe, index));
    dispatch(clearModal());
    dispatch(saveToLocalStorage());
  };
};

var saveEditedRecipe = (editedRecipe, index) => {
  return {
    type: "EDIT_RECIPE",
    editedRecipe,
    index
  };
};

export var setAddModal = () => {
  return {
    type: "SET_ADD_MODAL"
  };
};

export var setEditModal = index => {
  return {
    type: "SET_EDIT_MODAL",
    index
  };
};

export var clearModal = () => {
  return {
    type: "CLEAR_MODAL"
  };
};

export var saveToLocalStorage = () => {
  return {
    type: "SAVE_TO_LOCAL_STORAGE"
  };
};

export var populateFromLocalStorage = () => {
  return {
    type: "POPULATE_FROM_LOCAL_STORAGE"
  };
};
