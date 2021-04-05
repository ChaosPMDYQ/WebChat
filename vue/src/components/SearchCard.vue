<template>
    <div class="search-card">
        <img src="../assets/default_icon.jpg" alt="">
        <div class="info">
            <p class="nick-name">{{user.nickName}}</p>
            <p class="uid">uid:{{user.uid}}</p>
        </div>
        <div class="button">
            <i class="el-icon-notebook-2" title="详细信息" @click="showUserDetail"></i>
            <i class="el-icon-plus" title="添加好友" @click="addFriends"></i>
            <i class="el-icon-chat-dot-round" title="发送消息" @click="sendMessage"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'searchCard',
    props: {
        'user': {
            validator: (val) => {
                return val.uid && val.nickName
            }
        }
    },
    methods: {
        showUserDetail() {

        },

        addFriends() {

        },

        sendMessage() {

        }
    }
}
</script>

<style scoped>
    .search-card {
        display: flex;
        align-items: center;
        width: 100%;
        height: 4rem;
        padding: .5rem;
        box-sizing: border-box;
        text-align: left;
    }

    .search-card:hover {
        background-color: rgb(235, 235, 235);
    }

    .search-card img {
        width: 3rem;
        height: 3rem;
        border-radius: 10%;
    }

    .search-card p {
        width: 9rem;
        margin: 0;
        text-indent: 1rem;
    }

    p.uid {
        color: gray;
    }

    .button {
        display: flex;
        width: 5rem;
    }

    .button i {
        font-size: 1.25rem;
        color: gray;
    }

    .button i:nth-child(2) {
        margin: 0 .5rem;
    }

    .button i:hover {
        color: #409EFF;
    }
</style>