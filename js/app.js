// Variables globales
//con esto solo jalamos la informacion de los objetos que estan en el archivo data.js
var allGDL1 = (data['GDL']['2017-1'].students.length);
var allCDMX1 = (data['CDMX']['2017-1'].students.length);
var allCDMX2 = (data['CDMX']['2017-2'].students.length);
var allLIM1 = (data['LIM']['2016-2'].students.length);
var allLIM2 = (data['LIM']['2017-1'].students.length);
var allLIM3 = (data['LIM']['2017-2'].students.length);
var allSCL1 = (data['LIM']['2016-2'].students.length);
var allSCL2 = (data['LIM']['2017-1'].students.length);
var allSCL3 = (data['LIM']['2017-2'].students.length);
//Establecemos las estudiantes activas por sede y generacion
//tenemos que iterar con el for dentro de los objertos para llegar a la key active
var activeGDL1 = data['GDL']['2017-1'].students;
    activeG1=activeGDL1.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeGDL1.length; i++){
    }
var activeCDMX1 = data['CDMX']['2017-1'].students;
    activeCD1=activeCDMX1.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeCDMX1.length; i++){
    }
var activeCDMX2 = data['CDMX']['2017-2'].students;
    activeCD2=activeCDMX2.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeCDMX2.length; i++){
    }
var activeLIM1 = data['LIM']['2016-2'].students;
    activeLI1=activeLIM1.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeLIM1.length; i++){
    }
var activeLIM2 = data['LIM']['2017-1'].students;
    activeLI2=activeLIM2.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeLIM2.length; i++){
    }
var activeLIM3 = data['LIM']['2017-2'].students;
    activeLI3=activeLIM3.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeLIM3.length; i++){
    }
var activeSCL1 = data['SCL']['2016-2'].students;
    activeSC1=activeSCL1.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeSCL1.length; i++){
    }
var activeSCL2 = data['SCL']['2017-1'].students;
    activeSC2=activeSCL2.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeSCL2.length; i++){
    }
var activeSCL3 = data['SCL']['2017-2'].students;
    activeSC3=activeSCL3.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeSCL3.length; i++){
    }
//Cargamos Los Complementos Para las graficas
google.load('visualization', '1.0', {'packages':['corechart']});
// Grafica de Estudiantes activas por sede
google.setOnLoadCallback(drawActive);
function drawActive(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL', activeG1],
          ['MEX', activeCD1 + activeCD2],
          ['LIM', activeLI1+activeLI2 + activeLI3],
          ['PER', activeSC1+activeSC2+activeSC3],
      ]);
  var options = {'title':'Activas Por Sede', //titulo de la grafica
                       'width':550, //tamaños
                       'height':400};
  var grafica = new google.visualization.BarChart(document.getElementById('chartActive')); //en que div del html ira (charActive)
  grafica.draw(dat, options);
}
// Grafica de Estudiantes activas por Generacion
google.setOnLoadCallback(drawActive1);
function drawActive1(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL1', activeG1],
          ['MEX1', activeCD1],
          ['MEX2', activeCD2],
          ['LIM1', activeLI1],
          ['LIM2', activeLI2],
          ['LIM3', activeLI3],
          ['PER', activeSC1],
          ['PER', activeSC2],
          ['PER', activeSC3],
      ]);
  var options = {'title':' Activas Por Generacion',
                       'width':550,
                       'height':400};
  var grafica = new google.visualization.BarChart(document.getElementById('chartActive1'));
  grafica.draw(dat, options);
}
// Estudiantes No Activas por sede
google.setOnLoadCallback(drawNoActive);
function drawNoActive(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL', allGDL1-activeG1],
          ['MEX',(allCDMX1+allCDMX2)-(activeCD1+activeCD2)],
          ['LIM', (allLIM1+allLIM2+allLIM3)-(activeLI1+activeLI2 + activeLI3)],
          ['PER', (allSCL1+allSCL2+allSCL3)-(activeSC1+activeSC2+activeSC3)],
      ]);
  var options = {'title':'No Activas Por Sede',
                       'width':500,
                       'height':250};
  var grafica = new google.visualization.BarChart(document.getElementById('chartNoActive'));
  grafica.draw(dat, options);
}
// Estudiantes No Activas por Generacion
google.setOnLoadCallback(drawNoActive1);
function drawNoActive1(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL1', allGDL1-activeG1],
          ['MEX1', allCDMX1-activeCD1],
          ['MEX2', allCDMX2-activeCD2],
          ['LIM1', allLIM1-activeLI1],
          ['LIM2', allLIM2-activeLI2],
          ['LIM3', allLIM3-activeLI3],
          ['PER1', allSCL1-activeSC1],
          ['PER2', allSCL2-activeSC2],
          ['PER3', activeSC3-allSCL3], //ignora este dato el lunes hablo con levitha
      ]);
  var options = {'title':' No Activas Por Generacion',
                       'width':500,
                       'height':300};
  var grafica = new google.visualization.BarChart(document.getElementById('chartNoActive1'));
  grafica.draw(dat, options);
}
// Obtenemos los datos de los Profesores y su promedio por generacion
//GDL 1  datos para grafica PROMEDIO ****scoreJG1****
var ratingTG1 = [];
var teacherG1 = 0;
for (var i = 0; i < data['GDL']['2017-1'].ratings.length ; i++) {
    var scoreTG1 = data['GDL']['2017-1'].ratings[i].teacher;
    teacherG1 += scoreTG1;
    ratingTG1[i] = data['GDL']['2017-1'].ratings[i].teacher;
}
var scoreTG1 = (teacherG1 / 3);
// Obtenemos los datos de los Jedi y su promedio por generacion
var ratingJG1 = [];
var jediG1 = 0;
for (var i = 0; i < data['GDL']['2017-1'].ratings.length ; i++) {
    var scoreJG1 = data['GDL']['2017-1'].ratings[i].jedi;
    jediG1 += scoreJG1;
    ratingJG1[i] = data['GDL']['2017-1'].ratings[i].jedi;
}
var scoreJG1 = (jediG1 / 3);
//CDMX1 Profes
var ratingTCM1 = [];
var teacherCM1 = 0;
for (var i = 0; i < data['CDMX']['2017-1'].ratings.length; i++) {
    var scoreTCM1 = data['CDMX']['2017-1'].ratings[i].teacher;
    teacherCM1 += scoreTCM1;
    ratingTCM1[i] = data['CDMX']['2017-1'].ratings[i].teacher;
}
var scoreTCM1 = (teacherCM1 / 3);
//CDMX1 Jedi
var ratingJCM1 = [];
var jediCM1 = 0;
for (var i = 0; i < data['CDMX']['2017-1'].ratings.length; i++) {
    var scoreJCM1 = data['CDMX']['2017-1'].ratings[i].jedi;
        jediCM1 += scoreJCM1;
        ratingJCM1[i] = data['CDMX']['2017-1'].ratings[i].jedi;
}
var scoreJCM1 = (jediCM1 / 3);
//CDMX2 Profes
var ratingTCM2 = [];
var teacherCM2 = 0;
for (var i = 0; i < data['CDMX']['2017-2'].ratings.length; i++) {
    var scoreTCM2 = data['CDMX']['2017-2'].ratings[i].teacher;
    teacherCM2 += scoreTCM2;
    ratingTCM2[i] = data['CDMX']['2017-2'].ratings[i].teacher;
}
var scoreTCM2 = (teacherCM2 / 3);
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
//LIM1 Jedi
var ratingJLM1 = [];
var jediLM1 = 0;
for (var i = 0; i < data['LIM']['2016-2'].ratings.length; i++) {
    var scoreJLM1 = data['LIM']['2016-2'].ratings[i].jedi;
    jediLM1 += scoreJLM1;
    ratingJLM1[i] = data['LIM']['2016-2'].ratings[i].jedi;
}
var scoreJLM1 = (jediLM1 / 2);
    //LIM2 Profes
var ratingTLM2 = [];
var teacherLM2 = 0;
for (var i = 0; i < data['LIM']['2017-1'].ratings.length; i++) {
    var scoreTLM2 = data['LIM']['2017-1'].ratings[i].teacher;
    teacherLM2 += scoreTLM2;
    ratingTLM2[i] = data['LIM']['2017-1'].ratings[i].teacher;
}
var scoreTLM2 = (teacherLM2 / 4);
    //LIM2 Jedi
var ratingJLM2 = [];
var jediLM2 = 0;
for (var i = 0; i < data['LIM']['2017-1'].ratings.length; i++) {
    var scoreJLM2 = data['LIM']['2017-1'].ratings[i].jedi;
    jediLM2 += scoreJLM2;
    ratingJLM2[i] = data['LIM']['2017-1'].ratings[i].jedi;
}
var scoreJLM2 = (jediLM2 / 4);
    //LIM3 Profes
var ratingTLM3 = [];
var teacherLM3 = 0;

for (var i = 0; i < data['LIM']['2017-2'].ratings.length; i++) {
    var scoreTLM3 = data['LIM']['2017-2'].ratings[i].teacher;
    teacherLM3 += scoreTLM3;
    ratingTLM3[i] = data['LIM']['2017-2'].ratings[i].teacher;
}
var scoreTLM3 = (teacherLM3 / 2);
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
    //SCL1 Jedi
var ratingJSC1 = [];
var jediSC1 = 0;
for (var i = 0; i < data['SCL']['2016-2'].ratings.length; i++) {
    var scoreJSC1 = data['SCL']['2016-2'].ratings[i].jedi;
    jediSC1 += scoreJSC1;
    ratingJSC1[i] = data['SCL']['2016-2'].ratings[i].jedi;
}
var scoreJSC1 = (jediSC1 / 4);
    //SCL2 Profes
var ratingTSC2 = [];
var teacherSC2 = 0;
for (var i = 0; i < data['SCL']['2017-1'].ratings.length; i++) {
    var scoreTSC2 = data['SCL']['2017-1'].ratings[i].teacher;
    teacherSC2 += scoreTSC2;
    ratingTSC2[i] = data['SCL']['2017-1'].ratings[i].teacher;
}
var scoreTSC2 = (teacherSC2 / 3);
    //SCL2 Jedi
var ratingJSC2 = [];
var jediSC2 = 0;
for (var i = 0; i < data['SCL']['2017-1'].ratings.length; i++) {
    var scoreJSC2 = data['SCL']['2017-1'].ratings[i].jedi;
    jediSC2 += scoreJSC2;
    ratingJSC2[i] = data['SCL']['2017-1'].ratings[i].jedi;
}
var scoreJSC2 = (jediSC2 / 3);
    //SCL3 Profes
var ratingTSC3 = [];
var teacherSC3 = 0;
for (var i = 0; i < data['SCL']['2017-2'].ratings.length; i++) {
    var scoreTSC3 = data['SCL']['2017-2'].ratings[i].teacher;
    teacherSC3 += scoreTSC3;
    ratingTSC3[i] = data['SCL']['2017-2'].ratings[i].teacher;
}
var scoreTSC3 = (teacherSC3 / 2);
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
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL', scoreTG1],
          ['MEX', (scoreJCM1 + scoreJCM2)/2],
          ['LIM', (scoreTLM1+scoreTLM2+scoreTLM3)/3],
          ['PER', (scoreTSC1+scoreTSC2+scoreTSC3)/3],
      ]);
  var options = {'title':'Jedi Por Sede', //titulo de la grafica
                       'width':500, //tamaños
                       'height':300};
  var grafica = new google.visualization.BarChart(document.getElementById('chartAveTeach')); //en que div del html ira (charActive)
  grafica.draw(dat, options);
}

// Grafica de Promedio de profesores por Generacion
google.setOnLoadCallback(averageTeach1);
function averageTeach1(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL1', scoreTG1],
          ['MEX1', scoreTCM1],
          ['MEX2', scoreTCM2],
          ['LIM1', scoreTLM1],
          ['LIM2', scoreTLM2],
          ['LIM3', scoreTLM3],
          ['PER1', scoreTSC1],
          ['PER2', scoreTSC2],
          ['PER3', scoreTSC3],
      ]);
  var options = {'title':'Profesores Por Generacion',
                       'width':500,
                       'height':300};
  var grafica = new google.visualization.BarChart(document.getElementById('chartAveTeach1'));
  grafica.draw(dat, options);
}
// Grafica de Promedio de jedi por sede
google.setOnLoadCallback(averageJedi);
function averageJedi(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL', scoreJG1],
          ['MEX', (scoreJCM1 + scoreJCM2)/2],
          ['LIM', (scoreJLM1+scoreJLM2+scoreJLM3)/3],
          ['PER', (scoreJSC1+scoreJSC2+scoreJSC3)/3],
      ]);
  var options = {'title':'Jedi Por Sede', //titulo de la grafica
                       'width':500, //tamaños
                       'height':300};
  var grafica = new google.visualization.BarChart(document.getElementById('chartAveJedi')); //en que div del html ira (charActive)
  grafica.draw(dat, options);
}
// Grafica de Promedio de jedi por Generacion
google.setOnLoadCallback(averageJedi1);
function averageJedi1(){
  var dat = new google.visualization.DataTable();
      dat.addColumn('string', 'Ciudad');
      dat.addColumn('number', 'Estudiantes');
      dat.addRows([
          ['GDL1', scoreJG1],
          ['MEX1', scoreJCM1],
          ['MEX2', scoreJCM2],
          ['LIM1', scoreTLM1],
          ['LIM2', scoreJLM2],
          ['LIM3', scoreJLM3],
          ['PER1', scoreJSC1],
          ['PER2', scoreJSC2],
          ['PER3', scoreJSC3],
      ]);
  var options = {'title':'Jedi Por Generacion',
                       'width':500,
                       'height':300};
  var grafica = new google.visualization.BarChart(document.getElementById('chartAveJedi1'));
  grafica.draw(dat, options);
}
