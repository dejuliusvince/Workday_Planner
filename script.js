//Step 1: put current date on the webapge using moment() 
//Step 2: compare the current hour with time-blocks
//Step 3: Translate time-blocks to military time
//Step 4: use the css classes for present, past or future

//Step 4: grab the textarea value and store it in local storage


var timeBlocksArr=[9,10,11,12,13,14,15,16,17]
var currentHour = moment().hour()
var currentDay =$("#currentDay") // document.querySelector(#currentDay)
console.log(currentHour)


var systemTime=moment(format("dddd, MMMM, Do"))
currentDay.text(systemTime)  // currentDay.textContent=moment()

function displayTimeBlockColors(){
    for(var i=0; i < timeBlocksArr.length;i++)
    
}
