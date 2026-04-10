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

// DINING DATA 
// Basic local data used to update the Dining page.
const diningData = {
  north: {
    name: 'North Hall',
    menu: 'Grilled Chicken Bowl with seasonal vegetables and brown rice. Vegetarian option: Lentil Curry. Dessert: Mixed fruit cup.',
    price: '$12.50',
    monFri: '07:00 - 20:00',
    sat: '08:00 - 16:00',
    sun: 'Closed'
  },
  south: {
    name: 'South Hall',
    menu: 'BBQ Beef Sandwich with coleslaw and fries. Vegetarian option: Garden Burger. Dessert: Chocolate brownie.',
    price: '$11.00',
    monFri: '10:00 - 18:00',
    sat: '11:00 - 15:00',
    sun: 'Closed'
  },
  central: {
    name: 'Central Cafeteria',
    menu: 'Pasta Primavera with garlic bread. Vegetarian option: Margherita Pizza. Dessert: Tiramisu.',
    price: '$10.00',
    monFri: '12:00 - 15:00',
    sat: '12:30 - 14:30',
    sun: 'Closed'
  }
};

// DINING INTERACTION 
// Update menu text and hours when a dining hall is selected.
function initDiningPage() {
  const select = document.getElementById('diningSelect');
  const menuTitle = document.querySelector('.menu-card-title');
  const menuDesc = document.querySelector('.menu-desc');
  const menuPrice = document.querySelector('.menu-price');
  const timeCells = document.querySelectorAll('#hoursTable .time');

  if (!select) {
    return;
  }

  select.addEventListener('change', function () {
    const selected = diningData[select.value];
    if (!selected) {
      return;
    }

    if (menuTitle) {
      menuTitle.textContent = 'Menu of the Day - ' + selected.name;
    }
    if (menuDesc) {
      menuDesc.textContent = selected.menu;
    }
    if (menuPrice) {
      menuPrice.textContent = selected.price;
    }

    if (timeCells.length >= 3) {
      timeCells[0].textContent = selected.monFri;
      timeCells[1].textContent = selected.sat;
      timeCells[2].textContent = selected.sun;
    }
  });
}