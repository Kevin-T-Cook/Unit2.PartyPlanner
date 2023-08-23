async function getData(){
    const respone = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events")
    const data = await respone.json();
    return data.data;
}

// dates, times, locations, and descriptions

const tbody = document.getElementById("tbody");

function createRow(data) {
    console.log(data);
    const row = document.createElement("tr")
    const nameEle = document.createElement("td");
    const dateEle = document.createElement("td");
    const timeEle = document.createElement("td")
    const locationEle = document.createElement("td");
    const descEle = document.createElement("td");
    const button = document.createElement("button");
    button.addEventListener("click", () => {
        tbody.removeChild(row);
    })
    
    nameEle.innerHTML=data.name;
    const splitted = data.date.split("T");
    dateEle.innerHTML=splitted[0];
    timeEle.innerHTML=splitted[1];
    locationEle.innerHTML=data.location;
    descEle.innerHTML=data.description;
    button.innerHTML='DELETE'
    
    row.appendChild(nameEle);
    row.appendChild(dateEle);
    row.appendChild(timeEle);
    row.appendChild(locationEle);
    row.appendChild(descEle);
    row.appendChild(button);
    tbody.appendChild(row);
}

getData().then((rsp)=>{
    rsp.forEach(i=>createRow(i))
});

function newParty (event) {
    event.preventDefault()
    const row = document.createElement("tr")

    const newName = document.createElement("td");
    const nameValue = document.getElementById("name").value;
    newName.innerHTML = nameValue;
    row.appendChild(newName);

    const newDate = document.createElement("td");
    const dateValue = document.getElementById("date").value;
    newDate.innerHTML = dateValue;
    row.appendChild(newDate);

    const newTime = document.createElement("td");
    const timeValue = document.getElementById("time").value;
    newTime.innerHTML = timeValue;
    row.appendChild(newTime);

    const newLocation = document.createElement("td");
    const locationValue = document.getElementById("location").value;
    newLocation.innerHTML = locationValue;
    row.appendChild(newLocation);

    const newDesc = document.createElement("td");
    const descValue = document.getElementById("description").value;
    newDesc.innerHTML = descValue;
    row.appendChild(newDesc);

    const button = document.createElement("button");
    button.innerHTML='DELETE'
    row.appendChild(button);
    button.addEventListener("click", () => {
        tbody.removeChild(row);
    })

    tbody.appendChild(row);
}

const nameValue = document.getElementById("name").value;
const dateValue = document.getElementById("date").value;
const timeValue = document.getElementById("time").value;
const locationValue = document.getElementById("location").value;
const descValue = document.getElementById("description").value;

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    createRow({name: nameValue, date: `${dateValue}T${timeValue}`, location: locationValue, description: descValue});
})