var chart41 = echarts.init(document.querySelector('#slide4-1'), null);
var app = {};
var option;
option = {
    legend: {
        top: '0%',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    title: {
        text: `47`,
        left: 'center',
        top: 'center',
        textStyle: {
            fontFamily: 'sans-serif',
            color: '#000',
            fontSize: '36',
            fontWeight: 'bold'
        }
    },
    series: [
        {
            textStyle: {
                fontFamily: 'Times',
            },
            name: 'NPS YTD',
            type: 'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            data: [
                { value: 513, name: 'Promotores', itemStyle: { color: '#66c2a5' } },
                { value: 199, name: 'Pasivos', itemStyle: { color: '#fee08b' } },
                { value: 120, name: 'Detractores', itemStyle: { color: '#d53e4f' } },
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    chart41.setOption(option);
}

window.addEventListener('resize', function () {
    chart41.resize();
})
