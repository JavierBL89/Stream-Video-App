/**
     * The function `buttonsControl` controls the disabled state of
     * the previous and next page buttons based on the current page number.
     */

function buttonsController(page) {
    // controls prevPage button
    let newPrevButtonState;
    let newNextButtonState;

    if (page === 0) {
        newPrevButtonState = true;
    } else if (page > 0) {
        newPrevButtonState = false;
    }
    // controls nextPage button
    if (page === 9) {
        newNextButtonState = true;
    } else if (page < 9) {
        newNextButtonState = false;
    }

    return { newNextButtonState, newPrevButtonState }
}

export { buttonsController };