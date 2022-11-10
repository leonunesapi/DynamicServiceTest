document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data'])); 
});

const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function() {
    const searchValue = document.querySelector('#search-input').value;
    fetch('http://localhost:5000/search/' + searchValue)
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
}

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='6'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({Id, Name, Description, Quantity}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${Id}</td>`;
        tableHtml += `<td>${Name}</td>`;
        tableHtml += `<td>${Description}</td>`;
        tableHtml += `<td>${Quantity}</td>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml;
}