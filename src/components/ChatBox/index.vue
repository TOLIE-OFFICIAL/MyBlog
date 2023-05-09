<!-- author: TOLIE -->
<!-- date: 2023-05-07 23:05:17 -->
<!-- description: 聊天组件 -->
<template>
  <div class="chatbox">
    <div class="chatbox-aside">
      <el-input v-model="searchInput" placeholder="搜索"></el-input>
      <el-scrollbar>
        <el-menu
          class="friend-list"
          :default-active="activeFriend"
          mode="vertical"
        >
          <el-menu-item
            v-for="(friend, index) in friendList"
            :key="index"
            :index="index"
            @click="handleClick()"
          >
            <div class="friend-avatar">
              <!-- <img :src="friend.avatar" alt="friend-avatar" /> -->
              <img :src="'1'" alt="friend-avatar" />
            </div>
            <div class="friend-name">
              <!-- {{ friend.name }} -->
              name
            </div>
            <div class="friend-message">
              <!-- {{ friend.message }} -->
              message
            </div>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="chatbox-content">
      <el-scrollbar>
        <div class="chatbox-content-messages">
          <div
            class="message-item"
            v-for="(message, index) in activeFriendMessages"
            :key="index"
          >
            <div class="message-header">
              <div class="message-avatar">
                <!-- <img :src="'1'" alt="friend-avatar" /> -->
                <el-avatar
                  :size="60"
                  :src="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
                />
                <!-- <img :src="message.avatar" alt="friend-avatar" /> -->
              </div>
              <div class="message-name">
                <!-- {{ message.name }} -->
                "name"
              </div>
              <div class="message-time">
                <!-- {{ message.time }} -->
                "time"
              </div>
            </div>
            <div class="message-content">
              <!-- {{ message.content }} -->
              content
            </div>
          </div>
        </div>
      </el-scrollbar>
      <div class="chatbox-content-input">
        <el-input
          v-model="state.inputMessage"
          placeholder="Type your message"
          @keyup.enter="sendMessage"
        ></el-input>
        <el-button
          type="primary"
          icon="el-icon-chat-dot-round"
          @click="sendMessage"
        >
          发送
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { onMounted } from "vue";
// const socket = inject('$socket');
// import VueSocketIO from "vue-socket.io";
// import SocketIO from "socket.io-client";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const activeFriend = "";
const searchInput = "";
const friendList = {
  friend: {
    avatar: "",
  },
  index: 111,
};
const activeFriendMessages = {
  message: {
    avatar: "",
  },
  index: 111,
};

const sendMessage = () => {
  console.log(111);
};
const handleClick = () => {
  console.log("click");
};

onMounted(() => {
  // Send a socket message
  socket.emit("createChat", (res: any) => {
    console.log(res);
  });

  // Receive a socket message
  socket.on("message", (data) => {
    console.log(data);
  });
});
// props: {
//   title: {
//     type: String,
//     required: true,
//   },
//   messages: {
//     type: Array,
//     required: true,
//   },
//   sendMessage: {
//     type: Function,
//     required: true,
//   },
// },
const state = reactive({
  inputMessage: "",
});
</script>

<style scoped lang="less">
.chatbox {
  display: flex;
  width: 520px;
  margin: 5px auto 0 auto;
  height: calc(100vh - 31px);
  font-size: 8px;
  color: #606266;
  &-aside {
    width: 160px;
    height: 100%;
    padding: 20px;
    // background-color: #f4f4f5;
    border-right: 1px solid #e4e7ed;
  }
  &-content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    &-input {
      display: flex;
      // flex-direction: column;
      height: 28px;
      width: 100%;
    }
  }
}

.friend-list {
  // height: calc(100% - 40px);
  background-color: transparent;
  border: none;
}

.friend-avatar img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  vertical-align: middle;
}

.friend-name {
  font-size: 8px;
  font-weight: 500;
  margin-left: 8px;
  display: inline-block;
}

.friend-message {
  font-size: 6px;
  margin-left: 8px;
  display: inline-block;
}

.chat-messages {
  flex: 1;
  padding: 20px;
  // background-color: #f4f4f5;
}

.message-item {
  display: flex;
  margin-bottom: 16px;
}

.message-avatar img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  vertical-align: middle;
}

.message-header {
  margin-bottom: 8px;
}

.message-name {
  font-size: 14px;
  font-weight: 500;
}
</style>
