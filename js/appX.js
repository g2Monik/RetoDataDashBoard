// Obteniendo Datos Sobre La satisfaccion De Las estudiantes Cumple + supera
//GDL1
var satisfactionG1 = 0;
var allArrayG1 = [];
  sprintsG1 = [0, 0, 0, 0];
for (var i = 0; i < data['GDL']['2016-2'].ratings.length ; i++) {
    var superaG1=data['GDL']['2016-2'].ratings[i].student.supera;
    var cumpleG1=data['GDL']['2016-2'].ratings[i].student.cumple;
    var bothG1 = cumpleG1 + superaG1;
    satisfactionG1 += bothG1;
    allArrayG1[i] = data['GDL']['2016-2'].ratings[i].student.cumple;
}
var totalG1 = (satisfactionG1 / 4)
for (var i = 0; i < data['GDL']['2016-2'].ratings.length; i++) {
    sprintsG1[i] = allArrayG1[i];
}

var activeGDL1 = data['GDL']['2016-2'].students;
    activeG1=activeGDL1.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeGDL1.length; i++){
    }
