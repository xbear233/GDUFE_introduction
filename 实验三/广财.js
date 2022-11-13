//    警示框
function myFunction() {
    alert("敬请期待！");

}

// 轮播图
//显示图片的下标
let index = 0

function refresh() {
    if (index < 0) {
        //下标小于0时
        //设置最右的图片
        // index = imageCount
        index = 3
    }
    else if (index > 3) {
        //下标超过上限时
        //设置最左的图片
        // index = imageCount
        index = 0
    }
    // 获取轮播框元素
    let banner = document.querySelector(".banner")

    //获取轮播框宽度
    let width = getComputedStyle(banner).width
    width = Number(width.slice(0, -2))

    banner.querySelector(".container").style.left = index * width * -1 + "px"
}

function leftShift() {
    index--
    refresh()
}

function rightShift() {
    index++
    refresh()
}
function setIndex(idx) {
    index = idx
    refresh()

}

refresh()