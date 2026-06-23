export async function syncData() {
    const response = await fetch('https://olokcmfocijqlsfueyuu.supabase.co');
    return await response.json();
}