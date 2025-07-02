let userName = ''

userName = true ? `Hello, ${userName}, what is your question?` : 'Hello, Stranger, what is your question?'
console.log(userName)

userQuestion = `My question is: `
console.log(userQuestion)

randomNumber = Math.floor(Math.random() * 8)
eightBall = ''

switch (randomNumber){
  case (0):
    console.log('It is certain');
    break;
  case (1):
    console.log('It is decidedly so');
    break;
  case (2):
    console.log('Reply hazy, try again');
    break;
  case (3):
    console.log('Cannot predict now');
    break;
  case (4):
    console.log('Do not count on it');
    break;
  case (5):
    console.log('My sources say no');
    break;
  case (6):
    console.log('Outlook not so good');
    break;
  case (7):
    console.log('Signs point to yes')
    break;
  default:
    console.log('Try again')}
