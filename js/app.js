// DOM Elements
const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	name = document.getElementById('name'),
	focus = document.getElementById('focus');
//Date Objects
let today = new Date(),
	hour = today.getHours();
const day = today.getUTCDate();
const month = today.getUTCMonth();
// Options
const showAmPm = true;

// Show Time
const showTime = () => {
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();

	// Set AM or PM
	const amPm = hour >= 12 ? 'PM' : 'AM';

	// 12hr Format
	hour = hour % 12 || 12;

	// Output Time
	time.innerHTML = `${hour}<span>:</span>${addZero(
		min
	)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

	setTimeout(showTime, 1000);
};

// Add Zeros
function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
const setBgGreet = () => {
	if (day === 16 && month === 2) {
		greeting.textContent = 'Happy Birthday, ';
		document.body.style.backgroundImage = "url('/img/bday.jpg')";
	} else if (hour < 12) {
		// Morning
		document.body.style.backgroundImage = "url('/img/morning.jpg')";
		greeting.textContent = 'Good Morning, ';
	} else if (hour < 18) {
		// Afternoon
		document.body.style.backgroundImage = "url('/img/afternoon.jpg')";
		greeting.textContent = 'Good Afternoon, ';
	} else {
		// Evening
		document.body.style.backgroundImage = "url('/img/night.jpg')";
		greeting.textContent = 'Good Evening, ';
		document.body.style.color = 'white';
	}
};

async function fetchQuote() {
	const response = await fetch('https://type.fit/api/quotes');

	if (!response.ok) {
		const errorMessage = `There is a ${response.status} error.  I will fix it shortly. In the meantime, the offline quote list will be used. -Josh`;
		offlineAPI();
		throw new Error(errorMessage);
	}

	const data = await response.json();
	return data;
}
fetchQuote().then((data) => {
	const quoteElement = document.getElementById('quoteElement');
	const authorElement = document.getElementById('authorElement');

	randomNum = Math.floor(Math.random() * data.length - 1);
	quoteElement.textContent = data[randomNum].text;
	authorElement.textContent = data[randomNum].author;
	console.log(data[randomNum]);
});

const offlineAPI = () => {
	randomNum = Math.floor(Math.random() * quoteList.length - 1);
	quoteElement.textContent = quoteList[randomNum].text;
	authorElement.textContent = quoteList[randomNum].author;
	console.log(quoteList[randomNum]);
};

// Run
showTime();
setBgGreet();
