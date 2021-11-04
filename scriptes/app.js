// Make monochrome colors
var pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

document.addEventListener('DOMContentLoaded', function () {

    const chart_1 = Highcharts.chart('bar_chart_B1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Q1. Parmi les moyens de transport suivants, quel est votre mode privilégié pour vos déplacements quotidiens ?'
        },
        subtitle: {
            text: 'Base de 1025 personnes'
        },
        xAxis: {
            categories: ['Voiture', "Marche à pied (+ d'une 1/2 h / jour)","Les transports en commun (bus, métro, tram, train)" ,'Vélo / Vélo électrique', "2 roues motorisé (scooters, motos)", "Covoiturage", "Trottinette électrique", "Autres engins de déplacement personnel mécaniques ou motorisés"]
        },
        yAxis: {
            title: {
                text: 'Pourcentage'
            },
        },
        tooltip: {
            valueSuffix: " %"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: "{y} %"
                }
            }
        },
        series: [{
            name: 'Répondants mode de déplacement privilégié',
            data: [70, 53.3, 27.1, 16.8, 5.9, 5.1, 5.0, 0.7],
            color: "#F37335",
        }]
    });

    const pie_1 = Highcharts.chart('pie_chart_B13', {
        chart: {
            type: 'pie'
        },
        title: {
            text: "Q2. Avez-vous l'intention d'acheter une trottinette électrique pour les fêtes de Noël ou d'ici les 2 prochains mois ?"
        },
        subtitle: {
            text: 'Base de 1025 personnes'
        },
        tooltip: {
            valueSuffix: " %"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',              
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> : {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: "Pourcentage de paneliste",
            data: [{
                name:"Oui",
                y:21.8}, 
                {name: "Non",
                y:59.0},
                {name: "Ne sait pas",
                y:19.1
            }]
        }]
    });

    const pie_2 = Highcharts.chart('pie_chart_B14', {
        chart: {
            type: 'pie'
        },
        title: {
            text: "Q3. Concernant la trottinette électrique que vous avez l'intention d'acheter, s'agit-il :"
        },
        subtitle: {
            text: 'Base de 224 personnes'
        },
        tooltip: {
            valueSuffix: " %"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> : {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: "Pourcentage de paneliste",
            data: [{
                name:"D'un renouvellement ",
                y:28.8}, 
                {name: "D'un 1er achat",
                y:65.7},
                {name: "Ne sait pas",
                y:5.5}]
        }]
    });

    const pie_3 = Highcharts.chart('pie_chart_B15', {
        chart: {
            type: 'pie'
        },
        title: {
            text: "Q4. Pour quelle utilisation et quels types de déplacement sera destinée la trottinette électrique que vous souhaitez acheter ?"
        },
        subtitle: {
            text: 'Base de 224 personnes'
        },
        tooltip: {
            valueSuffix: " %"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> : {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: "Pourcentage de paneliste",
            data: [{
                name:"Pour un usage loisirs",
                y:33}, 
                {name: "Pour un usage déplacements domicile-travail (ou études)",
                y:23.7},
                {name: "Pour les 2 (loisirs et travail)",
                y:36.4},
                {name: "Autre",
                y:3.6},
                {name: "Ne sait pas",
                y:3.3}
            ]
        }]
    });

    const pie_4 = Highcharts.chart('pie_chart_B16', {
        chart: {
            type: 'pie'
        },
        title: {
            text: "Q5. Quel montant envisagez-vous de payer pour l'achat de la trottinette électrique?"
        },
        subtitle: {
            text: 'Base de 224 personnes'
        },
        tooltip: {
            valueSuffix: " %"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> : {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: "Pourcentage de paneliste",
            data: [{
                name:"Moins de 250 €",
                y:16.5}, 
                {name: "De 250 € à 499 €",
                y:60.2},
                {name: "De 500 € à 699 €",
                y:19.8},
                {name: "Plus de 700 €",
                y:3.4}]
        }]
    });

});

Highcharts.theme = {
    colors: ['#F37335', '#f9b401', '#FFF263', '#24CBE5', '#64E572', '#DDDF00',
             '#50B432', '#ea6416', '#6AF9C4', '#058DC7'],
    title: {
        style: {
            color: '#000',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }
    }
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);

scroll_button = document.querySelector("#container_chevron")
bar_chart = document.querySelector("#bar_chart_B1")
scroll_button.addEventListener(
    'click',
    () => {
        bar_chart.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        console.log('oui')
    })