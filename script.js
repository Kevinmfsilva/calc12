function calcular() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
  
    const resultadoDiv = document.getElementById("resultado");
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultadoDiv.innerHTML = "Por favor, insira todos os coeficientes.";
      return;
    }
  
    const delta = b * b - 4 * a * c;
  
    if (delta < 0) {
      resultadoDiv.innerHTML = "Não há raízes reais.";
    } else if (delta === 0) {
      const x = -b / (2 * a);
      resultadoDiv.innerHTML = `Raiz única: x = ${x.toFixed(2)}`;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      resultadoDiv.innerHTML = `Raízes: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    }
  }