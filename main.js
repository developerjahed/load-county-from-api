const loadBuddies=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayBuddies(data))
}

const displayBuddies=data=>{
    const buddiesContainer=document.getElementById('buddies-container');
    const buddies=data.results;
    for(const buddy of buddies){
        console.log(buddy)
        const p=document.createElement('p');
        p.innerHTML=`
        ${buddy.email}<br> ${buddy.name.first, buddy.name.last}
        `;
        buddiesContainer.appendChild(p);
    }
}
loadBuddies();