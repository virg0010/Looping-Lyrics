const animals = [
  { name: 'cow', sound: 'moo' },
  { name: 'pig', sound: 'oink' },
  { name: 'duck', sound: 'quack' }
]

for (let i = 0; i < animals.length; i++) {
  console.log(`
  Old MACDONALD had a farm
E-I-E-I-O
And on his farm he had a ${animals[i].name}
E-I-E-I-O
With a ${animals[i].sound} ${animals[i].sound} here
And a ${animals[i].sound} ${animals[i].sound} there
Here a ${animals[i].sound}, there a ${animals[i].sound}
Everywhere a ${animals[i].sound} ${animals[i].sound}
Old MacDonald had a farm
E-I-E-I-O
  `)
}
/** Song two
const bingo = [
  { name: 'BINGO' },
  { name: '(Clap)-INGO' },
  { name: '(Clap)-(Clap)-NGO' },
  { name: '(Clap)-(Clap)-(Clap)-GO' },
  { name: '(Clap)-(Clap)-(Clap)-(Clap)-O' },
  { name: '(Clap)-(Clap)-(Clap)-(Clap)-(Clap)' }

]

for (let j = 0; bingo.length; j++) {
  console.log(`
There was a farmer who had a dog,
And Bingo was his name-o.

`)
}
*/
// I struggled with this one a lot, ended up getting help on it, you can see work above this was one of the methods i tried but ulitmily didn't work.
const bingo = ['B', 'I', 'N', 'G', 'O']

for (let i = 0; i <= 5; i++) {
  console.log(`There was a farmer who had a dog
  And Bingo was his name-o`)
  // Look more up on .join
  for (let r = 0; r < 3; r++) {
    console.log(bingo.join('-'))
  }

  console.log('And Bingo was his name-o')
  console.log('')
  // look more on how this connects
  for (let j = i; j <= 5; j++) {
    bingo[i] = '(clap)'
  }
}
// needed help on this too
// makes sense
const ducks = [5, 4, 3, 2, 1]

// Always displays still good
for (const duck of ducks) {
  console.log(`${duck} little ducks went out one day...`)
  console.log(`Over the hills and far away`)
  console.log(`Mother duck said "Quack, quack, quack, quack"`)

  // -1 is the key here remember that
  if (duck !== 1) {
    console.log(`But only ${duck - 1} little ducks came back`)
  } else {
    (
      console.log('but none of the five little ducks came back')
    )
    console.log('')
  }
}
// this is the way the last line displays. Thought the loop would have to change for it, but i now get that im just stupid
console.log('Sad mother duck went out one day')
console.log('Over the hills and far away')
console.log('Mother duck said "Quack, quack, quack, quack"')
console.log('And all of the five little ducks came back.')
