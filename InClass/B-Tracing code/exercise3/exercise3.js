var myElement = document.querySelector("#main");
// var paragraph = document.createElement("p"); 
const getRepos = function(repoName) {
  return fetch('https://api.github.com/users/' + repoName + '/repos')  
    .then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
        
        console.log(rep.name);
        // myElement.appendChild(paragraph);
        return myElement.innerHTML+= `<p> ${rep.name}</p>` ;
      }); 
    });
  };
  myElement.innerHTML+=`<h3>Loading...</h3>`
  
  const migracodeRepos = getRepos('migracode-barcelona');

 
  console.log("Loading...");



//Task1. Fix the code
//Task2. Create a <p> for each repository
