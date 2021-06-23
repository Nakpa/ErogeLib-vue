<template>
  <footer class="container">
    <div class="footer-main">
      <p class="footer-main-title">{{ message }}</p>
      <a href="https://github.com/Nakpa/ErogeLib-vue" target="_blank"
        class="footer-main-link">Github</a><a href="mailto:HarumaNakpa@outlook.com" class="footer-main-link">Email</a>
        <a href="https://jq.qq.com/?_wv=1027&k=GFgFJC3o" target="_blank"
        class="footer-main-link">Group</a>
    </div>

    <div class="layout-copy footdoc" style="text-align:center;">
      <i class="footdoc">
        <canvas id="myCanvas" width="80" height="50" style="background-color: transparent;"></canvas>
      </i>
      <i class="footdoc">2021 @ Nakpa. - Eroge is life , like a melody - </i>
    </div>

    <div class="footer-social">
      <i class="doc-icon-weixin footdoc">
        <span style="position:absolute;bottom: 50px;right: 20px;">123123123</span>
        <span style="position:absolute;bottom:5px;right:20px">Web Design by Nakpa</span>
      </i>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        message: 'ErogeLib-vue v0.1',
      }
    },
    mounted() {
      const util = {
        random: function (min, max) {
          return min + Math.floor(Math.random() * (max - min + 1))
        },
        randomColor: function () {
          return ['#22CAB3', '#90CABE', '#A6EFE8', '#C0E9ED', '#C0E9ED', '#DBD4B7', '#D4B879', '#ECCEB2', '#F2ADA6', '#FF7784'][util.random(0, 9)]
        },
        randomSpeed: function () {
          return (Math.random() > 0.5 ? 0.5 : -0.5) * Math.random(0 , 0.001)
        }
      }
      const {Stage,Curve,motion} = this.$curvejs;
      let canvas = document.getElementById('myCanvas'),
      stage = new Stage(canvas);
      for(let i = 0; i < 3; i++){
        let curve = new Curve({
          color: util.randomColor(),
          points: [util.random(10, canvas.width - 10), util.random(10, canvas.height - 10),util.random(10, canvas.width - 10),
            util.random(10, canvas.height - 10), util.random(10, canvas.width - 10), util.random(10, canvas.height - 10),
            util.random(10, canvas.width - 10), util.random(10, canvas.height - 10)],
          data: [util.randomSpeed(), util.randomSpeed(), 
          util.randomSpeed(), util.randomSpeed(), 
          util.randomSpeed(), util.randomSpeed(), 
          util.randomSpeed(), util.randomSpeed()],
          motion: function motion(points, data) {
            points.forEach(function (item, index) {
              points[index] += data[index]
              if (points[index] < 0) {
                  points[index] = 0
                  data[index] *= -1
              }
              if (index % 2 === 0) {
                if (points[index] > canvas.width) {
                  points[index] = canvas.width
                  data[index] *= -1
                }
              } else {
                if (points[index] > canvas.height) {
                  points[index] = canvas.height
                  data[index] *= -1
                }
              }
            })
          }
        });
        stage.add(curve);
      }

      function tick() {
        stage.update();
        requestAnimationFrame(tick)
      }
      tick()
    },

  }

</script>

<style scoped>

  footer{
    width: calc(100% - 20px);
    /* line-height: 25px; */
    position:absolute;
    bottom:0;
    left:0;
    z-index:10;
    /* box-sizing: border-box; */
  }
  .container {
    padding: 0 10px;
    margin: 0 auto;
    background-color: rgb(50, 64, 87);
  }

  a {
    text-decoration: none;
  }

  .footer-main {
    font-size: 0;
    padding-top: 5px;
    display: inline-block;
    width: 20%;
  }

  .footer-main .footer-main-title {
    line-height: 1;
    font-size: 22px;
    margin: 0;
  }

  .footer-main .footer-main-link {
    display: inline-block;
    margin: 12px 38px 0 0;
    line-height: 1;
    font-size: 12px;
    color: #768193;
  }

  .layout-copy {
    display: inline-block;
    width: 60%;
    height: 50px;
    margin-left: 3px;
  }

  .layout-copy .footdoc {
    display: inline-block;
    text-align: center;
    color: #8d99ab;
    width: 570px;
    vertical-align: middle;
    font-size: 12px;
  }

  .footer-social {
    float: right;
    font-size: 0;
    padding: 0 30px;
    width: 20%;
  }

  .footdoc span {
    display: inline-block;
    font-size: 14px;
    color: #768193;

  }

  .footdoc img {
    display: inline-block;
    width: 84px;
    height: 50px;
    margin-top: 20px;
    transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    /* Internet Explorer */
    -moz-transform: rotate(330deg);
    /* Firefox */
    -webkit-transform: rotate(330deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(330deg);
    /* Opera */

  }

</style>
