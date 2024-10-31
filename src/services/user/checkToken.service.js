export const checkTokenService = async (token) => {
    const response = await fetch('http://apiohpanel.jdev.com.ar/users/login/check', {
        method: 'POST',
        headers: {
            'authorization': token
        }
    })
    return response.json();
}