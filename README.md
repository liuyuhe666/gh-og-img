# gh-og-img

提取 GitHub OpenGraph 图片

![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-F69652?style=flat&logo=cloudflare&logoColor=white)
![GitHub License](https://img.shields.io/github/license/liuyuhe666/gh-og-img)
![GitHub Repo stars](https://img.shields.io/github/stars/liuyuhe666/gh-og-img)

## 🧭 使用说明

将 `https://github.com` 替换为 `https://gh-og-img.cnliuyuhe.workers.dev`

示例：

`https://github.com/liuyuhe666/gh-og-img` => `https://gh-og-img.cnliuyuhe.workers.dev/liuyuhe666/gh-og-img`

```diff
-https://github.com/liuyuhe666/gh-og-img
+https://gh-og-img.cnliuyuhe.workers.dev/liuyuhe666/gh-og-img
```

## 🧑‍💻 本地运行

```bash
pnpm install
pnpm dev
```

## 🌍 部署

Fork [仓库](https://github.com/liuyuhe666/gh-og-img)后，使用 [Cloudflare Workers](https://developers.cloudflare.com/workers) 部署。

## ✨ 示例

### Repo

`![Repo](https://gh-og-img.cnliuyuhe.workers.dev/liuyuhe666/gh-og-img)`

![Repo](https://gh-og-img.cnliuyuhe.workers.dev/liuyuhe666/gh-og-img)

### Issue

`![Issue](https://gh-og-img.cnliuyuhe.workers.dev/vuejs/core/issues/9862)`

![Issue](https://gh-og-img.cnliuyuhe.workers.dev/vuejs/core/issues/9862)

### Pull Request

`![Pull Request](https://gh-og-img.cnliuyuhe.workers.dev/lobehub/lobe-chat/pull/529)`

![Pull Request](https://gh-og-img.cnliuyuhe.workers.dev/lobehub/lobe-chat/pull/529)

### Discussion

`![Discussion](https://gh-og-img.cnliuyuhe.workers.dev/lobehub/lobe-chat/discussions/551)`

![Discussion](https://gh-og-img.cnliuyuhe.workers.dev/lobehub/lobe-chat/discussions/551)

### Commit

`![Commit](https://gh-og-img.cnliuyuhe.workers.dev/vercel/next.js/commit/a65fb162989fd00ca21534947538b8dbb6bf7f86)`

![Commit](https://gh-og-img.cnliuyuhe.workers.dev/vercel/next.js/commit/a65fb162989fd00ca21534947538b8dbb6bf7f86)
