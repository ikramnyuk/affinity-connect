<template>
	<div class="container">
		<div class="header"></div>

		<ExternalCard v-if="!auth" :submitAuth="() => { auth = true }"/>

		<InternalCard v-if="auth" :cancelAuth="() => { auth = false }"/>

		<div class="footer">
			<span>Powere by </span>
			<img src="./assets/images/logo.svg" alt="">
		</div>
	</div>
</template>

<script>
	import ExternalCard from './components/ExternalCard.vue';
	import InternalCard from './components/InternalCard.vue';

	import './style.scss';

	export default {
		name: 'Main',
		components: { ExternalCard, InternalCard },
		data(){
			return{
				auth: false
			}
		}
	}
</script>