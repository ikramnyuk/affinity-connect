<template>
    <div class="modal-window-wrap">
        <div class="modal-window">
            <div class="title">
                <span>CANCEL SUBSCRIPTION</span>

                <div class="close" @click="close()">
                    <img src="../../assets/images/close.svg" alt="close">
                </div>
            </div>

            <div class="content">
                <p>Cancelling the subscription will cease  payments, and access to this service will be terminated on {insert date}.</p>

                <p>THIS ACTION CAN NOT BE REVERSED.</p>
            </div>

            <div class="form">
                <form>
                    <div class="input-item">
                        <div class="label">License key</div>
                        <input type="text" placeholder="Enter license key…">
                    </div>
                </form>
            </div>

            <div class="actions">
                <div class="btn brown-color" @click="close()">Close</div>
                <div class="btn blue-color"  @click="close()">Save Changes</div>
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