const report = document.getElementById("report");
const data = "../../data.json";
fetch(data)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    data.forEach(element => {
      console.table(element);
      const {title, timeframes} = element;
      const className = title.toLowerCase().replace(/[^a-zA-z0-9]/g, "-");
      const {current, previous} = timeframes.weekly;
      const htmlString = `
        <article class="report__card report__card--${className} card">
          <div class="report__card__body">
            <div class="report__card__title report__card__detail">
              <h2 class="report__card__header text-white">${title}</h2>
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
            </div>

            <div class="report__card__time report__card__detail">
              <span id="current-work" class="current-time current-time--work text-white">${current}hrs</span>
              <span id="previous-work" class="previous previous--work text-secondary">Last <span class="previous__time-opt previous__time-opt--work">Week</span> - <span class="previous__time previous__time--work">${previous}hrs</span></span>
            </div>
          </div>
        </article>
      `;
      report.insertAdjacentHTML("beforeend", htmlString);
    });
  })
  .catch(error => console.log(error)) // handling error if something wrong happens