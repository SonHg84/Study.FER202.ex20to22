# Bài 22 Optional Parameters và Link

Navbar Reactstrap, Link, optional user ID và query string.

## Tài liệu đối chiếu

- Đề: `Exercise 22_Demo about Optional parameters and Link.docx`
- Slide: Slot 14 · Optional Parameters và Link

## Yêu cầu đã triển khai

- Navbar Logo/Home/About/Contact/Profile bằng Reactstrap
- Route profile/:userId? và useParams
- Link điều hướng SPA, query tab qua useSearchParams
- Navbar có toggler responsive

## Thứ tự review

1. `Exercise22.js`: trang chỉ ghép các phần của bài.
2. components/CustomNavbar.js → components/Home.js → components/About.js → components/Contact.js → components/Profile.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/22`.

Thử Home/About/Contact, Profile không ID, Profile son và mary. Click tab activity và xem ?tab=activity. Thu nhỏ để kiểm tra toggler.

## File trong module

- `Exercise22.js`
- `components/About.js`
- `components/Contact.js`
- `components/CustomNavbar.js`
- `components/Home.js`
- `components/Profile.js`
