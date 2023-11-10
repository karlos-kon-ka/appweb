function convertirADias() {
    var horas = document.getElementById("horas").value;
    var dias = horas / 24;
    document.getElementById("dias").value = dias;
}

function convertirAHoras() {
    var dias = document.getElementById("dias").value;
    var horas = dias * 24;
    document.getElementById("horas").value = horas;
}
