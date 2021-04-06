let charizard = Cookies.get('charizard', 'charizard');
let blastoise = Cookies.get('blastoise', 'blastoise');
let venusaur = Cookies.get('venusaur', 'venusaur');
let mewtwo = Cookies.get('mewtwo', 'mewtwo');

let user_image = document.getElementById("user_pokemon");
let user_info_name = document.getElementById("user_info_name");
let user_info_HP = document.getElementById("user_info_HP");
let user_info_attack = document.getElementById("user_info_attack");

let computer_image = document.getElementById("computer_pokemon");
let computer_info_name = document.getElementById("computer_info_name");
let computer_info_HP = document.getElementById("computer_info_HP");
let computer_info_attack = document.getElementById("computer_info_attack");

function user_pokemon() {

    if (charizard) {
        user_image.src = "/images/charizard.jpg";
        user_image.alt = "charizard pokemon";
        user_info_name.innerText = "Charizard";
        user_info_HP.innerText = 2626;
        user_info_attack.innerText = 500;
        user_info_HP = 2626;
        user_info_attack = 500;
        Cookies.set("CurrentUserHP", user_info_HP);

    } else if (blastoise) {
        user_image.src = "/images/blastoise.jpg";
        user_image.alt = "blastoise pokemon";
        user_info_name.innerText = "Blastoise";
        user_info_HP.innerText = 268;
        user_info_attack.innerText = 153;
        user_info_HP = 268;
        user_info_attack = 153;
        Cookies.set("CurrentUserHP", user_info_HP);

    } else if (venusaur) {
        user_image.src = "/images/venusaur.jpg";
        user_image.alt = "venusaur pokemon";
        user_info_name.innerText = "Venusaur";
        user_info_HP.innerText = 270;
        user_info_attack.innerText = 152;
        user_info_HP = 270;
        user_info_attack = 152;
        Cookies.set("CurrentUserHP", user_info_HP);
    }
}

function enemy_pokemon() {
        computer_image.src = "/images/mewtwo.jpg";
        computer_image.alt = "mewtwo pokemon";
        computer_info_name.innerText = "Mewtwo";
        computer_info_HP.innerText = 416;
        computer_info_attack.innerText = 350;
        computer_info_HP = 416;
        computer_info_attack = 350;
        Cookies.set("CurrentComputerHP", computer_info_HP);
}

let currentUserHP = Cookies.get("CurrentUserHP", user_info_HP);
let currentComputerHP = Cookies.get("CurrentComputerHP", computer_info_HP);


function deleteAllCookies() {
    Cookies.remove('charizard', 'charizard');
    Cookies.remove('blastoise', 'blastoise');
    Cookies.remove('venusaur', 'venusaur');
    Cookies.remove('mewtwo', 'mewtwo');
    Cookies.remove("CurrentUserHP", user_info_HP);
    Cookies.remove("CurrentComputerHP", computer_info_HP);
}

user_pokemon();
enemy_pokemon();

function userattack() {
    let current_computer_info_HP = computer_info_HP - user_info_attack;
    return current_computer_info_HP;
}

function computerattack() {
    let current_user_info_HP = user_info_HP - computer_info_attack;
    return current_user_info_HP;
}

function battle() {
    userattack();
    if (userattack() <= 0) {
        document.getElementById("victory").style.left = "0px";
    } else {
        computerattack();
    }
    if (computerattack() <= 0) {
        document.getElementById("defeat").style.left = "0px";
    } else {
        console.log(userattack());
        console.log(computerattack());
        computer_info_HP = userattack();
        user_info_HP = computerattack();
        console.log(computer_info_HP);
        console.log(user_info_HP);
    }
}

function update() {
    computer_info_HP.innerText = computer_info_HP;
    user_info_HP.innerText = user_info_HP;
}

update();

function change() {
    Cookies.remove('charizard', 'charizard');
    Cookies.remove('blastoise', 'blastoise');
    Cookies.remove('venusaur', 'venusaur');
    Cookies.remove('mewtwo', 'mewtwo');
    Cookies.remove("CurrentUserHP", user_info_HP);
    Cookies.remove("CurrentComputerHP", computer_info_HP);
}