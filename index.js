document.getElementById("main").remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory"
//newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader);

newHeader.innerHTML = "Alicia is the champion";