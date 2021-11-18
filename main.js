function randomImage() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then((image) => {
        let img = document.getElementById('main-image')
        img.src = `${image.url}`
    })
    .catch(err => err)
}

function chosenImage(date) {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    .then(response => response.json())
    .then(image => {
        let img = document.getElementById('main-image')
        img.src = `${image.url}`
    })
    .catch(err => err)
}

(function selectedElement() {
    let todaysDate = document.querySelector('#todays-choice')
    let chooseDate = document.querySelector('#date-choice')
    let dateField = document.getElementById('date-div')

    chooseDate.addEventListener('change', () => {
        let dateFieldInput = document.getElementById('choose-date')
        dateField.style.display = 'block'

        dateFieldInput.addEventListener('input', () => {
            let dateFieldValue = dateFieldInput.value
            return chosenImage(dateFieldValue)
        })
    })

    todaysDate.addEventListener('change', () => {
        dateField.style.display = 'none'
        randomImage()
    })
})()
    

