async function downPDF() {
    goTop()
    const downBtn = document.getElementsByClassName('down_pdf')[0]
    downBtn.style.backgroundColor = "ghostwhite"
    downBtn.style.color = "#000"
    setTimeout(()=>{
        downBtn.style.backgroundColor = ""
        downBtn.style.color = ""
    },100)
    const filename  = '廖前程的简历.pdf';
    const myResume = document.getElementsByClassName('myresume')
    showPersonInfo()

    // console.log(myResume[0].querySelector('.basic-name'));
    // const pdf = new jspdf.jsPDF('p', 'mm', 'a4')
    // for (let i = 0; i < myResume.length; i++) {
    //     const canvas = await html2canvas(myResume[i],{
    //         width: 730,
    //         // height: 277,
    //         imageTimeout:0
    //     })
    //     if(i>0) pdf.addPage()
    //     pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 190, 277)
    // }
    // pdf.save(filename)
    setTimeout(()=>{hidePersonInfo()},2000)
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
