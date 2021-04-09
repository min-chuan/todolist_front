<template>
  <div class="home">
    <!-- 顶部 start -->
    <div class="top">
      <div class="left">
        <img class="logo" src="@/assets/logo.png" />
        <ul class="menu">
          <li>
            <router-link active-class="active" to="/home">首页</router-link>
          </li>
          <li><a href="https://www.baidu.com">大数据可视化平台</a></li>
          <li><a href="https://www.baidu.com">掘金.博文</a></li>
          <li><a href="https://www.baidu.com">CSDN博文</a></li>
        </ul>
      </div>
      <div class="right">
        <span class="user">15868163725</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <img class="avatar" src="@/assets/avatar.jpg" />
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span @click="updateVisible = true">修改密码</span>
            </el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <a
          href="https://github.com/stone4321"
          target="_blank"
          class="github-corner"
        >
          <svg width="82" height="82" viewBox="0 0 250 250">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              class="octo-arm"
            ></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              class="octo-body"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <!-- 顶部 end -->
    <!-- 内容区 start -->
    <div class="container">
      <div class="operate-bar">
        <h4>任务列表</h4>
        <el-button type="primary">+ 添加任务</el-button>
      </div>
      <div class="table-wrapper">
        <el-table
          size="small"
          :data="tableData"
          border
          style="width: 100%"
          height="500"
        >
          <el-table-column
            prop="date"
            label="序号"
            type="index"
            align="center"
          ></el-table-column>
          <el-table-column prop="date" label="任务名称"></el-table-column>
          <el-table-column prop="name" label="任务内容"></el-table-column>
          <el-table-column prop="name" label="截止日期"></el-table-column>
          <el-table-column
            prop="name"
            label="任务状态"
            width="100px"
          ></el-table-column>
          <el-table-column prop="name" label="操作" align="center">
            <template>
              <el-button size="small">编辑</el-button>
              <el-button size="small" plain type="primary">代办</el-button>
              <el-button size="small" plain type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 底部分页器 start -->
      <div class="pagination">
        <el-pagination
          class="pagination"
          :current-page="page"
          :page-sizes="[10, 50, 100, 200, 300]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.total"
          @size-change="sizeChange"
          @current-change="currentChange"
        />
      </div>
      <!-- 底部分页器 end -->
    </div>
    <!-- 内容区 end -->
    <!-- 底部 start -->
    <div class="bottom">
      <p>Copyright@2020-2025 湘ICP备19016532号-1</p>
    </div>
    <!-- 底部 end -->
    <!-- 密码修改弹窗 start -->
    <update-pwd-dialog v-if="updateVisible" @close="updateVisible = false" />
    <!-- 密码修改弹窗 end -->
  </div>
</template>
<script>
import UpdatePwdDialog from './updatePwdDialog';
export default {
  name: 'Home',
  components: {
    UpdatePwdDialog,
  },
  data() {
    return {
      updateVisible: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      page: 1,
      pageSize: 50,
      total: 4,
    };
  },
  methods: {
    updatePwd() {
      console.log('干');
      this.updateVisible = true;
    },
    sizeChange(pageSize) {
      this.page = 1;
      this.pageSize = pageSize;
      // this.getAccountData();
    },
    currentChange(page) {
      this.page = page;
      // this.getAccountData();
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  .top {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 70px 20px 40px;
    height: 42px;
    background-color: #17174c;
    .left {
      display: flex;
      align-items: center;
      .menu {
        display: flex;
        margin-left: 20px;
        li {
          margin: 0 20px;
          .active {
            opacity: 1;
          }
          a {
            font-size: 14px;
            color: #fff;
            opacity: 0.5;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .user {
        color: #fff;
        margin-right: 10px;
        font-size: 14px;
      }
      .el-dropdown-link {
        display: flex;
        align-items: center;
        i {
          color: #fff;
        }
      }

      .avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        cursor: pointer;
      }
      .github-corner {
        position: absolute;
        top: 0;
        right: 0;
        svg {
          fill: #42b983;
          color: #fff;
          position: absolute;
          top: 0;
          border: 0;
          right: 0;
        }
        .octo-arm {
          transform-origin: 130px 106px;
        }
        &:hover {
          .octo-arm {
            -webkit-animation: octocat-wave 0.56s ease-in-out;
            animation: octocat-wave 0.56s ease-in-out;
          }
        }
      }
    }
  }
  .container {
    height: calc(100vh - 136px);
    padding: 30px 40px;
    box-sizing: border-box;
    .table-wrapper {
      margin-top: 20px;
    }
    .operate-bar {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      h4 {
        font-size: 20px;
      }
    }
    .pagination {
      margin-top: 20px;
      text-align: right;
    }
  }
  .bottom {
    padding: 20px 40px;
    background-color: #14143f;
    p {
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
