import {createStore} from "redux";
import {reducer} from "./phoneNumberReducer";
import {composeWithDevTools} from "redux-devtools-extension";

// Создаем store (сюда необходимо передать редьюсер, если редьюсеров несколко, используем метод combineReducer)

export const store = createStore(reducer, composeWithDevTools())



