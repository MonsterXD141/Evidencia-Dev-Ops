import { createClient } from '@supabase/supabase-client';

const SUPABASE_URL = 'https://olokcmfocijqlsfueyuu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sb2tjbWZvY2lqcWxzZnVleXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTE4NzEsImV4cCI6MjA5NTYyNzg3MX0.NK7xZSwy6nvF3BcryB_rTQYjKIqM2N0eDPakRXBJOQM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const syncData = async () => {
  try {
    const payload = {
      timestamp: new Date().toISOString(),
      developer: "Nicolás Martínez",
      status: "QA_Verified",
      meta: { engine: "V8", project: "mi-app-devops" }
    };

    const { data, error } = await supabase
      .from('telemetria') // O el nombre de tu tabla de Supabase
      .insert([payload])
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error en syncData:", error.message);
    return [];
  }
};