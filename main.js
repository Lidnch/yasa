const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");
        toggle.addEventListener("click" , () =>{
            sidebar.classList.toggle("close");
        })
        searchBtn.addEventListener("click" , () =>{
            sidebar.classList.remove("close");
        });


const plus = document.querySelector("#plus-operator"),
num = document.querySelector(".num"),
minus = document.querySelector("#minus-operator");

let a = 1;

plus.addEventListener("click", ()=>{
    a++;
    num.innerHTML = a;
    console.log(a);
})

minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
    }
    num.innerHTML = a;
    console.log(a);
})