<template>
    <div class="search" @click.stop>
        <el-input size="small" placeholder="搜索昵称或UID" v-model="searchInput" clearable
                  @focus="showSearch" @input="setQuery" @clear="clearInput">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>

        <div class="search-info" v-show="showSearchInfo">
            <div class="search-result">
                <div v-if="searchResult.length == 0 && !searching">
                    <p>无搜索结果</p>
                </div>
                <div v-else-if="searching">
                    <p><i class="el-icon-loading"></i></p>
                </div>
                <div class="error" v-else-if="searchError">
                    <p>网络连接错误</p>
                </div>
                <div class="result-list" v-else>
                    <p>精确查找</p>
                    <Search-card v-for="(user, index) in searchResult" :key="index" :user="user"></Search-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchCard from './SearchCard'

export default {
    name: 'search',
    components: {
        SearchCard
    },
    data() {
        return {
            searchInput: '',
            showSearchInfo: false,
            
            searching: false,
            searchError: false,

            queryTimeout: null,
            searchResult: [],
        }
    },

    methods: {
        showSearch() {
            this.showSearchInfo = true
        },

        //清空搜索结果并隐藏搜索信息
        clearInput() {
            this.showSearchInfo = false
            this.searching = false
            this.searchResult = []
        },

        setQuery() {
            if(!this.searchInput.trim())
                return

            //点击clear按钮后继续输入，应该显示搜索信息
            if(!this.showSearchInfo)
                this.showSearchInfo = true

            //停止输入1秒后开始搜索
            if(this.queryTimeout)
                clearTimeout(this.queryTimeout)
            this.queryTimeout = setTimeout(this.search, 1000)
        },

        search() {
            this.searching = true
            this.searchError = false

            this.axios.post('/api/search', {
                searchInput: this.searchInput.trim()
            }).then(res => {
                this.searchResult = res.data
                this.searching = false
            }).catch(err => {
                this.searching = false
                this.searchError = true
                console.log(err)
            })
        }
    },

    mounted() {
        document.addEventListener('click', () => {
            this.showSearchInfo = false
        })
    }
}
</script>

<style scoped>
    .search {
        position: relative;
        width: 100%;
        padding: 2.5rem .5rem;
        box-sizing: border-box;
    }

    .search-info {
        position: absolute;
        top: 5rem;
        width: 18rem;
        min-height: 20rem;
        max-height: 38rem;
        border-radius: .2rem;
        box-shadow: 0 0 .8rem gray;
        /* opacity: 1; */
        /* z-index: 20; */
        background-color: white;
        overflow: auto;
    }

    .search-info::-webkit-scrollbar{
        width: 0;
    }

    .search-result p {
        color: gray;
    }

    .search-result p i {
        font-size: 2.5rem;
    }

    .search-result .error {
        color: red;
    }

    /* .result-list {
        height: 100%;
        
    } */
</style>