var customImage = {
    formaPrincipal: 'cuadradoP',
    colorPiedra: 'rosa',
    formaDecoracion: 'cuadradoD'
};

function setCustomImage(event) {

    var parent = event.target.parentElement;
    var selected = event.target;

    for (var i = 0; i < parent.children.length; i++) {
        if(parent.children[i].id == selected.id) {
            selected.classList.add('elemActive');
        }
        else {
            parent.children[i].classList.remove('elemActive');
        }
    }

    switch(parent.id) {
        case "formaPrincipal":
            customImage.formaPrincipal = selected.id;
            break;
        case "colorPiedra":
            customImage.colorPiedra = selected.id;
            break;
        case "formaDecoracion":
            customImage.formaDecoracion = selected.id;
            break;
    }

    var selectedImage = customImage.formaPrincipal 
    + customImage.colorPiedra
    + customImage.formaDecoracion;

    var image = document.getElementById("customImage");
    image.src = "IMG/Personaliza/" + selectedImage + ".jpg";
}
