function validatePasswords() {
    const pass = document.getElementById('pass').value;
    const confirmPass = document.getElementById('confirmPass').value;
    if (pass !== confirmPass) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}
