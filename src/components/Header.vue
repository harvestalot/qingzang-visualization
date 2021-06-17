<template>
  <div class="Header">
    <h1>
      <router-link to="/">城市化与生态环境迫协可视化</router-link>
    </h1>
    <div class="menu">
      <el-menu
        :default-active="activeMenu"
        mode="horizontal"
        background-color="#313131"
        text-color="#fff"
        active-text-color="#ea9f04"
        router
      >
        <el-submenu
          index='tibet-plateau'
          :popper-append-to-body="false"
          class="submenu-popup"
        >
          <template slot="title">
            <router-link to="/tibet-plateau/integral">青藏高原</router-link>
          </template>
          <el-submenu index="urbanization">
            <template slot="title">城镇化</template>
            <el-menu-item index="/tibet-plateau/urbanization-rate">城镇化率时空变化</el-menu-item>
            <el-menu-item index="/tibet-plateau/population-size">人口规模时空演变</el-menu-item>
            <el-menu-item index="/tibet-plateau/use-land-scale">用地规模时空演变</el-menu-item>
            <el-menu-item index='/tibet-plateau/town-temporal-distribution'>城镇时空分布的核密度</el-menu-item>
            <el-menu-item>人口空间分异</el-menu-item>
            <el-menu-item>人口迁移的近远程空间分异</el-menu-item>
          </el-submenu>
          <el-submenu index='ecotope'>
            <template slot="title">生态环境</template>
            <el-menu-item index="/tibet-plateau/water">水资源短缺的空间格局</el-menu-item>
            <el-menu-item>草地退化与草场利用的情况</el-menu-item>
            <el-menu-item>草地退化的空间变化特征</el-menu-item>
            <el-menu-item>气候要素与草地退化关系</el-menu-item>
            <el-menu-item>生态用地空间转移的热点分布</el-menu-item>
          </el-submenu>
          <el-submenu index='urbanization-ecotope'>
            <template slot="title">城市化与生态环境</template>
            <el-menu-item>旅游业发展变化</el-menu-item>
            <el-menu-item>旅游压力的空间分布格局</el-menu-item>
            <el-menu-item>生态环境与旅游业的协调度空间分布</el-menu-item>
            <el-menu-item>人为干扰影响下的草原退化格局</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu
          index='lasa'
          :popper-append-to-body="false"
          class="submenu-popup"
        >
          <template slot="title">
            <router-link to="/lasa/integral">拉萨城市群</router-link>
          </template>
          <el-submenu index="urbanization">
            <template slot="title">城镇化</template>
            <el-menu-item>范围界定</el-menu-item>
            <el-menu-item>城镇化率时空演变特征</el-menu-item>
          </el-submenu>
          <el-submenu index='ecotope'>
            <template slot="title">生态环境</template>
            <el-menu-item>RSEI指数的时空变化</el-menu-item>
            <el-menu-item>城镇化率时空演变特征</el-menu-item>
          </el-submenu>
          <el-submenu index='urbanization-ecotope'>
            <template slot="title">城镇化与生态环境</template>
            <el-menu-item>土地利用与RSEI的相互作用关系</el-menu-item>
            <el-menu-item>城镇化与生态环境的协同效应</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu
          index='lanxi'
          :popper-append-to-body="false"
          class="submenu-popup"
        >
          <template slot="title">
            <router-link to="/lanxi/integral">兰西城市群</router-link>
          </template>
          <el-menu-item>城镇化</el-menu-item>
          <el-menu-item>生态环境</el-menu-item>
          <el-submenu index='urbanization-ecotope'>
            <template slot="title">城镇化与生态环境</template>
            <el-menu-item>耦合度关系</el-menu-item>
            <el-menu-item>协调度关系</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu
          index='frontier'
          :popper-append-to-body="false"
          class="submenu-popup"
        >
          <template slot="title">
            <router-link to="/frontier/integral">边境城市带</router-link>
          </template>
          <el-menu-item>城镇化</el-menu-item>
          <el-menu-item>生态环境</el-menu-item>
          <el-menu-item>城镇化与生态环境</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeMenu: 'tibet-plateau',
    };
  },
};
</script>

<style lang="scss">
.Header {
  display: flex;
  padding: 0 20px;
  background-color: #313131;
  a:hover {
    color: $default;
  }
  h1 {
    line-height: 60px;
    margin-right: 100px;
    font-size: 28px;
  }
  .menu {
    .el-menu.el-menu--horizontal {
      border-bottom: none;
      .el-submenu__title {
        font-size: 18px;
      }
    }
    .submenu-popup {
      .el-menu--horizontal {
        .el-menu--popup {
          background-color: #dac57b !important;
          .el-submenu__title,
          .el-menu-item {
            background-color: #dac57b !important;
            border-bottom: 1px solid rgb(205, 176, 176);
            font-size: 14px;
            .el-submenu__icon-arrow {
              position: absolute;
            }
          }
          .el-submenu__title:hover,
          .el-menu-item:hover {
            background-color: #f8ff0d !important;
            color: $hover !important;
          }
        }
      }
    }
    // .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
    // .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
    // .el-menu--horizontal .el-submenu .el-submenu__title:hover,
    // .el-submenu__title:focus,
    // .el-submenu__title:hover {
    //   background-color: transparent !important;
    //   color: $hover !important;
    // }
    // .el-menu--popup .el-menu-item {
    //   background-color: #dac57b !important;
    // }
  }
}
</style>
