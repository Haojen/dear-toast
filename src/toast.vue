<template>
    <div class="dear-toast-widget" :style="`animation-delay: 0s, ${duration}ms;`" @animationend="onHidden">
        <div class="toast-content btn-shadow-inset" :class="type" @click="onClickEv">
            <span v-text="content"></span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "toast",
    data() {
      return {
        show: false,
        type: 'info',
        content: null,
        duration: null
      }
    },
    methods: {
      onHidden({animationName}) {
        if (animationName === 'toastAnimateHidden') {
          document.body.removeChild(this.$el)
        }
      },
      onClickEv() {
        console.log('onClickEv')
      }
    }
  }
</script>

<style lang="scss">
    .dear-toast-widget {
        position: fixed;

        width: 100vw;
        /*height: 100vh;*/
        /*padding: 70vh 10vw 0;*/

        will-change: auto;
        pointer-events: none;
        box-sizing: border-box;
        animation: toastAnimateShow .5s, toastAnimateHidden .4s;

        @keyframes toastAnimateShow {
            from {
                opacity: 0;
                transform: translateY(5vh) scale(.8, .8);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1, 1);
            }
        }

        @keyframes toastAnimateHidden {
            from {
                opacity: 1;
                transform: translateY(0) scale(1, 1);
            }
            to {
                opacity: 0;
                transform: translateY(5vh) scale(.8, .8);
            }
        }

        .toast-content {
            color: #fff;
            padding: 8px 15px;
            border-radius: 20px;
            pointer-events: auto;
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