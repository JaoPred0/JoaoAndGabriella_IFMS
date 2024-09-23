function display(id) {
    let home = document.getElementById("home");
    let horarios = document.getElementById("horarios");

    if(id == 0){
        home.className = 'a'
    }
    if(id == 'calendarioIFMS') {
        horarios.className = 'a'
        home.className = 'b'
    }
}

