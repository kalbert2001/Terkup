/*
* File: app.js
* Author: Kiss Albert Bence
* Copyright: 2021, Kiss Albert Bence
* Group: Szoft I-1/E
* Date: 2023-01-31
* Github: https://github.com/kisalb.88/
* Licenc: GNU GPL
*/
const RadiusE = document.querySelector("#radius")
const HeightE = document.querySelector("#height")
const ButtonE = document.querySelector("#calcButton")
const AreaE = document.querySelector("#area");


ButtonE.addEventListener('click', () => {
    console.log("mukodik")
    let radius =Number(RadiusE.value)
    let height=Number(HeightE.value)
    let area=CalcArea(radius,height)
    console.log(area)
    AreaE.value = area
})

function CalcArea(radius,height){
   let area= (1.0/3.0)*Math.pow(radius,2)*
   Math.PI * height
    
    
    return area
}