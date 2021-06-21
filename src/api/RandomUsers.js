
export async function getData() {
    try {
        let resultado = await fetch('https://randomuser.me/api?results=');
        let json = await resultado.json();
        return json.results;
    } catch(error) {
        console.log("ERR: " + error)
    }
    
}