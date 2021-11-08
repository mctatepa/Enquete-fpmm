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

(function (H) {

    var pendingRenders = [];

    // https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
    function isElementInViewport(el) {

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (
                window.innerHeight ||
                document.documentElement.clientHeight
            ) &&
            rect.right <= (
                window.innerWidth ||
                document.documentElement.clientWidth
            )
        );
    }

    H.wrap(H.Series.prototype, 'render', function deferRender(proceed) {
        var series = this,
            renderTo = this.chart.container.parentNode;

        // It is appeared, render it
        if (isElementInViewport(renderTo) || !series.options.animation) {
            proceed.call(series);

        // It is not appeared, halt renering until appear
        } else  {
            pendingRenders.push({
                element: renderTo,
                appear: function () {
                    proceed.call(series);
                }
            });
        }
    });

    function recalculate() {
        pendingRenders.forEach(function (item) {
            if (isElementInViewport(item.element)) {
                item.appear();
                H.erase(pendingRenders, item);
            }
        });
    }

    if (window.addEventListener) {
        ['DOMContentLoaded', 'load', 'scroll', 'resize']
            .forEach(function (eventType) {
                addEventListener(eventType, recalculate, false);
            });
    }

}(Highcharts));

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
            showInLegend: false,
            name: 'Répondants mode de déplacement privilégié',
            data: [70, 53.3, 27.1, 16.8, 5.9, 5.1, 5.0, 0.7],
            color: "#F37335",
        }]
    });

    function anime_info(pie, info){
        console.log(this);
        pie.classList.add('animation_pie_drill_b13')
        info.classList.add('animation_pie_info_b13')
        pie.classList.remove('animation_pie_drill_b13_revers')
        info.classList.remove('animation_pie_info_b13_revers')
    }

    function anime_info_remove(pie, info) {
        console.log(this);
        pie.classList.add('animation_pie_drill_b13_revers')
        info.classList.add('animation_pie_info_b13_revers')
        pie.classList.remove('animation_pie_drill_b13')
        info.classList.remove('animation_pie_info_b13')        
    }

    let piechart_B13 = document.querySelector("#pie_chart_B13")
    let piechart_info_B13 = document.querySelector(".info_B13")
    let piechart_info_1_B13 = document.querySelector("#info_1_B13")
    let piechart_info_2_B13 = document.querySelector("#info_2_B13")

    const pie_1 = Highcharts.chart('pie_chart_B13', {
        chart: {
            type: 'pie',
            events: {
            	drilldown: function (e) {
                    if (e.point.name == "Oui") {
                        piechart_info_2_B13.style.opacity = 0
                        piechart_info_1_B13.style.opacity = 1
                        anime_info(piechart_B13, piechart_info_B13)                       
                    }
                    else if (e.point.name == "Non") {
                        piechart_info_2_B13.style.opacity = 1
                        piechart_info_1_B13.style.opacity = 0
                        anime_info(piechart_B13, piechart_info_B13) 
                    }
                },
                drillup: function (e) {
                    anime_info_remove(piechart_B13, piechart_info_B13)
                }
            }
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
            allowPointSelect : true,
            name: "Pourcentage de répondants",
            data: [{
                name:"Oui",
                y:21.8,
                drilldown: "ST oui"
            }, 
                {name: "Non",
                y:59.0,
                drilldown: "genre"
            },
                {name: "Ne sait pas",
                y:19.1
            }]
        }],
        drilldown: {
            series: [
                {
                name: "ST oui",
                id: "ST oui",
                data: [
                    [
                        "Oui, pour moi ou pour mon /ma conjoint(e)",
                        8.5
                    ],
                                        [
                        "Oui, pour mon adolescent",
                        5.6
                    ],
                    [
                        "Oui, pour un autre adulte du cercle familial",
                        4.8
                    ],
                    [
                        "Oui, pour un ami",
                        2.9
                    ],
                ]},
                {
                    name: "genre",
                    id: "genre",
                    data: [
                        [
                            "Femme",
                            64.5
                        ],
                                            [
                            "Homme",
                            35.5
                        ],
                    ]}
                
            ]}
    
    });

    let piechart_B14 = document.querySelector("#pie_chart_B14")
    let piechart_info_B14 = document.querySelector(".info_B14")
    let piechart_info_1_B14 = document.querySelector("#info_1_B14")
    let piechart_info_2_B14 = document.querySelector("#info_2_B14")

    const pie_2 = Highcharts.chart('pie_chart_B14', {
        chart: {
            type: 'pie',
            events: {
            	drilldown: function (e) {
                    if (e.point.name == "D'un renouvellement") {
                        piechart_info_1_B14.style.opacity = 1
                        piechart_info_2_B14.style.opacity = 0
                        anime_info(piechart_B14, piechart_info_B14)                       
                    }
                    else if (e.point.name == "D'un 1er achat") {
                        piechart_info_1_B14.style.opacity = 0
                        piechart_info_2_B14.style.opacity = 1
                        anime_info(piechart_B14, piechart_info_B14) 
                    }
                },
                drillup: function (e) {
                    anime_info_remove(piechart_B14, piechart_info_B14)
                }
            }
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
            name: "Pourcentage de répondants",
            data: [{
                name:"D'un renouvellement",
                y:28.8,
                drilldown: "Revenu"}, 
                {name: "D'un 1er achat",
                y:65.7,
                drilldown: "genre"},
                {name: "Ne sait pas",
                y:5.5}]
        }],
        drilldown: {
            series: [
                {
                name: "Revenu",
                id: "Revenu",
                data: [
                    [
                        "Revenu mensuel net moins de 1800",
                        46.1
                    ],
                                        [
                        "Revenu mensuel net plus de 1800",
                        53.9
                    ],
                ]},
                {
                    name: "genre",
                    id: "genre",
                    data: [
                        [
                            "Femme",
                            70
                        ],
                                            [
                            "Homme",
                            30
                        ],
                    ]}
                
            ]}
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
            name: "Pourcentage de répondants",
            data: [{
                name:"Pour un usage loisirs",
                y:33,
                drilldown: "test_edpm"}, 
                {name: "Pour un usage déplacements domicile-travail (ou études)",
                y:23.7,
                drilldown: "age"},
                {name: "Pour les 2 (loisirs et travail)",
                y:36.4},
                {name: "Autre",
                y:3.6},
                {name: "Ne sait pas",
                y:3.3}
            ]
        }],
        drilldown: {
            series: [
                {
                name: "test_edpm",
                id: "test_edpm",
                data: [
                    [
                        "Jamais testé d’EDPM",
                        53.2
                    ],
                                        [
                        "A déja testé des EDPM",
                        46.8
                    ],
                ]},
                {
                    name: "age",
                    id: "age",
                    data: [
                        [
                            "18-25 ans",
                            36.9
                        ],
                                            [
                            "Plus de 18-25 ans",
                            63.1
                        ],
                    ]}
                
            ]}
    });



    let piechart_B16 = document.querySelector("#pie_chart_B16")
    let piechart_info_B16 = document.querySelector(".info_B16")
    let piechart_info_1_B16 = document.querySelector("#info_1_B16")
    let piechart_info_2_B16 = document.querySelector("#info_2_B16")
    let piechart_info_3_B16 = document.querySelector("#info_3_B16")

    const pie_4 = Highcharts.chart('pie_chart_B16', {
        chart: {
            type: 'pie',
            events: {
            	drilldown: function (e) {
                    if (e.point.name == "Moins de 250 €") {
                        piechart_info_1_B16.style.opacity = 1
                        piechart_info_2_B16.style.opacity = 0
                        piechart_info_3_B16.style.opacity = 0
                        anime_info(piechart_B16, piechart_info_B16)                       
                    }
                    else if (e.point.name == "De 250 € à 499 €") {
                        piechart_info_1_B16.style.opacity = 0
                        piechart_info_2_B16.style.opacity = 1
                        piechart_info_3_B16.style.opacity = 0
                        anime_info(piechart_B16, piechart_info_B16) 
                    }
                    else if (e.point.name == "De 500 € à 699 €") {
                        piechart_info_1_B16.style.opacity = 0
                        piechart_info_2_B16.style.opacity = 0
                        piechart_info_3_B16.style.opacity = 1
                        anime_info(piechart_B16, piechart_info_B16) 
                    }
                },
                drillup: function (e) {
                    anime_info_remove(piechart_B16, piechart_info_B16)
                }
            }
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
            name: "Pourcentage de répondants",
            data: [{
                name:"Moins de 250 €",
                y:16.5,
                drilldown: "genres_1"}, 
                {name: "De 250 € à 499 €",
                y:60.2,
                drilldown: "genres_2"},
                {name: "De 500 € à 699 €",
                y:19.8,
                drilldown: "genres_3"},
                {name: "Plus de 700 €",
                y:3.4,
                drilldown: "genres_4"}]
        }],
        drilldown: {
            series: [
                {
                name: "genres_1",
                id: "genres_1",
                data: [
                    [
                        "Homme",
                        13.4
                    ],
                                        [
                        "Femme",
                        20.6
                    ],
                ]},
                {
                    name: "genres_2",
                    id: "genres_2",
                    data: [
                        [
                            "Homme",
                            63.3
                        ],
                                            [
                            "Femme",
                            56.7
                        ],
                    ]},
                    {
                        name: "genres_3",
                        id: "genres_3",
                        data: [
                            [
                                "Homme",
                                18.8
                            ],
                                                [
                                "Femme",
                                21.1
                            ],
                        ]},
                        {
                            name: "genres_4",
                            id: "genres_4",
                            data: [
                                [
                                    "Homme",
                                    4.6
                                ],
                                                    [
                                    "Femme",
                                    2
                                ],
                            ]},
                
            ]}
        
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