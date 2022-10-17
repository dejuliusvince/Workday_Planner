//Step 1: put current date on the webapge using moment() 
//Step 2: compare the current hour with time-blocks
//Step 3: Translate time-blocks to military time
//Step 4: use the css classes for present, past or future

//Step 4: grab the textarea value and store it in local storage

const hoursArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

let currentHour = moment().hour()

let currentDay = $("#currentDay")
let systemTime = moment().format("dddd, MMMM Do")

currentDay.text(systemTime)

const displayTimeBlockColors = () => {
    for (let i = 0; i < hoursArr.length; i++) {

        let currentTextEl = $("#" + hoursArr[i])

        if (currentHour > hoursArr[i]) {

            currentTextEl.addClass("past")
        }
        else if (currentHour === hoursArr[i]) {
            currentTextEl.addClass("present")
        }
        else {
            currentTextEl.addClass("future")
        }
    }
}

displayTimeBlockColors()

$(document).ready(() => {

    $("#9").val(localStorage.getItem('9am'))
    

    $("#9save").on('click', () => {
        localStorage.setItem("9am", $('#9').val())
    })

    $("#10").val(localStorage.getItem('10am'))
    

    $("#10save").on('click', () => {
        localStorage.setItem("10am", $('#10').val())
    })

    $("#11").val(localStorage.getItem('11am'))
    

    $("#11save").on('click', () => {
        localStorage.setItem("11am", $('#11').val())
    })

    $("#12").val(localStorage.getItem('12am'))
    

    $("#12save").on('click', () => {
        localStorage.setItem("12am", $('#12').val())
    })

    $("#13").val(localStorage.getItem('1pm'))
    

    $("#13save").on('click', () => {
        localStorage.setItem("1pm", $('#13').val())
    })

    $("#14").val(localStorage.getItem('2pm'))
    

    $("#14save").on('click', () => {
        localStorage.setItem("2pm", $('#14').val())
    })

    $("#15").val(localStorage.getItem('3pm'))
    

    $("#15save").on('click', () => {
        localStorage.setItem("3pm", $('#15').val())
    })

    $("#16").val(localStorage.getItem('4pm'))
    

    $("#16save").on('click', () => {
        localStorage.setItem("4pm", $('#16').val())
    })

    $("#17").val(localStorage.getItem('5pm'))
    

    $("#17save").on('click', () => {
        localStorage.setItem("5pm", $('#17').val())
    })
})