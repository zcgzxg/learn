<template>
    <div class="content">
        <a-typography>
            <a-typography-title :level='3'>拖动滑块改变间距</a-typography-title>
        </a-typography>
        <a-slider :max="50" v-model:value="size" />
        <br>
        <a-space :size="size" :direction="spaceDirection">
            <a-button type="primary" @click="changeDirection">改变方向按钮</a-button>
            <a-button>默认按钮</a-button>
            <a-button type="dashed">Dashed</a-button>
            <a-button tyoe="link">Link</a-button>
        </a-space>
    </div>
</template>

<script>
export default {
    data() {
        return {
            size: 0,
            spaceDirectionTag:true
        }
    },
    watch: {
        size(newValue) {
            console.log(newValue)
        }
    },
    computed:{
        spaceDirection(){
            return this.spaceDirectionTag ? 'horizontal' : 'vertical'
        }
    },
    methods:{
        changeDirection(){
            this.spaceDirectionTag = !this.spaceDirectionTag
        }
    }
}
</script>

<style>
</style>