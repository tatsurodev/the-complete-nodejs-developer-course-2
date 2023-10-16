// const square = function (x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  // success with normal function keyword
  //   printGuestList: function () {
  //     console.log(this.name)
  //   },
  // fail with arrow function
  //   printGuestList: () => {
  //     console.log(this.name)
  //   },
  // success with es6 shorthand
  printGuestList() {
    console.log('Guest list for ' + this.name)
    // fail
    // this.guestList.forEach(function (guest) {
    //   console.log(guest + ' is attending ' + this.name)
    // })
    // success
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  },
}

event.printGuestList()
