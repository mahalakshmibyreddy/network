

(function(){
    function isOffline(){
        popup_heading.innerHTML="No internet connection";
        popup_paragraph.innerHTML="you're offline. check your connection.";
        internet_status_check.className ="offline";
    }
    function isOnline(){
        popup_heading.innerHTML="Back to Online";
        popup_paragraph.innerHTML="you're Online";
        internet_status_check.className ="online";
    }

    setTimeout(function() {
        internet_status_check.classList.remove("online");
    },3000)

     window.addEventListener('offline' , isOffline , false);
     window.addEventListener('online' , isOnline , false);
})();







