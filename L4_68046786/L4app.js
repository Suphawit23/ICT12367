const smallimg = document.querySelectorAll(".gallery img")
const fullimg = document.querySelector(".full-image")
const modal = document.querySelector(".modal")

smallimg.forEach(img => {
    img.addEventListener("click", () => {

        
        const fullSrc = img.src
            .replace("small/s_", "full/_")

        fullimg.src = fullSrc
        modal.classList.add("open")
    })
})

modal.addEventListener("click", () => {
    modal.classList.remove("open")
})
