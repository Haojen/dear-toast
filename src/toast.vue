<template>
    <div class="dear-toast-widget" :style="`animation-delay: 0s, ${duration}ms;`" @animationend="onHidden">
        <div class="toast-content btn-shadow-inset"
             :class="type" @click="onClickEv" v-text="content">
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
        position: absolute;

        top: 70%;
        left: 50%;

        will-change: auto;
        text-align: center;
        box-sizing: border-box;

        transform: translate(-50%, -50%);
        animation: toastAnimateShow .5s, toastAnimateHidden .4s;

        @keyframes toastAnimateShow {
            from {
                opacity: 0;
                transform: translate(-50%, 8vh) scale(.8, .8);
            }
        }

        @keyframes toastAnimateHidden {
            to {
                opacity: 0;
                transform: translate(-50%, 4vh) scale(.8, .8);
            }
        }

        .toast-content {
            width: 80vw;
            overflow: auto;
            max-height: 30vh;
            padding: 8px 15px;

            color: #fff;
            border-radius: 20px;
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