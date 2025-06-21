    
    
    // Функция для копирования номера в контактах
    document.addEventListener('DOMContentLoaded', () => {
        function copyphone() {
        const phone = '77066678819';
        navigator.clipboard.writeText(phone).then(() => {
            alert('Номер телефона скопирован!');
        })
        }

        const btn = document.getElementById('copy-btn');
        btn.addEventListener('click', (e) => {
        e.preventDefault();
        copyphone();
        });
    });

// 2 кнопки которые выбирают фото или видео в галерее
document.addEventListener(`DOMContentLoaded`, () => {
const imgchoise = document.getElementById('imgchoise');
const videochoise = document.getElementById('videochoise');

const imgchoised = document.getElementById(`imgchoised`)
const videochoised = document.getElementById(`videochoised`)

imgchoise.addEventListener(`click`, () => {
    imgchoised.style.display = `flex`
    videochoised.style.display = `none`
})

videochoise.addEventListener(`click`, () => {
    imgchoised.style.display = `none`
    videochoised.style.display = `flex`
})

const videos = document.querySelectorAll('.hover-video')
videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play()
        video.muted = false
    })
    video.addEventListener('mouseleave', () => {
        video.pause()
        video.currentTime = 0
        video.volume = 1.0
    })
})



})



document.addEventListener(`DOMContentLoaded`, () => {
    const img1 = document.getElementById(`img1`)
const img2 = document.getElementById(`img2`)
const img3 = document.getElementById(`img3`)
const img4 = document.getElementById(`img4`)
const img5 = document.getElementById(`img5`)
const img6 = document.getElementById(`img6`)
const textimg = document.getElementById(`textimg`)

const imgbutton = document.getElementById(`photo-button`)

imgbutton.addEventListener(`mouseenter`, () => {
    img1.style.marginLeft = `32.5%`
    img2.style.marginLeft = `17%`
    img3.style.marginLeft = `4%`

    img4.style.marginLeft = `-32.5%`
    img5.style.marginLeft = `-17%`
    img6.style.marginLeft = `-3%`

    // Изменение размера при наведении
    img1.style.width = `25%`
    img2.style.width = `20.1%`
    img3.style.width = `20.5%`

    img4.style.width = `29%`
    img5.style.width = `22.1%`
    img6.style.width = `22.3%`

    img1.style.opacity = `100%`
    img2.style.opacity = `100%`
    img3.style.opacity = `100%`

    img4.style.opacity = `100%`
    img5.style.opacity = `100%`
    img6.style.opacity = `100%`

    textimg.style.opacity = `0`

})

imgbutton.addEventListener(`mouseleave`, () => {
    img1.style.marginLeft = `0%`
    img2.style.marginLeft = `0%`
    img3.style.marginLeft = `0%`

    img4.style.marginLeft = `0%`
    img5.style.marginLeft = `0%`
    img6.style.marginLeft = `0%`

    // Изменение размера при убранной мыши
    img1.style.width = `20%`
    img2.style.width = `18.5%`
    img3.style.width = `20.3%`

    img4.style.width = `23.5%`
    img5.style.width = `20.2%`
    img6.style.width = `22.9%`

    img1.style.opacity = `50%`
    img2.style.opacity = `50%`
    img3.style.opacity = `50%`

    img4.style.opacity = `50%`
    img5.style.opacity = `50%`
    img6.style.opacity = `50%`
    
    textimg.style.opacity = `100%`
})
})
