let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global)
