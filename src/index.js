import 'flowbite'
import ApexCharts from 'apexcharts'

const $ = (element) => {
    return document.querySelector(element)
}

const title = $('#title-banner')
const menuOpen = $('#menu-open')
const menuClose = $('#menu-close')
const menuOptions = $('#menu-options')

menuOpen.addEventListener('click', () => {
    menuOptions.style.display = "block";
    menuClose.style.display = "block";
    menuOpen.style.display = "none";
    if (title) title.style.display = "none";
})

menuClose.addEventListener('click', () => {
    menuOptions.style.display = "none";
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    if (title) title.style.display = "block";
})

const chart1 = $('#area-chart-1')

window.addEventListener("load", function() {
  if (chart1) {
    const options = {
      series: [
        {
          name: "Usuarios",
          color: "#1A56DB53",
          data: [
            { x: "Fácil", y: 231 },
            { x: "Normal", y: 122 },
            { x: "Difícil", y: 63 },
          ],
        },
      ],
      chart: {
        type: "bar",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    }

    const chart = new ApexCharts(chart1, options);
    chart.render();
  }
});
