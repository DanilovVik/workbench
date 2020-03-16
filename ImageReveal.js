function ImageReveal() {
    const logosCollection = document.getElementsByClassName("logos");
    const imagesCollection = document.getElementsByClassName("block");
    for (let logo of logosCollection) {
        for (let image of imagesCollection) {
            /* Дата-атрибут name должен совпадать у логотипа и картинки
            и при совпадении меняем классы картинкам */
            if (image.dataset.name == logo.dataset.name) {
                    logo.addEventListener('mouseenter', function(event) {
                    image.classList.add("block-visible");
                    image.classList.remove("block");
                });
                logo.addEventListener('mouseout', function(event) {
                    image.classList.add("block");
                    image.classList.remove("block-visible");
                });
            }
        }
    }
}

ImageReveal();