// const togglebtn = document.getElementById('togglebtn')

togglebtn.addEventListener('click' , () =>  {
    
    document.documentElement.classList.toggle('dark')

})

// Smooth scroll to top with delay
document.getElementById('goUpBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // تاخیر 300 میلی‌ثانیه قبل از شروع اسکرول
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // اسکرول نرم
        });
    }, 300);  // می‌توانید این عدد را برای تاخیر بیشتر یا کمتر تغییر دهید
});

function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}