"use strict";

// const btnSubmit = document.querySelector(".subscribe_btn");


 
// const btnDismiss=document.querySelector(".btn_dismiss");

// const formContainer=document.querySelector(".form_container");

// const successEl=document.querySelector(".success_message");
// const inputEl=document.querySelector("form input")

// if (btnSubmit) {
//     btnSubmit.addEventListener("click", () => {
//         if (inputEl.value.trim() !== "") {
//             console.log('working');
//         } else {
//             console.log("input empty");
//         }
//     });
// } else {
//     console.log("Button not found");
// }



document.addEventListener("DOMContentLoaded", function() {
    const btnSubmit = document.querySelector(".subscribe_btn");
    const btnDismiss=document.querySelector(".btn_dismiss");

const formContainer=document.querySelector(".form_container");

 const successEl=document.querySelector(".success_message");
 const inputEl=document.querySelector("form input")

    if (btnSubmit) {
        btnSubmit.addEventListener("click", () => {
            if (inputEl.value.trim() !== "") {
                formContainer.classList.add("hide");
                successEl.classList.remove("hide");
            } else {
                 document.querySelector(".error p").innerHTML="Valid Email Required";
                 inputEl.classList.add("active");
            }
        });
    } else {
        console.log("Button not found");
    }

    if (btnDismiss) {
        btnDismiss.addEventListener("click", () => {
            if (inputEl.value.trim() !== "") {
                formContainer.classList.remove("hide");
                successEl.classList.add("hide");

                inputEl.value="";
            }  
        });
    } else {
        console.log("Button not found");
    }
});
