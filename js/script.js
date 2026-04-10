// Basic JavaScript for Campus App pages

// EVENTS SEARCH 
// Filter event cards when the user types in the search bar.
function initEventsPage() {
  const searchInput = document.getElementById('eventSearch');
  const eventCards = document.querySelectorAll('.event-card');
  const noResults = document.getElementById('noResults');

  if (!searchInput) {
    return;
  }

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    eventCards.forEach(function (card) {
      const text = card.textContent.toLowerCase();
      if (text.indexOf(query) !== -1) {
        card.style.display = 'flex';
        visibleCount += 1;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResults) {
      if (visibleCount === 0) {
        noResults.classList.remove('d-none');
      } else {
        noResults.classList.add('d-none');
      }
    }
  });
}