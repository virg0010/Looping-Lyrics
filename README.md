# Looping Lyrics

## Introduction
Many children songs repeat the same lines over and over again. It sure would save a lot of time to loop over the lyrics. 

## Objective

In this exercise, you will be demonstrating that you understand how to use loops effectively to repeat code and iterate over objects and arrays and how to use conditional statements by recreating the lyrics to children songs using as few statements as possible. 

## Requirements

The following requirements must be met in order to complete the assignment successfully:

1. Clone this repository from GitHub. **Aside from this README file, there are NO starter files for this assignment.** 
2. Create a `index.html` file and a `script.js` file. The `index.html` file should contain a standard HTML5 structure and should add `script.js` using the `<script></script>` tag.
3. Follow the instructions below to create the song lyrics for 3 songs. All of the songs must be displayed in the browser's console. Loops, objects and arrays must be used effectively to limit repeating code. 

### The Songs

1.  Using a loop or loops and an Object and/or Array, output 3 verses of the song "Old MacDonald" to the console.

**Full Lyrics**

```
Old MACDONALD had a farm
E-I-E-I-O
And on his farm he had a cow
E-I-E-I-O
With a moo moo here
And a moo moo there
Here a moo, there a moo
Everywhere a moo moo
Old MacDonald had a farm
E-I-E-I-O

Old MACDONALD had a farm
E-I-E-I-O
And on his farm he had a pig
E-I-E-I-O
With a oink oink here
And a oink oink there
Here a oink, there a oink
Everywhere a oink oink
Old MacDonald had a farm
E-I-E-I-O

Old MACDONALD had a farm
E-I-E-I-O
And on his farm he had a duck
E-I-E-I-O
With a quack quack here
And a quack quack there
Here a quack, there a quack
Everywhere a quack quack
Old MacDonald had a farm
E-I-E-I-O
```

2.  Using nested loops and an Object and/or Array, output the ENTIRE song of "Bingo" to the console.

**Full Lyrics**

```
There was a farmer who had a dog,
And Bingo was his name-o.
B-I-N-G-O
B-I-N-G-O
B-I-N-G-O
And Bingo was his name-o.

There was a farmer who had a dog,
And Bingo was his name-o.
(clap)-I-N-G-O
(clap)-I-N-G-O
(clap)-I-N-G-O
And Bingo was his name-o.

There was a farmer who had a dog,
And Bingo was his name-o.
(clap)-(clap)-N-G-O
(clap)-(clap)-N-G-O
(clap)-(clap)-N-G-O
And Bingo was his name-o.

There was a farmer who had a dog,
And Bingo was his name-o.
(clap)-(clap)-(clap)-G-O
(clap)-(clap)-(clap)-G-O
(clap)-(clap)-(clap)-G-O
And Bingo was his name-o.

There was a farmer who had a dog,
And Bingo was his name-o.
(clap)-(clap)-(clap)-(clap)-O
(clap)-(clap)-(clap)-(clap)-O
(clap)-(clap)-(clap)-(clap)-O
And Bingo was his name-o.

There was a farmer who had a dog,
And Bingo was his name-o.
(clap)-(clap)-(clap)-(clap)-(clap)
(clap)-(clap)-(clap)-(clap)-(clap)
(clap)-(clap)-(clap)-(clap)-(clap)
And Bingo was his name-o.
```

3. Using loops and conditional statements, output the ENTIRE song of "5 Little Ducks" to the console.

**Full Lyrics**

```
5 little ducks went out one day
Over the hills and far away
Mother duck said “Quack, quack, quack, quack”
But only 4 little ducks came back.

4 little ducks went out one day…
Over the hills and far away
Mother duck said “Quack, quack, quack, quack”
But only 3 little ducks came back.

3 little ducks went out one day…
Over the hills and far away
Mother duck said “Quack, quack, quack, quack”
But only 2 little ducks came back.

2 little ducks went out one day…
Over the hills and far away
Mother duck said “Quack, quack, quack, quack”
But only 1 little duck came back.

1 little duck went out one day…
Over the hills and far away
Mother duck said “Quack, quack, quack, quack”
But none of the five little ducks came back

Sad mother duck went out one day…
Over the hills and far away
Mother duck said “Quack, quack, quack, quack”
And all of the five little ducks came back.
```

## Hints
To improve readability, it is suggested to use a new `console.log()` for each line of a song, and a `console.log('')` with an empty string between each verse of a song. 

The `join()` method can be useful for combining the item of an array into a string.

While it more common to increment the iterator when using a `for` loop, it is possible to work backwards and decrement the iterator using `--`.

## Example

This is examples shows how the first five verses of "The Ants Go Marching" could be created using nested loops. 

```js
const verses = [
  { number: 'one', action: 'suck his thumb'},
  { number: 'two', action: 'tie his shoe'},
  { number: 'three', action: 'climb a tree'},
  { number: 'four', action: 'shut the door'},
  { number: 'five', action: 'take a dive'},
]

console.log('THE ANTS GO MARCHING')

for (const verse of verses) {

  for (let i = 0; i < 2; i++) {
    console.log('')
    console.log(`The ants go marching ${verse.number} by ${verse.number}`)
    console.log('Hoorah! Hoorah!')
  }

  console.log(`The ants go marching ${verse.number} by ${verse.number}`)
  console.log(`The little one stops to ${verse.action}`)
  console.log('And they all go marching down to the ground to get out of the rain.')
}
```

## Rubric

| Task | Points |
| ---  | :---:  | 
| Meets all of the requirements for Old MacDonald | 2 |
| Meets all of the requirements for Bingo | 4 |
| Meets all of the requirements for 5 Little Ducks  | 4 |
| **Total** | **10** | 


## Submission
When the assignment is completed, follow the steps below to submit for grading:

1. Create a commit with the message "Completes the Looping Lyrics assignment"
2. Push all commits to GitHub.
3. Submit the URL to your GitHub repository to the **Looping Lyrics** assignment on BrightSpace.  

