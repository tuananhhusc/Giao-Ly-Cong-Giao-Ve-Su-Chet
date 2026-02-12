# Giáo Lý Công Giáo Về Sự Chết — Sacred Academia Report

<div align="center">

![Sacred Academia Banner](public/og-image.jpg)

*Một công trình nghiên cứu thần học chuyên sâu về Sự Chết, Cánh Chung và Ý Nghĩa Hiện Sinh của Đời Người trong truyền thống Công giáo, được trình bày dưới giao diện Web App hiện đại, mang đậm phong cách Học thuật Thánh thiêng (Sacred Scholasticism).*

[Xem Demo Trực Tiếp](https://tuananhhusc.github.io/Giao-Ly-Cong-Giao-Ve-Su-Chet/)

</div>

---

## 📖 Giới Thiệu

Dự án này là **Báo cáo Nghiên cứu Thần học** được chuyển thể thành ứng dụng web tương tác. Nội dung tập trung vào việc trình bày quan điểm của Giáo hội Công giáo về sự chết, không chỉ như một sự kiện sinh học, mà là một mầu nhiệm gắn liền với nhân học, thần học và cánh chung học.

Ứng dụng được thiết kế tối ưu cho trải nghiệm đọc sâu (deep reading), với các tính năng hỗ trợ nghiên cứu như **Chế độ Học giả (Scholar Mode)**, hệ thống trích dẫn tương tác, và giao diện lấy cảm hứng từ các bản thảo cổ điển.

## ✨ Tính Năng Nổi Bật

- **Sacred Scholasticism UI**: Giao diện mang màu sắc thánh thiêng, sử dụng font chữ *Playfair Display* và *Source Serif 4*, kết hợp với bảng màu Burgundy, Gold và Parchment.
- **Scholar Mode**: Chế độ tương tác dành cho người nghiên cứu, tự động làm nổi bật (highlight) các thuật ngữ thần học quan trọng và trích dẫn nguồn.
- **Interactive Citations**: Hệ thống trích dẫn thông minh, hiển thị nguồn gốc (Kinh Thánh, Giáo Lý, Văn kiện Huấn quyền) ngay khi di chuột hoặc nhấn vào.
- **Responsive Design**: Tối ưu hóa hoàn toàn cho cả máy tính và thiết bị di động, đảm bảo trải nghiệm đọc liền mạch.
- **Dark/Light Mode Ready**: Nền tảng kiến trúc hỗ trợ giao diện sáng/tối (hiện tại tối ưu cho giao diện giấy da cổ điển).

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Lucide React](https://lucide.dev/) (Icons)
- **Deployment**: GitHub Pages (Static Export)

## 🚀 Cài Đặt & Chạy Cục Bộ

Để chạy dự án trên máy cá nhân, bạn cần cài đặt [Node.js](https://nodejs.org/) (phiên bản 18+).

1.  **Clone repository**:
    ```bash
    git clone https://github.com/tuananhhusc/Giao-Ly-Cong-Giao-Ve-Su-Chet.git
    cd sacred-academia
    ```

2.  **Cài đặt dependencies**:
    ```bash
    npm install
    ```

3.  **Chạy server phát triển**:
    ```bash
    npm run dev
    ```

4.  Mở trình duyệt và truy cập `http://localhost:3000`.

## 📦 Hướng Dẫn Deploy lên GitHub Pages

Dự án đã được cấu hình sẵn để deploy tự động lên GitHub Pages thông qua GitHub Actions.

### Bước 1: Cấu hình Repository
1.  Vào **Settings** của repository trên GitHub.
2.  Chọn mục **Pages** ở menu bên trái.
3.  Tại phần **Build and deployment** > **Source**, chọn **GitHub Actions**.

### Bước 2: Push code
Mỗi khi bạn push code lên nhánh `main`, GitHub Action sẽ tự động chạy:
1.  Build dự án (`npm run build`).
2.  Xuất bản file tĩnh (`out` directory).
3.  Deploy lên GitHub Pages.

### Lưu ý về `next.config.ts`
File cấu hình đã được thiết lập `output: 'export'` và `basePath` tương ứng với tên repository để đảm bảo các link và asset hoạt động chính xác trên GitHub Pages.

---

## 📚 Tài Liệu Tham Khảo Chính

- *Sách Giáo Lý Hội Thánh Công Giáo* (CCC)
- *Thánh Kinh* (Bản dịch Nhóm Các Giờ Kinh Phụng Vụ)
- Thông điệp *Spe Salvi* (Đức Bênêđictô XVI)
- Thông điệp *Evangelium Vitae* (Thánh Gioan Phaolô II)
- Hiến chế *Gaudium et Spes* (Công đồng Vatican II)
- Các tác phẩm của Thánh Augustinô (*Confessiones*, *De Civitate Dei*) và Thánh Tôma Aquinô (*Summa Theologica*).

---

© 2024 Sacred Academia Project. *Ad Majorem Dei Gloriam.*
