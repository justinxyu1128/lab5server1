function getReq() {
    const xhttp = new XMLHttpRequest();
    const sql = document.getElementById("sqlarea").value;
    xhttp.open(
        "GET",
        "http://localhost:8888/?cmd=" + encodeURIComponent(sql),
        true
    );

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let table_data = JSON.parse(this.responseText);
            const view = document.getElementById("view")
            view.replaceChildren();
            for (patient of table_data[0]) {
                const row = document.createElement("p");
                const content = "ID: " + patient.patientid + " Name: "
                    + patient.name + " DateOfBirth: " + patient.dateOfBirth;
                row.innerHTML = content;
                view.appendChild(row);
            }
        }
    }
}

function postReq() {
    const data = [
        ['Sara Brown', '1901-01-01'],
        ['John Smith', '1941-01-01'],
        ['Jack Ma', '1961-01-30'],
        ['Elon Musk', '1999-01-01']
    ]
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8888");
    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
        let response = xhr.responseText;
        document.getElementById("result").innerHTML = response;
    };
}