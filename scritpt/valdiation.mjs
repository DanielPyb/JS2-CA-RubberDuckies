function validateUsername(string) {
    const pattern = /*HERE THE REGEX FOR FOR THIS WILL GO*/ "hello";
    const patternMatch = pattern.test(string.trim());
    return patternMatch;
}

function validateEmail(string){
    const pattern = /^[w]+$(stud.)?noroff.no$/;
    const patternMatch = pattern.test(string.trim);
    return patternMatch; 
}

function validatePassword(string) {
    if(string.trim().length >= 8 && registerPassword.value === reigsterPasswordConfirm.value){
        return true;
    } else{
        return false;
    }
}