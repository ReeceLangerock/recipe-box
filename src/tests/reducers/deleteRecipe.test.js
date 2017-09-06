import { recipeReducer } from "../../redux/reducers/reducers";

describe("Recipe Reducer", () => {
    let state;
    beforeEach(() => {
        state = {
            recipes: [
              {
                name: "Pizza",
                id: 1,
                ingredients: ["Cheese", "Dough"]
              },
        
              {
                name: "Cookies",
                id: 2,
                ingredients: ["Sugar", "Chocolate Chips"]
              },
              {
                name: "Pizza",
                id: 6,
                ingredients: ["Cheese", "Dough"]
              },
        
              {
                name: "Cookies",
                id: 3,
                ingredients: ["Sugar", "Chocolate Chips"]
              },
              {
                name: "Pizza",
                id: 4,
                ingredients: ["Cheese", "Dough"]
              },
        
              {
                name: "Cookies",
                id: 5,
                ingredients: ["Sugar", "Chocolate Chips"]
              }
            ]
        }
    })

//   it("handles action with unknown type", () => {
//     expect(recipeReducer(undefined, {})).toEqual([]);
//   });

  it("action SAVE_COMMENT", () => {
    const action = { type: "DELETE_RECIPE", payload: 1 };
    expect(recipeReducer(action)).toEqual(1);
  });
});
