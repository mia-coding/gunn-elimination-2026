<script>
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center space-y-4">
	<h1 class="text-center text-4xl lg:text-5xl">
		<div>Welcome to</div>
		<div
			class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text font-bold text-transparent"
		>
			Gunn Elimination 2026
		</div>
	</h1>
	<div class="flex space-x-4">
		<a href="/about" class="rounded-lg px-6 py-2 font-semibold">About</a>
		<a href="/login" class="rounded-lg bg-red-600 px-6 py-2 font-semibold hover:bg-red-600/90"
			>Play!</a
		>
	</div>
</div>
<Footer />
