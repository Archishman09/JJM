$(() => {
  const legendSettings = {
    verticalAlignment: "bottom",
    horizontalAlignment: "center",
    itemTextPosition: "right",
    rowCount: 1,
  };
  const seriesOptions = [
    {
      argumentField: "name",
      valueField: "area",
      label: {
        visible: true,
        format: "percent",
      },
    },
  ];
  const sizeGroupName = "piesGroup";
  $("#piechart1").dxPieChart({
    dataSource: piechart1,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
  });

  $("#piechart2").dxPieChart({
    dataSource: piechart2,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 290,
    segmentsDirection: "clockwise" 
  });

  $("#piechart3").dxPieChart({
    dataSource: piechart3,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 325,
    segmentsDirection: "clockwise" 
  });

  $("#piechart4").dxPieChart({
    dataSource: piechart4,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 325,
    segmentsDirection: "clockwise" 
  });

  $("#piechart5").dxPieChart({
    dataSource: piechart5,
    sizeGroup: sizeGroupName,
    palette: [
      "#fee5d9",
      "#bdd7e7",
      "#6baed6",
      "#08519c",
      "#0077b3",
      "#16c7f9",
      "#52a0e0",
    ],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 325,
    segmentsDirection: "clockwise" 
  });

  $("#piechart6").dxPieChart({
    dataSource: piechart6,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
  });

  $("#piechart7").dxPieChart({
    dataSource: piechart7,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 325,
    segmentsDirection: "clockwise" 
  });

  $("#piechart8").dxPieChart({
    dataSource: piechart8,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 325,
    segmentsDirection: "clockwise" 
  });

  $("#piechart9").dxPieChart({
    dataSource: piechart9,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 325,
    segmentsDirection: "clockwise" 
  });

  $("#piechart10").dxPieChart({
    dataSource: piechart10,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 325,
    segmentsDirection: "clockwise" 
  });

  $("#piechart11").dxPieChart({
    dataSource: piechart11,
    sizeGroup: sizeGroupName,
    palette: [
      "#fee5d9",
      "#bdd7e7",
      "#6baed6",
      "#08519c",
      "#0077b3",
      "#16c7f9",
      "#52a0e0",
    ],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 325,
    segmentsDirection: "clockwise" 
  });

  $("#piechart12").dxPieChart({
    dataSource: piechart12,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    legend: legendSettings,
    series: seriesOptions,
    startAngle: 325,
    segmentsDirection: "clockwise" 
  });

  $("#piechart13").dxPieChart({
    dataSource: piechart13,
    sizeGroup: sizeGroupName,
    palette: ["#fee5d9", "#bdd7e7", "#6baed6", "#08519c", "#0077b3"],
    // title: "Mention water quality issue?",
    legend: legendSettings,
    series: seriesOptions,
  });

  $("#piechart14").dxPieChart({
    dataSource: piechart14,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    // title: "Is water supplied is adequate for cooking & drinking?",
    legend: legendSettings,
    series: seriesOptions,
  });

  $("#piechart15").dxPieChart({
    dataSource: piechart15,
    sizeGroup: sizeGroupName,
    palette: ["#fee5d9", "#bdd7e7", "#6baed6", "#08519c", "#0077b3"],
    // title: "Mention water quality issue?",
    legend: legendSettings,
    series: seriesOptions,
  });

  $("#piechart16").dxPieChart({
    dataSource: piechart16,
    sizeGroup: sizeGroupName,
    palette: ["#fcae91", "#3182bd"],
    // title: "Is water supplied is adequate for cooking & drinking?",
    legend: legendSettings,
    series: seriesOptions,
  });
});
