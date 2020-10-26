<template>
	<div class="card-container">
		<div class="empty-block-wrap">
			<div class="empty-block"></div>
			<div class="empty-block"></div>
		</div>
		<div class="card-wraper">
			<div class="card">
				<div class="top">
					<div class="user">
						<div class="avatar"></div>
						<div class="user-info">
							<div class="name">UserName#0001</div>
							<div class="id">Joined January 1st, 2020</div>
						</div>

						<div class="status active">Active</div>
					</div>
				</div>
				<div class="bottom">
					<div class="info-row">
						<div class="credit-card">
							<div class="card-image">
								<img src="../assets/images/mastercard.svg" alt="mastercard">
							</div>

							<div class="credit-card-info">
								<div class="card-number">···· ···· ···· 1355</div>
								<div class="card-date">12/2023</div>
							</div>
						</div>

						<div class="edit">
							<i class="fas fa-pencil-alt"></i>
							<span>Edit</span>
						</div>
					</div>

					<div class="info-row">
						<div class="email">
							<span class="title">Email:</span>
							<span class="value">hey@cillysen.com</span>
						</div>

						<div class="edit">
							<i class="fas fa-pencil-alt"></i>
							<span>Edit</span>
						</div>
					</div>

					<div class="btns">
						<button class="purple">
							<i class="fas fa-comment-dots"></i>
							<span>Contact Support</span>
						</button>
						<button class="blue">
							<i class="fab fa-discord"></i>
							<span>Join Discord</span>
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
							<div class="id">$60.00 USD / monthly</div>
						</div>
					</div>
				</div>
				<div class="bottom">
					<div class="info-row">
						<div class="progress">
							<div class="labels">
								<span>Renewing Now 3, 2020</span>
								<span>28 days left</span>
							</div>

							<div class="progress-bar">
								<div class="current-progress" style="width: 20%;"></div>
							</div>
						</div>
					</div>

					<div class="info-row">
						<div class="key-input-wraper">
							<input value="V234BG45632FGH34" type="text" placeholder="Enter your key here...">
							<div class="copy">
								<i class="fas fa-copy"></i>
							</div>
						</div>
					</div>

					<div class="btns">
						<button class="purple">
							<i class="fas fa-key"></i>
							<span>Unbind Key</span>
						</button>
						<button class="blue" @click="cancelAuth()">
							<i class="fas fa-trash"></i>
							<span>Cancel Membership</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import './internal-card.scss';

	export default {
		name: 'InternalCard',
		components: {},
		props: ['cancelAuth']
	}
</script>