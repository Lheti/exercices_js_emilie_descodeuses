let input1 = document.getElementById("myInput");
let bouton = document.getElementById("myButton");

function addLi () {
    let tache = document.getElementById("myInput").value;
    let li = document.createElement('li');
    li.textContent = tache;
    li.classList = "elementLi";
    li.addEventListener("click", function () {
        li.remove();
    });
    document.getElementById('myUl').appendChild(li);
}

bouton.addEventListener("click", addLi);