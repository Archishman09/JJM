am4core.ready(function () {
  am4core.addLicense("ch-custom-attribution");

  // Are you satisfied with quality of water?
  var container = am4core.create("pie_chart3", am4core.Container);
  container.width = am4core.percent(90);
  container.height = am4core.percent(90);
  container.layout = "horizontal";

  var chart = container.createChild(am4charts.PieChart);

  // Add data
  // chart.legend = new am4charts.Legend();
  chart.data = [
    {
      exist: "No",
      number: 9,
      subData: [
        { name: "Dirty Water", value: 50 },
        { name: "Foul Smell", value: 10 },
        { name: "Salty Water", value: 10 },
        { name: "Hard Water", value: 10 },
        { name: "No Issues", value: 20 },
      ],
    },
    {
      exist: "Yes",
      number: 91,
    },
  ];

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "number";
  pieSeries.dataFields.category = "exist";
  pieSeries.slices.template.states.getKey("active").properties.shiftRadius = 0;

  pieSeries.labels.template.disabled = false;
  pieSeries.ticks.template.disabled = false;
  pieSeries.labels.template.text =
    "{category}\n{value.percent.formatNumber('#.#')}%";

  //Override original colors
  var colorSet = new am4core.ColorSet();
  colorSet.list = ["#fcae91", "#3182bd"].map(function (color) {
    return new am4core.color(color);
  });
  pieSeries.colors = colorSet;

  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 1.5;
  pieSeries.slices.template.strokeOpacity = 1;

  pieSeries.slices.template.events.on("hit", function (event) {
    selectSlice(event.target.dataItem);
  });

  var chart2 = container.createChild(am4charts.PieChart);
  chart2.width = am4core.percent(80);
  chart2.radius = am4core.percent(70);

  // Add and configure Series
  var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
  pieSeries2.dataFields.value = "value";
  pieSeries2.dataFields.category = "name";
  pieSeries2.slices.template.states.getKey("active").properties.shiftRadius = 0;
  // pieSeries2.labels.template.radius = am4core.percent(50);
  // pieSeries2.labels.template.inside = true;
  // pieSeries2.labels.template.fill = am4core.color("#ffffff");
  pieSeries2.labels.template.disabled = true;
  pieSeries2.ticks.template.disabled = true;
  pieSeries2.events.on("positionchanged", updateLines);

  pieSeries2.slices.template.stroke = am4core.color("#fff");
  pieSeries2.slices.template.strokeWidth = 1.5;
  pieSeries2.slices.template.strokeOpacity = 1;

  //Override original colors
  var colorSet2 = new am4core.ColorSet();
  colorSet2.list = ["#3182bd"].map(function (color) {
    return new am4core.color(color);
  });
  pieSeries2.colors = colorSet2;

  //update
  pieSeries2.slices.template.events.on("hit", function (event) {
    selectSlice2(event.target.dataItem);
  });

  pieSeries2.slices.template.events.on("hit", function (ev) {
    var series = ev.target.dataItem.component;
    series.slices.each(function (item) {
      if (item.isActive && item != ev.target) {
        item.isActive = false;
      }
    });
  });

  pieSeries2.events.on("positionchanged", updateLines);

  //endupdate
  var interfaceColors = new am4core.InterfaceColorSet();

  var line1 = container.createChild(am4core.Line);
  line1.strokeDasharray = "2,2";
  line1.strokeOpacity = 0.5;
  line1.stroke = interfaceColors.getFor("alternativeBackground");
  line1.isMeasured = false;

  var line2 = container.createChild(am4core.Line);
  line2.strokeDasharray = "2,2";
  line2.strokeOpacity = 0.5;
  line2.stroke = interfaceColors.getFor("alternativeBackground");
  line2.isMeasured = false;

  var selectedSlice;

  function selectSlice(dataItem) {
    selectedSlice = dataItem.slice;

    var fill = selectedSlice.fill;

    var count = dataItem.dataContext.subData.length;
    pieSeries2.colors.list = [
      "#fee5d9",
      "#bdd7e7",
      "#6baed6",
      "#08519c",
      "#0077b3",
    ].map(function (color) {
      return new am4core.color(color);
    });
    for (var i = 0; i < count; i++) {
      pieSeries2.colors.list.push(fill.brighten((i * 2) / count));
    }

    chart2.data = dataItem.dataContext.subData;
    pieSeries2.appear();

    var middleAngle = selectedSlice.middleAngle;
    var firstAngle = pieSeries.slices.getIndex(0).startAngle;
    var animation = pieSeries.animate(
      [
        { property: "startAngle", to: firstAngle - middleAngle },
        { property: "endAngle", to: firstAngle - middleAngle + 360 },
      ],
      600,
      am4core.ease.sinOut
    );
    animation.events.on("animationprogress", updateLines);

    selectedSlice.events.on("transformed", updateLines);

    //  var animation = chart2.animate({property:"dx", from:-container.pixelWidth / 2, to:0}, 2000, am4core.ease.elasticOut)
    //  animation.events.on("animationprogress", updateLines)
  }

  function updateLines() {
    if (selectedSlice) {
      var p11 = {
        x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle),
        y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle),
      };
      var p12 = {
        x:
          selectedSlice.radius *
          am4core.math.cos(selectedSlice.startAngle + selectedSlice.arc),
        y:
          selectedSlice.radius *
          am4core.math.sin(selectedSlice.startAngle + selectedSlice.arc),
      };

      p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
      p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);

      var p21 = { x: 0, y: -pieSeries2.pixelRadius };
      var p22 = { x: 0, y: pieSeries2.pixelRadius };

      p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
      p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);

      line1.x1 = p11.x;
      line1.x2 = p21.x;
      line1.y1 = p11.y;
      line1.y2 = p21.y;

      line2.x1 = p12.x;
      line2.x2 = p22.x;
      line2.y1 = p12.y;
      line2.y2 = p22.y;
    }
  }

  chart.events.on("datavalidated", function () {
    //$("#jsonData").html( "pieSeries.dataItems.getIndex(0)");
    //alert("msg " + JSON.stringify(pieSeries.dataItems.getIndex(0)));
    setTimeout(function () {
      selectSlice(pieSeries.dataItems.getIndex(0));
    }, 1000);
  });
}); // end am4core.ready
