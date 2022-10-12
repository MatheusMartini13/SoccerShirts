function shirtNumberAtt(shirtN, newName, newPosition, removed=false){
  if (shirtN > 0 && shirtN < 12){
    const nameAltered = document.getElementById('player' + shirtN)
    nameAltered.innerText = newName
    const position = document.getElementById('posname' + shirtN)
    if (!removed){
    position.innerText = newName + " de posição " + newPosition
    } else {
    position.innerText = newPosition
    }
  } else {
    alert("Essa camisa não existe")
  }
}

function resetFields(numberShirt,name="",position=""){
  name.value = ""
  position.value = ""
  numberShirt.value = ""
}

function changeList(){

  const name = document.getElementById('addPlayer') 
  const newName = name.value

  const position = document.getElementById('addPosition') 
  const newPosition = position.value

  const numberShirt = document.getElementById('addNumber') 
  const newnumberShirt = numberShirt.value

  if(newName == "" || newPosition == ""){
    alert("Você deixou um campo em branco!")
    resetFields(numberShirt,name,position)
    return
  }

  shirtNumberAtt(newnumberShirt, newName, newPosition)
  resetFields(numberShirt,name,position)
}


function removeNumber(){
  const numberShirt = document.getElementById('removeNumber') 
  const removeNumberShirt = numberShirt.value
  shirtNumberAtt(removeNumberShirt, "Livre", "", true)

  resetFields(numberShirt)
}
