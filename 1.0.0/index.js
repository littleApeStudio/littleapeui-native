// 渲染选项卡
function $a(component) {
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
                    let to = '../' + tabs[i].component + '/'
                    if (component != tabs[i].component) {
                        window.location.href = to
                        // history.pushState(null, null, to)
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