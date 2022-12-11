let nums = document.querySelectorAll(".nun");
let section =document.querySelector(".sliderer");
let started = false;
// scrollY up
let span = document.querySelector(".up");
window.onscroll = function (){
    if(window.scrollY >= section.offsetTop - 100){
        if(!started){
          nums.forEach((nun) => startCount(nun));
      }
      started = true;
    }
    // scroll up
    if(this.scrollY >= 300){
        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
};

function startCount(el){
    let goal = el.dataset.goal;
    let count =setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },10/goal/12);
}





span.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
