/*
    Namespace em multiplos arquivos
*/
var Matematic;
(function (Matematic) {
    function soma(nums) {
        return nums.reduce(function (n, t) { return n + t; });
    }
    Matematic.soma = soma;
})(Matematic || (Matematic = {}));
/*
    Namespace em multiplos arquivos
*/
var Matematic;
(function (Matematic) {
    function subtrair(nums) {
        return nums.reduce(function (n, t) { return t - n; });
    }
    Matematic.subtrair = subtrair;
})(Matematic || (Matematic = {}));
/*
    Namespace em multiplos arquivos
*/
/* ///reference importa arquivos ts para dentro de outro arquivo ts */
///<reference path="aula03_soma.ts" />
///<reference path="aula03_sub.ts" />
console.log(Matematic.soma([2, 3]));
console.log(Matematic.subtrair([4, 5]));
