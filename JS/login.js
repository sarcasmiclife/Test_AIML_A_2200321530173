function validate() {
    const username = document.getElementById("userid").value;
    const pass = document.getElementById("pswd").value;

    if (pass.length < 8) {
        alert("Password too short.");
        return false;
    }

    if (username === "") {
        alert("Fill the username.");
        return false;
    }
}