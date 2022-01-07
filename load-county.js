const loadCounty=()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>displayCounty(data))
}

const displayCounty=countys=>{
    // for(const county of countys ){
    //     console.log(county.name);
    // }
    const countyContainer=document.getElementById("county-container");
    countys.forEach(county => {
        const div=document.createElement('div');
        const h3=document.createElement('h3');
        h3.innerText=county.name;
        div.appendChild(h3);
        const p=document.createElement('p');
        p.innerText=county.capital;
        div.appendChild(p);
        countyContainer.appendChild(div);
        div.classList.add('box');
    });
}



loadCounty()