<!-- src/routes/+page.svelte -->
<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import logo from '$lib/assets/images/icons/logo.png';
	import { onMount } from 'svelte';

	export let data;
	let { supabase, url, killcode } = data;
	$: ({ supabase, url, killcode } = data);

	let loaded = false;

	onMount(() => {
		if (killcode) {
			localStorage.setItem('loginkillcode', killcode);
		}

		loaded = true;
	});

	const handleGoogleAuth = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${window.location.origin}/api/auth/callback`,
				scopes: 'openid profile email',
			}
		});
	};
</script>

<div class="flex h-full w-screen items-center justify-center">
	<form
		class="flex w-96 flex-col items-center justify-center rounded-lg bg-neutral-700 p-8 shadow-xl md:p-16"
		on:submit|preventDefault={handleGoogleAuth}
	>
		<img src={logo} alt="Gunn Elimination Logo" class="h-24" />
		<h1 class="mt-4 text-3xl font-bold">Gunn Elimination</h1>
		<button
			class="mt-4 w-full rounded-lg bg-black px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-neutral-900 disabled:bg-black/20"
			disabled={!loaded}
		>
			{loaded ? 'Login / Sign Up' : 'Loading...'}
		</button>
	</form>
</div>
<Footer />
