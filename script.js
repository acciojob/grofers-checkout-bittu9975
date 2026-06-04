const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach(price => {
        total += Number(price.textContent);
    });

    
    const existingRow = document.getElementById("ans");
    if (existingRow) {
        existingRow.remove();
    }

    const tr = document.createElement("tr");
    tr.id = "ans";

    const td = document.createElement("td");
    td.textContent = total;

    tr.appendChild(td);

    document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);