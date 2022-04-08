var chart73 = echarts.init(document.querySelector('#slide7-3'), null);
var app = {};
var option;
option = {
    legend: {
        top: '0%',
        left: 'center',
    },
    grid: {
        top: '20%',
        left: '0%',
        right: '0.1%',
        bottom: '0%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
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
        data: ['2021-Q3', '2021-Q4', '2021-Q1'],
        axisLabel: {
            fontSize: 14,
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: {
            fontSize: 12,
            show: false,
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: 'Evolutivo Facilidad - TTB',
            type: 'line',
            data: [85, 83, 82],
            itemStyle: { color: '#555' }
        }
    ]
};

if (option && typeof option === 'object') {
    chart73.setOption(option);
}

window.addEventListener('resize', function () {
    chart73.resize();
})
