

function demo(){
  throw 1
}

try {
  demo()
}catch (e){
  console.log(e)
}
