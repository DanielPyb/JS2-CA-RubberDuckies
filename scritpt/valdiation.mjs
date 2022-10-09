export function validateUsername(string) {
    const pattern = /^[\w]+$/;
    const patternMatch = pattern.test(string.trim());
    return patternMatch;
}

export function validateEmail(string){
    const pattern = /[\w\-\.]+@(stud\.?noroff\.no)/;
    const patternMatch = pattern.test(string.trim);
    return patternMatch; 
}

export function validatePassword(value1, value2 ) {
    if(string.trim().length >= 8 && value1.value === value2.value){
        return true;
    } else{
        return false;
    }
}