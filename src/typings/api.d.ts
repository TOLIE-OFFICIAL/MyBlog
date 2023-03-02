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
  /** token */
  interface Poem {
    code: number,
    updateTime: number
  }
}

declare namespace ApiUserManagement {
  interface User {
    /** 用户id */
    id: string;
    /** 用户名 */
    username: string | null;
    /** 用户年龄 */
    age: number | null;
    /**
     * 用户性别
     *  - MALE: 男
     *  - FEMALE: 女
     */
    gender: "MALE" | "FEMALE" | null;
    /** 用户手机号 */
    phone: string;
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
  interface Article {
    // 文章id
    id: string,
    // 作者名称
    author: string,
    // blog标题
    title: string,
    summary: string,
    // 是否置顶
    top: string,
    // 创建时间
    create_time: string,
    // 更新/推送时间
    push_time: string,
    // 喜欢、评论、阅读数目
    like_count: number,
    comment_count: number,
    read_count: number,
  }
  interface Query {
    pageSize: number
  }
}