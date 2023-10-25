async function postJSON(dataAddQuestion) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    
  
    try {
      const response = await fetch("/newWord", {
        method: "POST", // or 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAddWord),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);
  
      if (result.validar == false) {
        alert("")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        alert("La palabra ha sido agregada exitosamente")
        location.href = '/admin'
      }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function addQuestion() {
    //Leo los datos del input
    let word = document.getElementById("newName").value
    let definition = document.getElementById("newDefinition").value
    
  
    //Creo un objeto de forma instantanea
    let dataAddQuestion = {
        wordName: word,
        wordDefinition: definition
    }
  
    //data es el objeto que le paso al back
    postJSON(dataAddQuestion)
  }
  