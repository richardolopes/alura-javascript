var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function () {
    event.preventDefault();

    var tr = document.createElement("tr");

    campos.forEach(function (campo) {
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVol = document.createElement("td");
    tdVol.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVol);

    tbody.appendChild(tr);

    this.reset();
    campos[0].focus();
});
