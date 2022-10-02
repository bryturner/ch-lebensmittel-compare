import { useReducer } from "react";
import { compareProducts, searchProducts } from "../constants/helpers";

export const useFilterReducer = ({ products }) => {
   const reducer = (state, { type, payload }) => {
      switch (type) {
         case "fetchProducts":
            return { ...state, products: payload.products };
         case "query":
            // check if product is selected via the compare button
            if (state.selectedProduct === "") {
               return {
                  ...state,
                  searchQuery: payload.searchQuery,
                  products: searchProducts(products, payload.searchQuery),
               };
            }
            if (state.selectedProduct) {
               return {
                  ...state,
                  searchQuery: payload.searchQuery,
                  products: searchProducts(
                     compareProducts(products, state.selectedProduct),
                     payload.searchQuery
                  ),
               };
            }
            break;
         case "compare":
            // if there is a search query, compare products list is filtered including the query
            if (state.searchQuery.length === 0) {
               return {
                  ...state,
                  selectedProduct: payload.selectedProduct,
                  products: compareProducts(products, payload.selectedProduct),
                  compareId: payload.compareId,
               };
            }
            if (state.searchQuery.length > 0) {
               return {
                  ...state,
                  selectedProduct: payload.selectedProduct,
                  products: compareProducts(
                     searchProducts(products, state.searchQuery),
                     payload.selectedProduct
                  ),
                  compareId: payload.compareId,
               };
            }
            break;
         case "reset":
            return {
               searchQuery: "",
               selectedProduct: "",
               products: products,
               compareId: "",
            };
         default:
            throw new Error(`Unknown action type: ${type}`);
      }
   };

   const initialState = {
      searchQuery: "",
      selectedProduct: "",
      products: [],
      compareId: "",
   };

   const [state, dispatchFilter] = useReducer(reducer, initialState);

   return [state, dispatchFilter];
};
