// Updates rating selected by user using many events.
function updateRatingWithManyEvents(event) {
  // Get a reference to `<div>` element clicked by user.
  const clickedStar = event.target

  // Get a reference to all `<div>` elements with class `star`.
  const stars = document.querySelectorAll('.star')

  // Remove `star-pink` class from all `<div>` elements.
  stars.forEach((star) => star.classList.remove('star-pink'))

  // Add `star-pink` class to all `<div>` elements until we reach the one clicked by user.
  let rating = 0

  for (const star of stars) {
    star.classList.add('star-pink')
    rating++
    if (star === clickedStar) break
  }

  console.log('User selected rating', rating)
}

// Updates rating selected by user using event delegation.
function updateRatingEventDelegation(event) {
  // Check whether user has actually clicked on a star or the container itself.
  const starContainer = document.querySelector('.star-container')
  if (event.target === starContainer) return

  // Get a reference to `<div>` element clicked by user.
  const clickedStar = event.target

  // Get a reference to all `<div>` elements with class `star`.
  const stars = document.querySelectorAll('.star')

  // Remove `star-pink` class from all `<div>` elements.
  stars.forEach((star) => star.classList.remove('star-pink'))

  // Add `star-pink` class to all `<div>` elements until we reach the one clicked by user.
  let rating = 0

  for (const star of stars) {
    star.classList.add('star-pink')
    rating++
    if (star === clickedStar) break
  }

  console.log('User selected rating', rating)
}

// Adds a different event listener to each star.
function addEventsToAllStars() {
  const stars = document.querySelectorAll('.star')
  stars.forEach((star) => star.addEventListener('click', updateRatingWithManyEvents))
}

// Adds a single event listener to container.
function addEventToStarContainer() {
  const starContainer = document.querySelector('.star-container')
  starContainer.addEventListener('click', updateRatingEventDelegation)
}

// Comment or uncomment to see how each approach works.
// addEventsToAllStars()
// addEventToStarContainer()
