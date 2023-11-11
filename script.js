function convertirADias() {
    var horas = parseFloat(document.getElementById("horas").value) || 0;
    var dias = horas / 24;
    document.getElementById("dias").value = dias.toFixed(2);
}

function convertirAHoras() {
    var dias = parseFloat(document.getElementById("dias").value) || 0;
    var horas = dias * 24;
    document.getElementById("horas").value = horas.toFixed(2);
}

// Agregar event listeners para actualización dinámica
document.getElementById("horas").addEventListener("input", convertirADias);
document.getElementById("dias").addEventListener("input", convertirAHoras);