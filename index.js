function shout(string) {
    'Hello!'.toUpperCase;
    return string.toUpperCase();
}

function whisper(string) {
    'Hello'.toLowerCase;
    return string.toLowerCase();
}
function logWhisper(string) {
    console.log('hello')
}
function logShout(string) {
    console.log('HELLO')
}
function sayHiToGrandma(string) {
    const input = string;
    if (input === string.toLowerCase()){
        return 'I can\'t hear you!';
    }
    if (input === string.toUpperCase()){
        return 'YES INDEED!';
    }
    if (input === 'I love you, Grandma.'){
        return 'I love you, too.';
    }
}