const base_url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_g4649UYTAR2VXUMl6yEpVlogWw5hUdd5zDjpqRzU&currencies=";
const dropdownSelect = document.querySelectorAll("select");
for (let select of dropdownSelect) {
    for (curr in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = curr;
        newOption.value = curr;
        if (select.name === "from" && curr === "USD") {
            newOption.selected = "selected"
        }
        else if (select.name === "to" && curr === "INR") {
            newOption.selected = "selected"
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        flagChange(evt.target);
    });
}
const flagChange = (element) => {
    let curr = element.value;
    let countryCode = countryList[curr];
    let newImg = `https://flagsapi.com/${countryCode}/shiny/64.png`
    element.parentElement.querySelector("img").setAttribute("src", newImg);
}
const conversion = async () => {
    let amt = document.querySelector(".input-amount");
    let amtval = amt.value;
    if (amtval === "" || amtval < 1) {
        alert("Invalid Input");
    }
    const fromCurr = document.querySelector("#fromCurr");
    const toCurr = document.querySelector("#toCurr");
    const url = `${base_url}${fromCurr.value},${toCurr.value}`;
    let response = await fetch(url);
    let data = await response.json();
    let fromAmt = document.querySelector(".input-amount").value;
    let fromRate = fromAmt / data.data[fromCurr.value];
    let toRate = data.data[toCurr.value];
    document.querySelector(".output").innerText = (fromRate * toRate).toFixed(3);
}
document.querySelector(".convert").addEventListener("click", (evt) => {
    evt.preventDefault();
    conversion();
});