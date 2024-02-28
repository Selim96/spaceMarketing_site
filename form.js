document.addEventListener("DOMContentLoaded", function () {
    
    const allLinks = document.querySelectorAll('a');
    const arrOfLinks = [...allLinks];
    
    arrOfLinks.forEach(item => {
        item.href = "spaceMarketing_site#form"
    })
    

});