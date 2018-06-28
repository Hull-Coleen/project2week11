function getPulse(e) {
	console.log("getPulse function");
    const id = document.querySelector('#input').value;
    fetch(`getPulse?id=${id}`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          console.log("inside fetch" + json);
          const output = document.querySelector('#output');
          if ("error" in json) {
            output.innerText = json.error;
          } else {
         // var string = json.map((item)=>{
           // return item.child; 
          //})
          //string = string.join(", ");
          //output.innerText = string;
        //}
            output.innerText = json[0].pulse;
			//output.innerText = JSON.stringify(json.rows);
         
      })

}

