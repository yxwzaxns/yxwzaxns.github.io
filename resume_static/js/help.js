async function downPDF() {
    goTop()
    showPersonInfo()
    const cover = document.querySelector('#cover')
    console.log(cover);
    cover.style.visibility = 'visible'
    await createPdf('myresume')
    setTimeout(()=>{
        hidePersonInfo()
        cover.style.visibility = 'hidden'
    },500)
    
}
async function createPdf(nodeClassName){
    const filename  = '廖前程的简历.pdf';
    const myResume = document.getElementsByClassName(nodeClassName)
    // A4 210x297 mm
    const pdf = new jspdf.jsPDF({
        orientation: 'p',
        unit: 'mm',
        fomat: 'a4'
    })
    pdf.setTextColor('#666')
    const createDate = new Date().toLocaleDateString()
    for (let i = 0; i < myResume.length; i++) {
        const canvas = await html2canvas(myResume[i],{
            width: 730,
            // height: 277,
            imageTimeout:0
        })
        if(i>0) pdf.addPage()
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 190, 277,'','FAST')
        pdf.setFontSize(10)
        pdf.text(`Created on ${createDate}. For the latest version of resume, please visit https://aong.cn/resume.html`, 12, 292)
    }
    // pdf.autoPrint({variant: 'non-conform'}) 预览时自动打开打印框
    if(location.href.includes('localhost')){
        pdf.output('dataurlnewwindow')
    }else{
        pdf.save(filename)
    }
}
function showPersonInfo() {
    const myResume = document.querySelectorAll('.myresume')
    myResume[0].querySelector('.basic-name').innerText = Config.name
    myResume[0].querySelector('.basic-tel-text').innerText = Config.tel
    myResume[0].querySelector('.basic-email-text').innerText = Config.email
    myResume[0].querySelectorAll('.company-name').forEach((e,i)=>{
        e.innerText = Config.company[i]
    })
}
function hidePersonInfo() {
    const myResume = document.querySelectorAll('.myresume')
    myResume[0].querySelector('.basic-name').innerText = Config.name.replace(/(.{2})$/,'**')
    myResume[0].querySelector('.basic-tel-text').innerText = Config.tel.replace(/(.+\d{3})\s\d{4}\s(\d{4})$/,'$1 **** $2')
    myResume[0].querySelector('.basic-email-text').innerText = Config.email.replace(/(.+@)/,'****@')
    myResume[0].querySelectorAll('.company-name').forEach((e,i)=>{
        e.innerText = '*** 公司'
    })
}
function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scrollEvent() {
    const goTopBtn = document.getElementsByClassName('go_top')[0]
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goTopBtn.style.display = "block"
    } else {
        goTopBtn.style.display = "none"
    }
}
