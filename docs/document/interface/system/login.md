# login

::: warning 提示
<!-- warning -->
使用前提：必须先实例化
:::

## login示例

临时使用，可以联系融合通信管理员，申请调测账号，正式交付以中台对接token为准

:::preview
demo-preview=../../../components/interface/system/login.vue
:::

## 使用方法

```typescript
// 只需要传递一个参数即可，初始测试可以开放临时账号，后续以token对接为准
let result = await fccInstance.login({
  token: '对接的token',
  userAccount: '临时对接的测试账号'
})
```
<!-- **入参说明** -->
### 入参说明

| **参数名** | **数据类型** | **选取原则** |**说明** |
| ---------- | ------------ | ------------ | ------------------ |
| token      | string       | 必选         | 融合通讯对接的token |
| userAccount      | string       | 可选         | 融合通讯对接的账号，和token参数传递一个即可 |

### 出参说明

| **出参名称** | **数据类型** | **说明**                         |
| -------- | -------- | ------------------------------ |
| status   | number   | 调用接口返回结果的state-code，其含义参考融合通讯中台通用state-code。 |
| msg      | string   | 给开发者的文字提示信息                    |
| data     | string   | 返回的信息                          |

<!-- 代码 -->

<!-- ::: code-group

```sh [pnpm]
#查询pnpm版本
pnpm -v
```

```sh [yarn]
#查询yarn版本
yarn -v
```

::: -->