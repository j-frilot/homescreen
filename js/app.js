// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
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
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

let images = [
    "url('images/img-1.jpeg')",
    "url('images/img-2.jpeg')",
    "url('images/img-3.jpeg')",
    "url('images/img-4.jpeg')",
    "url('images/img-5.jpeg')"
];

// Set Background and Greeting
function setBgGreet() {
    let name = 'Master Josh';

    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage =
            "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = 'Good Morning, Master Josh';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage =
            "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, Master Josh';
    } else {
        // Evening
        document.body.style.backgroundImage =
            "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Good Evening, Master Josh';
        document.body.style.color = 'white';
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
// focus.addEventListener('keypress', setFocus);
// focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
// getFocus();
