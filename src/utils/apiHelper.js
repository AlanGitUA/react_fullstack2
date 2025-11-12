//CRUD con API:
const API = 'http://localhost:8094'

export const getPokemones = async () =>{
    try {
        const resp = await fetch(`${API}/pokemones`)
        if(!resp.ok) throw new Error("Error al obtener pokemones")
        const data = await resp.json()
        return data
    } catch (ex) {
        console.error("Error:",ex)
    }
}

export const getPokemon = async (numero) =>{
    try {
        const resp = await fetch(`${API}/pokemonByNumero/${numero}`)
        if(!resp.ok) throw new Error("Error al obtener pokemones")
        const data = await resp.json()
        return data
    } catch (ex) {
        console.error("Error:",ex)
    }
}

export const saveBaseDatos = async (endpoint,data) => {
    try {
        const resp = await fetch(`${API}/addPokemon`,{
            method:"POST",
            body: data
        })
        if(!resp.ok) throw new Error("Error al guardar pokemon")
        /*const data = await resp.json()
        return data*/
        return true
    } catch (ex) {
        console.error("Error al guardar: ",ex)
    }
}

export const updatePokemon = async (data) => {
    try {
        const resp = fetch(`${API}/update`,{
            method: "PUT",
            body: data
        })
        if(!resp.ok) throw new Error("Error al actualizar")
        const data = resp.json()
        return data
    } catch (ex) {
        console.error("Error:",ex)
    }
}

export const deletePokemon = async (numero) => {
    try {
        const resp = await fetch(`${API}/delete/${numero}`,{
            method: "DELETE"
        })
        if(!resp.ok) throw new Error("Error al eliminar")
        return true
    } catch (ex) {
        console.error("Error:",ex)
    }
}
