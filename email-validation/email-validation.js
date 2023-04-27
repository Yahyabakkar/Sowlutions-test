const IsValidEmail = (email) => {
    //Check minimum valid length of an Email.
    if (email.length <= 2 || email.length > 256) {
        return console.log(false);
    }
    //Check if email has @ character.
    if (email.indexOf("@") == -1) {
        return console.log(false);
    }

    var splitEmail = email.split("@");
    var dot = splitEmail[1].indexOf(".");
    var len = splitEmail[1].length;
    var splitDots = splitEmail[1].split(".");
    var countDots = splitDots.length - 1;


    //check if dot is available and after the @ character
    if (dot == -1 || dot < 2 || countDots > 2) {
        return console.log(false);
    }

    //Check if Dot is not the last character and dots are not repeated.
    for (var i = 0; i < splitDots.length; i++) {
        if (splitDots[i].length == 0) {
            return console.log(false);
        }
    }

    return console.log(true);
};

IsValidEmail("yahyabakkar022@gmail.com")
