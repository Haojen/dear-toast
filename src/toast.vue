<template>
    <div class="dear-toast-widget show-toast"
         @animationend="onHidden"
         @webkitAnimationEnd="onHidden" :style="`animation-delay: 0s, ${duration}ms;`">
        <div class="toast-content"
             :class="type" v-text="content">
        </div>
    </div>
</template>

<script>
  export default {
    name: "toast",
    data() {
      return {
        theme: null, // not used
        show: false,
        type: 'info',
        content: null,
        duration: null,

        onShow: null,
        onClose: null,
      }
    },
    methods: {
      onHidden({animationName}) {
        if (animationName === 'toastAnimateHidden') {
          document.body.removeChild(this.$el)
          this.onClose && this.onClose({content: this.content})
        }
      },
    },
    mounted() {
      this.onShow && this.onShow({content: this.content})
    }
  }
</script>

<style lang="scss">
    .dear-toast-widget {

        position: fixed;
        top: 70%;
        left: 50%;
        margin: 0 auto;

        will-change: auto;
        text-align: center;
        width: fit-content;
        box-sizing: border-box;

        transform: translate(-50%, -50%);
        animation: toastAnimateShow .5s;


        animation-name: toastAnimateShow, toastAnimateHidden;
        animation-duration: .5s, .4s;


        @keyframes toastAnimateShow {
            0% {
                opacity: 0;
                top: 70%;
                left: 50%;
                transform: translate(-50%, 8vh) scale(.8, .8);
            }
            100% {
                opacity: 1;
                top: 70%;
                left: 50%;
                transform: translate(-50%, -50%), scale(1);
            }
        }

        @keyframes toastAnimateHidden {
            100% {
                opacity: 0;
                transform: translate(-50%, 4vh) scale(.8, .8);
            }
        }

        .toast-content {
            max-width: 80vw;
            max-height: 30vh;
            padding: 8px 10px;

            color: #fff;
            overflow: auto;
            border-radius: 18px;
            box-shadow: 0 0 15px 4px rgba(0,0,0, 0.1);

            &.info {
                background-color: rgba(58, 58, 58, 0.9);
            }

            &.error {
                background-color: rgba(244, 129, 73, 0.9);
            }
        }
    }
</style>