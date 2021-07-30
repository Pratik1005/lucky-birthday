const note = document.querySelector('.alert')
const cross = document.querySelector('.fa-times');
const birthdate = document.querySelector("#date");
const myNumber = document.querySelector("#number");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

button.addEventListener('click', function() {
	while (output.firstChild) {
		output.removeChild(output.firstChild);
	}
	let birthday = birthdate.value;
	const luckyNumber = parseInt(myNumber.value, 10);
	if (birthday && (luckyNumber > 0)){
		const birthdateArray = birthday.split('-');
		birthday = birthdateArray.join('');
		const sumOfBirthday = birthday.split('');
		let sum = 0;
		for (let i = 0; i < sumOfBirthday.length; i++) {
			sum += parseInt(sumOfBirthday[i], 10);
		}
		if (sum % luckyNumber === 0){
			const resultImg = new Image(200, 150);
			resultImg.src = 'lucky.gif';
			output.appendChild(resultImg);
		} else {
			const resultImg = new Image(200, 150);
			resultImg.src = 'unlucky.gif';
			output.appendChild(resultImg);
		}
	}else {
		output.innerHTML = "<h2>Enter a valid birthday and lucky number</h2>";
	}	
});

cross.addEventListener('click', function(){
	while (note.firstChild) {
		note.removeChild(note.firstChild);
	}
})