<template>
	<div class="card-container">
		<div class="card-wraper">
			<div class="card">
				<div class="top">
					<div class="user">
						<div class="avatar">
							<img src="../assets/images/avatar.svg" alt="">
						</div>
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
							<img src="../assets/images/edit.svg" alt="">
							<span>Edit</span>
						</div>
					</div>

					<div class="info-row">
						<div class="email">
							<span class="title">Email:</span>
							<span class="value">hey@cillysen.com</span>
						</div>

						<div class="edit">
							<img src="../assets/images/edit.svg" alt="">
							<span>Edit</span>
						</div>
					</div>

					<div class="btns">
						<button class="purple">
							<img src="../assets/images/chat.svg" alt="">
							<span>Contact Support</span>
						</button>
						<button class="blue">
							<img src="../assets/images/discord.svg" alt="">
							<span>Join Discord</span>
						</button>
					</div>
				</div>
			</div>

			<div class="card dashboard">

				<div class="top">
					<div class="user">
						<div class="avatar">
							<img src="../assets/images/company.svg" alt="">
						</div>
						<div class="user-info">
							<div class="name">Affinity Dashboards</div>
							<div class="id edditional-id-info">
								<span>$60.00 USD / monthly</span>

								<span>
									<img src="../assets/images/edit.svg" alt="">
									<span>Apply Coupon</span>
								</span>
							</div>
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
								<img src="../assets/images/copy.svg" alt="">
							</div>
						</div>
					</div>

					<div class="btns">
						<button class="purple">
							<img src="../assets/images/key.svg" alt="">
							<span>Unbind Key</span>
						</button>
						<button class="red" @click="cancelAuth()">
							<img src="../assets/images/remove.svg" alt="">
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