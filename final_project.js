function init() {
    barChart()
    pieChart()
    barChart2()
    pieChart2()

    top100Promise = loadJSON('top100_players.json');
    top100Promise.then(function (sales) {
		barChart(sales);
	});

}


async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json();
    return dataset;
}

function barChart(sales) {
    var keys = [];
    for(var k in sales) keys.push(k);
    // obj = JSON.parse(JSON.stringify(sales))
    console.log(sales);



    // Highcharts.chart('bar-chart', {
    //     chart: {
    //         type: 'bar',
    //     },
    //     title: {
    //         text: 'Counts of Dingus and Widget per Day'
    //     },
    //     xAxis: {
    //         categories: dateHistory
    //     },
    //     yAxis: {
    //         min: 0,
    //         max: 10,
    //         title: {
    //             text: 'Number of Dingus or Widget'
    //         }
    //     },
    //     plotOptions: {
    //         series: {
    //             stacking: 'normal'
    //         }
    //     },
    //     series: [{
    //         name: 'Dingus',
    //         data: dingusHistory
    //     }, {
    //         name: 'Widget',
    //         data: widgetHistory
    //     }]
    // });
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
