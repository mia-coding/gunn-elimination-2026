import { redirect, error } from '@sveltejs/kit';

export const GET = async ({ url, locals: { supabase } }) => {
    const code = url.searchParams.get('code');
    const next = url.searchParams.get('next') ?? '/app';

    if (code) {
        console.log('Auth Callback: Code received, attempting exchange...');
        const { error: authError } = await supabase.auth.exchangeCodeForSession(code);
        
        if (!authError) {
            console.log('Auth Callback: Success! Redirecting to:', next);
            throw redirect(303, next);
        }

        console.error('Auth Callback: Exchange failed:', authError.message);
        // If it fails, redirect to a page where you can see the error
        throw redirect(303, `/?error=${encodeURIComponent(authError.message)}`);
    }

    console.warn('Auth Callback: No code found in URL');
    throw redirect(303, '/');
};
