<template>
	<div class="card-wraper">
		<div class="card">
			<div class="top">
				<div class="user">
					<div class="avatar"></div>
					<div class="user-info">
						<div class="name">UserName#0001</div>
						<div class="id">234234234234234</div>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="info">
					<p>Input the license key you've received in you email in the "Enter your license key here..." textbox</p>
				</div>
				<div class="btn-wraper">
					<span>Want to use a diferent account?</span>
					<button>
						<i class="fas fa-lock"></i>
						<span>Change Account</span>
					</button>
				</div>
			</div>
		</div>

		<div class="card dashboard">
			<div class="top">
				<div class="user">
					<div class="avatar"></div>
					<div class="user-info">
						<div class="name">Affinity Dashboards</div>
						<div class="id">Bind your key to gain access</div>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="info">
					<input type="text" class="key-input" placeholder="Enter your license key here">
				</div>
				<div class="btn-wraper">
					<button class="bind-btn" @click="submitAuth()">
						<i class="fas fa-key"></i>
						<span>Bind Key</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import './external-card.scss';

	export default {
		name: 'ExternalCard',
		components: {},
		props: ['submitAuth']
	}
</script>