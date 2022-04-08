var chart72 = echarts.init(document.querySelector('#slide7-2'), null);
var app = {};
var option;
option = {
    legend: {
        top: '0%',
        left: 'center',
    },
    grid: {
        top: '8%',
        left: '0%',
        right: '0%',
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
        type: 'value',
        show: false,
    },
    yAxis: {
        type: 'category',
        show: false
    },


    series: [
        {
            name: 'Nada fácil',
            type: 'bar',
            barWidth: '30%',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#d53e4f' },
            data: [3]
        },
        {
            name: 'Poco fácil',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#ea8f6d' },
            data: [3]
        },
        {
            name: 'Ni fácil, ni difícil',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#ffe08a' },
            data: [11]
        },
        {
            name: 'Fácil',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#b3d198' },
            data: [36]
        },
        {
            name: 'Muy fácil',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#66c2a5' },
            data: [47]
        }
    ]
};

if (option && typeof option === 'object') {
    chart72.setOption(option);
}

window.addEventListener('resize', function () {
    chart72.resize();
})
