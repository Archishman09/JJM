// pie chart
var options1 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [18, 0],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart1 = new ApexCharts(document.querySelector("#piechart1"), options1);

chart1.render();

var options2 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [18, 0],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart2 = new ApexCharts(document.querySelector("#piechart2"), options2);

chart2.render();

var options3 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [17, 1],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart3 = new ApexCharts(document.querySelector("#piechart3"), options3);

chart3.render();

var options4 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [15, 3],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart4 = new ApexCharts(document.querySelector("#piechart4"), options4);

chart4.render();

var options5 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["1 day", "2 days", "3 days", "4 days", "5 days", "6 days", "7 days"],
  series: [1, 1, 0, 1, 0, 0, 15],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [
    "#0077b3",
    "#0099ff",
    "#0066cc",
    "#005ce6",
    "#1aa3ff",
    CubaAdminConfig.primary,
    CubaAdminConfig.secondary,
  ],
};

var chart5 = new ApexCharts(document.querySelector("#piechart5"), options5);

chart5.render();

var options6 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [5, 13],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart6 = new ApexCharts(document.querySelector("#piechart6"), options6);

chart6.render();

var options7 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [13, 5],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart7 = new ApexCharts(document.querySelector("#piechart7"), options7);

chart7.render();

var options8 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [14, 4],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart8 = new ApexCharts(document.querySelector("#piechart8"), options8);

chart8.render();

var options9 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [13, 5],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart9 = new ApexCharts(document.querySelector("#piechart9"), options9);

chart9.render();

var options10 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [10, 8],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart10 = new ApexCharts(document.querySelector("#piechart10"), options10);

chart10.render();

var options11 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["1 day", "2 days", "3 days", "4 days", "5 days", "6 days", "7 days"],
  series: [1, 1, 0, 1, 0, 0, 15],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [
    "#0077b3",
    "#0099ff",
    "#0066cc",
    "#005ce6",
    "#1aa3ff",
    CubaAdminConfig.primary,
    CubaAdminConfig.secondary,
  ],
};

var chart11 = new ApexCharts(document.querySelector("#piechart11"), options11);

chart11.render();

var options12 = {
  chart: {
    width: 350,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [12, 6],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart12 = new ApexCharts(document.querySelector("#piechart12"), options12);

chart12.render();

var options13 = {
  chart: {
    width: 300,
    type: "pie",
  },
  labels: ["Dirty Water", "Foul Smell", "Salty Water", "Hard Water"],
  series: [1, 0, 0, 0],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [
    CubaAdminConfig.secondary,
    CubaAdminConfig.primary,
    "#0077b3",
    "#0099ff",
  ],
};

var chart13 = new ApexCharts(document.querySelector("#piechart13"), options13);

chart13.render();

var options14 = {
  chart: {
    width: 260,
    type: "pie",
  },
  labels: ["Yes", "No"],
  series: [18, 0],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [CubaAdminConfig.secondary, CubaAdminConfig.primary],
};

var chart14 = new ApexCharts(document.querySelector("#piechart14"), options14);

chart14.render();

var options15 = {
  chart: {
    width: 300,
    type: "pie",
  },
  labels: ["Dirty Water", "Foul Smell", "Salty Water", "Hard Water"],
  series: [15, 0, 3, 0],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  colors: [
    CubaAdminConfig.secondary,
    CubaAdminConfig.primary,
    "#0077b3",
    "#0099ff",
  ],
};

var chart15 = new ApexCharts(document.querySelector("#piechart15"), options15);

chart15.render();
