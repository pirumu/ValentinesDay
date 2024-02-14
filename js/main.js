let isOpen = false;
function onClickOpen() {
    if(!isOpen) {
        document.querySelector(".front_card").className = "front_card front_card_open"
        setTimeout(() => {
            document.querySelector(".front_img").className = "front_img display_none"
            document.querySelector(".front_text").className = "front_img display_none"
            document.querySelector(".front_heart_icon").className = "front_heart_icon display_none"
        }, 1500)

        setTimeout(() => {
            playAudio()
        },5000)
        isOpen = true
    } else {
        document.querySelector(".front_card").className = "front_card front_card_close"
        setTimeout(()=> {
            document.querySelector(".front_img").className = "front_img"
            document.querySelector(".front_text").className = "front_text"
            document.querySelector(".front_heart_icon").className = "front_heart_icon"

        },1400)
        setTimeout(() => {
            document.querySelector(".front_card").className = "front_card"
        },2330)
        isOpen = false
    }

}

function playAudio() {
    // document.getElementById("audio-play").play()
}

