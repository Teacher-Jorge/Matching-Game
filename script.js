let btnBaby = document.getElementById('btnBaby')
let btnBabyWord = document.getElementById('btnBabyWord')
let btnKids = document.getElementById('btnKids')
let btnKidsWord = document.getElementById('btnKidsWord')
let btnTeenagers = document.getElementById('btnTeenagers')
let btnTeenagersWord = document.getElementById('btnTeenagersWord')
let btnYouth = document.getElementById('btnYouth')
let btnYouthWord = document.getElementById('btnYouthWord')
let btnAdults = document.getElementById('btnAdults')
let btnAdultsWord = document.getElementById('btnAdultsWord')
let btnElderly = document.getElementById('btnElderly')
let btnElderlyWord = document.getElementById('btnElderlyWord')
let btnMan = document.getElementById('btnMan')
let btnManWord = document.getElementById('btnManWord')
let btnWoman = document.getElementById('btnWoman')
let btnWomanWord = document.getElementById('btnWomanWord')
let btnCouple = document.getElementById('btnCouple')
let btnCoupleWord = document.getElementById('btnCoupleWord')
let score = document.getElementById('score')
let value = 0



let btnBabyValue = 0
let btnBabyWordValue = 0

    //Baby
btnBaby.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
   
    btnBabyValue++
   let imgBaby = document.getElementById('imgBaby')
   imgBaby.style.border = '5px solid red'
   btnBaby.style.pointerEvents = 'none'

   if (btnBabyValue + btnBabyWordValue === 2) {
    let audioConfirm = document.getElementById('confirm')
    audioConfirm.play()
    imgBaby.style.border = '5px solid lime'
    btnBabyWord.style.backgroundColor = 'lime'
    value++
    document.getElementById('score').innerHTML = value
    btnBaby.style.pointerEvents = 'none'
    btnBabyWord.style.pointerEvents = 'none'
   }
 
   })

btnBabyWord.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnBabyWordValue++
    btnBabyWord.style.backgroundColor = 'red'
    btnBabyWord.style.pointerEvents = 'none'
    if (btnBabyValue === 1 && btnBabyWordValue === 1) {
        let audioConfirm = document.getElementById('confirm')
        audioConfirm.play()
        imgBaby.style.border = '5px solid lime'
        btnBabyWord.style.backgroundColor = 'lime'
        value++
        document.getElementById('score').innerHTML = value
        btnBaby.style.pointerEvents = 'none'
        btnBabyWord.style.pointerEvents = 'none'
       }
})

        //Kids

let btnKidsValue = 0
let btnKidsWordValue = 0

btnKids.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    btnKidsValue++
    imgKids.style.border = '5px solid red'
    btnKids.style.pointerEvents = 'none'
  
   if (btnKidsValue +btnKidsWordValue === 2) {
    let audioConfirm = document.getElementById('confirm')
    audioConfirm.play()
    let imgKids = document.getElementById('imgKids')
    imgKids.style.border = '5px solid darkorange'
    btnKidsWord.style.backgroundColor = 'darkorange'
    value++
    document.getElementById('score').innerHTML = value
    btnKids.style.pointerEvents = 'none'
    btnKidsWord.style.pointerEvents = 'none'
   }

})

btnKidsWord.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnKidsWordValue++
    btnKidsWord.style.pointerEvents = 'none'
    btnKidsWord.style.backgroundColor = 'red'
    if (btnKidsValue === 1 && btnKidsWordValue === 1) {
        let audioConfirm = document.getElementById('confirm')
        audioConfirm.play()
        imgKids.style.border = '5px solid darkorange'
        btnKidsWord.style.backgroundColor = 'darkorange'
        value++
        document.getElementById('score').innerHTML = value
        btnKids.style.pointerEvents = 'none'
        btnKidsWord.style.pointerEvents = 'none'
       }
    if (btnKidsWordValue ===1 && btnKidsValue === 0) {
        btnKidsWord.style.backgroundColor = 'red'
    }
})

//Teenagers

let btnTeenagersValue = 0
let btnTeenagersWordValue = 0

btnTeenagers.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    btnTeenagersValue++
    imgTeenagers.style.border = '5px solid red'
    btnTeenagers.style.pointerEvents = 'none'
  
   if (btnTeenagersValue +btnTeenagersWordValue === 2) {
    let audioConfirm = document.getElementById('confirm')
    audioConfirm.play()
    let imgTeenagers = document.getElementById('imgTeenagers')
    imgTeenagers.style.border = '5px solid fuchsia'
    btnTeenagersWord.style.backgroundColor = 'fuchsia'
    value++
    document.getElementById('score').innerHTML = value
    btnTeenagers.style.pointerEvents = 'none'
    btnTeenagersWord.style.pointerEvents = 'none'
   }

})

btnTeenagersWord.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTeenagersWordValue++
    btnTeenagersWord.style.pointerEvents = 'none'
    btnTeenagersWord.style.backgroundColor = 'red'
    if (btnTeenagersValue === 1 && btnTeenagersWordValue === 1) {
        let audioConfirm = document.getElementById('confirm')
        audioConfirm.play()
        imgTeenagers.style.border = '5px solid fuchsia'
        btnTeenagersWord.style.backgroundColor = 'fuchsia'
        value++
        document.getElementById('score').innerHTML = value
        btnTeenagers.style.pointerEvents = 'none'
        btnTeenagersWord.style.pointerEvents = 'none'
       }
    if (btnTeenagersWordValue ===1 && btnTeenagersValue !=1) {
        btnTeenagersWord.style.backgroundColor = 'red'
    }
})

//Youth

let btnYouthValue = 0
let btnYouthWordValue = 0

btnYouth.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    btnYouthValue++
    imgYouth.style.border = ' 5px solid red'
    btnYouth.style.pointerEvents = 'none'
    
  
   if (btnYouthValue +btnYouthWordValue === 2) {
    let audioConfirm = document.getElementById('confirm')
    audioConfirm.play()
    let imgYouth = document.getElementById('imgYouth')
    imgYouth.style.border = '5px solid dodgerblue'
    btnYouthWord.style.backgroundColor = 'dodgerblue'
    value++
    document.getElementById('score').innerHTML = value
    btnYouth.style.pointerEvents = 'none'
    btnYouthWord.style.pointerEvents = 'none'
   }

})

btnYouthWord.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnYouthWordValue++
    btnYouthWord.style.pointerEvents = 'none'
    btnYouthWord.style.backgroundColor = 'red'
    if (btnYouthValue === 1 && btnYouthWordValue === 1) {
        let audioConfirm = document.getElementById('confirm')
        audioConfirm.play()
        imgYouth.style.border = '5px solid dodgerblue'
        btnYouthWord.style.backgroundColor = 'dodgerblue'
        value++
        document.getElementById('score').innerHTML = value
        btnYouth.style.pointerEvents = 'none'
        btnYouthWord.style.pointerEvents = 'none'
       }
    if (btnYouthWordValue ===1 && btnYouthValue !=1) {
        btnYouthWord.style.backgroundColor = 'red'
        
    }
})

//Adults

let btnAdultsValue = 0
let btnAdultsWordValue = 0

btnAdults.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    btnAdultsValue++
    btnAdults.style.pointerEvents = 'none'
    imgAdults.style.border = '5px solid red'
  
   if (btnAdultsValue +btnAdultsWordValue === 2) {
    let audioConfirm = document.getElementById('confirm')
    audioConfirm.play()
    let imgAdults = document.getElementById('imgAdults')
    imgAdults.style.border = '5px solid green'
    btnAdultsWord.style.backgroundColor = 'green'
    value++
    document.getElementById('score').innerHTML = value
    btnAdults.style.pointerEvents = 'none'
    btnAdultsWord.style.pointerEvents = 'none'
   }

})

btnAdultsWord.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnAdultsWordValue++
    btnAdultsWord.style.pointerEvents = 'none'
    btnAdultsWord.style.backgroundColor = 'red'
    if (btnAdultsValue === 1 && btnAdultsWordValue === 1) {
        let audioConfirm = document.getElementById('confirm')
        audioConfirm.play()
        imgAdults.style.border = '5px solid green'
        btnAdultsWord.style.backgroundColor = 'green'
        value++
        document.getElementById('score').innerHTML = value
        btnAdults.style.pointerEvents = 'none'
        btnAdultsWord.style.pointerEvents = 'none'
       }
    if (btnAdultsWordValue ===1 && btnAdultsValue !=1) {
        btnAdultsWord.style.backgroundColor = 'red'
        btnY
    }
})

//Elderly

let btnElderlyValue = 0
let btnElderlyWordValue = 0

btnElderly.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    btnElderlyValue++
    imgElderly.style.border = '5px solid red'
    btnElderly.style.pointerEvents = 'none'
  
   if (btnElderlyValue +btnElderlyWordValue === 2) {
    let audioConfirm = document.getElementById('confirm')
    audioConfirm.play()
    let imgElderly = document.getElementById('imgElderly')
    imgElderly.style.border = '5px solid darkgoldenrod'
    btnElderlyWord.style.backgroundColor = 'darkgoldenrod'
    value++
    document.getElementById('score').innerHTML = value
    btnElderly.style.pointerEvents = 'none'
    btnElderlyWord.style.pointerEvents = 'none'
   }

})

btnElderlyWord.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnElderlyWordValue++
    btnElderlyWord.style.pointerEvents = 'none'
    btnElderlyWord.style.backgroundColor = 'red'
    if (btnElderlyValue === 1 && btnElderlyWordValue === 1) {
        let audioConfirm = document.getElementById('confirm')
        audioConfirm.play()
        imgElderly.style.border = '5px solid darkgoldenrod'
        btnElderlyWord.style.backgroundColor = 'darkgoldenrod'
        value++
        document.getElementById('score').innerHTML = value
        btnElderly.style.pointerEvents = 'none'
        btnElderlyWord.style.pointerEvents = 'none'
       }
    if (btnElderlyWordValue ===1 && btnElderlyValue !=1) {
        btnElderlyWord.style.backgroundColor = 'red'
        btnY
    }
})

//Man

let btnManValue = 0
let btnManWordValue = 0

btnMan.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    btnManValue++
    imgMan.style.border = '5px solid red'
    btnMan.style.pointerEvents = 'none'
  
   if (btnManValue +btnManWordValue === 2) {
    let audioConfirm = document.getElementById('confirm')
    audioConfirm.play()
    let imgMan = document.getElementById('imgMan')
    imgMan.style.border = '5px solid olive'
    btnManWord.style.backgroundColor = 'olive'
    value++
    document.getElementById('score').innerHTML = value
    btnMan.style.pointerEvents = 'none'
    btnManWord.style.pointerEvents = 'none'
   }

})

btnManWord.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnManWordValue++
    btnManWord.style.pointerEvents = 'none'
    btnManWord.style.backgroundColor = 'red'
    if (btnManValue === 1 && btnManWordValue === 1) {
        let audioConfirm = document.getElementById('confirm')
        audioConfirm.play()
        imgMan.style.border = '5px solid olive'
        btnManWord.style.backgroundColor = 'olive'
        value++
        document.getElementById('score').innerHTML = value
        btnMan.style.pointerEvents = 'none'
        btnManWord.style.pointerEvents = 'none'
       }
    if (btnManWordValue ===1 && btnManValue !=1) {
        btnManWord.style.backgroundColor = 'red'
        btnY
    }
})

//Woman

let btnWomanValue = 0
let btnWomanWordValue = 0

btnWoman.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    btnWomanValue++
    imgWoman.style.border = '5px solid red'
    btnWoman.style.pointerEvents = 'none'
  
   if (btnWomanValue +btnWomanWordValue === 2) {
    let audioConfirm = document.getElementById('confirm')
    audioConfirm.play()
    let imgWoman = document.getElementById('imgWoman')
    imgWoman.style.border = '5px solid maroon'
    btnWomanWord.style.backgroundColor = 'maroon'
    value++
    document.getElementById('score').innerHTML = value
    btnWoman.style.pointerEvents = 'none'
    btnWomanWord.style.pointerEvents = 'none'
   }

})

btnWomanWord.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnWomanWordValue++
    btnWomanWord.style.pointerEvents = 'none'
    btnWomanWord.style.backgroundColor = 'red'
    if (btnWomanValue === 1 && btnWomanWordValue === 1) {
        let audioConfirm = document.getElementById('confirm')
        audioConfirm.play()
        imgWoman.style.border = '5px solid maroon'
        btnWomanWord.style.backgroundColor = 'maroon'
        value++
        document.getElementById('score').innerHTML = value
        btnWoman.style.pointerEvents = 'none'
        btnWomanWord.style.pointerEvents = 'none'
       }
    if (btnWomanWordValue ===1 && btnWomanValue !=1) {
        btnWomanWord.style.backgroundColor = 'red'
        btnY
    }
})

//Couple

let btnCoupleValue = 0
let btnCoupleWordValue = 0

btnCouple.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    btnCoupleValue++
    imgCouple.style.border = '5px solid red'
    btnCouple.style.pointerEvents = 'none'
  
   if (btnCoupleValue +btnCoupleWordValue === 2) {
    let audioConfirm = document.getElementById('confirm')
    audioConfirm.play()
    let imgCouple = document.getElementById('imgCouple')
    imgCouple.style.border = '5px solid deeppink'
    btnCoupleWord.style.backgroundColor = 'deeppink'
    value++
    document.getElementById('score').innerHTML = value
    btnCouple.style.pointerEvents = 'none'
    btnCoupleWord.style.pointerEvents = 'none'
   }

})

btnCoupleWord.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnCoupleWordValue++
    btnCoupleWord.style.pointerEvents = 'none'
    btnCoupleWord.style.backgroundColor = 'red'
    if (btnCoupleValue === 1 && btnCoupleWordValue === 1) {
        let audioConfirm = document.getElementById('confirm')
        audioConfirm.play()
        imgCouple.style.border = '5px solid deeppink'
        btnCoupleWord.style.backgroundColor = 'deeppink'
        value++
        document.getElementById('score').innerHTML = value
        btnCouple.style.pointerEvents = 'none'
        btnCoupleWord.style.pointerEvents = 'none'
       }
    if (btnCoupleWordValue ===1 && btnCoupleValue !=1) {
        btnCoupleWord.style.backgroundColor = 'red'
        btnY
    }
})


