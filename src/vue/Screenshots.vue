<template>
    <div class="screenshots">
        <div class="current">
            <img :src="selected" :alt="alt">
        </div>

        <div class="list">
            <div v-for="url in urls" :class="{'list-item': true, 'active': url === selected}" @click="selected = url">
                <img :src="url" :alt="alt">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Screenshots",
        props: ["urls", "alt"],
        data() {
            return {
                selected: this.urls[0]
            }
        }
    }
</script>

<style scoped>
    .current {
        text-align: center;
    }

    .list {
        display: flex;
    }

    .list-item {
        width: 100%;
        overflow: hidden;
        flex-shrink: 1;
        padding: 0.5em;
    }

    .list-item.active {
        /** idk **/
    }

    .current img {
        max-width: 100%;
    }

    .list-item img {
        width: 100%;
        cursor: pointer;
    }
</style>
