function getPulse(e) {
    const id = document.querySelector('#input').value;
    fetch(`getPulse?id=${input}`)
      .then((res)=>{
          return res.json()
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