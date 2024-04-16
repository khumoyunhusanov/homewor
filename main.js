const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const plus = document.querySelector(".plus");
const second = document.querySelector(".second");
const minus = document.querySelector(".minus");
const start = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const clear = document.querySelector(".clear");

let interval;

window.addEventListener("click", (event) => {

  clear.classList.contains;
  if (event.target.classList.contains("plus")) {
    let item = event.target.closest(".item");

    let counter = item.querySelector(".count");
    counter.innerHTML++;

    if (parseInt(counter.innerHTML) <= 9) {
      counter.innerHTML = `0${counter.innerHTML++}`;
    }
  }

  if (event.target.classList.contains("minus")) {
    let item = event.target.closest(".item");

    let counter = item.querySelector(".count");
    if (parseInt(counter.innerHTML) <= 0) {
      counter.innerHTML = "00";
    } else {
      counter.innerHTML--;
    }

    if (parseInt(counter.innerHTML) <= 9) {
      counter.innerHTML = `0${counter.innerHTML--}`;
    }
  }

  if (event.target.classList.contains("start")) {
    start.disabled = true
    stopBtn.disabled = false
    interval = setInterval(() => {
      if (parseInt(second.innerHTML) > 0) {
        second.innerHTML--;
      } else if (parseInt(minute.innerHTML) > 0) {
        minute.innerHTML--;
        second.innerHTML = "59";
      } else if (parseInt(hour.innerHTML) > 0) {
        hour.innerHTML--;
        minute.innerHTML = "59";
        second.innerHTML = "59";
        console.log("saloms");
      }

      if (
        parseInt(hour.innerHTML) == 0 &&
        parseInt(minute.innerHTML) == 0 &&
        parseInt(second.innerHTML) == 0
      ) {
        clearInterval(interval);
        console.log("ok");
      }
    }, 1000);
  }
  
  stopBtn.onclick = () => {
    clearInterval(interval)
    start.disabled = false
    stopBtn.disabled = true
  }
  
  clear.onclick = () => {

    hour.innerHTML = "00"
    minute.innerHTML = "00"
    second.innerHTML = "00"
  }
});


