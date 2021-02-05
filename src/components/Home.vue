<template>
  <section v-cloak id="home">
    <h1 :title="h1">{{ h1 }}</h1>
    <h2>I am Yalin.</h2>
    <p>Thank you for coming, everyone who works hard for their dreams deserves to be praised!</p>
    <p>You can find me in these places:</p>
    <p>
      <b v-for="(item, index) in p">
        <a :href="item.url" :title="item.title" target="_blank" :key="'a' + index">{{ item.text }}</a>
        <i v-if="index < p.length - 1" :key="'i' + index">·</i>
      </b>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.init()
  },
  data() {
    return {
      h1: 'hello.',
      p: [
        {
          url: 'https://github.com/yalin28',
          title: 'Github',
          text: 'Github',
        },
        {
          url: 'https://juejin.cn/user/599e5cacf265da247f1c5d05',
          title: 'Blog',
          text: 'Blog',
        },
      ],
    }
  },
  methods: {
    init() {
      this.consoleWord()
      this.stopLoading()
    },
    consoleWord() {
      console.log('%c Welcome to my homepage !', ' color: #f60')
    },
    stopLoading() {
      document.getElementById('spinner').classList.add('stop')
    },
  },
}
</script>

<style lang="less" scoped>
#home {
  position: absolute;
  width: 320px;
  top: 30%;
  left: 50%;
  margin-left: -160px;
  margin-top: -160px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  [v-cloak] {
    display: none;
  }
  overflow: hidden;
  h1,
  h2 {
    position: relative;
  }
  h1 {
    font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  h2 {
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 12px;
  }
  p {
    font-weight: 300;
    line-height: 2;
    letter-spacing: 1px;
    &:nth-of-type(2) {
      margin: 12px 0 0;
    }
    a {
      font-size: 12px;
      color: #999;
      text-decoration: none;
      transition: color 0.2s ease;
      letter-spacing: 2px;
      &:hover {
        color: #f33;
      }
    }
    i {
      font-size: 12px;
      color: #999;
      margin: 0 5px;
    }
  }
}
</style>
