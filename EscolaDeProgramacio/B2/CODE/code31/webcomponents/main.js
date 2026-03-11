// <my-awesome-paragraph></my-awesome-paragraph>

class AwesomeParagraph extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = '<p>This is an awesome paragraph!</p>'
  }
}

customElements.define('awesome-paragraph', AwesomeParagraph)

// <dice-roller></dice-roller>

class DiceRoller extends HTMLElement {
  constructor() {
    super()
    this.number = 1
    this.innerHTML = `<button>${this.number}</button>`
    this.button = this.querySelector('button')
    this.button.addEventListener('click', () => this.roll())
  }

  roll() {
    const interval = setInterval(() => {
      this.number = Math.ceil(Math.random() * 6)
      this.button.textContent = this.number
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
      console.log('You rolled a', this.number, '(DiceRoller)')
    }, 2000)
  }
}

customElements.define('dice-roller', DiceRoller)

// <trick-dice></trick-dice>

class TrickDice extends HTMLElement {
  constructor() {
    super()
    this.number = 1
    this.favorite = parseInt(this.getAttribute('favorite') || 0)
    this.innerHTML = `<button>${this.number}</button>`
    this.button = this.querySelector('button')
    this.button.addEventListener('click', () => this.roll())
  }

  roll() {
    const interval = setInterval(() => {
      this.number = Math.ceil(Math.random() * 6)
      if (this.favorite > 0 && this.favorite <= 6) {
        this.number = Math.random() < 0.5 ? this.number : this.favorite
      }
      this.button.textContent = this.number
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
      console.log('You rolled a', this.number, '(TrickDice)')
    }, 2000)
  }
}

customElements.define('trick-dice', TrickDice)
