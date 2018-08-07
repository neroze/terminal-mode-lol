import App from './base'
import('./terminal')
.then((Terminal) => {
	Terminal = Terminal.default;

	console.log('Terminal --> ', Terminal);
	var myTerminal = new Terminal()
	// var myTerminal2 = new Terminal()
	const terminalDOM = document.getElementById('xterm-container')
	console.log('terminalDOM --> ', terminalDOM);
	terminalDOM.appendChild(myTerminal.html)

	const ask = (question) => {
		return new Promise((resolve, reject) => {
			myTerminal.input(question, function (userInput) {
				resolve(userInput)
			})
		})
	}
	const qustions = [
		'- commands: ',
		'$ email',
		'$ fullname',
		'$ exprience',
		'$ current position',
	]

	ask('What is your name')
	.then((ans) => {
		myTerminal.print("Welcome, " + ans + "!")
		qustions.forEach((item) => {
			myTerminal.print(item)
		})
	})

})
