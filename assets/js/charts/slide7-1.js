var chart71 = echarts.init(document.querySelector('#slide7-1'), null);
var app = {};
var option;
option = {
    legend: {
        top: '0%',
        left: 'center',
    },
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            progress: {
                show: true,
                width: 33,
                itemStyle: { color: '#66c2a5' }
            },
            axisLine: {
                lineStyle: {
                    width: 33
                }
            },
            axisTick: {
                show: true
            },
            splitLine: {
                length: 10,
                lineStyle: {
                    width: 2,
                    color: '#555'
                }
            },
            axisLabel: {
                show: false
            },
            anchor: {
                show: true,
                showAbove: true,
                size: 15,
                itemStyle: {
                    borderWidth: 1
                },
                itemStyle: { color: '#555' }
            },
            pointer: {
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: '50%',
                width: 6,
                offsetCenter: [0, '5%']
            },
            detail: {
                valueAnimation: true,
                fontSize: 25,
                offsetCenter: [0, '30%']
            },
            data: [
                {
                    value: 84,
                    itemStyle: { color: '#555' }
                }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    chart71.setOption(option);
}

window.addEventListener('resize', function () {
    chart71.resize();
})
