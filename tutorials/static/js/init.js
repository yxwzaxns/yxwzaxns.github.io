window.addEventListener('load',()=>{
    showdown.setFlavor('github')
    showdown.setOption('ghMentions',true)

    var converter = new showdown.Converter()
    var text      = document.querySelector("#md-text").innerHTML
    // console.log(text);
    var markdown = converter.makeHtml(text)
    document.querySelector("#doc").innerHTML = markdown
    hljs.initHighlighting()
})
