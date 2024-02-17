
var a = console.log
var turn = "X"
var audio = new Audio("ting.mp3")
function Turn(){
    return turn=='O'?'X':'O'
}
//variables
var turn = Turn()
var Xturn = document.querySelector('.x')
var Oturn = document.querySelector('.o')

var table = document.querySelector('table')
var td = document.querySelectorAll('.td')
var turnContainer = document.querySelector('.turns')
//checkwin function
function win(){
    if((td[0].innerText == td[1].innerText && td[0].innerText == td[2].innerText && td[0].innerText != "") || (td[3].innerText == td[4].innerText && td[3].innerText == td[5].innerText && td[3].innerText != "") || (td[6].innerText == td[7].innerText && td[6].innerText == td[8].innerText && td[6].innerText != "") || (td[0].innerText == td[3].innerText && td[0].innerText == td[6].innerText && td[0].innerText != "") || (td[1].innerText == td[4].innerText && td[1].innerText == td[7].innerText && td[1].innerText != "") || (td[2].innerText == td[5].innerText && td[2].innerText == td[8].innerText && td[2].innerText != "") || (td[0].innerText == td[4].innerText && td[8].innerText == td[4].innerText && td[0].innerText != "") || (td[2].innerText == td[4].innerText && td[2].innerText == td[6].innerText && td[2].innerText != "")){  
        setTimeout(()=>{
            turnContainer.style.display= "none"
            table.innerHTML = `<div style="color:green">${turn} won the Match</div>`
        }, 800)
        Array.from(td).forEach((e)=>{
            e.style.pointerEvents = "none"
        })
        Xturn.style.animation = ""
        Oturn.style.animation = ""
    }
    else if(td[0].innerText != "" && td[1].innerText != "" && td[2].innerText != "" && td[3].innerText != "" && td[4].innerText != "" && td[5].innerText != "" && td[6].innerText != "" && td[7].innerText != "" && td[8].innerText != ""){
        setTimeout(()=>{
            turnContainer.style.display= "none"
            table.innerHTML = `<div style="color:green">This match has been drawn</div>`
        }, 800)
        Xturn.style.animation = ""
        Oturn.style.animation = ""
    }
}
Array.from(td).forEach((e)=>{
    e.onclick = ()=>{
        e.style.pointerEvents = 'none'
        turn = Turn()
        e.innerText = turn
        colorIt()
        win()
        audio.play()
    }
})
var reset = document.querySelector('.reset')
reset.onclick = ()=>{
    document.location.reload()
}

function colorIt(){
    if(turn == "O"){
        Xturn.style.animation = "color 1s linear infinite"
        Oturn.style.animation = ""
    }
    else if(turn == "X"){
        Oturn.style.animation = "color 1s linear infinite"
        Xturn.style.animation = ""
    }
}
colorIt()

