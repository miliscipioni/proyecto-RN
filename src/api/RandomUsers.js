
export async function getData() {
    try {
        let resultado = await fetch('https://randomuser.me/api?results=1');
        let json = await resultado.json();
        return json.results;
    } catch(error) {
        console.log("ERR: " + error)
    }
    
}