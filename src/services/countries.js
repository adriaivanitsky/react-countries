import { checkError, client } from './client';

export async function getCountries() {
  const response = await client.from('countries').select();
  return checkError(response);
}

//this is where supabase logic goes from importing client
//key and password in canvas
