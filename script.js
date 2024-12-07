
// Bar Chart
const barData = [10, 15, 20, 25, 30, 35, 40];
const barChartWidth = 600;
const barChartHeight = 300;
const barChart = d3.select("#barChart")
    .append("svg")
    .attr("width", barChartWidth)
    .attr("height", barChartHeight);

barChart.selectAll("rect")
    .data(barData)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 80)
    .attr("y", d => barChartHeight - d * 5)
    .attr("width", 50)
    .attr("height", d => d * 5)
    .attr("fill", "#4CAF50");

// Line Chart
const lineData = [5, 10, 15, 20, 25, 30, 35, 40];
const lineChartWidth = 600;
const lineChartHeight = 300;

const lineChart = d3.select("#lineChart")
    .append("svg")
    .attr("width", lineChartWidth)
    .attr("height", lineChartHeight);

const line = d3.line()
    .x((d, i) => i * 80)
    .y(d => lineChartHeight - d * 5);

lineChart.append("path")
    .datum(lineData)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#4CAF50")
    .attr("stroke-width", 2);
