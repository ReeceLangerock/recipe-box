const editModalInfo = {
  modalButtonText: "Save Edit",
  modalHeader: "Edit Recipe",
  modalButtonMethod: "editRecipe"
};
const addModalInfo = {
  modalButtonText: "Add Recipe",
  modalHeader: "Add a Recipe",
  modalButtonMethod: "addRecipe"
};

export var recipeReducer = (
  state = {
    recipes: [
      {
        name: "Pizza",
        ingredients: ["Dough", "Mozarella Cheese", "Tomato Sauce", "Sausage", "Green Peppers", "Onions"]
      },

      {
        name: "Chocolate Chip Cookies",
        ingredients: ["Flour", "Eggs", "Baking Powder", "Sugar", "Brown Sugar", "Salt", "Chocolate Chips"]
      },
      {
        name: "Cole Slaw",
        ingredients: ["Shredded Cabbage", "Vinegar", "Salt", "Sugar"]
      },{
        name: "Chicken Cordon Bleu",
        ingredients: ["Boneless chicken breast", "Swiss Cheese", "Ham", "Bread Crumbs", "Salt", "Black Pepper"]
      },{
        name: "Ratatouille",
        ingredients: ["Onion", "Garlic", "Olive Oil", "Eggplant", "Zucchini", "Red Bell Pepper", "Tomato", "Oregano", "Thyme", "Coriander", "Basil Leaves"]
      },{
        name: "Peanut Butter Banana Smoothie",
        ingredients: ["Banana", "Peanut Butter", "Milk", "Honey", "Ice cubes"]
      }

    ]
  },
  action
) => {
  switch (action.type) {
    case "DELETE_RECIPE":
      return {
        recipes: [...state.recipes.slice(0, action.index), ...state.recipes.slice(action.index + 1)]
      };
    case "ADD_RECIPE":
      return { ...state, recipes: [...state.recipes, action.newRecipe] };
    case "EDIT_RECIPE":
      return {
        recipes: state.recipes.map((recipe, index) => {
          console.log(action.index);
          return index === action.index ? action.editedRecipe : recipe;
        })
      };
    case "POPULATE_FROM_LOCAL_STORAGE":
      if (localStorage.getItem("recipes") !== null) {
        console.log('if')
        return { ...state, recipes: [...JSON.parse(localStorage.getItem("recipes")) ] };
      } else {
        return { ...state };
      }

    case "SAVE_TO_LOCAL_STORAGE":
      localStorage.setItem("recipes", JSON.stringify(state.recipes));
      return { ...state };

    default:
      return state;
  }
};

export var modalReducer = (
  state = {
    activeModal: ""
  },
  action
) => {
  switch (action.type) {
    case "SET_ADD_MODAL":
      return { ...state, activeModal: "add", ...addModalInfo };
    case "SET_EDIT_MODAL":
      return { ...state, activeModal: "edit", ...editModalInfo, editableRecipeIndex: action.index };
    case "CLEAR_MODAL":
      return { activeModal: "" };

    default:
      return state;
  }
};
