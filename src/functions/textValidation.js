

export function isMessageCorrect(message){

if(message.length<=200&&message.length>0&&!message.includes(';')){
    return [true,'poruka odgovara formatu']
}else if(message.length>200){
    return [false, 'poruka ima preko 200 karaktera ']
}else if(message.length<=0){
    return [false, 'ne mozete poslati praznu poruku']
}else if(message.includes(';')){
    return [false, 'zabranjeno je koristiti neki od karatera iz vase poruke']
}

}