function iterativeLog(array){
  array.forEach((index, element) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const cats = ["dog", "cat", "bird"]

  cats.forEach(callback)

  return cats
}

function doToArray(array, callback) {
  array.forEach(callback)
}
