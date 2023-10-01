
const btn = document.querySelectorAll('.button')

const body = document.querySelector('body')

btn.forEach( (bt) => {
    bt.addEventListener('click', function (e) {
        if (e.target.id == 'grey') {
            body.style.background = e.target.id
        }
        if (e.target.id == 'white') {
            body.style.background = e.target.id
        }
        if (e.target.id == 'blue') {
            body.style.background = e.target.id
        }
        if (e.target.id == 'yellow') {
            body.style.background = e.target.id
        }
    })


})
