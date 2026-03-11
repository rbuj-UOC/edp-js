// Set a cookie with a name, value and number of days until expiration.
function setCookie(name, value, days) {
  // By default, there is no expiration so the cookie is temporary.
  let expires = ''
  // If we have a number of days, we calculate the expiration date.
  if (days) {
    let date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  // Set the cookie.
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

// Get the value of a cookie by its name.
function getCookie(name) {
  // Create a key with the cookie name, followed by '='
  const nameEqual = name + '='

  // Split document.cookie on semicolons into an array.
  const cookies = document.cookie.split(';')

  // Loop through the cookies array and check if the cookie name is found.
  for (let cookie of cookies) {
    cookie = cookie.trim()
    if (cookie.startsWith(nameEqual)) {
      return cookie.substring(nameEqual.length)
    }
  }

  // Return null if the cookie has not been found.
  return null
}

// Delete a cookie by its name.
function deleteCookie(name) {
  // Set the expiration date to the past.
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

// Example usage. Set a cookie.
setCookie('user', 'John Doe', 7)
// setCookie('age', 45, 7)

// Example usage. Get a cookie that exists.
const user = getCookie('user')
console.log(user)

// Example usage. Get a cookie that does not exist.
const age = getCookie('age')
console.log(age)
