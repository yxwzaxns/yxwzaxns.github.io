const pages = ['start','init','point','moving_point','color','animation','simple_polygon','two_ways_of_drawing','translation','resolution']
window.addEventListener('load',()=>{
    showdown.setFlavor('github')
    showdown.setOption('ghMentions',true)

    var converter = new showdown.Converter()
    var text      = document.querySelector("#md-text").innerHTML
    // console.log(text);
    var markdown = converter.makeHtml(text)
    document.querySelector("#doc").innerHTML = markdown
    hljs.initHighlighting()

    createNav()
})

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

function createNav(){
    const urlInfo = new RegExp(/s\/(\d*)_*(.*)\.html/).exec(location.pathname) || []
    let no = parseInt(urlInfo[1] || -1)
    const title = urlInfo[2]
    if(title==undefined) return
    const doc = document.querySelector("#doc")

    const p = `<div id="head" style="width:${doc.style.width}">
        <a class="back" href="#"><div>上一节</div></a>
        <a class="menu" href="/tutorials/"><div>目录</div></a>
        <a class="next" href="#"><div>下一节</div></a>
    </div>`
    const nav = createElementFromHTML(p)

    const docp = doc.parentNode

    docp.insertBefore(nav,doc)

    if(no>=0){
        if(no==0){
            document.querySelector("#head .back").href = '/tutorials/index.html'
            document.querySelector("#head .back div").innerHTML = "返回首页"
        }else{
            document.querySelector("#head .back").href = location.pathname.replace(/\d+_(.*)\.html/,`${no-1}_${pages[no-1]}.html`)
        }
        if(no!=pages.length-1){
            document.querySelector("#head .next").href = location.pathname.replace(/\d+_(.*)\.html/,`${no+1}_${pages[no+1]}.html`)
        }else{
            document.querySelector("#head .next div").innerHTML = "待更新"
        }
    }else{
        document.querySelector("#head .back").href = "javascript:history.go(-1)"
        document.querySelector("#head .back div").innerHTML = "返回"
        document.querySelector("#head .next div").innerHTML = ""
    }
    window.addEventListener('scroll', function(e) {
        const toBottomHeight = e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop - window.innerHeight
        if(toBottomHeight < 50){
            if(nav.dataset.toBottomHeight == '1') return
            docp.append(nav)
            nav.dataset.toBottomHeight = 1
        }else{
            if(toBottomHeight < 250 || nav.dataset.toBottomHeight == '0') return
            docp.insertBefore(nav,doc)
            nav.dataset.toBottomHeight = 0
        }
    })
}
