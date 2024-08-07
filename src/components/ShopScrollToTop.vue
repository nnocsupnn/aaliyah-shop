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
        };
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
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    display: none;
}

.scroll-to-top:visible {
    display: block;
}
</style>