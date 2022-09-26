var translateValueNum = [Math.floor((new Date()).getDate() / 10), (new Date()).getDate() % 10, (new Date).getMonth()];
var weekNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

//setting curent day
$(document).ready(() => {
    for (let i = 0; i < 3; i++) {
        let thisItemId = i + 1;
        transtator(thisItemId, translateValueNum)
    };
});

//adding to day digit
$(".arrow-up").click((event) => {
    let thisItemId = (event.target.id).slice(-1);
    if (translateValueNum[thisItemId - 1] < ($("#add-num" + thisItemId + "+div p").length) - 1) {
        translateValueNum[thisItemId - 1] += 1;
    };
    transtator(thisItemId, translateValueNum);
});

//redusing day digit
$(".arrow-down").click((event) => {
    let thisItemId = (event.target.id).slice(-1);
    if (translateValueNum[thisItemId - 1] > 0) {
        translateValueNum[thisItemId - 1] -= 1;
    };
    transtator(thisItemId, translateValueNum);
});


$(".submit").click(() => {
    let dayCount = parseInt(translateValueNum[0].toString() + translateValueNum[1].toString())

    let newDate = new Date("2022-" + (translateValueNum[2] + 1) + "-" + dayCount)

    // alert(getWeekNum(dayCount, translateValueNum[2], 2022))

    if (getWeekNum(dayCount, translateValueNum[2], 2022)%2 == 1) {
        alert("Первая неделя. " + weekNames[newDate.getDay()-1] + ".")
    }
})

function transtator(thisItemId, translateValueNum) {
    $("#add-num" + thisItemId + " + div p").css("transform", "translateY(" + -translateValueNum[thisItemId - 1] * 70 + "px)");
};

function getWeekNum(day, month, year) {
    month++;
    let a = Math.floor((14 - month) / 12);
    let y = year + 4800 - a;
    let m = month + 12 * a - 3;
    let J = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) -
        Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
    let L = Math.floor(d4 / 1460);
    let d1 = ((d4 - L) % 365) + L;
    let week = Math.floor(d1 / 7) + 1;
    if (week < 10) week = '0' + week;
    return week;
}