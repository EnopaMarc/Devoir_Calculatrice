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
