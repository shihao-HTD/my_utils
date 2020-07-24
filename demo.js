const p = Promise.resolve(() => {})

p.then(
  (value) => {
    console.log("value", value)
  },
  (reason) => {
    console.log("reason")
  }
)
