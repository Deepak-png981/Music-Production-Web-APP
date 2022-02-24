window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    
    this.setTimeout( function() {key.classList.remove('playing');}, 0700)
    
})

window.addEventListener("click", function(e){
    const audio = document.querySelector("#sound" + (e.target.id));
    const key = document.querySelector(`#${e.target.id}`)

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    
    this.setTimeout( function() {key.classList.remove('playing');}, 0700)
})






