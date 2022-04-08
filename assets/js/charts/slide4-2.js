var chart42 = echarts.init(document.querySelector('#slide4-2'), null);
var app = {};
var option;
option = {
    legend: {
        top: '0%',
        left: 'center',
    },
    grid: {
        top: '0%',
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
        data: ['2021-Q4', '2021-Q3', '2022-Q1'],
        axisLabel: {
            fontSize: 12,
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
            name: 'Evolutivo NPS',
            type: 'line',
            data: [49, 48, 45],
            itemStyle: { color: '#555' }
        }
    ]
};

if (option && typeof option === 'object') {
    chart42.setOption(option);
}

window.addEventListener('resize', function () {
    chart42.resize();
})
