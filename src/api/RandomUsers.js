const getUsers = async()=> {
    try{
        let response = await fetch("https://randomuser.me/api/?results=5");
        let json = await response.json();
        return json.results;
    }
    catch(error){
        console.log(error)
    }
}