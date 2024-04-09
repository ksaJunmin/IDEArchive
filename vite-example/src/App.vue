<template lang="">
	<div> {{ count }} </div>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
			
		}
	},
	beforeCreate() {
		console.log("LC is beforeCreate"), this.count()
	}
}
</script>

<style lang="">
  
</style>