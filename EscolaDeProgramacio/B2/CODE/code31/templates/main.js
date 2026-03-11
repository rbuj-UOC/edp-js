const pictures = [
  { title: 'Sunset Dreams', author: 'Emily Carter', url: 'https://picsum.photos/500?random=a1b2c3d4' },
  { title: 'Urban Exploration', author: 'Michael Byrne', url: 'https://picsum.photos/500?random=e5f6g7h8' },
  { title: 'Misty Mountains', author: 'Sarah Johnson', url: 'https://picsum.photos/500?random=i9j1k2l3' },
  { title: 'Golden Fields', author: 'Alex Smith', url: 'https://picsum.photos/500?random=m4n5o6p7' },
  { title: 'City Lights', author: 'Laura White', url: 'https://picsum.photos/500?random=q8r9s1t2' },
  { title: 'Lonely Forest', author: 'Chris Green', url: 'https://picsum.photos/500?random=u3v4w5x6' },
  { title: 'Ocean Breeze', author: 'Rebecca Hall', url: 'https://picsum.photos/500?random=y7z8a9b1' },
  { title: 'Lost in Time', author: 'John Doe', url: 'https://picsum.photos/500?random=c2d3e4f5' },
  { title: 'Desert Mirage', author: 'Sophia Turner', url: 'https://picsum.photos/500?random=g6h7i8j9' },
  { title: 'Winter Silence', author: 'Daniel Lee', url: 'https://picsum.photos/500?random=k1l2m3n4' },
  { title: 'Under the Stars', author: 'Mia Wong', url: 'https://picsum.photos/500?random=o5p6q7r8' },
  { title: 'Hidden Waterfall', author: 'Oliver King', url: 'https://picsum.photos/500?random=s9t1u2v3' },
  { title: 'Ancient Ruins', author: 'Zoe Adams', url: 'https://picsum.photos/500?random=w4x5y6z7' },
  { title: 'Majestic Canyon', author: 'Liam Brown', url: 'https://picsum.photos/500?random=a8b9c1d2' },
  { title: 'Enchanted Forest', author: 'Grace Davis', url: 'https://picsum.photos/500?random=e3f4g5h6' },
  { title: 'Arctic Wilderness', author: 'Ethan Wilson', url: 'https://picsum.photos/500?random=i7j8k9l1' },
  { title: 'Tropical Paradise', author: 'Isabella Martinez', url: 'https://picsum.photos/500?random=m2n3o4p5' },
  { title: 'Fiery Sunset', author: 'Jack Taylor', url: 'https://picsum.photos/500?random=q6r7s8t9' },
  { title: 'Vibrant Cityscape', author: 'Chloe Anderson', url: 'https://picsum.photos/500?random=u1v2w3x4' },
  { title: 'Mountain Solitude', author: 'Ryan Murphy', url: 'https://picsum.photos/500?random=y5z6a7b8' },
]

function showPictures() {
  // Let's grab a reference to <div> with class `pictures`.
  const container = document.querySelector('.pictures')

  // Let's grab a reference to our <template> for each picture.
  const template = document.querySelector('#template-picture').content

  // Let's loop through all pictures.
  for (const picture of pictures) {
    // Create a clone based on template.
    const clone = template.cloneNode(true)

    // Customize properties.
    clone.querySelector('img').src = picture.url
    clone.querySelector('img').alt = picture.title
    clone.querySelector('.title').textContent = picture.title
    clone.querySelector('.author').textContent = picture.author

    // And add clone to container.
    container.appendChild(clone)
  }
}

showPictures()

// In case you want to use DocumentFragment:
// const fragment = document.createDocumentFragment()
// fragment.appendChild(clone)
// container.appendChild(fragment)
