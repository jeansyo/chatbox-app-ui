
export const fetchWithToken = (path, data={}, method="GET") => {

    const token = localStorage.getItem("token-access")

    const baseURI = process.env.REACT_APP_API_URI;
    const url = `${ baseURI }/${ path }`;

    if( method ==="GET" ){
        return fetch( url, { 
            method,
            headers: {
                "Content-Type": 'application/json',
                'x-token': token
            }
        } )
    }else {
        return fetch(
            url,
            {
                method,
                headers: {
                    "Content-Type": 'application/json',
                    'x-token': token
                },
                body: JSON.stringify( data )
            }
        )
    }

}
