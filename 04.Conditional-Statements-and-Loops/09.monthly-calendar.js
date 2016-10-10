function calendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);

    let prev = 'class="prev-month"';
    let next = 'class="next-month"';
    let today = 'class="today"';

    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let daysInMonth = [30, 28, 31, 30, 31, 30, 30, 31, 30, 31, 30, 31];

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        daysInMonth[1] = 29;
    }

    let datePrevMonth = new Date(year, month - 1, day);
    let currentDate = new Date(year, month, day);
    datePrevMonth.setDate(0);
    let dayOfWeekPrevMonth = datePrevMonth.getDay();
    let lastDayPrevMonth = datePrevMonth.getDate();
    let lastDayCurrentMonth = currentDate.getDate(currentDate.setDate(0));

    let html = '<table>\n';
    html += '<tr>';
    //html += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';
    for (let days = 0; days < weekDays.length; days++) {

        html += `<th>${weekDays[days]}</th>`;
    }
    html += '</tr>\n';


    // print thr days of the previous month
    let printFirstDateOfPreviousMonth = lastDayPrevMonth;

    if (dayOfWeekPrevMonth != 6) {
        printFirstDateOfPreviousMonth -= dayOfWeekPrevMonth;

        html +='<tr>';
        for (let day = printFirstDateOfPreviousMonth; day <= lastDayPrevMonth; day++) {
            html += `<td ${prev}>${day}</td>`;
        }
    }

    // print the days of the current month
    let dayOfWeekCurrentMonth = dayOfWeekPrevMonth + 1;

    for (let start = 1; start <= lastDayCurrentMonth; start++) {
        if ((dayOfWeekCurrentMonth + start - 1) % 7 == 6) {
            if (start == day) {
                html += `<td ${today}>${start}</td></tr>\n`;
            } else {
                html += `<td>${start}</td></tr>\n`;
            }
        } else if ((dayOfWeekCurrentMonth + start - 1) % 7 == 0) {
            if (start == day) {
                html += `<tr><td ${today}>${start}</td>`;
            } else {
                html += `<tr><td>${start}</td>`;
            }
        } else {
            if (start == day) {
                html += `<td ${today}>${start}</td>`;
            } else {
                html += `<td>${start}</td>`;
            }
        }
        if (start == day) {

        }
    }

    // print the days of the next month
    let dayOfWeekNextMonth = (dayOfWeekCurrentMonth + lastDayCurrentMonth) % 7;
    let lastPrintDay = 7 - dayOfWeekNextMonth;

    if (dayOfWeekNextMonth != 0) {
        for (let lastPrint = 1; lastPrint <= lastPrintDay; lastPrint++) {
            if (lastPrint == lastPrintDay) {
                html += `<td ${next}>${lastPrint}</td></tr>\n`;
            } else {
                html += `<td ${next}>${lastPrint}</td>`;
            }
        }
    }

    html += '</table>';

    console.log(html);
}

calendar(['2', '10', '2016'])
calendar(['2', '5', '2016'])
calendar(['2', '12', '2016'])