export const apiRequest = async (url: string, method: string, body: any) => {
    const response = await fetch(url, {
        method: method.toUpperCase(),
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error('Request Failed');
    const data = await response.json();
    if (data.success !== true) throw new Error('Data retreival Unsuccessful');
    return data;
};
