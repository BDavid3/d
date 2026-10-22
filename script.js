const API_URL = 'https://retoolapi.dev/SPoEJV/data';

async function init() {
    const response = await fetch(API_URL);
    console.log("Letöltés");

    const data = await response.json();

    const body = document.getElementById('tbodyplace')

    for (const i of data)
    {

        const row = document.createElement('tr');

        const tdModell = document.createElement('td')
        const tdSzin = document.createElement('td')
        const tdEvjarat = document.createElement('td')

        
        body.appendChild(row);
        
        row.appendChild(tdModell);
        row.appendChild(tdSzin);    
        row.appendChild(tdEvjarat);

        tdModell.innerHTML = i.modell;
        tdSzin.innerHTML = i.szin;
        tdEvjarat.innerHTML = i.evjarat;


        if (i.szin === "fehér")
        {
            row.style.backgroundColor = "white";
        }
        else if (i.szin === "piros")
        {
            row.style.backgroundColor = "red";
        }
        else
        {
            row.style.backgroundColor = "black";
            row.style.color = "white";
        }
        
    }
    console.log("Tartalom betöltve")
}
init()
console.log("Betöltött");

