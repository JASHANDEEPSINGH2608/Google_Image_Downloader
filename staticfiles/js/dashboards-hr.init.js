/*
Template Name: StarCode & Dashboard Template
Author: StarCode Kh
Version: 1.1.0
Website: https://StarCode Kh.in/
Contact: StarCode Kh@gmail.com
File: dashboard hr init Js File
*/

// rgb to hex convert
function rgbToHex(rgb) {
    // Extract RGB values using regular expressions
    const rgbValues = rgb.match(/\d+/g);

    if (rgbValues.length === 3) {
        var [r, g, b] = rgbValues.map(Number);
    }
    // Ensure the values are within the valid range (0-255)
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // Convert each component to its hexadecimal representation
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');

    // Combine the hexadecimal values with the "#" prefix
    const hexColor = `#${rHex}${gHex}${bHex}`;

    return hexColor.toUpperCase(); // Convert to uppercase for consistency
}

// common function to get charts colors from class
function getChartColorsArray(chartId) {
    const chartElement = document.getElementById(chartId);
    if (chartElement) {
        const colors = chartElement.dataset.chartColors;
        if (colors) {
            const parsedColors = JSON.parse(colors);
            const mappedColors = parsedColors.map((value) => {
                const newValue = value.replace(/\s/g, "");
                if (!newValue.includes("#")) {
                    const element = document.querySelector(newValue);
                    if (element) {
                        const styles = window.getComputedStyle(element);
                        const backgroundColor = styles.backgroundColor;
                        return backgroundColor || newValue;
                    } else {
                        const divElement = document.createElement('div');
                        divElement.className = newValue;
                        document.body.appendChild(divElement);

                        const styles = window.getComputedStyle(divElement);
                        const backgroundColor = styles.backgroundColor.includes("#") ? styles.backgroundColor : rgbToHex(styles.backgroundColor);
                        return backgroundColor || newValue;
                    }
                } else {
                    return newValue;
                }
            });
            return mappedColors;
        } else {
            console.warn(`chart-colors attribute not found on: ${chartId}`);
        }
    }
}

var totalEmployeeChart = "";
var totalApplicationChart = "";
var hiredCandidatesChart = "";
var rejectedCandidatesChart = "";
var applicationReceivedChart = "";

function loadCharts() {
    //  Total Employee
    var totalEmployeeColors = "";
    totalEmployeeColors = getChartColorsArray("totalEmployee");
    if (totalEmployeeColors) {
        var options = {
            series: [10],
            chart: {
                height: 110,
                type: 'radialBar',
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: '50%',
                    },
                    track: {
                        margin: 2,
                    },
                    dataLabels: {
                        show: false
                    }
                }
            },
            grid: {
                padding: {
                    top: -15,
                    bottom: -15
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Total Employee'],
            colors: totalEmployeeColors
        };

        if (totalEmployeeChart != "")
            totalEmployeeChart.destroy();
        totalEmployeeChart = new ApexCharts(document.querySelector("#totalEmployee"), options);
        totalEmployeeChart.render();
    }

    //  Total Application
    var totalApplicationColors = "";
    totalApplicationColors = getChartColorsArray("totalApplication");
    if (totalApplicationColors) {
        var options = {
            series: [60],
            chart: {
                height: 110,
                type: 'radialBar',
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: '50%',
                    },
                    track: {
                        margin: 2,
                    },
                    dataLabels: {
                        show: false
                    }
                }
            },
            grid: {
                padding: {
                    top: -15,
                    bottom: -15
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Total Employee'],
            colors: totalApplicationColors
        };

        if (totalApplicationChart != "")
            totalApplicationChart.destroy();
        totalApplicationChart = new ApexCharts(document.querySelector("#totalApplication"), options);
        totalApplicationChart.render();
    }

    //  Hired Candidates
    var hiredCandidatesColors = "";
    hiredCandidatesColors = getChartColorsArray("hiredCandidates");
    if (hiredCandidatesColors) {
        var options = {
            series: [25],
            chart: {
                height: 110,
                type: 'radialBar',
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: '50%',
                    },
                    track: {
                        margin: 2,
                    },
                    dataLabels: {
                        show: false
                    }
                }
            },
            grid: {
                padding: {
                    top: -15,
                    bottom: -15
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Total Employee'],
            colors: hiredCandidatesColors
        };

        if (hiredCandidatesChart != "")
            hiredCandidatesChart.destroy();
        hiredCandidatesChart = new ApexCharts(document.querySelector("#hiredCandidates"), options);
        hiredCandidatesChart.render();
    }

    //  Rejected Candidates
    var rejectedCandidatesColors = "";
    rejectedCandidatesColors = getChartColorsArray("rejectedCandidates");
    if (rejectedCandidatesColors) {
        var options = {
            series: [75],
            chart: {
                height: 110,
                type: 'radialBar',
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: '50%',
                    },
                    track: {
                        margin: 2,
                    },
                    dataLabels: {
                        show: false
                    }
                }
            },
            grid: {
                padding: {
                    top: -15,
                    bottom: -15
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Total Employee'],
            colors: rejectedCandidatesColors
        };

        if (rejectedCandidatesChart != "")
            rejectedCandidatesChart.destroy();
        rejectedCandidatesChart = new ApexCharts(document.querySelector("#rejectedCandidates"), options);
        rejectedCandidatesChart.render();
    }

    //Application Received
    
    var options = {
    series: [{
        name: "Response Times",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]

    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        },
        margin: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        toolbar: {
            show: false,
        },
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 2,
        dashArray: 0,
    },
    dataLabels: {
        enabled: false
    },
    colors: getChartColorsArray("responseTimes"),
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
};

var chart = new ApexCharts(document.querySelector("#responseTimes"), options);
chart.render();
}

window.addEventListener("resize", function () {
    setTimeout(() => {
        loadCharts();
    }, 0);
});
loadCharts();

//Pages Interaction
var options = {
    series: [{
        name: 'Viewers',
        data: [20, 13, 19, 23, 29, 42, 33, 29, 37, 46, 40, 49]
    },
        // {
        //     name: 'Followers',
        //     data: [10, 18, 13, 23, 33, 39, 30, 21, 36, 42, 39, 46]
        // }
    ],
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },

    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'bottom',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
        }
    },
    stroke: {
        show: true,
        width: 4,
        colors: ['transparent']
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: -10
        },
    },
    colors: getChartColorsArray("pagesInteraction")
};

var chart = new ApexCharts(document.querySelector("#pagesInteraction"), options);
chart.render();


var options = {
    series: JSON.parse("{{ totalreason }}"),
    labels: ['Lab Eval', 'Sessional', 'Society Event', 'Others'],
    chart: {
        height: 270,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            donut: {
                size: '75%'
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
    },
    colors: getChartColorsArray("subscriptionDistribution"),
    legend: {
        formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
    },
    legend: {
        position: 'bottom'
    }
};

var chart = new ApexCharts(document.querySelector("#subscriptionDistribution"), options);
chart.render();
//Stacked Columns
var options = {
    series: [{
        name: 'New',
        data: [44, 55, 41, 67, 22, 43, 14, 55, 41,]
    }, {
        name: 'Pending',
        data: [13, 23, 20, 8, 13, 27, 8, 20, 8,]
    }, {
        name: 'Completed',
        data: [11, 17, 15, 15, 21, 14, 24, 11, 17,]
    }, {
        name: 'Rejected',
        data: [21, 7, 25, 13, 22, 8, 13, 7, 25,]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        zoom: {
            enabled: true
        },
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 2,
            columnWidth: '25%',
        },
    },
    grid: {
        padding: {
            top: -15,
            bottom: 5,
            right: 0,
        }
    },
    xaxis: {
        categories: ['01', '02', '03', '04',
            '05', '06', '07', '08', '09'
        ],
    },
    dataLabels: {
        enabled: false
    },
    colors: getChartColorsArray("totalProjectChart"),
    legend: {
        position: 'bottom',
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#totalProjectChart"), options);
chart.render();

const options44 = {
    settings: {
        visibility: {
            theme: 'light',
        },
        selected: {
            month: 10,
            year: 2023,
        },
    },
    popups: {
        '2023-06-28': {
            modifier: '!bg-red-500 !text-white',
            html: 'Meeting with Designer',
        },
        '2023-07-13': {
            modifier: '!bg-red-500 !text-white text-bold',
            html: 'Meeting at 6:00 PM',
        },
        '2023-07-08': {
            modifier: '!bg-purple-500 !text-white text-bold',
            html: `<div>
        <div class="font-semibold underline mb-1">09:57 AM</div>
        <p class="text-slate-500 dark:text-zink-200">Developing Line Managers Conference</p>
      </div>`,
        },
        '2023-07-17': {
            modifier: '!bg-green-500 !text-white',
            html: `<div>
        <div class="font-semibold underline mb-1">12:00 PM</div>
        <p class="text-slate-500 dark:text-zink-200">Airplane in Las Vegas</p>
      </div>`,
        },
        '2023-11-11': {
            modifier: '!bg-purple-500 !text-white text-bold',
            html: `<div>
        <div class="font-semibold underline mb-1">09:57 AM</div>
        <p class="text-slate-500 dark:text-zink-200">Leadership Executive Summit</p>
      </div>`,
        },
        '2023-11-11': {
            modifier: '!bg-orange-500 !text-white text-bold',
            html: `<div>
        <p class="text-slate-500 dark:text-zink-200">Hospitality Project Discuses</p>
      </div>`,
        },
    },
};

const calendar = new VanillaCalendar('#calendar', options44);
calendar.init();
