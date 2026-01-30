<script>
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Container class="">
	<h1 class="mt-16 text-center text-4xl lg:text-5xl">
		<div>Contact</div>
	</h1>
	<div class="mt-4 flex flex-col space-y-2 rounded-lg p-4 text-center text-neutral-300">
		<div class="text-xl">
			For reporting, questions, or concerns, please fill out this form, and remember to read all rules before sending us anything.
		</div>
		<div class="rounded-lg bg-neutral-900 px-4 py-2"><a
			href="https://forms.gle/7CHxeWRAjVL2MrRF6"
			target="_blank"
			class="rounded-lg px-4 py-2 underline hover:text-neutral-400">https://forms.gle/7CHxeWRAjVL2MrRF6</a
		></div>
	</div>
</Container>
<Footer />
