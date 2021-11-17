
let timeFrameSts = "weekly";
const handleActive = (timeFrames, id) => {
  timeFrames.forEach(frame => {
    frame.classList.remove("timeframe__link--active");
    if (frame.id === id) {
      frame.classList.add("timeframe__link--active");
    }
  });
}
const handleClick = (event) => {
  const id = event.target.id;
  timeFrameSts = id;
  const reportCards = document.querySelectorAll(".report__card");
  const timeFrames = document.querySelectorAll(".timeframe__link");
  handleActive(timeFrames, id);
  reportCards.forEach(card => {
    card.remove()
  });
  getData(timeFrameSts);
  event.preventDefault();
}

const getData = (timeFrameSts) => {
  const data = "../../data.json";
fetch(data)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    data.forEach((element, i) => {
      const {title, timeframes} = element;
      const attrTitle = title.toLowerCase().replace(/[^a-zA-z0-9]/g, "-");
      const {current, previous} = timeframes[timeFrameSts];
      const htmlString = `
        <article id="${attrTitle}-card" class="report__card report__card--${attrTitle} card">
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
}