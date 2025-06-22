function toggleCuriosidade(element) {
        const content = element.nextElementSibling;
        element.classList.toggle("active");
        content.classList.toggle("show");
    }