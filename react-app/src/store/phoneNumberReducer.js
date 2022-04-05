// Локальное состояние

const defualtState = {
    number: "",
}

// Создаем Редьюсер

export const reducer = (state= defualtState, action) => {
    switch (action.type) {
        case "ADD_NUMBER":
            return { number: action.payload }
        default:
            return state
    }

}