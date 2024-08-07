const today = new Date();
//console.log(today);
const Christmas = new Date(today.getFullYear(), 11, 25);
//console.log(Christmas);
if (today.getMonth() == 11 && today.getDate() > 25) {
  Christmas.setFullYear(Christmas.getFullYear()+1);
}
 
const oneDay =1000*60*60*24;
const daydiff =Math.ceil((Christmas.getTime()-today.getTime())/(oneDay))

const daysleft = document.getElementById('days-left')
daysleft.innerHTML =  `${daydiff} days left until Christmas!`;

