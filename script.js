
function addtrendingsongs(src , songname, singername ){

let trendingsongs = document.querySelector(".trendingsongs");
console.log(trendingsongs);
let newHTML = `
  <div class="card2">
    <div class="img_fit1">
      <img src="${src}" alt="song">
    </div>
    <h3>${songname}</h3>
    <p>${singername}</p>
    <img class="playbtn" src="play1.svg" alt="hgsr">
  </div>`;
// console.log(trendingsongs.innerHTML);
trendingsongs.innerHTML = newHTML + trendingsongs.innerHTML;

}
console.log("fn chal gaya")



