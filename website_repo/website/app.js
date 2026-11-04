// Renders the talks defined in talks.js. You shouldn't need to edit this file.

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// "2026-11-04" -> local Date at midnight (avoids the UTC off-by-one of new Date("2026-11-04"))
function parseDate(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Expects talks sorted by date; returns one array of talks per day
function groupByDay(talks) {
  const days = new Map();
  talks.forEach((t) => days.set(t.date, [...(days.get(t.date) || []), t]));
  return [...days.values()];
}

function renderTalk(talk) {
  const e = (s) => escapeHtml(s);

  const meta = [talk.time, talk.location].filter(Boolean).map(e).join(" · ");

  const abstract = talk.abstract
    ? `<details class="abstract">
         <summary>Abstract</summary>
         ${talk.abstract.split(/\n\s*\n/).map((p) => `<p>${e(p.trim())}</p>`).join("")}
       </details>`
    : "";

  const links = [
    talk.link && `<a href="${e(talk.link)}">Join</a>`,
    talk.slides && `<a href="${e(talk.slides)}">Slides</a>`,
    talk.recording && `<a href="${e(talk.recording)}">Recording</a>`,
  ].filter(Boolean);

  return `
    <div class="talk__item">
      <h3 class="talk__title">${e(talk.title)}</h3>
      <p class="talk__speaker">
        <strong>${e(talk.speaker)}</strong>${talk.affiliation ? `<span class="affiliation">, ${e(talk.affiliation)}</span>` : ""}
      </p>
      ${meta ? `<p class="talk__meta">${meta}</p>` : ""}
      ${abstract}
      ${links.length ? `<p class="talk__links">${links.join("")}</p>` : ""}
    </div>`;
}

function renderDay(talks, isNext) {
  const date = parseDate(talks[0].date);

  return `
    <article class="talk${isNext ? " talk--next" : ""}">
      <time class="date" datetime="${escapeHtml(talks[0].date)}">
        <span class="date__weekday">${WEEKDAYS[date.getDay()]}</span>
        <span class="date__day">${date.getDate()}</span>
        <span class="date__month">${MONTHS[date.getMonth()]} ${date.getFullYear()}</span>
      </time>
      <div class="talk__body">
        ${isNext ? `<p class="badge">Next ${talks.length > 1 ? "talks" : "talk"}</p>` : ""}
        ${talks.map(renderTalk).join("")}
      </div>
    </article>`;
}

function render() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const byDateThenTime = (a, b) =>
    parseDate(a.date) - parseDate(b.date) ||
    (a.time || "").localeCompare(b.time || "", undefined, { numeric: true });
  const days = groupByDay([...TALKS].sort(byDateThenTime));
  const upcoming = days.filter((d) => parseDate(d[0].date) >= today);
  const past = days.filter((d) => parseDate(d[0].date) < today).reverse();

  document.getElementById("upcoming-list").innerHTML = upcoming.length
    ? upcoming.map((d, i) => renderDay(d, i === 0)).join("")
    : `<p class="empty">No upcoming talks scheduled yet. Check back soon.</p>`;

  document.getElementById("past-list").innerHTML = past.map((d) => renderDay(d, false)).join("");
  document.getElementById("past").hidden = past.length === 0;
}

render();
