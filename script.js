function tabUyqas() {
  const soz = document.getElementById("soz").value.trim();
  const natizhe = document.getElementById("natizhe");
  natizhe.innerHTML = "";

  if (soz === "") {
    natizhe.innerHTML = "<li>Сөз енгізіңіз!</li>";
    return;
  }

  const nati = sozdik.filter(s => uyqaspa(s, soz));
  if (nati.length === 0) {
    natizhe.innerHTML = "<li>Ұйқас табылмады 😔</li>";
  } else {
    nati.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      natizhe.appendChild(li);
    });
  }
}

document.getElementById("izdeu").addEventListener("click", tabUyqas);
document.getElementById("soz").addEventListener("keypress", e => {
  if (e.key === "Enter") tabUyqas();
});
