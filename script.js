let naat=document.getElementById("naat")
let progress=document.getElementById("progress")
let ctrlIcon=document.getElementById("controls")

naat.onloadedmetadata=function(){
    progress.max=progress.duration;
    progress.value=naat.currentTime;
}
let interval;

ctrlIcon.addEventListener("click", () => {
  if (naat.paused) {
    naat.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");

    interval = setInterval(() => {
      progress.value = naat.currentTime;
    }, 10000);
  } else {
    naat.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    clearInterval(interval);
  }
});

progress.addEventListener("change",()=>{
    naat.play();
    naat.currentTime=progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");

})