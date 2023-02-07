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
declare namespace ApiPeom {
  /** token */
  interface Poem {
    id	// 一言标识
    id: number
    hitokoto: string	// 一言正文。编码方式 unicode。使用 utf - 8。
    type: string	 //类型。请参考第三节参数的表格
    from: string		//一言的出处
    from_who: string		//一言的作者
    creator: string// 添加者
    // creator_uid	添加者用户标识
    creator_uid: number
    reviewer: number	// 审核员标识
    uuid: number// uuid	一言唯一标识；可以链接到 https://hitokoto.cn?uuid=[uuid] 查看这个一言的完整信息
    commit_from: string// 提交方式
    created_at: string	// 添加时间的时间戳
    length: number //句子长度
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
    username: string,
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
}