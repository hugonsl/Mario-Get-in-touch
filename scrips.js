const form = document.querySelector(".Fale-conosco")
const mascara = document.querySelector(".mascara")



function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translate(-50%)"
    mascara.style.visibility = "visible"

}

function esconderForm() {

    mascara.style.visibility = "hidden"
    form.style.left = "-300px"
    mascara.style.transform = "translateX(0)"
}
