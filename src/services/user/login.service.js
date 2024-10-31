export const loginService = async (email, password) => {
    const response = await fetch('http://apiohpanel.jdev.com.ar/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    return response.json();
}