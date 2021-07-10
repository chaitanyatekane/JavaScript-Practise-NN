// logical OR(||), logical AND(&&)

password = 'chaitanyatekne@'; 
if((password.length>=10) && (password.includes('@'))){
    console.log("highly strong");
}else if((password<=8) || (password.includes('@'))){
    console.log('strong');
}else{
    console.log('weak password');
}
// highly strong

newPassword = "tekane44"; 
if((newPassword.length>=10) && (newPassword.includes('@'))){
    console.log("highly strong");
}else if((newPassword.length>=4) || (newPassword.includes('@'))){
    console.log("strong");
}else{
    console.log("weak password");
}
// strong