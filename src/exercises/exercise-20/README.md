# Bài 20 Decoupling Routes

Tách cấu hình route khỏi component và navigation.

## Tài liệu đối chiếu

- Đề: `Exercise 20_Demo about Decoupling route declarations.docx`
- Slide: Slot 14 · Routes

## Yêu cầu đã triển khai

- routes.js chứa cấu hình và renderRoutes
- Home/Products/About/Contact ở component riêng
- users/:userId? với useParams
- Fallback cho URL không tồn tại

## Thứ tự review

1. `Exercise20.js`: trang chỉ ghép các phần của bài.
2. routes.js → components/NavigationMenu.js → components/UserProfile.js → các page trong components.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/20`.

Click tất cả menu, so sánh Users không ID và User 42. Reload URL con rồi thử Back/Forward. App chỉ có một BrowserRouter trong index.js.

## File trong module

- `Exercise20.js`
- `components/AboutPage.js`
- `components/ContactPage.js`
- `components/HomePage.js`
- `components/NavigationMenu.js`
- `components/ProductsPage.js`
- `components/UserProfile.js`
- `routes.js`
