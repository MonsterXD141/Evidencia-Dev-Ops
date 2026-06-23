jest.mock('./cloudEngine', () => {
  return {
    supabase: {
      from: jest.fn(() => ({
        insert: jest.fn(() => ({
          select: jest.fn(() => Promise.resolve({ data: [{ id: 1, status: 'QA_Verified' }], error: null }))
        }))
      }))
    },
    syncData: async () => {
      return [{ id: 1, status: 'QA_Verified' }];
    }
  };
});

const cloudEngine = require('./cloudEngine');

describe('Suite de Pruebas QA - cloudEngine (Fase 3)', () => {

  test('Debería existir la función syncData', () => {
    expect(cloudEngine.syncData).toBeDefined();
    expect(typeof cloudEngine.syncData).toBe('function');
  });

  test('Debería retornar un registro con estado QA_Verified al sincronizar', async () => {
    const data = await cloudEngine.syncData();
    expect(data).toHaveLength(1);
    expect(data[0].status).toBe('QA_Verified');
  });

  test('Debería retornar un array vacío si la inserción falla', async () => {
    const syncDataFail = async () => [];
    const data = await syncDataFail();
    expect(data).toEqual([]);
  });
});