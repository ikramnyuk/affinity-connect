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

						<div class="edit" @click="() => {openModal(2) }">
							<img src="../assets/images/edit.svg" alt="">
							<span>Edit</span>
						</div>
					</div>

					<div class="info-row">
						<div class="email">
							<span class="title">Email:</span>
							<span class="value">hey@cillysen.com</span>
						</div>

						<div class="edit" @click="() => {openModal(1) }">
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

								<span @click="() => {openModal(4) }">
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
						<button class="purple" @click="() => {openModal(0) }">
							<img src="../assets/images/key.svg" alt="">
							<span>Unbind Key</span>
						</button>
						<button class="red" @click="() => {openModal(3) }">
							<img src="../assets/images/remove.svg" alt="">
							<span>Cancel Membership</span>
						</button>
					</div>
				</div>
			</div>
		</div>

		<UnbindLicense v-if="modal1" :close="() => {closeModal(0)}" />
		<UpdateEmail v-if="modal2" :close="() => {closeModal(1)}" />
		<UpdateBilling v-if="modal3" :close="() => {closeModal(2)}" />
		<CancelSubscription v-if="modal4" :close="() => {closeModal(3)}" />
		<ApplyCoupon v-if="modal5" :close="() => {closeModal(4)}" />
	</div>
</template>

<script>
	import './internal-card.scss';

	import UnbindLicense from './ModalWindows/UnbindLicense';
	import UpdateEmail from './ModalWindows/UpdateEmail';
	import UpdateBilling from './ModalWindows/UpdateBilling';
	import CancelSubscription from './ModalWindows/CancelSubscription';
	import ApplyCoupon from './ModalWindows/ApplyCoupon';

	export default {
		name: 'InternalCard',
		components: { UnbindLicense, UpdateEmail, UpdateBilling, CancelSubscription, ApplyCoupon },
		props: ['cancelAuth'],
		data: () => {
			return {
				modal1: false,
				modal2: false,
				modal3: false,
				modal4: false,
				modal5: false
			}
		},

		methods: {
			openModal(key){
				switch (key) {
					case 0:
						this.modal1 = true;
						break;

					case 1:
						this.modal2= true;
						break;

					case 2:
						this.modal3 = true;
						break;

					case 3:
						this.modal4 = true;
						break;
					
					case 4:
						this.modal5 = true;
						break;
				}
			},

			closeModal(key){
				switch (key) {
					case 0:
						this.modal1 = false;
						break;

					case 1:
						this.modal2= false;
						break;

					case 2:
						this.modal3 = false;
						break;

					case 3:
						this.modal4 = false;
						break;

					case 4:
						this.modal5 = false;
						break;
				}
			}
		}
	}
</script>