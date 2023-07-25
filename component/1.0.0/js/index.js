// 渲染选项卡
function $compentTabs(component) {
    let tabList = [
        {
            type: "title",
            name: "开发指南",
        },
        {
            type: "tab",
            name: "安装",
            component: 'install'
        },
        {
            type: "tab",
            name: "快速上手",
            component: 'start'
        },
        {
            type: "title",
            name: "组件",
        },
        {
            type: "tip",
            name: "基础",
        },
        {
            type: "tab",
            name: "button 按钮",
            component: 'button'
        },
        {
            type: "tab",
            name: "input 输入框",
            component: 'input'
        },
        {
            type: "tab",
            name: "form 表单",
            component: 'form'
        },
        {
            type: "tip",
            name: "交互",
        },
        {
            type: "tab",
            name: "loading 加载",
            component: 'loading'
        },
        {
            type: "tab",
            name: "message 消息提示",
            component: 'message'
        },
        {
            type: "tab",
            name: "msgbox 弹窗",
            component: 'msgbox'
        }
    ]
    rendering(tabList, component)
    // 渲染tab选项卡
    function rendering(tabs, component) {
        let tabsBox = document.getElementById("tabsBox")
        for (let i = 0; i < tabs.length; i++) {
            let tab = document.createElement("div")
            let className = tabs[i].type === 'tab' ? tabs[i].type : 'tab-' + tabs[i].type
            tab.classList.add(className)
            tab.innerHTML = tabs[i].name
            tab.setAttribute('component', tabs[i].component)
            if (tabs[i].type === 'tab') {
                tab.onclick = function () {
                    let to = window.BaseUrl + '/component/1.0.0/' + tabs[i].component + '.html'
                    if (component != tabs[i].component) {
                        window.location.href = to
                    }
                }
            }
            tabsBox.appendChild(tab)
        }
        // 更新当前选项卡样式
        addStyle(component)
        function addStyle(component) {
            let tabs = document.getElementsByClassName('tab')
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i].getAttribute('component') == component) {
                    tabs[i].classList.add('tab-active')
                } else {
                    tabs[i].classList.remove('tab-active')
                }
            }
        }
    }
}
// 选项卡动画
function $animation() {
    let tabs = document.getElementById("tabsBox")
    let content = document.getElementById("content")
    let animationTimer = null
    tabs.onmouseover = function tabMouse() {
        animations(1)
    }
    tabs.onmouseleave = function tabMouse() {
        animations(0)
    }
    content.onmouseover = function tabMouse() {
        animations(0)
    }
    function animations(e) {
        if (e == 0) {
            clearTimeout(animationTimer)
            animationTimer = setTimeout(() => {
                tabs.style.opacity = 0.6
            }, 5 * 1000);
        } else {
            tabs.style.opacity = 1
        }
    }
}

// 底部导航渲染
function $navigator() {
    let content = document.getElementById("content")
    let navigatorTo = document.createElement("div")
    navigatorTo.classList.add("navigatorTo")
    content.appendChild(navigatorTo)
}