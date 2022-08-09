<template>
    <div>
        <ul>
            <li v-for="item in [1,2,3,4,5]" :key="item">{{item}}</li>
        </ul>
    </div>
</template>