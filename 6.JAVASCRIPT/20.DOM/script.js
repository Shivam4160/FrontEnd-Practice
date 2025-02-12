/* Javascript DOM */
/* Document Object Model */

function styles(){
    let dom = document.querySelector('div')
    dom.setAttribute('id' , 'firstDiv')
    document.getElementById('firstDiv').style.backgroundColor = "red"
}

/* Document.getElementById() */

{
    let dom = document.getElementById('firstDiv').innerHTML

    console.log(dom);

    let dom1 = document.getElementById('firstDiv').textContent

    console.log(dom1);

    let  dom2 = document.getElementById('firstDiv').innerText

    console.log(dom2);
}