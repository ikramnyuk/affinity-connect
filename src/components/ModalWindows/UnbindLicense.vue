<template>
    <div class="modal-window-wrap">
        <div class="modal-window">
            <div class="title">
                <span>UNBIND LICENSE</span>

                <div class="close" @click="close()">
                    <img src="../../assets/images/close.svg" alt="close">
                </div>
            </div>

            <div class="content">
                <p>Unbinding a key will detach all payment methods associated with the key. If the key expires before a payment method is 
                    attached, the key will become deactivated.
                </p>

                <p>It is recommended that after binding the key to an account, you immediately attach a new payment method using the 
                    "Add Payment Method" button.
                </p>
            </div>

            <div class="actions">
                <div class="btn brown-color" @click="close()">Close</div>
                <div class="btn blue-color"  @click="close()">Unbind Key</div>
            </div>
        </div>
    </div>
</template>

<script>
	import './style.scss';

	export default {
		name: 'EditRelease',
		components: {},
		props: ['close']
	}
</script>