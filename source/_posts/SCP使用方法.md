---
layout: post
title:  SCP使用方法
date: 2023年2月17日 20点08分
index_img: /img/post-index-111202.jpg
banner_img: /img/post-index-111202.jpg
tags: 
    - 工具
categories: 
    - 技术
---

>转自：https://www.clloz.com/programming/assorted/2019/04/09/mac-scp/

# scp 的使用
## 传输本地文件到服务器
```bash
scp 文件名 用户名@服务器ip:目标路径
scp /file-path/ root@server-ip:/file-path/
```
## 传输本地文件夹到服务器
```bash
scp -r 文件夹目录 用户名@服务器ip:目标路径
scp -r /path/folder root@server-ip:/path/
```
## 下载服务器文件到本地
```
scp 用户名@服务器ip:文件路径 目标路径
scp root@server-ip:/file-path/ /file-path/
```

## 下载服务器文件夹到本地
```bash
scp -r 用户名@服务器ip:文件路径 目标路径
scp -r root@server-ip:/path/folder /path/
```
## 如果服务器指定了端口
```bash
scp -P 端口号 文件路径 用户名@服务器ip:文件保存路径
scp -P port /file/path root@server-ip:/path/
```