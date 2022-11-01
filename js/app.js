try {
    function countDown(number) {
      let timer = setInterval(function () {
        number--;
        if (number <= 0) {
          clearInterval(timer);
          console.log("DONE!");
        } else {
          console.log(number);
        }
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
  try {
    function randomGame() {
      let randomNum;
      let counter = 0;
  
      let timer = setInterval(function () {
        randomNum = Math.random();
        counter++;
        if (randomNum > 0.75) {
          clearInterval(timer);
          console.log("It tried " + counter + " time(s) .");
        }
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }