export const syncData = async () => {
  try {
    const response = await fetch('https://olokcmfocijqlsfueyuu.supabase.co');
    return await response.json();
  } catch (error) {
    return null;
  }
};