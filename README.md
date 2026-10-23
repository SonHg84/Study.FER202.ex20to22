# FER202 · EX20–22

Một project Create React App, một `package.json`, chứa đúng các bài EX20 đến EX22. Chủ đề: React Router.

## Chạy project

Mở terminal trong thư mục `ex20to22`:

```powershell
npm install
npm start
```

Mở [http://localhost:3002](http://localhost:3002). Trang đầu tự mở EX20; chọn bài khác từ menu. Cổng được đặt trong `.env` để cả 3 project có thể chạy cùng lúc.

## Khởi tạo bằng Create React App

Các lệnh sau dùng để tạo project mới từ thư mục cha. Với project đã có sẵn, dùng các lệnh chạy ở trên.

```powershell
npx create-react-app ex20to22 --use-npm
cd ex20to22
npm install bootstrap react-router-dom@6 reactstrap
npm start
```

Cách khởi tạo theo [Create React App](https://create-react-app.dev/docs/getting-started/). `ex12to15` tiếp tục project CRA đã có; hai project còn lại được khởi tạo bằng lệnh `npx create-react-app`.

## Các bài trong package

| Bài  | Nội dung                    | URL                                          |
| ---- | --------------------------- | -------------------------------------------- |
| EX20 | Decoupling Routes           | [Mở bài](http://localhost:3002/exercises/20) |
| EX21 | Resource IDs in Routes      | [Mở bài](http://localhost:3002/exercises/21) |
| EX22 | Optional Parameters và Link | [Mở bài](http://localhost:3002/exercises/22) |

## Cấu trúc

```text
src/
  App.js                  # Điều phối các bài trong package
  app/                    # Menu, catalog và khung bài học
  exercises/
    exercise-20/        # Component và README của EX20
    exercise-21/        # Component và README của EX21
    exercise-22/        # Component và README của EX22
  shared/                 # Thành phần hoặc dữ liệu dùng trong package
public/images/            # Ảnh cục bộ
docs/REVIEW_GUIDE.md       # Kịch bản demo
```

Mỗi bài có component riêng, state và cleanup riêng. Chuyển bài sẽ reset state của bài trước. Project tự chứa source, ảnh và dependency, có thể sao chép riêng để chạy.

## Kiểm tra

```powershell
npm run build
npm run test:ci
npm run format:check
```

EX20 tách cấu hình trong `routes.js`. EX21 đọc ID bằng `useParams` và xử lý ID không tồn tại. EX22 dùng Reactstrap, `Link`, `profile/:userId?` và query string. Chỉ có một `BrowserRouter` trong `src/index.js`.

Đọc [hướng dẫn trình bày](docs/REVIEW_GUIDE.md) và README trong từng thư mục bài tập để đối chiếu đề Word và slide.
