import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items.forEach((item, index) => {
        if (action.payload == item.id) {
          state.items.splice(index, 1)  
         } else {
          return;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = basketSlice.actions;
export default basketSlice.reducer;
