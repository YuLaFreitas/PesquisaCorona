function inserirEscala(id) {
    document.getElementById(id).innerHTML =
        newFunction(id);
}

function removerEscala(id) {
    document.getElementById(id).removeAttributeNode;
}

function pegarValor(valor, id) {

    var teste = document.getElementById(id).checked;

    if (teste) {inserirEscala(valor);}

    else { removerEscala(valor); }

}

function newFunction(id) {
    return "<div class='mb-3' role='toolbar'> " +
        "<H3> Intensidade: </H3>" +
        "<div class='btn-group btn-group-toggle' data-toggle='buttons'>" +
        "<label class='btn btn-primary'>1"+
        "<input type='radio' name='" + id + "' id='" + id + "_1'>" +
             "</label>" +
        "<label class='btn btn-success'>2" +
        "<input type='radio' name='" + id + "' id='" + id + "_2'>"+
             "</label>" +
        "<label class='btn btn-warning'>3" +
        "<input type='radio' name='" + id + "' id='" + id + "_3'>" +
             "</label>" +
        "<label class='btn btn-danger'>4" +
        "<input type='radio' name='" + id + "' id='" + id + "_4'>" +
             "</label>" +
        "<label class='btn btn-secondary'>5" +
        "<input type='radio' name='" + id + "' id='" + id + "_5'>" +
             "</label>" +
        "</div ></div >";
}


