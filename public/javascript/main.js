function getPulse(e) {
	console.log("getPulse function" + json);
    const id = document.querySelector('#input').value;
    fetch(`getPulse?id=${id}`)
      .then((res)=>{
          return res.json()
		  console.log("getPulse function" + json);
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

