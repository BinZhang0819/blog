---
layout: post
title:      Open AI
date:        2023年3月26日22:08:27
index_img: https://ben-zhangbin.gitee.io/website/img/post-index-20210124.jpg
banner_img: https://ben-zhangbin.gitee.io/website/img/post-index-20210124.jpg
tags: 
    - 工具
categories: 
    - 技术
---

## Open AI测试
<style>
    #aiContent {
        display: none;
    }
</style>
<pre>
<code class="language-javascript" id="aiContent"></code>
</pre>
<textarea id="textarea" rows="5" style="width: 100%;">Hello!</textarea>
<p></p>
<button onclick="handleSend()">发送</button>
<script src="/js/axios.min.js"></script>

<script>
    handleSend()
    function handleSend () {
        const value = document.querySelector('#textarea').value
        console.log(value)
        if (!value) return
        axios({
            method: 'POST',
            url: 'https://api.openai.com/v1/chat/completions',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            data: {
                "model": "gpt-3.5-turbo",
                "messages": [{
                    "role": "user",
                    "content": value
                }]
            }
        }).then(res => {
            const content = res.data.choices[0].message.content
            document.querySelector('#aiContent').style.display = 'block'
            document.querySelector('#aiContent').innerHTML = content || 'Hello!'
            console.log(content);
        })
    }

</script>