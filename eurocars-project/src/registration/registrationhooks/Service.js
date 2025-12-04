export async function userRegister(userData) {
    const res = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });

    if (!res.ok) throw new Error('Помилка регестрації');
    return await res.json();
}

export async function userLogin(credentials) {
    const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
    if (!res.ok) throw new Error('Помилка входу');
    return await res.json();

}