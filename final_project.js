function init() {
    pieChart();
    barChart2();
    pieChart2();
    slider();
}


async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json();
    return dataset;
}

function slider () {
    var rangeslider = document.getElementById("sliderRange"); 
    var output = document.getElementById("demo"); 
    output.innerHTML = rangeslider.value; 
    top100Promise = loadJSON('players.json');
    rangeslider.oninput = function() { 
        output.innerHTML = this.value; 

        top100Promise.then(function (top100) {
            barChart(top100, rangeslider.value);
            
        })
    } 
 
}

function barChart(json, year) {
    console.log(year);
    console.log(json);
    var top100_val = json['top'];
    var bottom_val = json['bot']

    var keys = [];
    for(var k in top100_val[year]) keys.push(k);

    var values = [];
    for(var key in keys) values.push(top100_val[year][keys[key]]);


    var bot_keys = [];
    for(var k in bottom_val[year]) bot_keys.push(k);

    var bot_values = [];
    for(var key in bot_keys) bot_values.push(bottom_val[year][bot_keys[key]]);


    Highcharts.chart('bar-chart', {
        chart: {
            type: 'column',
        },
        title: {
            text: 'Counts of Dingus and Widget per Day'
        },
        xAxis: {
            categories: keys
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Number of Dingus or Widget'
            }
        },
        // plotOptions: {
        //     series: {
        //         stacking: 'normal'
        //     }
        // },
        series: [{
            name: 'Dingus',
            data: values
        },
                {
            name: 'test',
            data: bot_values

        }]
    });
}

function barChart2() {
	var dingus = 2;
	var widget = 4;
    
    Highcharts.chart('bar-chart2', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Total Dingus vs. Widget'
        },
        series: [{
            data: [{
                name: 'Dingus',
                y: dingus
            },
            {
                name: 'Widget',
                y: widget
            }]
        }]
    });
}

function pieChart() {
	var dingus = 2;
	var widget = 4;
    
    Highcharts.chart('pie-chart', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Total Dingus vs. Widget'
        },
        series: [{
            data: [{
                name: 'Dingus',
                y: dingus
            },
            {
                name: 'Widget',
                y: widget
            }]
        }]
	});
}

function pieChart2() {
	var dingus = 2;
	var widget = 4;
    
    Highcharts.chart('pie-chart2', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Total Dingus vs. Widget'
        },
        series: [{
            data: [{
                name: 'Dingus',
                y: dingus
            },
            {
                name: 'Widget',
                y: widget
            }]
        }]
	});
}
