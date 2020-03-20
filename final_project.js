function init() {
    pieChart();
    lineChart();
    pieChart2();
    slider();
    top100Promise.then(function (top100) {
        barChart(top100, 2017);
        
    })
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
            text: 'Number of Top Tennis Players per Country'
        },
        xAxis: {
            categories: keys,
            title: {
                text: 'Country'
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Number of Tennis Players'
            }
        },
        series: [{
            name: 'Players ranked 1-100',
            data: values
        },
                {
            name: 'Players Ranked 101-2000',
            data: bot_values

        }]
    });
}

function updateLine() {

}

function lineChart(player) {
    var points_dict = {
        "Novak Djokovic" : [20, 229, 515, 1465, 4470, 5390, 10650, 8310, 14720, 13630, 13280, 13130, 16785, 16950, 11780],
        "Andy Murray" :  [37, 65, 587, 1400, 2125, 3720, 9700, 7800, 7825, 8570, 9360, 5560, 8945, 12685, 12560],
        "Kei Nishikori" : [0, 0, 37, 150, 652, 1325, 554, 1500, 2315, 2495, 5025, 6385, 4905, 5010],
        "Alexander Zverev" : [0, 0, 0, 0, 0, 0, 0, 0, 15, 31, 398, 689, 1745, 4610],
        "Milos Raonic" : [0, 0, 0, 2, 12, 106, 345, 1367, 2380, 2860, 4440, 5160, 5450, 5450]
    }
    var rank_dict = {
        "Novak Djokovic" : [690, 410, 122, 44, 6, 3, 3, 2, 2, 1, 1, 1, 1, 1, 4],
        "Andy Murray" :  [656, 516, 247, 35, 13, 9, 3, 4, 4, 4, 3, 8, 3, 2, 2],
        "Kei Nishikori" : [0, 0, 955, 424, 117, 178, 323, 50, 18, 15, 11, 6, 6, 10],
        "Alexander Zverev" : [0, 0, 0, 0, 0, 0, 0, 0, 1153, 803, 437, 99, 39, 13],
        "Milos Raonic" : [0, 0, 0, 1389, 1031, 645, 279, 41, 20, 13, 9, 9, 8, 9]
    }
    console.log(player);
    Highcharts.chart('line-chart', {

        title: {
            text: 'Ranking Points by Year of 2017 ATP Top 5, 1973-2017'
        },
    
        subtitle: {
            text: 'temp'
        },
    
        yAxis: {
            title: {
                text: 'ATP Ranking Points'
            }
        },
    
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            },
            title: {
                text: 'Year'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2003
            }
        },
    
        series: [{
            name: player,
            data: points_dict[player]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
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
