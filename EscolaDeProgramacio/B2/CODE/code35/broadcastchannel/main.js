document.querySelector('#poster').addEventListener('click', () => {
  const bc = new BroadcastChannel('test_channel')
  bc.postMessage('Hello World!')
  console.log('Message posted')
})

document.querySelector('#listener').addEventListener('click', () => {
  const bc = new BroadcastChannel('test_channel')
  bc.onmessage = (event) => {
    console.log('Message received')
    console.log(event)
    console.log(event.data)
  }
})
