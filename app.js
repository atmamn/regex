// bottom scroll
document.querySelector('#scroll-btn').addEventListener('click', () => {
	const height = document.body.scrollHeight;
    window.scroll(0 , height);
})

// match1
document.querySelector('#match1').addEventListener('click', () => {
	let inputMatch1 = document.querySelector('#input-match1').value;
	let regex = /Match1/;
	!regex.test(inputMatch1)
	? alert('The input does not match Match1')
	: alert('Correct! The input matches Match1');
});

// match2
document.querySelector('#match2').addEventListener('click', () => {
	let inputMatch2 = document.querySelector('#input-match2').value;
	let regex = /Match2/i;
	!regex.test(inputMatch2)
	? alert('The input does not match Match2 or match2') 
	: alert('Correct! The input matches Match2 or match2');
});

// match3
document.querySelector('#match3').addEventListener('click', () => {
	let inputMatch3 = document.querySelector('#input-match3').value;
	let regex = /.coding/i;
	!regex.test(inputMatch3)
	? alert('The input does not match. Reference the E.g') 
	: alert('Correct! The input matches');
});

// match4
document.querySelector('#match4').addEventListener('click', () => {
	let inputMatch4 = document.querySelector('#input-match4').value;
	let regex = /y[omjw]g/;
	!regex.test(inputMatch4)
	? alert('The input does not match.') 
	: alert('Correct! The input matches');
});

// match5
	// not done using regex
document.querySelector('#match5').addEventListener('click', () => {
	let inputMatch5 = document.querySelector('#input-match5').value;
	let regex = "yog";
	let regex1 = "ymg";
	let regex2 = "yjg";
	let regex3 = "ywg";
	inputMatch5 != regex && inputMatch5 != regex1 && inputMatch5 != regex2 && inputMatch5 != regex3
	? alert('The input does not match.') 
	: alert('Correct! The input matches');
})

// match6
document.querySelector('#match6').addEventListener('click', () => {
	let inputMatch6 = document.querySelector('#input-match6').value;
	let regex = /[b-d2-4]/;
	!regex.test(inputMatch6)
	? alert('The input does not match.') 
	: alert('Correct! The input matches');
});

// match7
document.querySelector('#match7').addEventListener('click', () => {
	let inputMatch7 = document.querySelector('#input-match7').value;
	let regex = /[b-d]/;
	let regex1 = /[2-4]/;
	regex.test(inputMatch7) && regex1.test(inputMatch7)
	? alert('The input does not match.') 
	: regex.test(inputMatch7) || regex1.test(inputMatch7)? alert('Correct! The input matches.') 
	: alert('The input does not match');
});

// match8
document.querySelector('#match8').addEventListener('click', () => {
	let inputMatch8 = document.querySelector('#input-match8').value;
	let regex = /[^xyz7]/;
	!regex.test(inputMatch8)
	? alert('The input does not match.') 
	: alert('Correct! The input matches');
});

// match9
document.querySelector('#match9').addEventListener('click', () => {
	let inputMatch9 = document.querySelector('#input-match9').value;
	let regex = /[^x]/;
	let regex1 = /[^y]/;
	let regex2 = /[^z]/;
	let regex3 = /[^7]/;
	regex.test(inputMatch9) && regex1.test(inputMatch9) && regex2.test(inputMatch9) && regex3.test(inputMatch9)
	? alert ('Correct! The input matches') 
	: alert ('Incorrect. Input should not contain x y z 7');
});

// match10
document.querySelector('#match10').addEventListener('click', () => {
	let inputMatch10 = document.querySelector('#input-match10').value;
	let regex = /2340?11/;
	!regex.test(inputMatch10)
	? alert('The input does not match.') 
	: alert('Correct! The input matches.');
});

// match11
document.querySelector('#match11').addEventListener('click', () => {
	let inputMatch11 = document.querySelector('#input-match11').value;
	let regex = /G[A-Z]*M/;
	!regex.test(inputMatch11)
	? alert('The input does not match.') 
	: alert('Correct! The input matches.');
});

// match12
	// not regex
document.querySelector('#match12').addEventListener('click', () => {
	let inputMatch12 = document.querySelector('#input-match12').value;
	let regex = /hi/;
	let regex1 = /hii/;
	let regex2 = /hiii/;
	regex1.test(inputMatch12) ? alert('The input does not match the shortest "hi.') 
	: regex2.test(inputMatch12) ? alert('The input does not match the shortest "hi.') 
	: regex.test(inputMatch12)? alert('Correct! The input matches the shortest "hi".') 
	: alert('The input does not match.');
});

// match 13
document.querySelector('#match13').addEventListener('click', () => {
	let inputMatch13 = document.querySelector('#input-match13').value;
	let regex = /^First/;
	!regex.test(inputMatch13) ? alert('The input does not match First') : alert('Correct! The input matches First');
});

// match 14
document.querySelector('#match14').addEventListener('click', () => {
	let inputMatch14 = document.querySelector('#input-match14').value;
	let regex = /Last$/;
	!regex.test(inputMatch14) ? alert('The input does not match Last') : alert('Correct! The input matches Last');
});

// match 15
document.querySelector('#match15').addEventListener('click', () => {
	let inputMatch15 = document.querySelector('#input-match15').value;
	let regex = /\d/g;
	!regex.test(inputMatch15) ? alert('The input does not contain at least one digit') : alert('Correct! The input contains at least one digit');
});

// match 16
document.querySelector('#match16').addEventListener('click', () => {
	let inputMatch16 = document.querySelector('#input-match16').value;
	let regex = /\w/g;
	!regex.test(inputMatch16) ? alert('The input does not contain a lower, uppercase letter or a digit') : alert('Correct! The input contains a lower, uppercase letter or a digit');
});

// match 17
document.querySelector('#match17').addEventListener('click', () => {
	let inputMatch17 = document.querySelector('#input-match17').value;
	let regex = /\D/g;
	!regex.test(inputMatch17) ? alert('Wrong! The input does not contains a digit') : alert('Correct! The input contains a digit');
});

// match 18
document.querySelector('#match18').addEventListener('click', () => {
	let inputMatch18 = document.querySelector('#input-match18').value;
	let regex = /(?=\w{4,})(?=\w*\d{3,})/;
	!regex.test(inputMatch18) ? alert('Wrong! The input is does not have equal or greater than four chracters or does not contain 3 consecutive digits') : alert('Correct! The input contains 3 consecutive digits and is equal or greater than 4 characters');
});

// match 19
document.querySelector('#match19').addEventListener('click', () => {
	let inputMatch19 = document.querySelector('#input-match19').value;
	let regex = /^(19) \1 \1$/;
	!regex.test(inputMatch19) ? alert('Wrong! The input is not 19 19 19') : alert('Correct! The input is 19 19 19');
});






// top scroll
document.querySelector('#scroll-up-btn').addEventListener('click', () => {
	const height = document.body.scrollHeight;
    window.scroll(height , 0);
})