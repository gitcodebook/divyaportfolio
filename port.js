//****************************sidebar***********************************
let sidebar = document.querySelector('#sidebar');

function topbar(){
    sidebar.classList.toggle('active')
}
//****************************skill cards section***********************************
fetch('port.json')
.then(Response=>Response.json())
.then(data=>{
    const skills = data.skills;
    console.log(skills);  //array of skills
   
    let container = document.querySelector('.skill-container')
    skills.forEach(val => {
        let card = document.createElement('div');

        card.innerHTML = `
            <img src="${val.Icon}" alt="${val.Name}">
            <h3>${val.Name}</h3>
            <p>${val.Category} - ${val.Level}</p>
        `
        container.appendChild(card);
    });
})


