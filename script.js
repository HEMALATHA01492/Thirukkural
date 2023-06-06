let heading=document.createElement('h1');
heading.setAttribute('class','heading');
heading.innerText='திருக்குறள்';
document.body.appendChild(heading);
let DIV=document.createElement('div');
DIV.setAttribute('class','container');


document.body.appendChild(DIV);

let display= async()=>{

    for(let i=1; i<=1330 ; i++){
    let url=`https://api-thirukkural.vercel.app/api?num=${i}`;

    await fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
            const output=`<ol class='list'>
            <li class='card'>
            <p class='card-title'><b>${data.number}. ${data.sect_tam} - ${data.chapgrp_tam}<small> ( ${data.chap_tam} )</small></b></h2>
            <p class='card-subtitle1'><b> குறள் : ${data.line1}</b></p>
            <p class='card-subtitle1'><b>${data.line2}</b> </p>
            <p class='card-subtitle2'><small>பொருள்: ${data.tam_exp}</small></p>
            <p class='card-title'><b> ${data.sect_eng} - ${data.chapgrp_eng}<small> ( ${data.chap_eng} )</small></b></h2>
            <p class='card-subtitle1'><b> ${data.eng}</b> </p>
            <p class='card-subtitle2'><small>Meaning : ${data.eng_exp}</small></p> 

            </li>
            </ol>`
            DIV.innerHTML += output;
            
        });
        // console.log(data)
        // console.log(data.sect_tam)
        // console.log(data.line1)
        // console.log(data.line2)
        // console.log(data.tam_exp)

        // console.log(data.sect_eng)
        // console.log(data.eng)
        // console.log(data.eng_exp)
    


}}



display();
