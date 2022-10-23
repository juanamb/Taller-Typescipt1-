import { series } from "./dataseries.js";
const seriesTbody = document.getElementById('series');
const avgSeas = document.getElementById("average-seasons");
renderSeriesInTable(series);
avgSeas.innerHTML = `${getAverageSeasons(series)}`;
function renderSeriesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td class="font-weight-bold" >${c.id}</td>
                            <td style= "color:rgb(0, 150, 255)">${c.name}</td>
                            <td>${c.channel}</td>
                            <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    let totalSeason = 0;
    let seas = series.length;
    series.forEach(serie => {
        totalSeason = totalSeason + serie.seasons;
    });
    return "Seasons Average: " + totalSeason / seas;
}
