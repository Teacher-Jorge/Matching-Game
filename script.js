//Drag and Drop Events

let dragger = ["", "", "", "", "", "", "", "", ""]

function allowDrop(ev) {
    ev.preventDefault()
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev) {
    if (dragger[parseInt(ev.target.id)] == "") {
        var data = ev.dataTransfer.getData("text")
        dragger[parseInt(ev.target.id)] = data
        ev.target.appendChild(document.getElementById(data))
    }


if (dragger[0] != "" && dragger[1] != "" && dragger[2] != "" && dragger[3] != "" && dragger[4] != "" 
&& dragger[5] != "" && dragger[6] != "" && dragger[7] != "" && dragger[8] != "") {

    if (dragger[0] == "1" && dragger[1] == "2" && dragger[2] == "3" && dragger[3] == "4" 
    && dragger[4] == "5" && dragger[5] == "6" && dragger[6] == "7" && dragger[7] == "8" && dragger[8] == "9") {
        let audio = document.getElementById('confirm')
        audio.play()
        let  heading = document.getElementById('heading')
        heading.innerHTML = 'Great!'
    } else {
        let audio = document.getElementById('boing')
        audio.play()
        heading.innerHTML = 'Try again!'
       
    }
  }
}