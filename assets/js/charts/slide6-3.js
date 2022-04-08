var chart63 = echarts.init(document.querySelector('#slide6-3'), null);
var app = {};
var option;
option = {
    legend: {
        top: '0%',
        left: 'center',
        width: '70%',
    },
    grid: {
        top: '12%',
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
        axisLabel: {
            fontSize: 14,
        }
    },
    yAxis: {
        type: 'category',
        data: [
            'Adaptación a las necesidades de mi empresa/negocio.',
            'El sistema de autentificación Token.',
            'Información sobre normativas y regulaciones del mercado.',
            'Información sobre nuevos servicios y actualizaciones.',
            'La agilidad y rapidez para realizar las gestiones.',
            'La atención brindada.',
            'La confianza que me brinda Interbanking.',
            'La estabilidad de la plataforma para operar.',
            'La información acerca del estado de las finanzas.',
            'La innovación aplicada a la mejora de la operación.',
            'La seguridad del servicio de Interbanking.',
            'La simplicidad  para integrar operaciones en un solo\nlugar (pagos, cobros, impuestos, aduanas, sueldos, etc.',
            'La trayectoria de Interbanking.',
            'Los canales de atención disponibles (Ejecutivo de cuenta,\nmesa de ayuda, correo electrónico, página web).',
        ]
    },
    series: [
        {
            name: 'Muy insatisfecho',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#d53e4f' },
            data: [5, 4, 2, 3, 3, 4, 3, 4, 3, 5, 2, 4, 2, 5]
        },
        {
            name: 'Insatisfecho',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#ea8f6d' },
            data: [4, 4, 3, 4, 5, 3, 1, 2, 3, 5, 1, 4, 2, 5]
        },
        {
            name: 'Ni satisfecho ni insatisfecho',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#ffe08a' },
            data: [18, 19, 30, 24, 9, 13, 6, 8, 29, 19, 6, 14, 15, 18]
        },
        {
            name: 'Satisfecho',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#b3d198' },
            data: [42, 35, 41, 44, 40, 38, 38, 42, 39, 41, 37, 38, 38, 37]
        },
        {
            name: 'Muy satisfecho',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: { color: '#66c2a5' },
            data: [31, 38, 24, 25, 43, 42, 52, 44, 26, 30, 54, 40, 43, 35]
        }
    ]
};

if (option && typeof option === 'object') {
    chart63.setOption(option);
}

window.addEventListener('resize', function () {
    chart63.resize();
})
