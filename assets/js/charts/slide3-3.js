var chart33 = echarts.init(document.querySelector('#slide3-3'), null)
var app = {}
var option;
option = {
    legend: {
        top: '0%',
        left: 'center'
    },
    grid: {
        top: '0%',
        left: '0%',
        right: '0.1%',
        bottom: '2.2%',
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
            return d.value + '%'
        }
    },
    xAxis: {
        type: 'category',
        data: ['Total IB', 'Grande Corporate', 'Mediana', 'Pequeña', 'Microemprendimiento'],
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: {
            fontSize: 12,
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            data: [
                { value: 84, itemStyle: { color: '#00984a' } },
                { value: 89, itemStyle: { color: '#66c2a5' } },
                { value: 84, itemStyle: { color: '#66c2a5' } },
                { value: 83, itemStyle: { color: '#66c2a5' } },
                { value: 81, itemStyle: { color: '#66c2a5' } }
            ],
            type: 'bar'
        }
    ]
}
if (option && typeof option === 'object') {
    chart33.setOption(option)
}

window.addEventListener('resize', function () {
    chart33.resize()
})
