document.addEventListener("DOMContentLoaded", function () {
    
    const allLinks = document.querySelectorAll('a');
    const arrOfLinks = [...allLinks];

    const location = window.location.host;
    console.log(location)
    
    arrOfLinks.forEach(item => {
        item.href = `https://${location}#form`;
    })
    

});