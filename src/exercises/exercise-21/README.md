# Bài 21 Resource IDs in Routes

Danh sách users/dishes và trang chi tiết theo resource ID.

## Tài liệu đối chiếu

- Đề: `Exercise 21_Demo about Resource IDs in routes.docx`
- Slide: Slot 14 · Resource IDs

## Yêu cầu đã triển khai

- Users list và /users/:userId
- Dishes list và /dishes/:dishId
- Xử lý ID 0 và ID không tồn tại

## Thứ tự review

1. `Exercise21.js`: trang chỉ ghép các phần của bài.
2. data/users.js → components/UserList.js → components/UserDetails.js → components/DishList.js → components/DishDetails.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/21`.

Click user ID 2 để thấy John Smith : 30. Click dish ID 0 để thấy Uthappizza. Thử /users/999 và /dishes/abc để thấy thông báo thiếu dữ liệu.

## File trong module

- `Exercise21.js`
- `components/DishDetails.js`
- `components/DishList.js`
- `components/ResourceHome.js`
- `components/UserDetails.js`
- `components/UserList.js`
- `data/users.js`
