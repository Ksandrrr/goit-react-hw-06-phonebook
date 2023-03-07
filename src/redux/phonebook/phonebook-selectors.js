export const getContacts = store => store.contacts;

export const getFilterContacts = store => {
    const {filter, contacts} = store;
    if(!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({name, number}) => {
        return (name.toLowerCase().includes(normalizedFilter) || number.toLowerCase().includes(normalizedFilter))
    })

    return result;
}
