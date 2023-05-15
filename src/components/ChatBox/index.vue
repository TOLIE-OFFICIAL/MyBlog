<!-- author: TOLIE -->
<!-- date: 2023-05-07 23:05:17 -->
<!-- description: 聊天组件 -->
<template>
  <div class="chatbox">
    <div class="chatbox-aside">
      <el-input v-model="searchInput" placeholder="搜索">
        <template #suffix>
          <div class="emoji-picker">
            <el-icon>
              <i-ep-search />
            </el-icon>
          </div>
        </template>
      </el-input>
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
            class="friend-list-item"
          >
            <div class="friend-list-item-avatar">
              <!-- <img :src="friend.avatar" alt="friend-avatar" /> -->
              <!-- <img :src="'1'" alt="friend-avatar" /> -->
              <el-avatar
                :size="60"
                :src="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
              />
            </div>
            <div class="friend-list-item-chat">
              <div class="friend-list-item-chat-header">
                <div class="friend-list-item-chat-up-name">
                  <!-- {{ friend.name }} -->
                  夏侯惇
                </div>
                <div class="friend-list-item-up-date">11:11</div>
              </div>

              <div class="friend-list-item-chat-message">
                <!-- {{ friend.message }} -->
                毕业快乐，毕业快乐
              </div>
            </div>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
    <el-divider class="chatbox-divider" direction="vertical" />
    <div class="chatbox-content">
      <el-scrollbar>
        <div class="chatbox-content-messages">
          <div
            class="chatbox-content-message-item"
            v-for="(message, index) in activeFriendMessages"
            :key="index"
          >
            <div class="chatbox-content-message-item-header">
              <div class="chatbox-content-message-item-header-avatar">
                <!-- <img :src="'1'" alt="friend-avatar" /> -->
                <el-avatar
                  :size="60"
                  :src="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
                />
                <!-- <img :src="message.avatar" alt="friend-avatar" /> -->
              </div>
            </div>
            <!-- <div class="chatbox-content-message-content">
              content
            </div> -->
            <chatBubble text="毕业快乐！！" :sentByMe="false"></chatBubble>
          </div>
        </div>
      </el-scrollbar>
      <div class="chatbox-content-input">
        <el-input
          v-model="state.inputMessage"
          placeholder="发个消息聊聊呗～"
          @keyup.enter="sendMessage"
        >
          <template #suffix>
            <div class="emoji-picker">
              <el-button
                class="emoji-picker-icon"
                ref="button"
                type="default"
                @click="handleEmoji"
              >
                <el-icon>
                  <i-mdi-emoji />
                </el-icon>
              </el-button>
              <EmojiPicker
                class="emoji"
                :native="true"
                :hide-search="true"
                :disable-skin-tones="true"
                @select="onSelectEmoji"
                v-show="ifShowEmoji"
              />
            </div>
          </template>
        </el-input>

        <el-button
          class="chatbox-content-input-submit"
          type="primary"
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
import chatBubble from "@/components/ChatBox/ChatBubble/index.vue";
import EmojiPicker from "vue3-emoji-picker";
import { io } from "socket.io-client";
import "vue3-emoji-picker/css";

const socket = io("http://localhost:3000");

const ifShowEmoji = ref(false);
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
const onSelectEmoji = (emoji: MyEmojiPicker.Emoji) => {
  // console.log(emoji);
  state.inputMessage += emoji.i;
  ifShowEmoji.value = !ifShowEmoji.value;
};
const handleEmoji = () => {
  console.log("emo");
  ifShowEmoji.value = !ifShowEmoji.value;
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
  height: calc(100vh - 57px);
  font-size: 8px;
  color: #606266;
  &-divider {
    height: 100%;
  }
  &-aside {
    width: 160px;
    height: 100%;
    padding: 8px 0;
    // background-color: #f4f4f5;
    // border-right: 1px solid #e4e7ed;
    .friend-list {
      &-item {
        display: flex;
        margin-top: 3px;
        padding-left: 0 !important;
        &-chat {
          display: flex;
          // height: 100%;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;

          // margin-left: 8px;
          &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: normal;

            &-name {
              // height: 50%;
              font-size: 6px;
              font-weight: 500;
            }
          }

          &-message {
            margin-top: 2px;
            line-height: normal;
            color: #66686d;
          }
        }
        // &-date {
        //   width: 10px;
        // }
      }
    }
  }
  &-content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    &-input {
      display: flex;
      // flex-direction: column;
      justify-content: space-between;
      height: 18px;
      width: 100%;
      margin-bottom: 10px;
      :deep(.el-input) {
        width: 90%;
        .el-input__inner {
          // height: 100%;
          // font-size: 8px;
        }
      }
      &-submit {
        height: 100%;
        // text-align: center;
      }
    }
    &-message-item {
      display: flex;
      margin-bottom: 4px;
      &-header {
        &-avatar {
          margin-right: 3px;
        }
      }
    }
  }
}
.emoji-picker {
  position: relative;
  .emoji {
    position: absolute;
    right: 100%;
    bottom: -50%;
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
