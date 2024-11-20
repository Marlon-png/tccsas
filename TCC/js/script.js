function allowDrop(event) {
    event.preventDefault(); // Permitir o drop
}

function drag(event) {
    // Armazena o ID do item que está sendo arrastado
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();

    // Obtém o ID do item arrastado
    const draggedId = event.dataTransfer.getData("text");
    // Obtém o elemento que foi arrastado
    const draggedElement = document.getElementById(draggedId);
    // Obtém a zona de drop
    const target = event.target;

    // Verifica se o item está sendo solto na zona correta
    if (
        (draggedId === "Plasmídeo" && target.id === "nome-Plasmídeo") ||
        (draggedId === "Glicina" && target.id === "nome-Glicina") ||
        (draggedId === "Cromossomo" && target.id === "nome-Cromossomo") ||
        (draggedId === "RNA" && target.id === "nome-RNA") ||
        (draggedId === "Adenina" && target.id === "nome-Adenina") ||
        (draggedId === "Timina" && target.id === "nome-Timina")
    ) {
        target.classList.add("correct"); // Adiciona a classe de "correto"
        target.innerHTML = ""; // Limpa o conteúdo da zona de drop
        target.appendChild(draggedElement.cloneNode(true)); // Adiciona uma cópia da imagem arrastada
    } else {
        target.classList.add("wrong"); // Adiciona a classe de "errado"
        target.innerText = "Errado!"; // Exibe "Errado!"
        setTimeout(() => {
            target.classList.remove("wrong"); // Remove a classe de "errado"
            target.innerText = target.id === "nome-Plasmídeo" 
                ? "Arraste o Plasmídeo aqui" 
                : target.id === "nome-Glicina" 
                ? "Arraste a Glicina aqui" 
                : target.id === "nome-Cromossomo"
                ? "Arraste o Cromossomo aqui"
                : target.id === "nome-RNA"
                ? "Arraste o RNA aqui"
                : target.id === "nome-Adenina"
                ? "Arraste a Adenina aqui"
                : "Arraste a Timina aqui"; // Restaura o texto original
        }, 2000); // Restaura o estado após 2 segundos
    }
}
