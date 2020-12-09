/*  Clase usuario                   */
/*  username: Nombre del usuario    */
class User {

    constructor(username) {
        this.username = username;
    }

    /*  Método para guardar el usuario en el local storage  */
    saveUserLocalStorage() {
        var jsonPlayer = JSON.stringify(this);
  
        localStorage.setItem(this.username, jsonPlayer);
    }

    /*  Método para guardar el usuario en el session storage  */
    saveUserSessionStorage() {
        sessionStorage.clear();
        sessionStorage.setItem(this.username, this.username);
    }
}

export default User;