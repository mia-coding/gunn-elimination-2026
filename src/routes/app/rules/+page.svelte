<script>
	import Container from '$lib/components/Container.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';

	import calendarImage from '$lib/assets/images/elimination-calendar.png';
</script>

<Container class="">
	<h1 class="mb-8 text-3xl">Rules</h1>
	<div class="flex flex-col items-start justify-center space-y-4">
		<a
			href="https://docs.google.com/document/d/1UXb95TSkPEwlsb6jPRCTJyQ57xhrqAm3R6lBBDKE7jg/edit?pli=1&tab=t.0"
			target="_blank"
			class="my-2 rounded-lg underline hover:text-neutral-400">All Rules and Game Calendar</a
		>
		<img src={calendarImage} alt="calendar" />
	</div>
</Container>
