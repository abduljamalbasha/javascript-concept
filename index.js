// Import stylesheets
// import './style.css';

// Write Javascript code!


const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<button id='calculate' >Cacluate web worker</button>
<button id='backgroundColor'>change Background color</button>

`;

const worker = new Worker('worker.js')
const bgColor = document.querySelector('#backgroundColor');
const btnWorker = document.querySelector('#calculate');

bgColor.addEventListener('click',(event)=>{
    if(document.body.style.background !=='green'){
        document.body.style.background ='green'
    }else{
        document.body.style.background ='red'
    }
})


worker.onmessage =(message)=>{
    alert(message.data)
}

btnWorker.addEventListener('click',(event)=>{
    worker.postMessage('hell')
    // let sum = 0
    // for (let index = 0; index < 100000000000; index++) {
    //      sum += index
    // }
    // alert(sum)
})

