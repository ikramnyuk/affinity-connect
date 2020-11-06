<template>
    <div class="modal-window-wrap">
        <div class="modal-window">
            <div class="title">
                <span>Upply Coupon</span>

                <div class="close" @click="close()">
                    <img src="../../assets/images/close.svg" alt="close">
                </div>
            </div>

            <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim mollis diam, nec ornare tellus luctus at. Nulla at dui 
                    vehicula, cursus dolor eu, dignissim odio. Quisque tempor est eu tellus feugiat, at viverra enim volutpat. Cras quis lacus id,
                    cursus dolor eu, dignissim odio.
                </p>
            </div>

            <div class="form">
                <form>
                    <div class="input-item">
                        <div class="label">Coupon</div>
                        <input type="text" placeholder="Enter coupon code...">
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
		name: 'ApplyCoupon',
		components: {},
		props: ['close']
	}
</script>