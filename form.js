document.addEventListener("DOMContentLoaded", function () {
    
    const allLinks = document.querySelectorAll('a');
    const arrOfLinks = [...allLinks];

    const location = window.location.pathname;
    console.log(location)
    
    arrOfLinks.forEach(item => {
        item.href = `${location}#form`;
    })
    

});