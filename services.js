document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách các nút submenu
    const submenuItems = document.querySelectorAll(".submenu li");
  
    // Xử lý sự kiện click cho từng nút submenu
    submenuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        // Lấy giá trị data-category của nút
        const category = this.dataset.category;
  
        // Ẩn tất cả các sản phẩm
        const allProducts = document.querySelectorAll(".show");
        allProducts.forEach(function(product) {
          product.style.display = "none";
        });
  
        // Hiển thị sản phẩm tương ứng với danh mục được chọn
        const selectedProducts = document.getElementById(`${category}-products`);
        if (selectedProducts) {
          selectedProducts.style.display = "block";
        }
      });
    });
  });
  