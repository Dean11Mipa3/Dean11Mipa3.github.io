document.addEventListener("DOMContentLoaded", () =>{

    document.querySelector('.bxs-chevrons-left').addEventListener('click', function(){
        Navbar.style.right = "0px"
    })

    document.querySelector('.bxs-chevrons-right').addEventListener('click', function(){
        Navbar.style.right = "-250px"
    })
})