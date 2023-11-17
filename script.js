const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7');
xhr.setRequestHeader('X-RapidAPI-Key', '580058fb74mshde273a3e4711e2bp18ab7bjsn495cbd91c4f7');
xhr.setRequestHeader('X-RapidAPI-Host', 'livescore6.p.rapidapi.com');

xhr.send(data);