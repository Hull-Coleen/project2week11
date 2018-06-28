function getPulse(e) {
	console.log("getPulse function");
    const id = document.querySelector('#input').value;
    fetch(`pulse?id=${id}`)
      .then((res)=>{
          return res.json()
		  console.log("inside fetch" + json);
      })
      .then(json =>{

          const output = document.querySelector('#output');
          if ("error" in json) {
            output.innerText = json.error;
          } else {
            output.innerText = json.pulse;
          }
      })

}

