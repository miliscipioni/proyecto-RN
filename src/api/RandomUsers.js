
export async function getData(n) {
    try {
<<<<<<< Updated upstream
        let resultado = await fetch('https://randomuser.me/api?results='+n);
=======
        let resultado = await fetch('https://randomuser.me/api?results='+ n );
>>>>>>> Stashed changes
        let json = await resultado.json();
        return json.results;
    } catch(error) {
        console.log("ERR: " + error)
    }
    
}