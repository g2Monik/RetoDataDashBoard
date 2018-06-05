// Variables globales
//con esto solo jalamos la informacion de los objetos que estan en el archivo data.js
var allGDL1 = (data['GDL']['2016-2'].students.length);
var allGDL2 = (data['GDL']['2017-1'].students.length);
var allCDMX1 = (data['CDMX']['2017-1'].students.length);
var allCDMX2 = (data['CDMX']['2017-2'].students.length);
var allLIM1 = (data['LIM']['2016-2'].students.length);
var allLIM2 = (data['LIM']['2017-1'].students.length);
var allLIM3 = (data['LIM']['2017-2'].students.length);
var allSCL1 = (data['SCL']['2016-2'].students.length);
var allSCL2 = (data['SCL']['2017-1'].students.length);
var allSCL3 = (data['SCL']['2017-2'].students.length);
//Establecemos las estudiantes activas por sede y generacion
//tenemos que iterar con el for dentro de los objertos para llegar a la key active
var activeGDL1 = data['GDL']['2016-2'].students;
    var activeG1 = activeGDL1.filter(function(student){return student.active}).length;

var activeGDL2 = data['GDL']['2017-1'].students;
    var activeG2 = activeGDL2.filter(function(student){return student.active}).length;

var activeCDMX1 = data['CDMX']['2017-1'].students;
    var activeCD1 = activeCDMX1.filter(function(student){return student.active}).length;

var activeCDMX2 = data['CDMX']['2017-2'].students;
    var activeCD2 = activeCDMX2.filter(function(student){return student.active}).length;

var activeLIM1 = data['LIM']['2016-2'].students;
    var activeLI1 = activeLIM1.filter(function(student){return student.active}).length;

var activeLIM2 = data['LIM']['2017-1'].students;
    var activeLI2 = activeLIM2.filter(function(student){return student.active}).length;

var activeLIM3 = data['LIM']['2017-2'].students;
    var activeLI3 = activeLIM3.filter(function(student){return student.active}).length;

var activeSCL1 = data['SCL']['2016-2'].students;
    var activeSC1 = activeSCL1.filter(function(student){return student.active}).length;

var activeSCL2 = data['SCL']['2017-1'].students;
    var activeSC2 = activeSCL2.filter(function(student){return student.active}).length;

var activeSCL3 = data['SCL']['2017-2'].students;
    var activeSC3 = activeSCL3.filter(function(student){return student.active}).length;

//Cargamos Los Complementos Para las graficas
google.load('visualization', '1.0', {'packages':['corechart']});
// Grafica de Estudiantes activas por sede
google.setOnLoadCallback(drawActive);
function drawActive(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL', activeG1 + activeG2],
          ['MEX', activeCD1 + activeCD2],
          ['LIM', activeLI1+activeLI2 + activeLI3],
          ['SCL', activeSC1+activeSC2+activeSC3],
      ]);

  var options = {'title':'Estudiantes activas por sede', //titulo de la grafica
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors: ['#1F618D']};
  var grafica = new google.visualization.ColumnChart(document.getElementById('chartActive')); //en que div del html ira (charActive)

  grafica.draw(dat, options);
};

// Estudiantes No Activas por sede
google.setOnLoadCallback(drawNoActive);
function drawNoActive(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL', (allGDL1+allGDL2)-(activeG1+activeG2)],
          ['MEX',(allCDMX1+allCDMX2)-(activeCD1+activeCD2)],
          ['LIM', (allLIM1+allLIM2+allLIM3)-(activeLI1+activeLI2 + activeLI3)],
          ['SCL', (allSCL1+allSCL2+allSCL3)-(activeSC1+activeSC2+activeSC3)],
      ]);
  var options = {'title':'Estudiantes no activas por sede',
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors: ['#1F618D']};
  var grafica = new google.visualization.ColumnChart(document.getElementById('chartNoActive'));
  grafica.draw(dat, options);
};

// Grafica de Estudiantes activas por Generacion GDL
google.setOnLoadCallback(drawActiveGDL);
function drawActiveGDL(){
  var dat = new google.visualization.DataTable();
    dat.addColumn('string', 'Ciudad');
    dat.addColumn('number', 'Estudiantes');
    dat.addRows([
          ['GDL1', activeG1],
          ['GDL2', activeG2],
        ]);

  var options = {'title':'Estudiantes activas por generacion',
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors: ['#76D7C4']};
  var grafica = new google.visualization.ColumnChart(document.getElementById('chartActiveGDL'));
  grafica.draw(dat, options);
};

// Grafica de Estudiantes activas por Generacion MEX
google.setOnLoadCallback(drawActiveMEX);
function drawActiveMEX(){
  var dat = new google.visualization.DataTable();
    dat.addColumn('string', 'Ciudad');
    dat.addColumn('number', 'Estudiantes');
    dat.addRows([
          ['MEX1', activeCD1],
          ['MEX2', activeCD2],
      ]);
  var options = {'title':'Estudiantes activas por generacion',
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors: ['#F7DC6F']};
  var grafica = new google.visualization.ColumnChart(document.getElementById('chartActiveMEX'));
  grafica.draw(dat, options);
};

// Grafica de Estudiantes activas por Generacion LIM
google.setOnLoadCallback(drawActiveLIM);
function drawActiveLIM(){
  var dat = new google.visualization.DataTable();
    dat.addColumn('string', 'Ciudad');
    dat.addColumn('number', 'Estudiantes');
    dat.addRows([
          ['LIM1', activeLI1],
          ['LIM2', activeLI2],
          ['LIM3', activeLI3],
      ]);
  var options = {'title':'Estudiantes activas por generacion',
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors: ['#EB984E']};
  var grafica = new google.visualization.ColumnChart(document.getElementById('chartActiveLIM'));
  grafica.draw(dat, options);
};

// Grafica de Estudiantes activas por Generacion SCL
google.setOnLoadCallback(drawActiveSCL);
function drawActiveSCL(){
  var dat = new google.visualization.DataTable();
    dat.addColumn('string', 'Ciudad');
    dat.addColumn('number', 'Estudiantes');
    dat.addRows([
          ['SCL1', activeSC1],
          ['SCL2', activeSC2],
          ['SCL3', activeSC3],
      ]);
  var options = {'title':'Estudiantes activas por generacion',
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors: ['#7DCEA0']};
  var grafica = new google.visualization.ColumnChart(document.getElementById('chartActiveSCL'));
  grafica.draw(dat, options);
};

// % Estudiantes No Activas por Generacion GDL
google.setOnLoadCallback(drawNoActiveGDL);
function drawNoActiveGDL(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Porcentaje');
      dat.addRows([
          ['GDL1', (allGDL1-activeG1)/allGDL1 * 100],
          ['GDL2', (allGDL2-activeG2)/allGDL2 * 100],
      ]);
  var options = {'title':' Estudiantes no activas por generacion',
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors:['#76D7C4']};

  var grafica = new google.visualization.ColumnChart(document.getElementById('chartNoActiveGDL'));
  grafica.draw(dat, options);
};

// Estudiantes No Activas por Generacion MEX
google.setOnLoadCallback(drawNoActiveMEX);
function drawNoActiveMEX(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['MEX1', (allCDMX1-activeCD1)/allCDMX1 * 100],
          ['MEX2', (allCDMX2-activeCD2)/allCDMX1 * 100],
      ]);
  var options = {'title':' Estudiantes no activas por generacion',
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors:['#F7DC6F']};

  var grafica = new google.visualization.ColumnChart(document.getElementById('chartNoActiveMEX'));
  grafica.draw(dat, options);
};

// Estudiantes No Activas por Generacion LIM
google.setOnLoadCallback(drawNoActiveLIM);
function drawNoActiveLIM(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['LIM1', (allLIM1-activeLI1)/allLIM1 * 100],
          ['LIM2', (allLIM2-activeLI2)/allLIM1 * 100],
          ['LIM3', (allLIM3-activeLI3)/allLIM1 * 100],
      ]);
  var options = {'title':' Estudiantes no activas por generacion',
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors:['#EB984E']};

  var grafica = new google.visualization.ColumnChart(document.getElementById('chartNoActiveLIM'));
  grafica.draw(dat, options);
};

// Estudiantes No Activas por Generacion SCL
google.setOnLoadCallback(drawNoActiveSCL);
function drawNoActiveSCL(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['SCL1', (allSCL1-activeSC1)/allSCL1 * 100],
          ['SCL2', (allSCL2-activeSC2)/allSCL1 * 100],
          ['SCL3', (activeSC3-allSCL3)/allSCL1 * 100], //ignora este dato el lunes hablo con levitha
      ]);
  var options = {'title':' Estudiantes no activas por generacion',
                       'width':600,
                       'height':300,
                       legend: 'none',
                       colors:['#7DCEA0']};

  var grafica = new google.visualization.ColumnChart(document.getElementById('chartNoActiveSCL'));
  grafica.draw(dat, options);
};

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

//GDL2
var satisfactionG2 = 0;
var allArrayG2 = [];
  sprintsG2 = [0, 0, 0, 0];
for (var i = 0; i < data['GDL']['2017-1'].ratings.length ; i++) {
    var superaG2=data['GDL']['2017-1'].ratings[i].student.supera;
    var cumpleG2=data['GDL']['2017-1'].ratings[i].student.cumple;
    var bothG2 = cumpleG2 + superaG2;
    satisfactionG2 += bothG2;
    allArrayG2[i] = data['GDL']['2017-1'].ratings[i].student.cumple;
}
var totalG2 = (satisfactionG2 / 3)
for (var i = 0; i < data['GDL']['2017-1'].ratings.length; i++) {
    sprintsG2[i] = allArrayG2[i];
}
//CDMX1
var satisfactionCD1 = 0;
var allArrayCD1 = [];
  sprintsCD1 = [0, 0, 0, 0];
for (var i = 0; i < data['CDMX']['2017-1'].ratings.length ; i++) {
    var cumpleCD1 = data['CDMX']['2017-1'].ratings[i].student.cumple;
    var  superaCD1= data['CDMX']['2017-1'].ratings[i].student.supera;
    var bothCD1 = cumpleCD1 + superaCD1;
    satisfactionCD1 += bothCD1;
    allArrayCD1[i] = data['CDMX']['2017-1'].ratings[i].student.cumple;
}
  var totalCD1 = (satisfactionCD1 / 3)
  for (var i = 0; i < data['CDMX']['2017-1'].ratings.length; i++) {
    sprintsCD1[i] = allArrayCD1[i];
}
//CDMX2
var satisfactionCD2 = 0;
var allArrayCD2 = [];
  sprintsCD2 = [0, 0, 0, 0];
for (var i = 0; i < data['CDMX']['2017-2'].ratings.length ; i++) {
    var cumpleCD2 = data['CDMX']['2017-2'].ratings[i].student.cumple;
    var  superaCD2= data['CDMX']['2017-2'].ratings[i].student.supera;
    var bothCD2 = cumpleCD2 + superaCD2;
    satisfactionCD2 += bothCD2;
    allArrayCD2[i] = data['CDMX']['2017-2'].ratings[i].student.cumple;
}
  var totalCD2 = (satisfactionCD2 / 2)
  for (var i = 0; i < data['CDMX']['2017-2'].ratings.length; i++) {
    sprintsCD2[i] = allArrayCD2[i];
}
 //LIM1
var satisfactionLI1 = 0;
var allArrayLI1 = [];
  sprintsLI1 = [0, 0, 0, 0];
for (var i = 0; i < data['LIM']['2016-2'].ratings.length ; i++) {
    var cumpleLI1 = data['LIM']['2016-2'].ratings[i].student.cumple;
    var  superaLI1= data['LIM']['2016-2'].ratings[i].student.supera;
    var bothLI1 = cumpleLI1 + superaLI1;
    satisfactionLI1 += bothLI1;
    allArrayLI1[i] = data['LIM']['2016-2'].ratings[i].student.cumple;
}
  var totalLI1 = (satisfactionLI1 / 2);
  for (var i = 0; i < data['LIM']['2016-2'].ratings.length; i++) {
    sprintsLI1[i] = allArrayLI1[i];
}
//LIM2
var satisfactionLI2 = 0;
var allArrayLI2 = [];
  sprintsLI2 = [0, 0, 0, 0];
for (var i = 0; i < data['LIM']['2017-1'].ratings.length ; i++) {
    var cumpleLI2 = data['LIM']['2017-1'].ratings[i].student.cumple;
    var  superaLI2= data['LIM']['2017-1'].ratings[i].student.supera;
    var bothLI2 = cumpleLI2 + superaLI2;
    satisfactionLI2 += bothLI2;
    allArrayLI2[i] = data['LIM']['2017-1'].ratings[i].student.cumple;
}
  var totalLI2 = (satisfactionLI2 / 4)
  for (var i = 0; i < data['LIM']['2017-1'].ratings.length; i++) {
    sprintsLI2[i] = allArrayLI2[i];
}
//LIM3
var satisfactionLI3 = 0;
var allArrayLI3 = [];
  sprintsLI3 = [0, 0, 0, 0];
for (var i = 0; i < data['LIM']['2017-2'].ratings.length ; i++) {
    var cumpleLI3 = data['LIM']['2017-2'].ratings[i].student.cumple;
    var  superaLI3= data['LIM']['2017-2'].ratings[i].student.supera;
    var bothLI3 = cumpleLI3 + superaLI3;
    satisfactionLI3 += bothLI3;
    allArrayLI3[i] = data['LIM']['2017-2'].ratings[i].student.cumple;
}
  var totalLI3 = (satisfactionLI3 / 2)
  for (var i = 0; i < data['LIM']['2017-2'].ratings.length; i++) {
    sprintsLI3[i] = allArrayLI3[i];
}
//SCL1
var satisfactionSC1 = 0;
var allArraySC1 = [];
  sprintsSC1 = [0, 0, 0, 0];
for (var i = 0; i < data['SCL']['2016-2'].ratings.length ; i++) {
    var cumpleSC1 = data['SCL']['2016-2'].ratings[i].student.cumple;
    var  superaSC1= data['SCL']['2016-2'].ratings[i].student.supera;
    var bothSC1 = cumpleSC1 + superaSC1;
    satisfactionSC1 += bothSC1;
    allArraySC1[i] = data['SCL']['2016-2'].ratings[i].student.cumple;
}
  var totalSC1 = (satisfactionSC1 / 4);
  for (var i = 0; i < data['SCL']['2016-2'].ratings.length; i++) {
    sprintsSC1[i] = allArraySC1[i];
}
//SCL2
var satisfactionSC2 = 0;
var allArraySC2 = [];
  sprintsSC2 = [0, 0, 0, 0];
for (var i = 0; i < data['SCL']['2017-1'].ratings.length ; i++) {
    var cumpleSC2 = data['SCL']['2017-1'].ratings[i].student.cumple;
    var  superaSC2= data['SCL']['2017-1'].ratings[i].student.supera;
    var bothSC2 = cumpleSC2 + superaSC2;
    satisfactionSC2 += bothSC2;
    allArraySC2[i] = data['SCL']['2017-1'].ratings[i].student.cumple;
}
  var totalSC2 = (satisfactionSC2 / 3);
  for (var i = 0; i < data['SCL']['2017-1'].ratings.length; i++) {
    sprintsSC2[i] = allArraySC2[i];
}
//SCL3
var satisfactionSC3 = 0;
var allArraySC3 = [];
  sprintsSC3 = [0, 0, 0, 0];
for (var i = 0; i < data['SCL']['2017-1'].ratings.length ; i++) {
    var cumpleSC3 = data['SCL']['2017-1'].ratings[i].student.cumple;
    var  superaSC3= data['SCL']['2017-1'].ratings[i].student.supera;
    var bothSC3 = cumpleSC3 + superaSC3;
    satisfactionSC3 += bothSC3;
    allArraySC3[i] = data['SCL']['2017-1'].ratings[i].student.cumple;
}
  var totalSC3 = (satisfactionSC3 / 3);
  for (var i = 0; i < data['SCL']['2017-1'].ratings.length; i++) {
    sprintsSC3[i] = allArraySC3[i];
}
// Grafica de Promedio de Sobre La satisfaccion De Las estudiantes Cumple + supera por SEDE
google.setOnLoadCallback(averageSat);
function averageSat(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Porcentaje');
      dat.addRows([
          ['GDL', (totalG1 + totalG2)/2],
          ['MEX', (totalCD1 + totalCD2)/2],
          ['LIM', (totalLI1+totalLI2+totalLI3)/3],
          ['SCL', (totalSC1+totalSC2+totalSC3)/3],
      ]);
  var options = {'title':'Estudiantes satisfechas por sede',
                       'width':500,
                       'height':300,
                       legend: 'none',
                       colors: ['#1F618D', '#2471A3', '#2980B9', '#5499C7']};
  var grafica = new google.visualization.BarChart(document.getElementById('averageSat'));
  grafica.draw(dat, options);
}
// Grafica de Promedio Sobre La satisfaccion De Las estudiantes Cumple + supera por Generacion GDL
google.setOnLoadCallback(averageSatGDL);
function averageSatGDL(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Promedio');
      dat.addRows([
          ['GDL1', totalG1],
          ['GDL2', totalG2],
      ]);
  var options = {'title':'Estudiantes satisfechas por generación',
                       'width':500,
                       'height':300,
                       legend: 'none',
                       colors:['#76D7C4', '#48C9B0', '#76D7C4']};
  var grafica = new google.visualization.BarChart(document.getElementById('averageSatGDL'));
  grafica.draw(dat, options);
}

// Grafica de Promedio Sobre La satisfaccion De Las estudiantes Cumple + supera por Generacion MEX
google.setOnLoadCallback(averageSatMEX);
function averageSatMEX(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Promedio');
      dat.addRows([
          ['MEX1', totalCD1],
          ['MEX2', totalCD2],
      ]);
  var options = {'title':'Estudiantes satisfechas por generación',
                       'width':500,
                       'height':300,
                       legend: 'none',
                       colors:['#F7DC6F', '#48C9B0', '#76D7C4']};
  var grafica = new google.visualization.BarChart(document.getElementById('averageSatMEX'));
  grafica.draw(dat, options);
}

// Grafica de Promedio Sobre La satisfaccion De Las estudiantes Cumple + supera por Generacion LIM
google.setOnLoadCallback(averageSatLIM);
function averageSatLIM(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Promedio');
      dat.addRows([
          ['LIM1', totalLI1],
          ['LIM2', totalLI2],
          ['LIM3', totalLI3],
      ]);
  var options = {'title':'Estudiantes satisfechas por generación',
                       'width':500,
                       'height':300,
                       legend: 'none',
                       colors:['#EB984E', '#48C9B0', '#76D7C4']};
  var grafica = new google.visualization.BarChart(document.getElementById('averageSatLIM'));
  grafica.draw(dat, options);
}

// Grafica de Promedio Sobre La satisfaccion De Las estudiantes Cumple + supera por Generacion SCL
google.setOnLoadCallback(averageSatSCL);
function averageSatSCL(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Promedio');
      dat.addRows([
          ['SCL1', totalSC1],
          ['SCL2', totalSC2],
          ['SCL3', totalSC3],
      ]);
  var options = {'title':'Estudiantes satisfechas por generación',
                       'width':500,
                       'height':300,
                       legend: 'none',
                       colors:['#7DCEA0', '#48C9B0', '#76D7C4']};
  var grafica = new google.visualization.BarChart(document.getElementById('averageSatSCL'));
  grafica.draw(dat, options);
}

// Obtenemos los datos de los Profesores y su promedio por generacion
//GDL1 Profe
var ratingTG1 = [];
var teacherG1 = 0;
for (var i = 0; i < data['GDL']['2016-2'].ratings.length ; i++) {
    var scoreTG1 = data['GDL']['2016-2'].ratings[i].teacher;
    teacherG1 += scoreTG1;
    ratingTG1[i] = data['GDL']['2016-2'].ratings[i].teacher;
}
var scoreTG1 = (teacherG1 / 4);

//GDL 2 Profe
var ratingTG2 = [];
var teacherG2 = 0;
for (var i = 0; i < data['GDL']['2017-1'].ratings.length ; i++) {
    var scoreTG2 = data['GDL']['2017-1'].ratings[i].teacher;
    teacherG2 += scoreTG2;
    ratingTG2[i] = data['GDL']['2017-1'].ratings[i].teacher;
}
var scoreTG2 = (teacherG2 / 3);

// GDL1 Jedi
var ratingJG1 = [];
var jediG1 = 0;
for (var i = 0; i < data['GDL']['2016-2'].ratings.length ; i++) {
    var scoreJG1 = data['GDL']['2016-2'].ratings[i].jedi;
    jediG1 += scoreJG1;
    ratingJG1[i] = data['GDL']['2016-2'].ratings[i].jedi;
}
var scoreJG1 = (jediG1 / 4);
// GDL2 Jedi
var ratingJG2 = [];
var jediG2 = 0;
for (var i = 0; i < data['GDL']['2017-1'].ratings.length ; i++) {
    var scoreJG2 = data['GDL']['2017-1'].ratings[i].jedi;
    jediG2 += scoreJG2;
    ratingJG2[i] = data['GDL']['2017-1'].ratings[i].jedi;
}
var scoreJG2 = (jediG2 / 3);
//CDMX1 Profes
var ratingTCM1 = [];
var teacherCM1 = 0;
for (var i = 0; i < data['CDMX']['2017-1'].ratings.length; i++) {
    var scoreTCM1 = data['CDMX']['2017-1'].ratings[i].teacher;
    teacherCM1 += scoreTCM1;
    ratingTCM1[i] = data['CDMX']['2017-1'].ratings[i].teacher;
}
var scoreTCM1 = (teacherCM1 / 3);
//CDMX2 Profes
var ratingTCM2 = [];
var teacherCM2 = 0;
for (var i = 0; i < data['CDMX']['2017-2'].ratings.length; i++) {
    var scoreTCM2 = data['CDMX']['2017-2'].ratings[i].teacher;
    teacherCM2 += scoreTCM2;
    ratingTCM2[i] = data['CDMX']['2017-2'].ratings[i].teacher;
}
var scoreTCM2 = (teacherCM2 / 3);
//CDMX1 Jedi
var ratingJCM1 = [];
var jediCM1 = 0;
for (var i = 0; i < data['CDMX']['2017-1'].ratings.length; i++) {
    var scoreJCM1 = data['CDMX']['2017-1'].ratings[i].jedi;
        jediCM1 += scoreJCM1;
        ratingJCM1[i] = data['CDMX']['2017-1'].ratings[i].jedi;
}
var scoreJCM1 = (jediCM1 / 3);
//CDMX2 Jedi
var ratingJCM2 = [];
var jediCM2 = 0;
for (var i = 0; i < data['CDMX']['2017-2'].ratings.length; i++) {
    var scoreJCM2 = data['CDMX']['2017-2'].ratings[i].jedi;
    jediCM2 += scoreJCM2;
    ratingJCM2[i] = data['CDMX']['2017-2'].ratings[i].jedi;
}
var scoreJCM2 = (jediCM2 / 3);
//LIM1 Profes
var ratingTLM1 = [];
var teacherLM1 = 0;
for (var i = 0; i < data['LIM']['2016-2'].ratings.length; i++) {
    var scoreTLM1 = data['LIM']['2016-2'].ratings[i].teacher;
    teacherLM1 += scoreTLM1;
    ratingTLM1[i] = data['LIM']['2016-2'].ratings[i].teacher;
}
var scoreTLM1 = (teacherLM1 / 2);
//LIM2 Profes
var ratingTLM2 = [];
var teacherLM2 = 0;
for (var i = 0; i < data['LIM']['2017-1'].ratings.length; i++) {
    var scoreTLM2 = data['LIM']['2017-1'].ratings[i].teacher;
    teacherLM2 += scoreTLM2;
    ratingTLM2[i] = data['LIM']['2017-1'].ratings[i].teacher;
}
var scoreTLM2 = (teacherLM2 / 4);
//LIM3 Profes
var ratingTLM3 = [];
var teacherLM3 = 0;

for (var i = 0; i < data['LIM']['2017-2'].ratings.length; i++) {
var scoreTLM3 = data['LIM']['2017-2'].ratings[i].teacher;
teacherLM3 += scoreTLM3;
ratingTLM3[i] = data['LIM']['2017-2'].ratings[i].teacher;
}
var scoreTLM3 = (teacherLM3 / 2);
//LIM1 Jedi
var ratingJLM1 = [];
var jediLM1 = 0;
for (var i = 0; i < data['LIM']['2016-2'].ratings.length; i++) {
    var scoreJLM1 = data['LIM']['2016-2'].ratings[i].jedi;
    jediLM1 += scoreJLM1;
    ratingJLM1[i] = data['LIM']['2016-2'].ratings[i].jedi;
}
var scoreJLM1 = (jediLM1 / 2);
//LIM2 Jedi
var ratingJLM2 = [];
var jediLM2 = 0;
for (var i = 0; i < data['LIM']['2017-1'].ratings.length; i++) {
    var scoreJLM2 = data['LIM']['2017-1'].ratings[i].jedi;
    jediLM2 += scoreJLM2;
    ratingJLM2[i] = data['LIM']['2017-1'].ratings[i].jedi;
}
var scoreJLM2 = (jediLM2 / 4);

//LIM3 Jedi
var ratingJLM3 = [];
var jediLM3 = 0;
for (var i = 0; i < data['LIM']['2017-2'].ratings.length; i++) {
    var scoreJLM3 = data['LIM']['2017-2'].ratings[i].jedi;
    jediLM3 += scoreJLM3;
    ratingJLM3[i] = data['LIM']['2017-2'].ratings[i].jedi;
}
var scoreJLM3 = (jediLM3 /2);
//SCL1 Profes
var ratingTSC1 = [];
var teacherSC1 = 0;
for (var i = 0; i < data['SCL']['2016-2'].ratings.length; i++) {
    var scoreTSC1 = data['SCL']['2016-2'].ratings[i].teacher;
    teacherSC1 += scoreTSC1;
    ratingTSC1[i] = data['SCL']['2016-2'].ratings[i].teacher;
}
var scoreTSC1 = (teacherSC1 / 4);
//SCL2 Profes
var ratingTSC2 = [];
var teacherSC2 = 0;
for (var i = 0; i < data['SCL']['2017-1'].ratings.length; i++) {
    var scoreTSC2 = data['SCL']['2017-1'].ratings[i].teacher;
    teacherSC2 += scoreTSC2;
    ratingTSC2[i] = data['SCL']['2017-1'].ratings[i].teacher;
}
var scoreTSC2 = (teacherSC2 / 3);
//SCL3 Profes
var ratingTSC3 = [];
var teacherSC3 = 0;
for (var i = 0; i < data['SCL']['2017-2'].ratings.length; i++) {
var scoreTSC3 = data['SCL']['2017-2'].ratings[i].teacher;
teacherSC3 += scoreTSC3;
ratingTSC3[i] = data['SCL']['2017-2'].ratings[i].teacher;
}
var scoreTSC3 = (teacherSC3 / 2);
//SCL1 Jedi
var ratingJSC1 = [];
var jediSC1 = 0;
for (var i = 0; i < data['SCL']['2016-2'].ratings.length; i++) {
    var scoreJSC1 = data['SCL']['2016-2'].ratings[i].jedi;
    jediSC1 += scoreJSC1;
    ratingJSC1[i] = data['SCL']['2016-2'].ratings[i].jedi;
}
var scoreJSC1 = (jediSC1 / 4);
//SCL2 Jedi
var ratingJSC2 = [];
var jediSC2 = 0;
for (var i = 0; i < data['SCL']['2017-1'].ratings.length; i++) {
    var scoreJSC2 = data['SCL']['2017-1'].ratings[i].jedi;
    jediSC2 += scoreJSC2;
    ratingJSC2[i] = data['SCL']['2017-1'].ratings[i].jedi;
}
var scoreJSC2 = (jediSC2 / 3);
//SCL3 Jedi
var ratingJSC3 = [];
var jediSC3 = 0;
for (var i = 0; i < data['SCL']['2017-2'].ratings.length; i++) {
    var scoreJSC3 = data['SCL']['2017-2'].ratings[i].jedi;
    jediSC3 += scoreJSC3;
    ratingJSC3[i] = data['SCL']['2017-2'].ratings[i].jedi;
}
var scoreJSC3 = (jediSC3 / 2);
// Grafica de Promedio de profesores por sede
google.setOnLoadCallback(averageTeach);
function averageTeach(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Puntuación promedio');
      dat.addRows([
          ['GDL', (scoreTG1 + scoreTG2)/2],
          ['MEX', (scoreTCM1 + scoreTCM2)/2],
          ['LIM', (scoreTLM1+scoreTLM2+scoreTLM3)/3],
          ['SCL', (scoreTSC1+scoreTSC2+scoreTSC3)/3],
      ]);
  var options = {'title':'Promedio profesores por sede', //titulo de la grafica
                       'width':500, //tamaños
                       'height':350,
                       legend: 'none',
                       colors:['#E6B0AA','#D98880','#CD6155', '#F2D7D5']};
  var grafica = new google.visualization.ColumnChart(document.getElementById('chartAveTeach')); //en que div del html ira (charActive)
  grafica.draw(dat, options);
}
// Grafica de Promedio de profesores por Generacion
google.setOnLoadCallback(averageTeach1);
function averageTeach1(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Puntuación promedio');
      dat.addRows([
          ['GDL1', scoreTG1],
          ['GDL2', scoreTG2],
          ['MEX1', scoreTCM1],
          ['MEX2', scoreTCM2],
          ['LIM1', scoreTLM1],
          ['LIM2', scoreTLM2],
          ['LIM3', scoreTLM3],
          ['SCL1', scoreTSC1],
          ['SCL2', scoreTSC2],
          ['SCL3', scoreTSC3],
      ]);
  var options = {'title':'Promedio profesores por generación',
                      'width':550,
                      'height':350,
                      legend: 'none',
                      colors:['#CD6155']};
  var grafica = new google.visualization.BarChart(document.getElementById('chartAveTeach1'));
  grafica.draw(dat, options);
}
// Grafica de Promedio de jedi por sede
google.setOnLoadCallback(averageJedi);
function averageJedi(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Puntuación promedio');
      dat.addRows([
          ['GDL', (scoreJG1 + scoreJG2)/2],
          ['MEX', (scoreJCM1 + scoreJCM2)/2],
          ['LIM', (scoreJLM1+scoreJLM2+scoreJLM3)/3],
          ['SCL', (scoreJSC1+scoreJSC2+scoreJSC3)/3],
      ]);
  var options = {'title':'Promedio jedi por sede', //titulo de la grafica
                       'width':500, //tamaños
                       'height':350,
                       legend: 'none',
                       colors:['#CD6155','#D98880','#E6B0AA','#F2D7D5']};
  var grafica = new google.visualization.ColumnChart(document.getElementById('chartAveJedi')); //en que div del html ira (charActive)
  grafica.draw(dat, options);
}
// Grafica de Promedio de jedi por Generacion
google.setOnLoadCallback(averageJedi1);
function averageJedi1(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Puntuación promedio');
      dat.addRows([
          ['GDL1', scoreJG1],
          ['GDL2', scoreJG2],
          ['MEX1', scoreJCM1],
          ['MEX2', scoreJCM2],
          ['LIM1', scoreTLM1],
          ['LIM2', scoreJLM2],
          ['LIM3', scoreJLM3],
          ['SCL1', scoreJSC1],
          ['SCL2', scoreJSC2],
          ['SCL3', scoreJSC3],
      ]);
  var options = {'title':'Promedio jedi por Generacion',
                       'width':550,
                       'height':350,
                       legend: 'none',
                       colors: ['#D98880']
                };
  var grafica = new google.visualization.BarChart(document.getElementById('chartAveJedi1'));
  grafica.draw(dat, options);
}
//Nombre de estiudiantes NO Activas GDL
function name(){
    var noactiveG1 = '';
    var names = document.getElementById('names')
    for (var i = 0; i < data['GDL']['2016-2'].students.length ; i++){
        if(!data['GDL']['2016-2'].students[i].active){
          var li = document.createElement('li')
          var name = document.createTextNode(data['GDL']['2016-2'].students[i].name)
          li.appendChild(name)
          names.appendChild(li)
        }
    }
    for (var i = 0; i < data['GDL']['2017-1'].students.length ; i++){
        if(!data['GDL']['2017-1'].students[i].active){
          var li = document.createElement('li')
          var name = document.createTextNode(data['GDL']['2017-1'].students[i].name)
          li.appendChild(name)
          names.appendChild(li)
        }
      }
    return noactiveG1;
};
name()

//Nombre de estiudiantes NO Activas MEX
function name(){
    var noactiveG1 = '';
    var names = document.getElementById('names1')
    for (var i = 0; i < data['CDMX']['2017-1'].students.length ; i++){
        if(!data['CDMX']['2017-1'].students[i].active){
          var li = document.createElement('li')
          var name = document.createTextNode(data['CDMX']['2017-1'].students[i].name)
          li.appendChild(names1)
          names.appendChild(li)
        }
    }
    for (var i = 0; i < data['CDMX']['2017-2'].students.length ; i++){
        if(!data['CDMX']['2017-2'].students[i].active){
          var li = document.createElement('li')
          var name = document.createTextNode(data['CDMX']['2017-2'].students[i].name)
          li.appendChild(names1)
          names.appendChild(li)
        }
      }
    return noactiveG1;
};
