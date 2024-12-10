var bouton = document.getElementById('bouton');
var section = document.getElementById('section');
var estAffiche = false;
bouton.addEventListener('click', function () {
    if (!estAffiche) {
        section.style.display = 'block';
        bouton.innerHTML = "Nr";
        estAffiche = true;
    }
    else {
        section.style.display = 'none';
        bouton.innerHTML = "Sc";
        estAffiche = false;
    }
});
function afficherHeure() {
    var maintenant = new Date();
    var heures = maintenant.getHours().toString().padStart(2, '0');
    var minutes = maintenant.getMinutes().toString().padStart(2, '0');
    var secondes = maintenant.getSeconds().toString().padStart(2, '0');
    var heureActuelle = "".concat(heures, ":").concat(minutes, ":").concat(secondes);
    document.getElementById('heure').innerText = " ".concat(heureActuelle);
}
// Mettre à jour l'heure toutes les secondes
setInterval(afficherHeure, 1000);
function nb0() {
    var _a;
    var nb0 = (_a = document.getElementById("0")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb0;
    Mms.innerHTML += result;
}
function nb1() {
    var _a;
    var nb1 = (_a = document.getElementById("1")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb1;
    Mms.innerHTML += result;
}
function nb2() {
    var _a;
    var nb2 = (_a = document.getElementById("2")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb2;
    Mms.innerHTML += result;
}
function nb3() {
    var _a;
    var nb3 = (_a = document.getElementById("3")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb3;
    Mms.innerHTML += result;
}
function nb4() {
    var _a;
    var nb4 = (_a = document.getElementById("4")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb4;
    Mms.innerHTML += result;
}
function nb5() {
    var _a;
    var nb5 = (_a = document.getElementById("5")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb5;
    Mms.innerHTML += result;
}
function nb6() {
    var _a;
    var nb6 = (_a = document.getElementById("6")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb6;
    Mms.innerHTML += result;
}
function nb7() {
    var _a;
    var nb7 = (_a = document.getElementById("7")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb7;
    Mms.innerHTML += result;
}
function nb8() {
    var _a;
    var nb8 = (_a = document.getElementById("8")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb8;
    Mms.innerHTML += result;
}
function nb9() {
    var _a;
    var nb9 = (_a = document.getElementById("9")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = nb9;
    Mms.innerHTML += result;
}
function add() {
    var _a;
    var add = (_a = document.getElementById("+")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = add;
    Mms.innerHTML += result;
}
function soustraction() {
    var _a;
    var soustraction = (_a = document.getElementById("-")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = soustraction;
    Mms.innerHTML += result;
}
function multiplication() {
    var _a;
    var multiplication = (_a = document.getElementById("*")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = multiplication;
    Mms.innerHTML += result;
}
function div() {
    var _a;
    var div = (_a = document.getElementById("/")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = div;
    Mms.innerHTML += result;
}
function mod() {
    var _a;
    var mod = (_a = document.getElementById("%")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = mod;
    Mms.innerHTML += result;
}
function del() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var result = ecrant.slice(0, -1);
    var Mms = document.getElementById("result");
    Mms.innerHTML = result;
}
function clr() {
    var ecrant = ' ';
    var Mms = document.getElementById("result");
    var result = ecrant;
    Mms.innerHTML = result;
}
function egual() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var result = eval(ecrant);
    var Mms = document.getElementById("result");
    if (result == "Infinity" || result == "-Infinity") {
        Mms.innerHTML = 'ERROR';
    }
    else {
        Mms.innerHTML = result;
    }
}
function sin() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var result = Math.sin(eval(ecrant));
    if (!result) {
        alert("Veillez saisir un chifre avant d'appliquer le sinus");
    }
    else {
        var Mms = document.getElementById("result");
        Mms.innerHTML = result;
    }
}
function cos() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var result = Math.cos(eval(ecrant));
    if (!result) {
        alert("Veillez saisir un chifre avant d'appliquer le cosinus");
    }
    else {
        var Mms = document.getElementById("result");
        Mms.innerHTML = result;
    }
}
function tan() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var result = Math.tan(eval(ecrant));
    if (!result) {
        alert("Veillez saisir un chifre avant d'appliquer la tangente");
    }
    else {
        var Mms = document.getElementById("result");
        Mms.innerHTML = result;
    }
}
function ln() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var result = Math.log(eval(ecrant));
    if (!result) {
        alert("Veillez saisir un chifre avant d'appliquer le logarithme");
    }
    else {
        var Mms = document.getElementById("result");
        Mms.innerHTML = result;
    }
}
function puissance() {
    var _a;
    var ecrant = (_a = document.getElementById("resultat")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var result = "**";
    var Mms = document.getElementById("result");
    Mms.innerHTML += result;
}
function exp() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var result = Math.exp(eval(ecrant));
    if (!result) {
        alert("Veillez saisir un chifre avant d'appliquer l'exponentiel");
    }
    else {
        var Mms = document.getElementById("result");
        Mms.innerHTML = result;
    }
}
function racine() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var result = Math.sqrt(eval(ecrant));
    if (!result) {
        alert("Veillez saisir un chifre avant d'appliquer racine");
    }
    else {
        var Mms = document.getElementById("result");
        Mms.innerHTML = result;
    }
}
function factorielle() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var Mms = document.getElementById("result");
    var result = 1;
    if (!ecrant) {
        alert("Veillez saisir un chifre avant d'appliquer le factorielle");
    }
    else {
        if (ecrant == 0 || ecrant == 1) {
            result = 1;
            Mms.innerHTML = result;
        }
        else {
            for (var i = 1; i <= ecrant; i++) {
                result *= i;
            }
            Mms.innerHTML = result;
        }
    }
}
function baseb() {
    var _a;
    var ecrant = Number((_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML);
    if (!ecrant) {
        alert("Veillez saisir un chifre avant d'appliquer la conversion en binaire");
    }
    else {
        var result = ecrant.toString(2);
        var Mms = document.getElementById("result");
        Mms.innerHTML = result;
    }
}
function based() {
    var _a;
    var ecrant = (_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (!ecrant) {
        alert("Veillez saisir un chifre avant d'appliquer la conversion en décimal");
    }
    else {
        if (ecrant) {
            var result = parseInt(ecrant, 16);
            var Mms = document.getElementById("result");
            Mms.innerHTML = result;
        }
        else {
            var result = parseInt(ecrant, 2);
            var Mms = document.getElementById("result");
            Mms.innerHTML = result;
        }
    }
}
function baseh() {
    var _a;
    var ecrant = Number((_a = document.getElementById("result")) === null || _a === void 0 ? void 0 : _a.innerHTML);
    if (!ecrant) {
        alert("Veillez saisir un chifre avant d'appliquer la conversion en hexadecimal");
    }
    else {
        var result = ecrant.toString(16).toUpperCase();
        var Mms = document.getElementById("result");
        Mms.innerHTML = result;
    }
}
