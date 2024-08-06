document.addEventListener("DOMContentLoaded", function () {
  function daysUntilChristmas() {
    const today = new Date();
    //console.log(today);
    const currentYear = today.getFullYear();
    const christmasDate = new Date(currentYear,11, 25);
    //console.log(christmasDate);
    if(today > christmasDate){
      christmasDate.setFullYear(currentYear+1);
      //console.log(christmasDate);
    }
    const oneDay = 24 * 60 * 60 * 1000;
    const daysLeft = Math.ceil((christmasDate-today)/oneDay);
  //console.log(daysLeft);
    return daysLeft;
  }
  const daysLeftElement = document.getElementById('days-left');
  const daysLeft = daysUntilChristmas();
  //console.log(daysLeftElement);
  daysLeftElement.innerHTML= `${daysLeft} days left until Christmas!`;
});
