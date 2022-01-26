"use strict";

const images = document.getElementsByTagName("IMG");
for (let img of images) {
    img.style.transition = "0.7s cubic-bezier(.69,-0.01,.44,1)";
    img.style.filter = "brightness(10%)";
}

const btnsCont1 = document.querySelectorAll(".btn-cont:nth-of-type(1)")[0];
btnsCont1.style.marginTop = "50px"
const header1 = document.querySelectorAll(".h3")[0];
header1.style.marginTop = "23px";
const header2 = document.querySelectorAll(".h3")[1];
header2.style.marginTop = "20px";
const btnsCont2 = document.querySelectorAll(".btn-cont:nth-of-type(2)")[0];
btnsCont2.style.filter = "opacity(0%)";

var mode = "";
document.querySelector("#menu").style.transition = "0.6s cubic-bezier(.69,-0.01,.44,1)";
const btns = document.querySelectorAll(".btn1");
for (let btn of btns) {
    btn.style.transition = "0.2s ease-in-out";
    btn = Object.assign(btn, {"active": false});
    btn.addEventListener("mouseenter", function() {
        btn.style.color = "#E0E2DB";
        btn.style.backgroundColor = "#2E3532";
    });
    btn.addEventListener("mouseleave", function() {
        if (btn.active == false) {
            btn.style.color = "#2E3532";
            btn.style.backgroundColor = "#E0E2DB";
        }
    });
}
btns[0].addEventListener("click", function(e) {
    let menu = document.querySelector("#menu");
    menu.style.paddingRight = "50vw";
    menu.style.paddingLeft = "0";
    menu.style.transform = "translateX(50vw)";
    mode = "vsplayer";
    if (e.target.active == false) {
        playBtn.active = false;
    }
    setActiveBtn(e.target);
    setActiveImg(images[0]);
});
btns[1].addEventListener("click", function(e) {
    let menu = document.querySelector("#menu");
    menu.style.paddingLeft = "50vw";
    menu.style.paddingRight = "0";
    menu.style.transform = "translateX(-50vw)";
    setActiveImg(images[1]);
    setActiveBtn(e.target);
    mode = "vsai";
});
btns[2].addEventListener("click", function() {
    header2.innerHTML = "First Player: X";
})

let playBtn = document.querySelector("#playbtn");
playBtn.style.transition = "left 0.6s cubic-bezier(.69,-0.01,.44,1),\
                            color 0.2s ease-in-out, \
                            background-color 0.2s ease-in-out, \
                            z-index 0.1s 0.3s ease";
playBtn.addEventListener("mouseenter", function(e) {
    e.target.style.color = "#E0E2DB";
    e.target.style.backgroundColor = "#8B2635";
})
playBtn.addEventListener("mouseleave", function(e) {
    e.target.style.color = "#8B2635";
    e.target.style.backgroundColor = "#E0E2DB";
})
playBtn.addEventListener("click", function() {
    if (playBtn.innerHTML == "Play") {
        if (mode == "vsplayer") {
            movePlay("right");
            header1.innerHTML = "Vs. Player";
            header2.innerHTML = "First Player?";
            header2.style.filter = "opacity(100%)";
            header2.style.marginTop = "100px";
            btnsCont2.style.filter = "opacity(100%)";
        } else {
            movePlay("left");
            header1.innerHTML = "Vs. AI";
        }
        header1.style.filter = "opacity(100%)";
        btnsCont1.style.filter = "opacity(0%)";
        btnsCont1.style.marginTop = "20px";
        playBtn.style.zIndex = "2";
        playBtn.style.border = "3px solid #8B2635";
        playBtn.innerHTML = "Back";
    } else {
        if (mode == "vsplayer") {
            movePlay("left");
            header2.style.filter = "opacity(0%)";
            btnsCont2.style.filter = "opacity(0%)";
        } else {
            movePlay("right");
        }
        header1.style.filter = "opacity(0%)";
        btnsCont1.style.filter = "opacity(100%)";
        btnsCont2.style.filter = "opacity(0%)";
        playBtn.style.zIndex = "0";
        playBtn.style.border = "3px solid transparent";
        playBtn.innerHTML = "Play";
    }
})

function setActiveBtn(active) {
    for (let btn of btns) {
        if (btn == active) {
            btn.active = true;
            btn.style.backgroundColor = "#2E3532";
            btn.style.color = "#E0E2DB";
        } else {
            btn.active = false;
            btn.style.backgroundColor = "#E0E2DB";
            btn.style.color = "#2E3532";
        }
    }
}

function setActiveImg(active) {
    for (let img of images) {
        if (img == active) {
            img.style.filter = "brightness(100%)";
        } else {
            img.style.filter = "brightness(10%)";
        }
        switch (active) {
            case images[0]:
                movePlay("left");
                break;
            case images[1]:
                movePlay("right");
                break;
        }
    }
}

function movePlay(direction) {
    if (direction == "left") {
        playBtn.style.left = "calc(25vw - (120px / 2)";
    } else {
        playBtn.style.left = "calc(75vw - (120px / 2)";
    }
}