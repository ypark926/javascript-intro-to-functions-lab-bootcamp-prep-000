function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO!";
  var uppercaseAnswer = "YES INDEED!";
  var lowercase = 'hello!';
  var lowercaseAnswer = "I can\'t hear you!";
 
  if (string === "I love you grandma")
  if (string === uppercase) {
    return uppercaseAnswer;
  }
  
  if (string === lowercase) {
    return lowercaseAnswer;
  }
}