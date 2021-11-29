export const fetchWithoutToken = (path, data={}, method="GET") => {

    const baseURI = process.env.REACT_APP_API_URI;
    const url = `${ baseURI }/${ path }`

    if( method === "GET" ){
        return fetch(url)
    }else {
        return fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        } )
    }

}
