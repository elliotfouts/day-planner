//to generate timeslots
var timeArr = [
    "1 a.m.",
    "2 a.m.",
    "3 a.m.",
    "4 a.m.",
    "5 a.m.",
    "6 a.m.",
    "7 a.m.",
    "8 a.m.",
    "9 a.m.",
    "10 a.m.",
    "11 a.m.",
    "12 a.m.",
    "1 p.m.",
    "2 p.m.",
    "3 p.m.",
    "4 p.m.",
    "5 p.m.",
    "6 p.m.",
    "7 p.m.",
    "8 p.m.",
    "9 p.m.",
    "10 p.m.",
    "11 p.m.",
    "12 p.m.",
];
var calendarContainer = $(".calendar");
console.log(calendarContainer);

function calendarCreate () {
    
    for (var i = 0; i < timeArr.length; i++) {
        var timeSlotCreate = $('<div class="timeslot">')
        var timeCreate = $('<h3 class="time"></h3>')
        var inputCreate = $('<input class="timeslot-input" placeholder="Add activity..." type="text">')
        timeCreate.text(timeArr[i]);
        var saveCreate = $('<i class="fas fa-save fa-2x save-icon"></i>');
        calendarContainer.append(timeSlotCreate);
        timeSlotCreate.append(timeCreate);
        timeSlotCreate.append(inputCreate);
    }
}

calendarCreate();