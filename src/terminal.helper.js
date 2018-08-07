import App from './base'

App.T = (terminal, config ={}) => {
	return new Terminal(config);
}