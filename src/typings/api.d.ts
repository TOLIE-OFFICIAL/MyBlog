// 后端接口返回的数据类型

/** 用户权益相关 */
declare namespace ApiAuth {
  /** token */
  interface Token {
    token: string;
  }
  /** 用户信息 */
  type UserInfo = Auth.UserInfo;
}

// 获取登陆页展示poem
// ？？没理解这个的作用
declare namespace ApiPeom {
  interface Poem {
    id: number;
    hitokoto: string;
    from_who: string;
  }
  interface PoemRestriction {
    max_length: number,
    min_length: number,
    c: string,
    encode: string
  }
}

declare namespace ApiUserManagement {
  interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    avatar?: string;
    isDel?: boolean;
    IsBan?: boolean;
    createTimez?: Date;
    lastLogin?: Date;
    /**
     * 用户性别
     *  - MALE: 男
     *  - FEMALE: 女
     */
    gender: "MALE" | "FEMALE" | null;
    /** 用户手机号 */
    // phone: string;
    /**
     * 用户状态
     *  - ENABLE: 启用
     *  - DISABLE: 禁用
     *  - DELETED: 已删除
     */
    userStatus: "ENABLE" | "DISABLE" | "DELETED" | null;
  }
}

declare namespace BlogArticles {
  // 文章结构
  interface Article {
    // 文章id
    _id: string,
    coverUrl: string,
    tags: string[]
    // 文章内容
    content: string,
    // 作者名称
    author: string,
    // blog标题
    title: string,
    summary: string,
    // 是否置顶
    priority: boolean,
    // 创建时间
    createTime: string,
    // 更新/推送时间
    updateTime: string,
    // 喜欢、评论、阅读数目
    like_count?: number,
    comment_count?: number,
    read_count?: number,
  }
  // 后台创作者空间 展示的article结构
  interface partArticle {
    _id: string,
    title: string,
    updateTime: string,
    content?: string,
    tags?: string[]
    // 喜欢、评论、阅读数目
    like_count?: number,
    comment_count?: number,
    read_count?: number,
  }
  // 表单上传图片信息的formData结构
  interface formData {
    id?: string
    title: string,
    author: string, // 作者
    tags: string[],
    priority: boolean,
    content: string, // markdown 格式
    summary: string,
    updateTime: string,
    createTime: string,
    coverUrl?: string,
  }
  // 首页分页请求博客信息的参数
  interface Query {
    pageSize: number,
    currentPage: number
  }
}

declare namespace BlogImgs {
  // 七牛云的token
  interface token {
    token: string
  }
  // 图片上传七牛云的返回结果
  interface uploadRes {
    hash: string
    key: string
  }

}

declare namespace Chat {
  interface Msg {
    senderId: string
    receiverId: string
    message: string
  }
}