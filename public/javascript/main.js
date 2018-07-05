function getPulse(e) {
	console.log("getPulse function");
    const id = document.querySelector('#input').value;
    fetch(`getPulse?id=${id}`)
	/*const userId = id;
	fetch(`getPulse`)*/
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
/*function getUser(e) {
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

}*/
function insert(e) {
	console.log("insert function");
    const id = document.querySelector('#id').value;
	const exercise = document.querySelector('#exercise').value;
	const time = document.querySelector('#time').value;
	const weight = document.querySelector('#weight').value;
	const pulse = document.querySelector('#pulse').value;
	const date = document.querySelector('#date').value;
	
    fetch(`insert?id=${id}&exercise=${exercise}&time=${time}&weight=${weight}&pulse=${pulse}&date=${date}`)
      .then((res)=>{
          return res.json()
      })
	  .then(json =>{
          const output = document.querySelector('#output');
		  if ("error" in json) {
            output.innerText = json.error;
          } 
		    else {
          output.innerText = json.id;
        }
		  
      })

}
/*function test() {
   console.log("test function called");	
   const name = document.querySelector('#name1').value;
   const pass = document.querySelector('#pass1').value;
   const username = document.querySelector('#username').value;
	 $.get('/createUser', { name : name, pass: pass , username: username }, function(data, stat) {
	   console.log(data);
	   console.log(stat);
	   
   });
   /*$.post('/createUser', { name : name, pass: pass , username: username }, function(data, stat) {
	   console.log(data);
	   console.log(stat);
	   
   });*/
/*};*/
function create(e) {
	console.log("insert function");
    const name = document.querySelector('#name1').value;
	const pass = document.querySelector('#pass1').value;
	const username = document.querySelector('#username').value;
	var data = {name1 : name, pass1 : pass, username: username};
    fetch(`/createUser`, { method: "POST", body: JSON.stringify(data), headers:{
    'Content-Type': 'application/json'
  }})
      .then((res)=>{
          return res.json()
		  console.log(JSON.stringify(res.json));
      })
	  .then(json =>{
		  console.log("returning json" + JSON.stringify(json));
          const output = document.querySelector('#greeting');
		  if ("error" in json) {
            output.innerText = json.error;
          } 
		    else {
          output.innerText = json.id;
		  const userId = document.querySelector('#userId');
		  id = json.id;
		  userId.innerText = id;
        }
		  
      })

}
function getUserName(e) {
	//console.log("signin function");
    //const name = document.querySelector('#name').value;
	//const pass = document.querySelector('#pass').value;
	const name = document.querySelector('#name').value;
	const pass = document.querySelector('#pass').value;
	//const username = document.querySelector('#username').value;
	var data = {name : name, pass : pass};
    fetch(`signin`, { method: "POST", body: JSON.stringify(data), headers:{
    'Content-Type': 'application/json'
  }})
    //fetch(`signin`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          console.log("inside fetch" + JSON.stringify(json));
          const output = document.querySelector('#greeting');
          if ("error" in json) {
            output.innerText = json.error;
          } 
		  else {
          output.innerText = json.name;
        }
      })

}


