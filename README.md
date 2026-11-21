# Website thiệp tình yêu 💗

## Chạy trên máy tính
1. Giải nén thư mục.
2. Mở thư mục `thiep-tinh-yeu` bằng VS Code.
3. Cài tiện ích **Live Server** trong Extensions.
4. Nhấp chuột phải vào `index.html` → **Open with Live Server**.

Bạn cũng có thể mở trực tiếp `index.html` trên trình duyệt, nhưng Live Server tiện hơn khi chỉnh sửa.

## Cá nhân hóa
- Mở `script.js`, sửa `const recipientName = 'em';` thành tên người nhận.
- Mở `index.html`, sửa các đoạn văn trong `<div class="message" id="message">`.
- Thay ảnh trong ba thẻ `<img>` bằng ảnh của hai bạn. Có thể đặt ảnh vào thư mục `assets` rồi dùng đường dẫn như `assets/anh-1.jpg`.
- Thay nhạc bằng file MP3 của bạn, đặt tên `music.mp3` và lưu trong thư mục `assets`. Trình duyệt thường yêu cầu người dùng nhấn nút mới cho phát nhạc.

## Đưa lên GitHub Pages
1. Tạo repository mới trên GitHub, ví dụ `thiep-tinh-yeu`.
2. Upload `index.html`, `style.css`, `script.js`, `README.md` và thư mục `assets` (nếu có) lên repository.
3. Vào **Settings → Pages**.
4. Trong **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/ (root)`, nhấn **Save**.
6. Đợi GitHub Pages triển khai. Đường link thường có dạng:
   `https://TEN-TAI-KHOAN.github.io/thiep-tinh-yeu/`

Lưu ý: tên file và đường dẫn phân biệt chữ hoa/chữ thường khi chạy trên GitHub Pages.
