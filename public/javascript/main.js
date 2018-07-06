function getPulse(e) {
	console.log("getPulse function");
   // const id = document.querySelector('#input').value;
    //fetch(`getPulse?id=${id}`)
	//const userId = id;
	fetch(`getPulse`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
		    const output = document.querySelector('#title')
          if ("error" in json) {
            output.innerText = json.error;
          } 
		  else {
             pulseList(json);
             output.innerText = "Pulse Results";
          }
		
      })
}
function exercise(e) {
	console.log("getexercise function");
    //const id = document.querySelector('#input').value;
    //fetch(`getExercise?id=${id}`)
	fetch(`getExercise`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
           const output = document.querySelector('#title')
          if ("error" in json) {
            output.innerText = json.error;
          } 
		  else {
             exerciseList(json);
             output.innerText = "Exercise Results";
          }
      })

}
function weight(e) {
	console.log("getweight function");
    //const id = document.querySelector('#input').value;
    //fetch(`getWeight?id=${id}`)
	fetch(`getWeight`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          const output = document.querySelector('#title')
          if ("error" in json) {
            output.innerText = json.error;
          } 
		  else {
             weightList(json);
             output.innerText = "Weight Results";
          }
		
      })

}
function weightList(data){
    var objs = data.map(item => {
        return item.weight;
    })
    console.log(objs);
    var div = document.querySelector('#health');
	div.innerHTML = '';
    objs.forEach(obj => {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(obj));
        div.appendChild(li);
    });

}
function exerciseList(data){
    var objs = data.map(item => {
        return item.exercise + "  " + item.exercise_time;
    })
    console.log(objs);
    var div = document.querySelector('#health');
	div.innerHTML = '';
    objs.forEach(obj => {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(obj));
        div.appendChild(li);
    });

}
function pulseList(data){
    var objs = data.map(item => {
        return item.pulse;
    })
    console.log(objs);
    var div = document.querySelector('#health');
	div.innerHTML = '';
    objs.forEach(obj => {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(obj));
        div.appendChild(li);
    });

}

function insert(e) {
	console.log("insert function");
   // const id = document.querySelector('#id').value;
	const exercise = document.querySelector('#exercise').value;
	const time = document.querySelector('#time').value;
	const weight = document.querySelector('#weight').value;
	const pulse = document.querySelector('#pulse').value;
	const date = document.querySelector('#date').value;
	//const userId = id;
	fetch(`insert?exercise=${exercise}&time=${time}&weight=${weight}&pulse=${pulse}&date=${date}`)
    //fetch(`insert?id=${id}&exercise=${exercise}&time=${time}&weight=${weight}&pulse=${pulse}&date=${date}`)
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
	const name = document.querySelector('#name').value;
	const pass = document.querySelector('#pass').value;
	var data = {name : name, pass : pass};
    fetch(`signin`, { method: "POST", body: JSON.stringify(data), headers:{
    'Content-Type': 'application/json'
  }})
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
		  id = json.id;
		  console.log(id);
		  
        }
      })

}


