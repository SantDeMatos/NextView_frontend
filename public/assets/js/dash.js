function grafico() {
    document.getElementById('grafico').style.display = 'flex'
    document.getElementById('noScroll').style.display = 'none'
    document.getElementById('voltarGrafico').style.display = 'flex'
    document.getElementById('voltarSensor1').style.display = 'none'
    document.getElementById('nav_kpis').style.display = 'none'
    document.getElementById('nav_alertas').style.display = 'flex'
}

function voltarGrafico() {
    document.getElementById('grafico').style.display = 'none'
    document.getElementById('noScroll').style.display = 'flex'
    document.getElementById('voltarSensor1').style.display = 'flex'
    document.getElementById('voltarGrafico').style.display = 'none'
    document.getElementById('nav_kpis').style.display = 'flex'
    document.getElementById('nav_alertas').style.display = 'none'
}

var colunaViveiros = document.getElementById('coluna-viveiros')
var viveiro = 0

colunaViveiros.addEventListener('change', function (event) {
    viveiro = parseInt(event.target.value)

    if (viveiro == 1 || viveiro == 3 || viveiro == 4 || viveiro == 5 || viveiro == 6) {

        numero_viveiro.innerHTML = viveiro

        document.getElementById('img-sensor1').src = 'assets/imgs/sensor-ideal.svg'
        document.getElementById('img-sensor2').src = 'assets/imgs/sensor-ideal.svg'
        document.getElementById('img-sensor3').src = 'assets/imgs/sensor-ideal.svg'
        document.getElementById('img-sensor4').src = 'assets/imgs/sensor-ideal.svg'
        document.getElementById('img-sensor5').src = 'assets/imgs/sensor-ideal.svg'

        kpi_qnt_ideal.innerHTML = '5'
        kpi_qnt_acima.innerHTML = '0'
        kpi_qnt_abaixo.innerHTML = '0'
    }
    if (viveiro == 2) {
        numero_viveiro.innerHTML = viveiro

        document.getElementById('img-sensor1').src = 'assets/imgs/sensor-ideal.svg'
        document.getElementById('img-sensor2').src = 'assets/imgs/sensor-acima.svg'
        document.getElementById('img-sensor3').src = 'assets/imgs/sensor-ideal.svg'
        document.getElementById('img-sensor4').src = 'assets/imgs/sensor-ideal.svg'
        document.getElementById('img-sensor5').src = 'assets/imgs/sensor-abaixo.svg'

        kpi_qnt_ideal.innerHTML = '3'
        kpi_qnt_acima.innerHTML = '1'
        kpi_qnt_abaixo.innerHTML = '1'
    }
});

var grafico = document.getElementById('sensorAnalogico')

function cadastrarFuncionarios() {
    window.location = 'cadastroFuncionarios.html'
}

function sensores(id) {
    window.location = 'sensores.html?id=' + encodeURIComponent(id);
}


function alerta() {
    window.location = 'alerta.html'
}


function home() {
    window.location = 'dashboard.html'
}

function historico() {
    window.location = 'historico.html'
}

function sair() {
    window.location = 'index.html'
}

function suporte() {

    const url = 'https://seedtechsuporte.atlassian.net/servicedesk/customer/portal/1';
    window.open(url, '_blank');
}
/* var graficoCO2 = new Chart(grafico, {
    type: 'line',
    data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        datasets: [
            {
                label: 'CO²',
                data: [740, 730, 710, 690, 690, 680],
                borderColor: '#38B622',
                backgroundColor: '#38B622'
            },
            {
                label: 'MÁXIMO',
                data: [800, 800, 800, 800, 800, 800],
                borderColor: '#87502F',
                fill: false,
                pointBorderWidth: 0,
                pointRadius: 0,
                backgroundColor: '#87502F'
            },
            {
                label: 'MÍNIMO',
                data: [380, 380, 380, 380, 380, 380],
                borderColor: '#4B5AFF',
                fill: false,
                pointBorderWidth: 0,
                pointRadius: 0,
                backgroundColor: '#4B5AFF'
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Nível de CO²',
                font: {
                    size: 18
                },
                color: 'black',
                padding: {
                    top: 1,
                    bottom: 3
                }
            }
        },
        scales: {
            y: {
                min: 0,
                max: 1000,
                title: {
                    display: true,
                    text: 'PPM'
                }
            }
        }
    }
});

function plotarGrafico (event) {
    var sensor = Number(event.target.value);


    var dado1 = 0
    var dado2 = 0
    var dado3 = 0
    var dado4 = 0
    var dado5 = 0
    var dado6 = 0

    if (sensor == 2 && viveiro != 2) {
        dado1 = 410
        dado2 = 420
        dado3 = 459
        dado4 = 440
        dado5 = 480
        dado6 = 500
    }
    else if (sensor == 5 && viveiro != 2) {
        dado1 = 650
        dado2 = 645
        dado3 = 655
        dado4 = 680
        dado5 = 690
        dado6 = 700
    }

    else if (sensor == 1) {
        dado1 = 710
        dado2 = 730
        dado3 = 740
        dado4 = 750
        dado5 = 750
        dado6 = 750
    } else if (sensor == 2) {
        dado1 = 888
        dado2 = 890
        dado3 = 890
        dado4 = 900
        dado5 = 920
        dado6 = 930

    } else if (sensor == 3) {
        dado1 = 650
        dado2 = 645
        dado3 = 655
        dado4 = 680
        dado5 = 690
        dado6 = 700

    } else if (sensor == 4) {
        dado1 = 410
        dado2 = 420
        dado3 = 459
        dado4 = 440
        dado5 = 480
        dado6 = 500

    } else if (sensor == 5) {
        dado1 = 210
        dado2 = 220
        dado3 = 252
        dado4 = 230
        dado5 = 240
        dado6 = 250
    }

    if (grafico != null) {
        graficoCO2.destroy();
    }

    graficoCO2 = new Chart(grafico, {
        type: 'line',
        data: {
            labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
            datasets: [
                {
                    label: 'CO²',
                    data: [dado1, dado2, dado3, dado4, dado5, dado6],
                    borderColor: '#38B622',
                    backgroundColor: '#38B622'
                },
                {
                    label: 'MÁXIMO',
                    data: [800, 800, 800, 800, 800, 800],
                    borderColor: '#87512f',
                    fill: false,
                    pointBorderWidth: 0,
                    pointRadius: 0,
                    backgroundColor: '#87502F'
                },
                {
                    label: 'MÍNIMO',
                    data: [380, 380, 380, 380, 380, 380],
                    borderColor: '#4B5AFF',
                    fill: false,
                    pointBorderWidth: 0,
                    pointRadius: 0,
                    backgroundColor: '#4B5AFF'
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Nível de CO²',
                    font: {
                        size: 18
                    },
                    color: 'black',
                    padding: {
                        top: 1,
                        bottom: 3
                    }
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 1000,
                    title: {
                        display: true,
                        text: 'PPM'
                    }
                }
            }
        }
    });
}
*/

var sensorAnalogico = new Chart(document.getElementById('sensorAnalogico').getContext('2d'), {
    type: 'line',
    data: {
        datasets: [{
            label: 'Analogico',
            borderColor: '#63B1BC',
            backgroundColor: '#ED145B'
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                title: {
                    display: true,
                    text: '(ppm)'
                },
                beginAtZero: true,
            },
        },
    }
});


