/* Javascript DOM */
/* Document Object Model */

// function styles(){
//     let dom = document.querySelector('div')
//     dom.setAttribute('id' , 'firstDiv')
//     document.getElementById('firstDiv').style.backgroundColor = "red"
// }

/* Document.getElementById() */

{
    // let dom = document.getElementById('firstDiv').innerHTML

    // console.log(dom);

    // let dom1 = document.getElementById('firstDiv').textContent

    // console.log(dom1);

    // let  dom2 = document.getElementById('firstDiv').innerText

    // console.log(dom2);
}

// New Element Create In Html Using Javascript

// createElement
// textContent  , innerText
// appendChild

{
    // let newElement = document.createElement('bdo')
    // console.log(newElement);
    // newElement.textContent = "This is bdo Tag"
    // newElement.setAttribute('dir' , 'rtl')
    // document.getElementById('firstDiv').appendChild(newElement)
    // document.querySelector('#firstDiv span i').appendChild(newElement)
    // document.body.appendChild(newElement)
}

// document.getElementByClassName()

{
    // let dom = document.getElementsByClassName('box')

    // console.log(dom);

    // let colors = ['orange' , 'aqua' , 'slategray']

    // for(let i = 0 ; i < 10 ; i++){
    //     dom[i].style.height = "100px"
    //     dom[i].style.backgroundColor = `${colors[i]}`
    // }  
}

// document.getElementByName()

{
    // let divStyle = {
    //     height:"100px",
    //     width:"100px",
    //     background:"purple"
    // }

    // let dom = document.getElementsByName('main')[1]

    // console.log(dom);

    // console.log(dom.style.height = divStyle.height);

    // dom.style.height = "100px"
    // dom.style.width = "100px"
    // dom.style.border = "10px solid black"

    // css as module 
}

// document.getElementByTagName()

// {
//     let dom = document.getElementsByTagName('span')

//     console.log(dom);   
// }


// addClass , removeClass , toggleClass , classList

{
    function remove() {
        let dom = document.getElementById('demo').classList
        dom.remove('box')
        console.log(dom);
    }

    function add() {
        let dom = document.getElementById('demo').classList
        dom.add('box')
        console.log(dom);
    }

    function toggle() {
        let dom = document.getElementById('demo').classList
        dom.toggle('box')
        console.log(dom);
    }

}


