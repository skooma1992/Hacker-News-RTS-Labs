// Passes through user input for a new search.

export const search = (userInput) => {
    return {
        type: 'CREATE_SEARCH',
        userInput: userInput
    }
}