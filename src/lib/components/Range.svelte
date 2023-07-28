<script>
	let start = 0;
	let end = 100;
</script>

<div class="range">
	<div class="basic" />
	<div class="progress" />
	<button />
</div>

<style>
	.range {
		overflow: hidden;
		height: 20px;
		width: 100%;
		min-width: 150px;
		position: relative;
	}

	.basic {
		position: absolute;
		left: 0;
		width: 100%;
		height: 5px;
		background-color: white;
		border-radius: 5px;
		top: 50%;
		transform: translateY(-50%);
	}
	.progress {
		position: absolute;
		left: 0;
		height: 5px;
		background-color: rgb(118, 122, 147);
		border-radius: 5px;
		top: 50%;
		transform: translateY(-50%);
		width: 50%;
	}
	button {
		background-color: white;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
