// Trip Saving
function saveTrip() {
  const destination = document.getElementById('tripDestination').value;
  const dates = document.getElementById('tripDates').value;
  const notes = document.getElementById('tripNotes').value;

  if (!destination || !dates) return alert("Моля, въведи дестинация и дати.");

  let trips = JSON.parse(localStorage.getItem('trips') || '[]');
  trips.push({ destination, dates, notes });
  localStorage.setItem('trips', JSON.stringify(trips));
  displayTrips();
}

function displayTrips() {
  let trips = JSON.parse(localStorage.getItem('trips') || '[]');
  const container = document.getElementById('savedTrips');
  container.innerHTML = trips.map(t => 
    `<div>🏝 ${t.destination} (${t.dates}) — ${t.notes}</div>`
  ).join('') || "Все още нямаш запазени пътувания.";
}

// Requests Saving
function saveRequest(type) {
  const inputMap = {
    voice: 'voiceInput',
    wa: 'waInput',
    email: 'emailInput'
  };
  const text = document.getElementById(inputMap[type]).value.trim();
  if (!text) return alert("Празно поле.");

  let requests = JSON.parse(localStorage.getItem('requests') || '[]');
  requests.push({ type, text });
  localStorage.setItem('requests', JSON.stringify(requests));
  displayRequests();
}

function displayRequests() {
  let requests = JSON.parse(localStorage.getItem('requests') || '[]');
  const container = document.getElementById('savedRequests');
  container.innerHTML = requests.map(r => 
    `<div>💌 <b>${r.type}</b>: ${r.text}</div>`
  ).join('') || "Няма записани заявки.";
}

// Load UI
window.onload = function() {
  displayTrips();
  displayRequests();
};
