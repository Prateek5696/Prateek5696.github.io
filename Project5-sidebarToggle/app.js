const SidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const CloseBtn = document.querySelector(".close-btn");

SidebarToggle.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
});
CloseBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});
