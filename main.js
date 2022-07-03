const container = document.querySelector('.container'),
    pwShowHide = document.querySelectorAll('.showHidePw'),
    pwFields = document.querySelectorAll('.password'),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");
    var loader = document.querySelector(".loader"); 

    pwShowHide.forEach(eyeIcon =>{ 
        eyeIcon.addEventListener("click", () => { 
            pwFields.forEach(pwField  => { 
                if(pwField.type === "password"){ 
                    pwField.type = "text";

                    pwShowHide.forEach(icon => { 
                        icon.classList.replace("fa-eye-slash", "fa-eye");
                    })
                }else{ 
                    pwField.type = "password";

                    pwShowHide.forEach(icon => { 
                        icon.classList.replace("fa-eye", "fa-eye-slash");
                    })
                }
            })
        })
    })


    signUp.addEventListener("click", ( ) => { 
          container.classList.add("active");
    });
    login.addEventListener("click", ( ) => { 
        container.classList.remove("active");
  });

window.addEventListener("load", vanish);

function vanish(){ 
    loader.classList.add("disppear");
}
