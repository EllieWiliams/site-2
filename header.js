<script>
    let header = document.querySelector(".navbar")
    let logo = document.querySelector(".logo")
    window.onscroll = function(){
        
if(window.scrollY > 100){
    header.style.background = "#5B5B65";
    header.style.padding = "16px 120px";

}
else{
    header.style.background = "#212134";
    header.style.padding = "40px 120px"; 
    }
    }
</script>