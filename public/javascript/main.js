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
          } 
		  else {
          var string = json.map((item)=>{
            return item.pulse; 
          })
          string = string.join(", ");
          output.innerText = string;
        }
      })

}
function exercise(e) {
	var test = "";
	console.log("getexercise function");
    const id = document.querySelector('#input').value;
    fetch(`getExercise?id=${id}`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          console.log("inside fetch" + json);
          const output = document.querySelector('#output');
          if ("error" in json) {
            output.innerText = json.error;
          }
		  
		  else {
          var string = json.map((item)=>{
			test = item.exercise + " " + item.exercise_time;
            return test; 
          })
          string = string.join(", ");
          output.innerText = string;
        }
      })

}
function weight(e) {
	console.log("getweight function");
    const id = document.querySelector('#input').value;
    fetch(`getWeight?id=${id}`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          console.log("inside fetch" + json);
          const output = document.querySelector('#output');
          if ("error" in json) {
            output.innerText = json.error;
          } 
		  else {
          var string = json.map((item)=>{
            return item.weight; 
          })
          string = string.join(", ");
          output.innerText = string;
        }
      })

}
function getUser(e) {
	console.log("getweight function");
    const name = document.querySelector('#name').value;
	const pass = document.querySelector('#pass').value;
    fetch(`getuser?name=${name}&pass=${pass}`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          console.log("inside fetch" + json);
          const output = document.querySelector('#output');
          if ("error" in json) {
            output.innerText = json.error;
          } 
		  else {
          output.innerText = json.user_name;
        }
      })

}
function getUserName(e) {
	console.log("signin function");
    const name = document.querySelector('#name').value;
	const pass = document.querySelector('#pass').value;
    fetch(`signin`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          console.log("inside fetch" + json);
          const output = document.querySelector('#output');
          if ("error" in json) {
            output.innerText = json.error;
          } 
		  else {
          output.innerText = json.user_name;
        }
      })

}


