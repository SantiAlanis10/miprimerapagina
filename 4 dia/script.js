function showAlert () { alert('¡hola, esta es una alerta desde JavaScript!'); 
}
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}