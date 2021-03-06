//to generate timeslots
var timeArr = [
	'5 a.m.',
	'6 a.m.',
	'7 a.m.',
	'8 a.m.',
	'9 a.m.',
	'10 a.m.',
	'11 a.m.',
	'12 p.m.',
	'1 p.m.',
	'2 p.m.',
	'3 p.m.',
	'4 p.m.',
	'5 p.m.',
	'6 p.m.',
	'7 p.m.',
	'8 p.m.',
	'9 p.m.',
	'10 p.m.',
	'11 p.m.',
	'12 a.m.',
	'1 a.m.',
	'2 a.m.',
	'3 a.m.',
	'4 a.m.'
];
var calendarContainer = $('.calendar');

function calendarCreate() {
	for (var i = 0; i < timeArr.length; i++) {
		var timeSlotCreate = $('<div class="timeslot appear">');
		var timeCreate = $('<h3 class="time"></h3>');
		var inputCreate = $('<input class="timeslot-input" placeholder="Add activity..." type="text">');
		timeCreate.text(timeArr[i]);
		// var saveCreate = $('<i class="fas fa-save fa-2x save-icon"></i>');
		calendarContainer.append(timeSlotCreate);
		timeSlotCreate.append(timeCreate);
		timeSlotCreate.append(inputCreate);
		// timeSlotCreate.append(saveCreate);
	}
}

// to change colors of timeslots

var time;
setInterval(function () {
	time = moment().format('h');
	var timeOfDay = moment().format('a');

	if (timeOfDay == 'pm' && time != '12') {
		time = Number(time) + 12;
	}

	for (var i = 0; i < time - 1; i++) {
		calendarTimeslot.eq(i).addClass('past');
	}
	var current = calendarTimeslot.eq(time - 1).addClass('current');
	time = 0;
}, 1000);

calendarCreate();

// save text inside calendar

var calendarTimeslot = $('.timeslot');
var calendarInputArr = $('.timeslot-input');
var saveButtonArr = $('.save-icon');
var calendarTextArr = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

let localStorageArr = JSON.parse(localStorage.getItem('calendarText'));
for (let i = 0; i < localStorageArr.length; i++) {
	calendarTextArr[i] = localStorageArr[i];
}
$.each(calendarInputArr, function (index) {
	calendarInputArr.eq(index).keyup(function (event) {
		let value = event.target.value;
		calendarTextArr[index] = value;
		localStorage.setItem('calendarText', JSON.stringify(calendarTextArr));
	});
});

// to insert last saved text into timeslots

var savedEvents = JSON.parse(localStorage.getItem('calendarText'));

$.each(calendarInputArr, function (index) {
	var text = calendarInputArr.eq(index).val(savedEvents[index]);
});

// appear animation
var screenPosition = window.innerHeight;

function fadeIn() {
	for (var i = 0; i < calendarTimeslot.length; i++) {
		var timeslotPosition = calendarTimeslot[i].getBoundingClientRect().top;

		if (timeslotPosition < screenPosition * 0.95) {
			calendarTimeslot.eq(i).addClass('appear');
		}
	}
}

fadeIn();
window.addEventListener('scroll', fadeIn);

// title animation

var titleSpan = $('span');
for (var i = 0; i < titleSpan.length; i++) {
	titleSpan.eq(i).addClass('appear');
}
