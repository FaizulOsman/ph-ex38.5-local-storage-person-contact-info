const getId = id => {
    return document.getElementById(id)
}

// Send Button Click Action Section
const sendAll = () => {
    const nameValue = getId('name-input').value
    const emailValue = getId('email-input').value
    const messageValue = getId('message-input').value

    getId('name-input').value = ''
    getId('email-input').value = ''
    getId('message-input').value = ''

    if (nameValue === '' || emailValue === '' || messageValue === '') {
        alert('Please fill up the boxes')
        return
    }

    const getPersonFromLS = JSON.parse(localStorage.getItem('person'))
    if (!getPersonFromLS) {
        const personDetails = [
            { name: nameValue, email: emailValue, message: messageValue }
        ]
        localStorage.setItem('person', JSON.stringify(personDetails))
    } else {
        const personDetails = [
            ...getPersonFromLS,
            { name: nameValue, email: emailValue, message: messageValue }
        ]
        localStorage.setItem('person', JSON.stringify(personDetails))
    }
    displayPersonData()
}

// Display persons all data
const displayPersonData = () => {
    let count = 0
    const personDetails = getId('person-details-section')
    personDetails.innerHTML = ''
    const getPersonData = JSON.parse(localStorage.getItem('person'))
    getPersonData.forEach(person => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <th>${++count}</th>
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.message}</td>
        `
        personDetails.appendChild(tr)
    })
}













// Sengle Click Action Section
const addName = () => {
    const nameValue = getId('name-input').value
    localStorage.setItem('name', nameValue)
    displayData()
}
const removeName = () => {
    localStorage.removeItem('name')
    displayData()
}

const addEmail = () => {
    const emailValue = getId('email-input').value
    localStorage.setItem('email', emailValue)
    displayData()
}
const removeEmail = () => {
    localStorage.removeItem('email')
    displayData()
}

const addMessage = () => {
    const messageValue = getId('message-input').value
    localStorage.setItem('message', messageValue)
    displayData()
}
const removeMessage = () => {
    localStorage.removeItem('message')
    displayData()
}

const resetAll = () => {
    localStorage.clear()
    displayData()
}

// Display Single (name, email, message) data
const displayData = () => {
    const getNameFromLS = localStorage.getItem('name')
    const getEmailFromLS = localStorage.getItem('email')
    const getMessageFromLS = localStorage.getItem('message')
    const contactDetails = getId('contact-details')
    contactDetails.innerHTML = ''
    const li = document.createElement('li')
    li.innerHTML = `
        <p><b>Name:</b> ${getNameFromLS ? getNameFromLS : 'There is no name set yet'}</p>
        <p><b>Email:</b> ${getEmailFromLS ? getEmailFromLS : 'There is no email set yet'}</p>
        <p><b>Message:</b> ${getMessageFromLS ? getMessageFromLS : 'There is no message set yet'}</p>
    `
    contactDetails.appendChild(li)
}

displayData()

displayPersonData()