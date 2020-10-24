<template>
  <div :class="getCustomClass" class="avatar">
    <img
      :class="getCustomClass"
      :src="src"
      onerror="this.onerror=null;this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOtSURBVHgBzZmLcdpAEIZXAoEAx5bTgEUFcSoIKSEVJB04riC4gpAK4g5SQkgHpAJEBeYpwEiQ/S8njyL0uBPg+Js5n0c64Gf3dm+1GFSS4XDY4enaMIx3mHk4coAxDw9jt9v95rnfbrf7VAJDZzGLckzTvOEP/RwTo4rHX6a/3W7vWKyn+iIlgVLYFynsYFjovarQQoGj0QgW65K+xYqA+yHyPm9RrkAW9/VYVssUYBi9q6ur28z7aRfhUn7hD/63Q8/DgA3xnq05Tt4w01azuJ/0fOLAtTTIvpbkBV23moZBtm2TVa2SZVXFtTAMyV+taL1+JB3S3P2PQHbtJ170nRSpmCZdnL8ijvDU+xypNJnOKORZFTbOLbu6tyeQxbnStS4p8tq5yBQXFzmeTnnekSJjFtmO9uPTuyPP6Yir12uF4uT7kl23SQNHahEIC0rrDTXehJyLc6pWKkprN5uAJrMZ6cBWvIQVhQniilVRFQei4NFEBKoQyGo79MJgj95gNmVV4pImm2CjvDYIQiqBA22wYIdKgH2lynK9opJcc5413lAJlqs1J+Ti/IY1ugk7hrCgSyXgfUtTjsw8kbg31YzeODAewsulkuCEeJhMRE5s8HEXRfYmCHgLbGjFVt7ulBN0Gg4EHlznwYUHuDEPp/go+M9A4JheLmO4GAK13YzTAXvOqlpUrVawocUACCAUCQiSIOT9yHkQe7IEHgQOSDFQotqvYdefxKSBexUWj1EjS1yD4MVyqbVX+YuOTP7zS2UxLIYCodmwc8VlgarmVaslSrR6rab6skFkwVwgqtlo0DEQQs9aZPqGSPYF9IUpPM97oIx9iKr5kr/1KZjM5nl703Ndtx1VM9+yVp2dNelUNO3sQhZdCMxRHuxlLUSUngpEfxboPGAWAlG5Zllxd9hRlUtWsKE1ErVF4idJl1KSNvLYqcgo2bzIeuBJoLTiXXK175eu5QqZLxZ712S/xqOkQIDn0aSrUZnMfZ+Ojb9c7T0v47OTzaTUTcBpZ6/1UbMsajWbfDocVl/g+Jv7izT3DjitvE1eTP00/iYfKJHAHzlfofabsVtUKumU92SrLbnTME0T10fzKO11uWcWP7T0oqerJFEvBgWDiXOXE3q8WMAIULjyCMIw8xlGujWzF1R4qMp+jVbXQZGxDIhe3iLVFrDLU5eFfqQjIAOxm9YPTKLbRHfpr1B09l3SIzoMeirCIvTrJol84O/Ix1ZXjvjPEBgDWc4Nyv4M8QfPdL0LcyISLAAAAABJRU5ErkJggg==';"
    />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    size: {
      type: String,
      default: 'md',
    },
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    layout: {
      type: String,
      default: null,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    ballon_left: {
      type: Boolean,
      default: false,
    },
    ballon_right: {
      type: Boolean,
      default: false,
    },
    ballon_top_left: {
      type: Boolean,
      default: false,
    },
    ballon_top_right: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getCustomClass() {
      let className = `avatar__${this.size}`;
      const customs = {
        rounded: this.rounded,
        square: this.square,
        'ballon-left': this.ballon_left,
        'ballon-top-left': this.ballon_top_left,
        'ballon-right': this.ballon_right,
        'ballon-top-right': this.ballon_top_right,
      };
      Object.entries(customs).forEach(i => {
        if (i[1]) {
          className = `${className} ${i[0]}`;
        }
      });

      if (this.layout) {
        className = `${className} ${this.layout}`;
      }
      return className;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
