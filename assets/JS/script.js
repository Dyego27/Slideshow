'use strict'
const images = [
    {'id':'1','url':'assets/IMG/img.jpg'},
    {'id':'1','url':'assets/IMG/img3.jpg'},
    {'id':'1','url':'assets/IMG/img4.jpg'},
    {'id':'1','url':'assets/IMG/img2.jpg'},
    {'id':'1','url':'assets/IMG/img5.jpg'},
]

const container = document.querySelector('#container-itens')

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>
        `
    });
}

loadImages( images, container )