const selector = (elem) => (document.querySelector(elem));
const report = selector("#report");
const daily = selector("#daily");
const weekly = selector("#weekly");
const monthly = selector("#monthly");
getData("weekly");
daily.addEventListener("click", handleClick);
weekly.addEventListener("click", handleClick);
monthly.addEventListener("click", handleClick);