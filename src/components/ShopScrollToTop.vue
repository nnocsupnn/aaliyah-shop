<template>
    <button v-show="isVisible" @click="scrollToTop" class="scroll-to-top">
        Top
    </button>
</template>

<script>
export default {
    name: 'ShopScrollToTop',
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        handleScroll() {
            this.isVisible = window.scrollY > 200;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    z-index: 999999999999;
    bottom: 20px;
    right: 20px;
    background-image: linear-gradient(15deg, #37005a69 10%, #a53c036b 100%);
    color: white;
    border: 1px solid white;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 20px;
}

.scroll-to-top:visible {
    display: block;
}
</style>