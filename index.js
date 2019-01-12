function iterativeLog(array){
  array.forEach((index, element) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const animals = ["dog", "cat", "bird"]

  animals.forEach(callback)

  return animals
}

function doToArray(array, callback) {
  array.forEach(callback)
}
