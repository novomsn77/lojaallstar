
VanillaTilt.init(
    document.querySelectorAll(".js-tilt"), {
        max:25,
        speed:400,
    });

    

    const sizes = document.querySelectorAll(".size");

    for (let i = 0; i < sizes.length; i++){
        sizes[i].addEventListener("click", () =>{
            for (let i = 0; i < sizes.length; i++){
                sizes[i].classList.remove("active");
            }

            sizes[i].classList.toggle("active");
        });
    }