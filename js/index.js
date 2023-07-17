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
    // 设置网页 logo
    var link = document.createElement("link");
    link.setAttribute("rel", "shortcut icon");
    link.setAttribute("type", "image/x-icon");
    link.setAttribute("href", "../../logo.png");
    document.getElementsByTagName("head")[0].appendChild(link)
    // 设置网页标题
    document.getElementsByTagName("title")[0].innerHTML = "小猿组件库"
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