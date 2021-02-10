let string1 =  'oi'
let string2 = 'oee'

function verificar (string1, string2) {
      
    if (string1.length == string2.length) {
        for (let i = 0; i < string1.length; i++) {
            if (string1.charAt(i) == string2.charAt(i)) {
                return true
            }
            else return false
        }
    }
    else return false
}

console.log(verificar(string1, string2))
