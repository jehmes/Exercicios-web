function inverso(n) {
    if (n === true) {
        return false
    }
    else if (n === false) {
        return true
    }
    else if (n > 0) {
        return -n
    }
    else if (n < 0) {
        return +n
    }
    else 
    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof n}`
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(5))
console.log(inverso('b'))