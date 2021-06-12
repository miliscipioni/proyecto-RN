{/*const getUsers = async()=> {
    try{
        let response = await fetch("https://randomuser.me/api/?results=5");
        let json = await response.json();
        return json.results;
    }
    catch(error){
        console.log(error)
    }
} */}

export async function getData() {
    try {
        let resultado = await fetch('https://randomuser.me/api?results=10');
        let json = await resultado.json();
        return json.results;
    } catch(error) {
        console.log("ERR: " + error)
    }
    
}