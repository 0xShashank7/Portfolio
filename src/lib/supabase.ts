import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from '../config/supabase';

const supabaseUrl = supabaseConfig.url;
const supabaseKey = supabaseConfig.key;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file. OK!');
}


/**
 * `createClient` creates a new Supabase client instance.
 * 
 * @param url - The URL of your Supabase project.
 * @param key - The Anonymous key for your Supabase project.
 * @param options - (optional) An object containing configuration options.
 * @returns A new Supabase client instance.
 */
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

/**
 * The `auth` object within the options object allows you to configure various authentication-related settings.
 * 
 * - `autoRefreshToken`: A boolean indicating whether the client should automatically refresh the user's token when it expires. Defaults to `true`.
 * - `persistSession`: A boolean indicating whether the client should persist the session to local storage. If `false`, the session will be cleared after the page is refreshed. Defaults to `true`.
 */
