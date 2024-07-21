export default () => ({
    port: 3000,
    supabase: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY,
    }
  });