// código inicial mínimo que o Looker reconhece
function drawViz(vizData) {
  console.log(vizData);
  document.body.innerHTML = "<h3>Visual pronto!</h3>";
}

dscc.subscribeToData(drawViz, {});
