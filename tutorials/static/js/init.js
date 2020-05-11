const pages = ['start','init','point','moving_point','color']
window.addEventListener('load',()=>{
    showdown.setFlavor('github')
    showdown.setOption('ghMentions',true)

    var converter = new showdown.Converter()
    var text      = document.querySelector("#md-text").innerHTML
    // console.log(text);
    var markdown = converter.makeHtml(text)
    document.querySelector("#doc").innerHTML = markdown
    hljs.initHighlighting()

    const p = `<div id="head">
        <a class="back" href="#"><div>上一节</div></a>
        <a class="menu" href="/tutorials/"><div>目录</div></a>
        <a class="next" href="#"><div>下一节</div></a>
    </div>`
    const nav = createElementFromHTML(p)
    const doc = document.querySelector("#doc")
    const docp = doc.parentNode

    docp.insertBefore(nav,doc)

    const currentPage = new RegExp(/_(.*)\.html/).exec(location.pathname)[1]
    console.log(currentPage);
    const no = pages.indexOf(currentPage)
    console.log(no);
    if(no>=0){
        if(no==0){
            document.querySelector("#head .back").href = '/tutorials/index.html'
        }
        document.querySelector("#head .back").href = location.pathname.replace(/\d+_(.*)\.html/,`${no-1}_${pages[no-1]}.html`)
        if(no!=pages.length-1){
            document.querySelector("#head .next").href = location.pathname.replace(/\d+_(.*)\.html/,`${no+1}_${pages[no+1]}.html`)
        }else{
            document.querySelector("#head .next div").innerHTML = "待更新"
        }
    }
})

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
