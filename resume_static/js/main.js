const Config = {
    name: '廖前程',
    tel: '(+86)131 4833 4396',
    email: 'i@aong.cn',
    company: [
        "复达（广州）食品科技有限公司",
        "桂林崇盛网络科技有限公司",
        "上海道客网络科技有限公司"
    ]
}
;(()=>{
    document.getElementsByClassName('go_top')[0]
        .addEventListener('click', goTop)
    document.getElementsByClassName('down_pdf')[0]
        .addEventListener('click', downPDF)
    window.onscroll = scrollEvent
    console.log('init end')
})()
