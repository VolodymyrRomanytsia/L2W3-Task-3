function startAfterTenSecond() {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			Math.random() > .5 ? resolve('You lost 10 seconds again!') : reject('Try again!')
		},10000);
	})
}

startAfterTenSecond()
	.then(data => console.log(data))
	.catch(error => console.error(error));

