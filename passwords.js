//create a variable titled password and set it equal to a string

let password = "hughjass123"

//using the method we learned in interactive lecture i will break apart the string equal to the variable password into elements in an array
let passwordArray = password.split(``)
console.log(passwordArray)


//Write a conditional statement that checks if the password meets the following constraints: At least 10 characters long, Contains at least one letter and one number

for (let i=0; i<password.length; i++) {
    if(password.length>10) {
        console.log(`success`)
    } if (!(passwordArray.contains("1") || passwordArray.contains("2") 
    || passwordArray.contains("3") || passwordArray.contains("4")
    || passwordArray.contains("5") || passwordArray.contains("6")
    || passwordArray.contains("7") || passwordArray.contains("8")
    || passwordArray.contains("9") || passwordArray.contains("0"))){
     } if (!(passwordArray.contains("a") || passwordArray.contains("b")
     || passwordArray.contains("c") || passwordArray.contains("d")
     || passwordArray.contains("e") || passwordArray.contains("f")
     || passwordArray.contains("g") || passwordArray.contains("h")
     || passwordArray.contains("i") || passwordArray.contains("j")
     || passwordArray.contains("k") || passwordArray.contains("l")
     || passwordArray.contains("m") || passwordArray.contains("n")
     || passwordArray.contains("o") || passwordArray.contains("p")
     || passwordArray.contains("q") || passwordArray.contains("r")
     || passwordArray.contains("s") || passwordArray.contains("t")
     || passwordArray.contains("u") || passwordArray.contains("v")
     || passwordArray.contains("x") || passwordArray.contains("y")
     || passwordArray.contains("z") || passwordArray.contains("w"))){
        console.log(`success`)
     } else {
        console.log(`failure`)
     }
    }

    
//check for special characters using the same conditional logic technique
if (!(password.contains("@") || password.contains("#")
              || password.contains("!") || password.contains("~")
              || password.contains("$") || password.contains("%")
              || password.contains("^") || password.contains("&")
              || password.contains("*") || password.contains("(")
              || password.contains(")") || password.contains("-")
              || password.contains("+") || password.contains("/")
              || password.contains(":") || password.contains(".")
              || password.contains(", ") || password.contains("<")
              || password.contains(">") || password.contains("?")
              || password.contains("|"))) {
            console.log(`success`);
              }
//check for a maximum length of 20 charcaters
for (let i = 0; i<password.length; i++){
    if(password.length>20){
        console.log(`Password is too long`)
    }
}

//make sure your password does not conatin the word password

if (!(password.contains("password"))) {
    console.log(`password must not contain the word "password"`)
}

