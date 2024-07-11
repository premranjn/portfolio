// setDateTime.js

function setDateTime() {
    var createdField = document.getElementById("createdDateTime");
    var currentDate = new Date().toISOString(); // Get current date and time in ISO format
    createdField.value = currentDate;
}

export default { setDateTime };
