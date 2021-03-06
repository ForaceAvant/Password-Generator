document.getElementById("generate-button").addEventListener("click", function () {
    var numChar = prompt("Enter number of characters (8 through 128)");
    var password = [];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var special = ["~", "!", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "|", "?", "<", ">", ".", ";", ":"];
    var newlyMadePassword = "Please Enter Values Within Bounds Given";
    var validUserInputs = true;


    function passwordMaker(howToSplit) {
        var passwordPossiblities = [];
        var password = [];

        //Checks to see what type of characters are going to be used in password and creates an array with those characters.
        if (howToSplit.indexOf("l") >= 0 || howToSplit.indexOf("L") >= 0) {
            passwordPossiblities[passwordPossiblities.length] = lowercase;
        }
        if (howToSplit.indexOf("u") >= 0 || howToSplit.indexOf("U") >= 0) {
            passwordPossiblities[passwordPossiblities.length] = uppercase;
        }
        if (howToSplit.indexOf("n") >= 0 || howToSplit.indexOf("N") >= 0) {
            passwordPossiblities[passwordPossiblities.length] = numeric;
        }
        if (howToSplit.indexOf("s") >= 0 || howToSplit.indexOf("S") >= 0) {
            passwordPossiblities[passwordPossiblities.length] = special;
        }

        //randomizing for-loop that creates an array of characters.
        for (var i = 0; i < numChar; i++) {
            var pass1 = passwordPossiblities[Math.floor(Math.random() * passwordPossiblities.length)];
            console.log(pass1);
            password[i] = pass1[Math.floor(Math.random() * pass1.length)];
            console.log(password[i]);
        }

        return password;
    }

    //This allows the program to only run when correct parameters are entered.
    while (validUserInputs) {

        if (numChar >= 8 && numChar <= 128) {
            password.length = numChar;
        }
        else {
            alert("Invalid amount of characters.");
            validUserInputs = false;
            console.log("Program recieved incorrect password length choice")
            break;
        }
        
        var characterTypes = prompt("Enter types of characters involoved- l = lowercase, u = uppercase, n = numeric, or s = special characters. Please seperate by commas. (ex. l,u,s)");
        var howToSplit = characterTypes.split(",");
        console.log(howToSplit);
        if(howToSplit.indexOf("l") < 0 && howToSplit.indexOf("u") < 0 && howToSplit.indexOf("n") < 0 && howToSplit.indexOf("s") < 0){
            validUserInputs = false;
            console.log("Program isn't getting correct format entries")
            break;
        }


        //Function call to create password based on user input.

        password = passwordMaker(howToSplit);
        console.log(password);
        newlyMadePassword = ""
        for (var i = 0; i < password.length; i++) {
            newlyMadePassword += password[i];
        }
        break;
    }
    //Updating document to show password on webpage.
    document.getElementById("Password-text").textContent = newlyMadePassword;
})


