const countDowndate = new Date("Feb 26, 2024 18:51:50").getTime();
console.log(countDowndate);

let x = setInterval(() => {
  const today = new Date().getTime();
  console.log(today);
  let distance = countDowndate - today;
  console.log(distance);
  if (distance > 0) {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  } else {
    clearInterval(x);
  }
}, 1000);
