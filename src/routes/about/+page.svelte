<script>
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import calendarImage from '$lib/assets/images/elimination-calendar.png';
</script>

<Container class="h-full w-screen">
	<h1 class="mt-16 text-center text-4xl lg:text-5xl">
		<div>About</div>
	</h1>
	<div class="mt-4 flex flex-col space-y-4 text-center text-neutral-300">
		<div>
			Gunn Elimination is a school-wide, competitive game of tag where each player is assigned a
			target to find and eliminate. Each day, there are different rules players can follow to be
			safe.
		</div>
		<a
			href="https://docs.google.com/document/d/1UXb95TSkPEwlsb6jPRCTJyQ57xhrqAm3R6lBBDKE7jg/edit?tab=t.0"
			target="_blank"
			class="rounded-lg px-4 py-2 underline hover:text-neutral-400">Below is the official 2026 game calendar with all daily rules and target changes:</a
		>
		<div class="flex justify-center">
  <img 
    src="/elimination-calendar.png" 
    alt="2026 Elimination Calendar"
    class="rounded-xl shadow-lg max-w-full"
  />
</div>
	</div>
</Container>
<Footer />
