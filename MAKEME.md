## Question 1:

Explain what and why will be logged on the console if we run this code snippet?

Bonus: explain what and why will be logged on the console if we used let instead of var inside the for loop?

```js
const myFunction = () => {
  const arr = [10, 12, 15, 21];
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
      console.log('Index: ' + i);
    }, 3000);
  }
};

myFunction();
```

---

timeout is set 4 times inside an array. When the function is called,
the loop is finished long ago, but variable i declared as a var is hoisted
to the global scope and later when callback function is called, the global
value (4) is being printed. Otherwise, if i is declared as 'let', it is
being captured by closure from the local scope of myFunction and thus it
different on each later callback.

---

## Question 2:

Explain what and why would be logged on the console?

```js
function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
console.log(parent());
```

---

Here a function is trying to be declared after the declaration of a variable with the same name in the same
scope. An error occurs, saing that 'hoisted is not a function', because JS is calling 'hoisted', that
was declared as a variable - not as a function.

---

## Question 3:

Create a function, called injectBooksToDOM, that: - Takes 1 argument: an array of objects - Loops over the array - Display the content of each book along with the book image - Returns true if it works, false if it doesn't

      Target the '#root' element in 'index.html'.
      Use the following object:
      const books = [
            {
                  bookName: "The Nature of Software Development",
                  author: "Ron Jeffries",
                  coverURL:
                        "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
            },
            {
                  bookName: "Clean Code",
                  author: "Robert Cecil Martin",
                  coverURL:

---

why the array is not finished? what does it mean "Returns true if it works"?
Why it may not work? I don't catch the question!
See question3.html

---

## Question 4:

What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in?
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us,
the explanation why is the important part)

```js
function test() {
  console.log('one');
  setTimeout(function () {
    console.log('two');
    setTimeout(function () {
      console.log('three');
    }, 0);
  }, 1000);
  setTimeout(function () {
    console.log('four');
    setTimeout(function () {
      console.log('five');
    }, 1000);
    c;
  }, 0);
  console.log('six');
}
test();
```

---

This code will cause an error in either browser because it has a syntax error
(extra letter 'c')

I don't think, this function will always return the same because setting timeout
to 0 or to the same value of time just puts corresponding function on the queue,
and we could hardly predict what comes first out of this queue.

---
