<template>
    <div class="deprecated-banner">
        YukiReflection is deprecated, Start trying <a href="https://github.com/HighCapable/KavaRef" target="_blank"
            rel="noopener">KavaRef</a> now!&nbsp
        YukiReflection 已被弃用，立即尝试 <a href="https://github.com/HighCapable/KavaRef/blob/main/README-zh-CN.md"
            target="_blank" rel="noopener">KavaRef</a> 吧！
    </div>
</template>

<style scoped>
.deprecated-banner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffdddd;
    color: #a00000;
    text-align: center;
    padding: 12px 24px;
    font-weight: bold;
    font-size: 16px;
    z-index: 9999;

}

.deprecated-banner a {
    color: #a00000;
    text-decoration: underline;
    font-weight: bold;
}

.deprecated-banner a:hover {
    color: #600000;
}
</style>