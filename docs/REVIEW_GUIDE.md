# Hướng dẫn trình bày EX20–22

Chạy `npm start`, chọn bài trong menu rồi demo và đọc component tương ứng.

## Bài 20 Decoupling Routes

Tách cấu hình route khỏi component và navigation.

Click tất cả menu, so sánh Users không ID và User 42. Reload URL con rồi thử Back/Forward. App chỉ có một BrowserRouter trong index.js.

Đọc: [README bài 20](../src/exercises/exercise-20/README.md).

## Bài 21 Resource IDs in Routes

Danh sách users/dishes và trang chi tiết theo resource ID.

Click user ID 2 để thấy John Smith : 30. Click dish ID 0 để thấy Uthappizza. Thử /users/999 và /dishes/abc để thấy thông báo thiếu dữ liệu.

Đọc: [README bài 21](../src/exercises/exercise-21/README.md).

## Bài 22 Optional Parameters và Link

Navbar Reactstrap, Link, optional user ID và query string.

Thử Home/About/Contact, Profile không ID, Profile son và mary. Click tab activity và xem ?tab=activity. Thu nhỏ để kiểm tra toggler.

Đọc: [README bài 22](../src/exercises/exercise-22/README.md).
