const sidemenuList = document.querySelectorAll(".sidemenu");
    sidemenuList.forEach(element => {
        element.addEventListener("click", function() {
            const getEl = element.parentNode
            let panelMenu = getEl.querySelector(".panelmenu")
            if (panelMenu.style.display === "flex") {
                panelMenu.style.display = "none"
                element.querySelector(".arrow-down").classList.remove("hide")
                element.querySelector(".arrow-up").classList.add("hide")
                element.classList.remove("active")
            } else {
                panelMenu.style.display = "flex"
                element.querySelector(".arrow-down").classList.add("hide")
                element.querySelector(".arrow-up").classList.remove("hide")
                element.classList.add("active")
            }
        })
    })
