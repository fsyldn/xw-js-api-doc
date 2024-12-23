融合通讯中台state-code仿照了 http 协议的state-code的风格来定义，部分通用的state-code及其含义参考下表：

| state-code （status） | 说明 |
| --- | --- |
| 200 | 调用融合通讯中台api成功 |
| 400 | 调用融合通讯中台api时入参数据格式不合法 |
| 401 | 当前角色没有login融合通讯中台或处于忙碌状态 |
| 403 | 当前login的角色没有权限调用该融合通讯中台api |
| 404 | 调用的融合通讯中台 api 未开放，请联系管理员 |
| 408 | 请求融合通讯中台服务超时 |
| 409 | 请求被取消 |
| 410 | 融合通讯中台会话已过期 |
| 411 | 被呼方不在线 |
| 412 | 被呼方正忙 |
| 413 | 被呼方拒绝接听 |
| 414 | 用户忙碌，请关掉其它通信任务再进行操作 |
| 415 | 用户已离线，请切换到在线状态再进行操作 |
| 416 | 不能呼叫自己 |
| 417 | 呼叫失败 |
| 418 | 挂断失败 |
| 420 | 与会人员必须大于2人 |
| 421 | 当前用户非在线状态,不能启动会议 |
| 423 | 创建融合会议失败 |
| 424 | 添加人员失败 |
| 500 | 融合通讯中台内部发生了未知错误，需要联系融合通讯开发者 |
| 501 | login失败 |
| 502 | 融合通讯中台的服务连接错误 |
| 511 | MDP 程序启动失败。建议检查是否安装或浏览器是否禁用MDP 的某些权限 |
| 512 | MDP 程序所需的网卡端口被占用，建议检查12700端口是否被占用 |
| 513 | MDP 程序异常中止 |
| 514 | webServiceSocket 连接失败 |
| 521 | nats 服务未启动 |
| 522 | nats 服务启动出错 |
| 523 | nats 超过了最大连接数 |
| 531 | 音视频会议服务未启动 |
| 532 | 音视频会议超过了最大服务数 |
| 541 | vc 服务未启动 |
| 542 | vc 超过了最大服务数 |
| 551 | webService 服务出错 |
| 561 | 打开监控失败 |
| 562 | 打开监控超时 |
| 563 | 打开矩阵监控失败 |
| 564 | 打开矩阵监控超时 |