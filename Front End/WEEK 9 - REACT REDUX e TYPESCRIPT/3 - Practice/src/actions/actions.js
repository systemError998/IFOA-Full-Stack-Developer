export const addCompany = (company) => {
    return { type: 'ADD_COMPANY_TO_FAVOURITES', payload: company }
}

export const removeCompany = (company) => {
    return { type: 'REMOVE_COMPANY_TO_FAVOURITES', payload: company }
}