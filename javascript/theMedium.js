let hits = 0; 

const count = document.querySelector(".count");
const catContainer = document.getElementById("cat-container");

count.addEventListener("click", AddNew);

function AddNew() {
    hits++;
    renderHits();

    const newDiv = document.createElement("div");
    console.log("add");
    newDiv.classList.add("div-shadow");
    catContainer.appendChild(newDiv);
}

function renderHits(){
    count.innerHTML = hits; 
}


//// CLASS WORK 
// console.log("the Mess age!");

// // an empty array to keep track of clicks??!!!!
// let theEmptyArray = [];
// let theBody = document.querySelector("body");
// const theBall = document.getElementById("ball")

// theBall.addEventListener('click', magicClick)

// function magicClick(){
//     console.log("you clicked!")
//     theBody.style.backgroundColor = "yellow";
// }

//// TEMP TRY
// const count = document.querySelector(".hits");
// const catContainer = document.querySelector("#catContainer");

// // const catContainer = document.getElementById("cat-container");

// count.addEventListener('click', magicClick)

// function magicClick(){
//     // add count
//     hits++;
//     renderHits();

//     // draw cat
//     const newDiv = document.createElement("div");
//     console.log("meaw");
//     newDiv.classList.add("cat-shadow")
//     catContainer.appendChild(newDiv);

// }

// function renderHits(){
//     count.innerHTML = hits; 
// }
