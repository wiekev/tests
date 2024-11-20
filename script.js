let pieternieuwland = document.querySelector("main section:first-of-type article:first-of-type")
let textPieternieuwland = document.querySelector("main section:first-of-type article:nth-of-type(2)")
let japanner = document.querySelector("main section:first-of-type article:nth-of-type(3)")
let textJapanner = document.querySelector("main section:first-of-type article:nth-of-type(4)")
let hva = document.querySelector("main section:first-of-type article:nth-of-type(5)")
let texthva = document.querySelector("main section:first-of-type article:nth-of-type(6)")
let cmd = document.querySelector("main section:first-of-type article:nth-of-type(7)")
let textcmd = document.querySelector("main section:first-of-type article:nth-of-type(8)")


function textPNCZichbaar() {
    textPieternieuwland.style.display = "block";
}

function textPNCOntzichbaar() {
    textPieternieuwland.style.display = "none";
}

pieternieuwland.onmouseover = textPNCZichbaar;
pieternieuwland.onmouseout = textPNCOntzichbaar;



function textJAPZichtbaar() {
    textJapanner.style.display = "block";
}

function textJAPOntzichtbaar() {
    textJapanner.style.display = "none";
}

japanner.onmouseover = textJAPZichtbaar;
japanner.onmouseout = textJAPOntzichtbaar;



function textHVAZichtbaar() {
    texthva.style.display = "block";
}

function textHVAOntzichtbaar() {
    texthva.style.display = "none";
}

hva.onmouseover = textHVAZichtbaar;
hva.onmouseout = textHVAOntzichtbaar;



function textCMDZichtbaar() {
    textcmd.style.display = "block";
}

function textCMDOntzichtbaar() {
    textcmd.style.display = "none";
}

cmd.onmouseover = textCMDZichtbaar;
cmd.onmouseout = textCMDOntzichtbaar;




