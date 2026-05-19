let home_points = document.getElementById("home-points")
let guest_points = document.getElementById("guest-points")

let home_final_points = 0
let guest_final_points = 0



//funções do time de casa
function home_score_add1() {

    home_final_points += 1
    home_points.textContent = home_final_points
}

function home_score_add2() {

    home_final_points += 2
    home_points.textContent = home_final_points
}

function home_score_add3() {

    home_final_points += 3
    home_points.textContent = home_final_points
}



//funções do visitante
function guest_score_add1() {

    guest_final_points += 1
    guest_points.textContent = guest_final_points
}

function guest_score_add2() {

    guest_final_points += 2
    guest_points.textContent = guest_final_points
}

function guest_score_add3() {

    guest_final_points += 3
    guest_points.textContent = guest_final_points
}

//Resetar os placares

function reset_button() {
    home_final_points = 0
    guest_final_points = 0
    home_points.textContent = 0
    guest_points.textContent = 0
}
