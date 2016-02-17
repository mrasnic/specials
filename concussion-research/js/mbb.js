$(function () {

    // Make monochrome colors and set them as default for all pies
    Highcharts.setOptions({
 colors: ['#D3D3D3', '#E02127', '#9F1D22']
});

    // Build the chart
    $('#mbb').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ' '
        },
         credits: {
            enabled: false
        },

        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            showInLedgend: false,
                name: "<b><?php echo $title; ?></b>",
            data: [
                { name: 'No Concussions', y: 81.6 },
                { name: 'One Concussions', y: 13},
                { name: 'Multiple Concussions', y: 5.5 },
            ]
        }]
    });
});
