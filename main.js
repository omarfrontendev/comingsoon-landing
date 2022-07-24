const weekDay = [
    'Sunday',
    'Saturday',
    "Friday",
    'Thursday',
    'Wednesday',
    'Tuesday',
    'Monday'
];
const namesMonth = [
    'January',
    'February ',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const giveAway = document.querySelector('.giveaway');
const time = new Date(2022, 7, 24, 11, 30, 0);
const year = time.getFullYear();
const dateDay = time.getDate();
const day = weekDay[time.getDay()];
const month = namesMonth[time.getMonth()];
const hours = time.getHours();
const mins = time.getMinutes();
const secs = time.getSeconds();
let zoon;
function amOrPm() {
    if (hours < 12) {
        zoon = 'am';
    } else {
        zoon = 'pm';
    }
    return zoon;
}
amOrPm();
giveAway.innerHTML = `Giveaway Ends On ${day}, ${dateDay} ${month} ${year} ${hours}:${mins} ${zoon}`;

const items = document.querySelectorAll('.num');
console.log(items);



function countdown() {
    const counter = document.querySelector('.counter')
    const futureTime = time.getTime();
    const today = new Date().getTime();
    const t = futureTime - today;
    // const t = -1;
    const onDay = 24 * 60 * 60 * 1000;
    const onHour = 60 * 60 * 1000;
    const onMinute = 60 * 1000;
    const daysLeft = Math.floor(t / onDay);
    const hoursLeft = Math.floor(t % onDay / onHour);
    const minsLeft = Math.floor(t % onHour / onMinute);
    const secsLeft = Math.floor(t % onMinute / 1000);

    // function format(item) {
    //     if (item < 10) {
    //         return item = '0' + item;
    //     } else {
    //         return item;
    //     }
    // }

    const value = [daysLeft, hoursLeft, minsLeft, secsLeft];
    items.forEach((item, index) => {
        item.innerHTML = value[index];

        if (item.innerHTML < 10) {
            item.innerHTML = '0' + parseInt(item.innerHTML);
        } else {
            item.innerHTML = parseInt(item.innerHTML);
        }
    });
    if (t < 0) {
        counter.innerHTML = `<h4 class:"expired">Sorry, This giveaway Has Expired</h4>`
        clearInterval(countSet);
    }
}

let countSet = setInterval(countdown, 1000);
