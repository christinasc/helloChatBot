const botBuilder = require('claudia-bot-builder');
const viberTemplate = botBuilder.viberTemplate;

module.exports = botBuilder(message => {
	if (message.type === 'viber')
	    //	    return new viberTemplate.Url('https://claudiajs.com').get();
    return [
	    'Hello There! Ask me a question.',
	    new viberTemplate.Text(`What\'s your favorite House in Game Of Thrones`)
        .addReplyKeyboard()
          .addKeyboardButton('Stark', 'STARK', 6, 1)
          .addKeyboardButton('Lannister', 'LANNISTER', 6, 1)
          .addKeyboardButton('Targaryen', 'TARGARYEN', 6, 1)
          .addKeyboardButton('None of the above', 'OTHER', 6, 1)
        .get()
    ];
	
});

