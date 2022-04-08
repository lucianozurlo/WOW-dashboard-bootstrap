var chart43 = echarts.init(document.querySelector('#slide4-3'), null);
var app = {};
var option;
option = {
    legend: {
        top: '0%',
        left: 'center',
    },
    grid: {
        top: '15%',
        left: '-3.5%',
        right: '0.1%',
        bottom: '0%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    label: {
        show: true,
        fontSize: '12',
        formatter: function (d) {
            return d.value + "%";
        }
    },
    xAxis: {
        type: 'category',
        data: ['2021-Q4', '2021-Q3', '2021-Q1'],
        axisLabel: {
            fontSize: 12,
        }
    },
    yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 100,
    },
    series: [
        {
            name: 'Detractores',
            type: 'bar',
            barWidth: '50%',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#d53e4f' },
            data: [16, 14, 11]
        },
        {
            name: 'Pasivos',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#fee08b' },
            data: [23, 23, 30]
        },
        {
            name: 'Promotores',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#66c2a5' },
            data: [61, 63, 59]
        }
    ]
};

if (option && typeof option === 'object') {
    chart43.setOption(option);
}

window.addEventListener('resize', function () {
    chart43.resize();
})
