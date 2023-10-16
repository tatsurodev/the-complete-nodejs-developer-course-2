// links.mead.io/arrow-challenge
//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

// functionの書き方best practice
// 1. object内のfunction、つまりmethodの場合、es6 syntaxを使う
// 2. それ以外はarrow function

const tasks = {
  tasks: [
    {
      text: 'Grocery shopping',
      completed: true,
    },
    {
      text: 'Clean yard',
      completed: false,
    },
    {
      text: 'Film course',
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.tasks.filter((task) => task.completed === false)
  },
}

console.log(tasks.getTasksToDo())
