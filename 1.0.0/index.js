// 渲染header
function $header(nowMenu) {
    let menuList = [
        {
            id: 0,
            name: "指南",
            page: ""
        },
        {
            id: 1,
            name: "组件",
            page: "component"
        },
        {
            id: 2,
            name: "资源",
            page: ""
        },
    ]
    // 创建 header
    let header = document.getElementById("header")
    // 获取 header-container 容器
    let headerContainer = document.createElement("div")
    headerContainer.classList.add("header-container")
    // 创建 header logo
    let headerContainerLogo = document.createElement("div")
    headerContainerLogo.classList.add("header-container-logo")
    let headerLogoIcon = document.createElement("img")
    headerLogoIcon.src = "../../logo.png"
    let headerLogoName = document.createElement("span")
    headerLogoName.innerHTML = "小猿组件库"
    // 创建 header 菜单
    let headerContainerMenus = document.createElement("header-container-menus")
    headerContainerMenus.classList.add("header-container-menus")
    // 向 header 插入元素
    header.appendChild(headerContainer)
    headerContainer.appendChild(headerContainerLogo)
    headerContainerLogo.appendChild(headerLogoIcon)
    headerContainerLogo.appendChild(headerLogoName)
    headerContainer.appendChild(headerContainerMenus)
    for (let i = 0; i < menuList.length; i++) {
        let menu = document.createElement("div")
        menu.classList.add("header-container-menu")
        let menuName = document.createElement("div")
        menuName.classList.add("header-container-menu-name")
        menuName.innerHTML = menuList[i].name
        let menuBorder = document.createElement("div")
        menuBorder.classList.add("header-container-menu-border")
        menuBorder.innerHTML = menuList[i].name
        if (nowMenu == menuList[i].name) {
            menu.style.opacity = 1
            menuBorder.style.opacity = 1
        }
        // 插入菜单
        headerContainerMenus.appendChild(menu)
        menu.appendChild(menuName)
        menu.appendChild(menuBorder)
    }

}
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