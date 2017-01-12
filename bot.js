'use strict';

const botBuilder = require('claudia-bot-builder');
const excuse = require('huh');
const viberTemplate = botBuilder.viberTemplate;

module.exports = botBuilder(request => {
    
	if (request.text === 'quote') {
	    return [  `Hello, GitBot here. Thank you for sending us the following message: ${request.text}. Your message is very important to us. The problem was caused by ${excuse.get()}`];
	} else if (request.text === 'game') { 
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
	} else if (['Stark', 'Lannister','Targaryen'].contains(request.text)) { 
	    return ' OMG!?!? YOU\'RE ONE OF THEM?!?!'

	} else {
	    return `Hello, GitBot Here! Sorry, I have no idea what you are banging on about. Try typing 'game' or 'quote' for a funny response. `;
	}
    });