function ageinDays(){

  // DOM Variables
  var x = document.getElementById('text')
  var button = document.getElementById('click')
  var age = document.getElementById('age')
  var info = document.querySelectorAll('.info')
  var ageDisp = document.getElementById('ageDisp')
  var leapYearDiv = document.getElementById('leapYear')
  var leapYearText = document.getElementById('leapYearText')

  // Local Variables
  var birthyear = prompt("What's your birthyear?")
  var leapYear = 0
  var ageindays = 0
  var years = new Array()

  // Style change for old content
  button.style.display = "none"
  x.style.display = "flex"
  x.style.flexWrap = "wrap"
  for(let j=0; j<info.length; j++){
    info[j].style.display ="none"
  }
  leapYearDiv.style.display = "flex"


  // Logical Operation
  birthyearNew = parseInt(birthyear)+1
  if(parseInt(birthyear)>=2019){
    alert('Year entered cannot be greater than or equal to 2019. Click OK to reset!')
    window.location.reload();
    return;
  }
  else{
    for(let i = parseInt(birthyearNew);i<2020;i++){

      if((i%4===0)){
        if(i%100!=0){
          ageindays +=366
          leapYear += 1
          years.push(i)
        }
        else if (i%100===0) {
          if(i%400===0){
            ageindays +=366
            leapYear += 1
            years.push(i)
          }
        }
      }
      else{
        ageindays +=365
      }
    }
  }

  if(years.length==0){
    nextLeapYear = `Current Leap Year is: 2020`
  }
  else{
    var last = years[years.length - 1]
    nextLeapYear = last + 4
    if (nextLeapYear===2020){
      nextLeapYear = `Current Leap Year is: 2020`}
  }

  // Displaying Age & Leap Year
  age.innerHTML = ageindays+" days old!"
  leapYearText.innerHTML = "Total "+leapYear+" leap year(s) passed.<br />They are: "+years.toString()+"<br />"+nextLeapYear
  ageDisp.innerHTML = "From:"+"<br />"+"1st January, "+birthyear+" to"+"<br />"+"31st December, 2019"


}

function reset(){
  window.location.reload();
}
