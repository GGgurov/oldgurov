document.addEventListener('DOMContentLoaded', () => {




    const project1 = document.getElementById(`project1`)
    const project1info = document.getElementById(`project1-info`)
    const project1button = document.getElementById(`project1button`)

    const project2 = document.getElementById(`project2`)
    const project2info = document.getElementById(`project2-info`)
    const project2button = document.getElementById(`project2button`)

    const project3 = document.getElementById(`project3`)
    const project3info = document.getElementById(`project3-info`)
    const project3button = document.getElementById(`project3button`)

    // слайдер
    const left1 = document.getElementById(`buttonswitch-left1`)
    const right1 = document.getElementById(`buttonswitch-right1`)

    const left2 = document.getElementById(`buttonswitch-left2`)
    const right2 = document.getElementById(`buttonswitch-right2`)

    const left3 = document.getElementById(`buttonswitch-left3`)
    const right3 = document.getElementById(`buttonswitch-right3`)

    // Кнопки перейти к проекту
    const gobutton1 = document.getElementById(`go-button1`)
    const gobutton2 = document.getElementById(`go-button2`)
    const gobutton3 = document.getElementById(`go-button3`)

    // Кнопки закрытия "Подробнее"
    const close1 = document.getElementById(`close1`)
    const close2 = document.getElementById(`close2`)
    const close3 = document.getElementById(`close3`)


    close1.addEventListener(`click`, () => {
        project1info.style.display = `none`

        left1.style.display = `none`
        right1.style.display = `none`

        gobutton1.style.display = `none`


        close1.style.display = `none`

    })

    project1button.addEventListener(`click`, () => {
        project1info.style.display = `none`
        project2info.style.display = `flex`
        project3info.style.display = `flex`
        left1.style.display = `flex`
        right1.style.display = `flex`
        left2.style.display = `none`
        right2.style.display = `none`
        left3.style.display = `none`
        right3.style.display = `none`

        gobutton1.style.display = `flex`
        gobutton2.style.display = `none`
        gobutton3.style.display = `none`

        close1.style.display = `flex`
        close2.style.display = `none`
        close3.style.display = `none`
    })
    project2button.addEventListener(`click`, () => {
        project2info.style.display = `none`
        project1info.style.display = `flex`
        project3info.style.display = `flex`
        left1.style.display = `none`
        right1.style.display = `none`
        left2.style.display = `flex`
        right2.style.display = `flex`
        left3.style.display = `none`
        right3.style.display = `none`

        gobutton1.style.display = `none`
        gobutton2.style.display = `flex`
        gobutton3.style.display = `none`

        close1.style.display = `none`
        close2.style.display = `flex`
        close3.style.display = `none`
    })
    project3button.addEventListener(`click`, () => {
        project2info.style.display = `flex`
        project1info.style.display = `flex`
        project3info.style.display = `none`
        left1.style.display = `none`
        right1.style.display = `none`
        left2.style.display = `none`
        right2.style.display = `none`
        left3.style.display = `flex`
        right3.style.display = `flex`

        gobutton1.style.display = `none`
        gobutton2.style.display = `none`
        gobutton3.style.display = `flex`

        close1.style.display = `none`
        close2.style.display = `none`
        close3.style.display = `flex`
    })






})