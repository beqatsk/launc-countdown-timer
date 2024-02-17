const countDowndate = new Date("Oct 12, 2024 11:36:50").getTime();
const success = document.querySelector(".success");

const timer = document.querySelector(".timer");

let x = setInterval(() => {
  const today = new Date().getTime();
  let distance = countDowndate - today;
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
    timer.style.display = "none";
    const image = document.createElement("img");
    image.src = "./images/success image.png";
    image.style.width = "70px";
    image.style.height = "70px";
    success.appendChild(image);
    const para = document.createElement("h3");
    para.textContent = "The timer has completed";
    para.style.color = "#23af87";
    para.style.fontFamily = "italic";
    para.style.fontSize = "40px";
    success.appendChild(para);
  }
}, 1000);
