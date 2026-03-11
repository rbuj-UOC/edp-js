let result

// Example 1.

// This is a syncronous function.
function getPokemonsPromise() {
  // This code returns a Promise.
  const response = fetch('https://pokeapi.co/api/v2/berry')
  return response
}

// We call a syncronous function and get exactly
// what the function returns: a Promise.
result = getPokemonsPromise()
console.log(result)

// Example 2.

// This is an asyncronous function.
async function getPokemonsResponse() {
  // This code DOES NOT return a Promise but a real Response.
  const response = await fetch('https://pokeapi.co/api/v2/berry')
  return response
}

// We call an asyncronous function.
// Even when the function returns a Response,
// as the function itself is asyncronous, we get a Promise.
result = getPokemonsResponse()
console.log(result)

// Example 3.

// We call an asyncronous function.
// This time, we use `await` as we do not want a Promise.
// As the function returns a Response and we use `await`,
// we get a real Response.
result = await getPokemonsResponse()
console.log(result)

// Example 4. Berries.

// This is an asyncronous function.
async function getPokemonsData() {
  // This code DOES NOT return a Promise but a real Response.
  const response = await fetch('https://pokeapi.co/api/v2/berry')
  const data = await response.json()
  return data
}

// We call an asyncronous function.
// This time, we use `await` as we do not want a Promise.
// As the function returns a Response and we use `await`,
// we get a real Response.
result = await getPokemonsData()
console.log(result.results)
