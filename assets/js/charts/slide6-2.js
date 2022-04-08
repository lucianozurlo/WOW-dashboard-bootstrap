var chart62 = echarts.init(document.querySelector('#slide6-2'), null);
var app = {};
var option;
option = {
    legend: {
        top: '10%',
        left: 'center',
    },
    grid: {
        top: '20%',
        left: '0%',
        right: '0.1%',
        bottom: '20%',
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
        data: ['2022-Q1', '2021-Q4', '2021-Q3'],
        axisLabel: {
            fontSize: '12'
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: {
            fontSize: '12',
            show: false,
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: 'TTB',
            type: 'line',
            data: [88, 85, 84],
            itemStyle: { color: '#333' }
        },
        {
            name: 'TB',
            type: 'line',
            data: [53, 51, 47],
            itemStyle: { color: '#aaa' }
        }
    ]
};

if (option && typeof option === 'object') {
    chart62.setOption(option);
}

window.addEventListener('resize', function () {
    chart62.resize();
})
