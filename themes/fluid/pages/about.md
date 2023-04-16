### 关于我
``` javascript
const aboutMe = {
    name: 'Ben Zhang',
    position: 'Web Front-End Developer',
    website: 'https://ben-zhangbin.com'
}
```
### 喜欢的话
<font face="楷体" size=4 color=#FFA500 id="likeFont">世上只有一种英雄主义，就是在认清了生活的真相后依然热爱生活💕</font>

<style>
    #likeFont {
        transition: all 0.8s;
    }
</style>
<script>
    const element = document.querySelector('#likeFont')
    const colorArray = ['#FFA500', '#20B2AA', '#000000']
    let count = 2
    setInterval(() => {
        if (count < 0) count = 2
        element.setAttribute('color', colorArray[count])
        count-=1
    }, 3000)
</script>

