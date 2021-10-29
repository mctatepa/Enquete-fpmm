document.addEventListener('DOMContentLoaded', function () {

    const chart_1 = Highcharts.chart('bar_chart_B1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'B1. Parmi les moyens de transport suivants, quel est votre mode privilégié pour vos déplacements quotidiens ?'
        },
        subtitle: {
            text: 'Base de 1025'
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
            name: 'Paneliste',
            data: [70, 53.3, 27.1, 16.8, 5.9, 5.1, 5.0, 0.7]
        }]
    });

    const pie_1 = Highcharts.chart('pie_chart_B13', {
        chart: {
            type: 'pie'
        },
        title: {
            text: "B13. Avez-vous l'intention d'acheter une trottinette électrique pour les fêtes de Noël ou d'ici les 2 prochains mois ?"
        },
        subtitle: {
            text: 'Base de 1025'
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
                y:19.1}]
        }]
    });

    const pie_2 = Highcharts.chart('pie_chart_B14', {
        chart: {
            type: 'pie'
        },
        title: {
            text: "B14. Concernant la trottinette électrique que vous avez l'intention d'acheter, s'agit-il :"
        },
        subtitle: {
            text: 'Base de 224'
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
            text: "B15. Pour quelle utilisation et quels types de déplacement sera destinée la trottinette électrique que vous souhaitez acheter ?"
        },
        subtitle: {
            text: 'Base de 224'
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
                y:27.7},
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
            text: "B16. Quel montant envisagez-vous de payer pour l'achat de la trottinette électrique?"
        },
        subtitle: {
            text: 'Base de 224'
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
                y:28.8}, 
                {name: "De 250 € à 499 €",
                y:65.7},
                {name: "De 500 € à 699 €",
                y:5.5},
                {name: "Plus de 700 €",
                y:5.5}]
        }]
    });

});