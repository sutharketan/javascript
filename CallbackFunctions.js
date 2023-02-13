// setTimeout(() => {
//     console.log("inside call back")
// }, 5000);

// function x(y){
//     console.log("x")
//     y();
// }

// x(() => {
//     console.log("y")
// })

function attachListner() {
    let count = 0
    document.getElementById("clickMe").addEventListener("click", ()=>{
        console.log("count: ", ++count)
    })
}

attachListner()

