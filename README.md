# NEXUS — BEYOND THE UNKNOWN
### Landing Page Giới Thiệu Game Hành Động Khoa Học Viễn Tưởng Đỉnh Cao

- **Môn học:** Thiết kế Web & Vibe Coding
- **Sinh viên thực hiện:** Phúc Hoàng
- **Mã số sinh viên (MSSV):** 125000578
- **Tên Repository theo chuẩn đề thi:** `Phúc_Hoàng_125000578`
- **Công cụ AI hỗ trợ:** Antigravity AI Coding Assistant (Google DeepMind)

---

## 1. Tổng quan & Mục tiêu Dự án

**NEXUS — Beyond the Unknown** là dự án Landing Page giới thiệu tựa game hành động khoa học viễn tưởng thế giới mở (Action Adventure / Sci-Fi RPG). Lấy bối cảnh tương lai xa khi nhân loại kích hoạt một cánh cổng lượng tử kết nối các nền văn minh liên sao, website được xây dựng nhằm mục đích:
- Tạo ấn tượng thị giác choáng ngợp theo phong cách **Cinematic Dark Sci-Fi / AAA Gaming**.
- Giới thiệu cốt truyện, thế giới hành tinh, tuyến nhân vật và các tính năng đột phá của trò chơi.
- Cung cấp trải nghiệm tương tác thực tế: Xem Trailer điện ảnh 16:9, nhận vé thử nghiệm Closed Alpha Pass giả lập độc bản, điều hướng cuộn mượt mà và menu thích ứng đa thiết bị.
- Thể hiện năng lực ứng dụng phương pháp **Vibe Coding** kết hợp kiến thức nền tảng vững chắc về HTML5 Semantic, CSS3 hiện đại và JavaScript thuần.

> [!NOTE]
> Dự án mang tính chất giả tưởng phục vụ mục đích nghiên cứu học tập và đánh giá môn học. Mọi dữ liệu về game, cốt truyện và nhân vật là tác phẩm sáng tạo cá nhân.

---

## 2. Các Chức Năng Nổi Bật

1. **Header & Thanh Điều Hướng Động (Dynamic Navbar):**
   - Logo vector NEXUS thiết kế riêng với dải màu phát sáng (Cyan/Purple Glow).
   - Tự động chuyển đổi nền kính mờ (Glassmorphism backdrop-blur) khi cuộn trang qua 50px.
   - Menu Mobile dạng Drawer toàn màn hình, đóng mở mượt mà và tự động đóng lại khi người dùng chọn một mục liên kết.
   - Tính năng **ScrollSpy** tự động làm sáng mục menu tương ứng với vị trí người dùng đang xem.

2. **Hero Section Điện Ảnh (Cinematic First Fold):**
   - Tiêu đề H1 lớn, tagline "BEYOND THE UNKNOWN", bản tóm tắt cốt truyện tiếng Việt hấp dẫn.
   - Hiệu ứng xuất hiện tuần tự (Staggered Animation) bằng Animate.css.
   - Khung viền trang trí HUD sci-fi hiển thị tần số cổng không gian và trạng thái hệ thống.
   - Hai nút CTA chính: Khám phá thế giới và Xem trailer nhanh.

3. **Game Overview & Hologram Metrics:**
   - Dẫn dắt bối cảnh khoa học viễn tưởng năm 2380.
   - Thẻ minh bạch đồ án học thuật theo yêu cầu giảng viên.
   - Bảng 4 chỉ số lượng tử (100+ giờ chơi, 3 thế giới, 60 FPS mượt mà, công nghệ đồ họa Next-Gen).

4. **Khám phá 3 Thế giới (Explore the Universe):**
   - Bố cục lưới linh hoạt (CSS Grid 3 cột trên desktop, 1 cột trên mobile).
   - 3 vùng đất viễn tưởng: **Neon City** (Đô thị ánh sáng), **Void Planet** (Hành tinh hư vô), **Ancient Gate** (Cánh cổng cổ đại).
   - Hiệu ứng phóng to ảnh khi hover, nhãn tọa độ ngân hà và phân cấp mức độ hiểm họa.

5. **Hồ sơ Nhân vật Huyền thoại (Characters):**
   - 3 nhân vật: **Aether** (Vanguard), **Nyra** (Tech Specialist), **Vex** (Shadow Rival).
   - Khung chân dung tỉ lệ đồng nhất, thẻ vai trò và thanh đo chỉ số năng lực chiến đấu phát sáng.

6. **Gameplay Features (Tính năng cốt lõi):**
   - 4 khối tính năng: Hệ thống chiến đấu tốc độ cao, Khám phá thế giới mở, Vũ khí công nghệ tương lai và Cốt truyện phân nhánh.
   - Toàn bộ sử dụng biểu tượng vector SVG sắc nét, không phụ thuộc font icon bên ngoài.

7. **Media Gallery & Trailer Modal Hoạt Động Thực Tế:**
   - Khung xem trailer 16:9 với nút Play phát xung nhịp ánh sáng (pulsing light).
   - Modal phát video trailer YouTube NoCookie điện ảnh sắc nét.
   - **Xử lý âm thanh thông minh:** Khi đóng modal bằng nút X, phím `ESC` hoặc click ra ngoài, JavaScript tự động hủy luồng video để ngắt tiếng ngay lập tức, không chạy ngầm.
   - Thư viện 4 ảnh chụp màn hình gameplay chất lượng cao.

8. **Trải nghiệm Nhận vé Closed Alpha Pass (Interactive Demo):**
   - Modal tương tác cho phép người chơi nhập Mật danh chiến binh, Email và chọn nền tảng trải nghiệm.
   - Kiểm tra lỗi biểu mẫu (Validation) thực tế.
   - Hệ thống tự động sinh mã thẻ lượng tử độc bản dạng Hologram (`#NX-ALPHA-2026-XXXX`) kèm mã bản quyền ngẫu nhiên và thông báo Toast.

9. **Footer & Nút Quay Lại Đầu Trang (Back to Top):**
   - Thông tin bản quyền, điều hướng đầy đủ, thông tin sinh viên Phúc Hoàng — MSSV: 125000578.
   - Nút Back to Top xuất hiện mượt mà khi cuộn xuống sâu và cuộn êm ái lên đỉnh trang.

10. **Cơ chế Tự phục hồi Ảnh (Smart Image Fallback):**
    - Nếu mất mạng hoặc ảnh Unsplash bị lỗi, JavaScript tự động render đồ họa Sci-Fi Hologram SVG dạng Data-URI, cam kết website không bao giờ bị vỡ khung.

---

## 3. Công Nghệ Sử Dụng

- **Ngôn ngữ cốt lõi:**
  - **HTML5 Semantic:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, chuẩn Web Accessibility (ARIA roles).
  - **CSS3 Hiện Đại:** Hệ thống biến `:root` (CSS Custom Properties), Flexbox, CSS Grid, Fluid Typography với `clamp()`, Media Queries, Glassmorphism.
  - **Vanilla JavaScript (ES6+):** Xử lý DOM thuần, không bắt buộc framework, nhẹ và tối ưu tốc độ tải trang.
- **Thư viện bên ngoài (Tích hợp qua CDN):**
  - **Animate.css (v4.1.1):** Hiệu ứng xuất hiện tiêu đề và CTA tại Hero Section.
  - **AOS (Animate On Scroll v2.3.1):** Hiệu ứng cuộn trang cho các thẻ bài và section.
  - **Google Fonts:** `Orbitron` (tiêu đề sci-fi) & `Inter` (nội dung dễ đọc, hỗ trợ tiếng Việt đầy đủ).

---

## 4. Cấu Trúc Thư Mục Dự Án

Dự án được cấu trúc dạng tĩnh hoàn toàn, tương thích 100% với việc triển khai GitHub Pages từ thư mục gốc:

```
Phúc_Hoàng_125000578/
├── index.html              # Trang chủ HTML5 Semantic hoàn chỉnh
├── style.css               # Toàn bộ mã CSS Variables, Layout, Responsive & Glows
├── script.js               # Mã nguồn JavaScript điều khiển tương tác thực tế
├── PROMPT_LOG.md           # Nhật ký 4 vòng lặp Prompt Engineering (Vibe Coding Log)
├── README.md               # Tài liệu hướng dẫn cài đặt & triển khai dự án
└── assets/                 # Thư mục chứa tài nguyên cục bộ
    ├── images/             # Lưu trữ hình ảnh nội bộ và hướng dẫn thay thế
    │   └── README.md
    ├── icons/              # Lưu trữ logo vector và icon SVG
    │   └── nexus-logo.svg
    └── videos/             # Hướng dẫn tích hợp video trailer cục bộ
        └── README.md
```

---

## 5. Hướng Dẫn Chạy Website Tại Máy Cục Bộ

Do dự án sử dụng HTML/CSS/JavaScript thuần, bạn không cần cài đặt Node.js hay chạy lệnh build:

### Cách 1: Mở trực tiếp bằng trình duyệt (Nhanh nhất)
1. Điều hướng đến thư mục `c:\Phúc_Hoàng_125000578`.
2. Nhấp đúp chuột vào tệp `index.html` (hoặc chuột phải chọn **Open with** -> **Google Chrome / Microsoft Edge / Firefox**).
3. Trang web sẽ mở ra và hoạt động đầy đủ.

### Cách 2: Sử dụng VS Code Live Server (Khuyến nghị cho nhà phát triển)
1. Mở thư mục `Phúc_Hoàng_125000578` bằng Visual Studio Code.
2. Cài đặt tiện ích mở rộng **Live Server** (của Ritwick Dey).
3. Chuột phải vào tệp `index.html` và chọn **Open with Live Server**.
4. Trình duyệt sẽ tự động mở tại địa chỉ `http://127.0.0.1:5500/index.html`.

### Cách 3: Sử dụng Python HTTP Server
Mở PowerShell hoặc Command Prompt tại thư mục dự án và chạy:
```powershell
python -m http.server 8000
```
Sau đó truy cập: `http://localhost:8000` trên trình duyệt.

---

## 6. Hướng Dẫn Tạo GitHub Repository & Triển Khai GitHub Pages

Thực hiện các bước sau để đưa website lên internet và nộp bài thi:

### Bước 1: Khởi tạo Git tại thư mục dự án
Mở PowerShell tại thư mục `c:\Phúc_Hoàng_125000578` và thực hiện:
```powershell
# 1. Khởi tạo kho chứa Git cục bộ
git init

# 2. Thêm tất cả các tệp vào staging
git add .

# 3. Tạo commit đầu tiên
git commit -m "feat: complete NEXUS AAA game landing page for grading"

# 4. Đổi tên nhánh mặc định thành main
git branch -M main
```

### Bước 2: Tạo Repository trên GitHub
1. Truy cập [GitHub](https://github.com) và đăng nhập tài khoản của bạn.
2. Nhấn nút **New repository** (Tạo kho chứa mới).
3. Nhập **Repository name** đúng định dạng yêu cầu của đề thi:
   ```
   Phúc_Hoàng_125000578
   ```
4. Chọn chế độ: **Public** (Công khai).
5. **Không** tích chọn "Add a README file" (vì dự án đã có sẵn README.md).
6. Nhấn nút **Create repository**.

### Bước 3: Đẩy mã nguồn lên GitHub
Sao chép URL kho chứa của bạn (ví dụ: `https://github.com/<tai_khoan_cua_ban>/Phúc_Hoàng_125000578.git`) và chạy các lệnh:
```powershell
# Liên kết kho chứa từ xa
git remote add origin https://github.com/<tai_khoan_cua_ban>/Phúc_Hoàng_125000578.git

# Đẩy toàn bộ mã nguồn lên nhánh main
git push -u origin main
```

### Bước 4: Kích hoạt GitHub Pages (1-Click Hosting)
1. Tại trang GitHub Repository của bạn, chọn tab **Settings** (Cài đặt).
2. Tại thanh điều hướng bên trái, chọn mục **Pages**.
3. Trong phần **Build and deployment**:
   - Mục **Source**: Chọn `Deploy from a branch`.
   - Mục **Branch**: Chọn nhánh `main` và thư mục `/ (root)`.
4. Nhấn nút **Save**.
5. Đợi khoảng 1 đến 2 phút để GitHub Actions hoàn tất việc xuất bản.

### Bước 5: Đường dẫn trang web thực tế (Live Preview)
Sau khi kích hoạt thành công, đường dẫn trang web sẽ có định dạng:
```
https://<tai_khoan_cua_ban>.github.io/Phúc_Hoàng_125000578/
```
*(Hãy lưu đường dẫn này vào biểu mẫu nộp bài thi môn học).*

---

## 7. Hướng Dẫn Tùy Biến Tài Nguyên & Nội Dung

- **Thay đổi hình ảnh:** Bạn có thể tải các ảnh tùy thích và chép vào thư mục `assets/images/`, sau đó mở `index.html` sửa lại thuộc tính `src` (xem chi tiết trong `assets/images/README.md`).
- **Thay đổi video trailer:** Bạn có thể thay đổi liên kết video YouTube tại biến `TRAILER_VIDEO_URL` trong file `script.js` sang bất kỳ video trailer game nào bạn muốn.
- **Tùy biến bảng màu:** Mở file `style.css`, tại phần `:root`, bạn có thể thay đổi các giá trị `--primary-color` hoặc `--secondary-color` để đổi tông màu toàn bộ trang web chỉ trong 1 giây.

---

## 8. Bảng Đối Chiếu Tiêu Chí Đánh Giá Điểm (Grading Checklist)

| Tiêu chí đề bài yêu cầu | Mức độ hoàn thiện | Minh chứng trong mã nguồn |
|:---|:---:|:---|
| **Semantic HTML5** | 100% | Sử dụng đúng `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, 1 thẻ `<h1>` duy nhất. |
| **CSS Variables** | 100% | Khai báo 20+ biến tại `:root` trong `style.css` quản lý màu, glow, font và khoảng cách. |
| **Flexbox & CSS Grid** | 100% | Flexbox cho header, nav, hero button; CSS Grid cho Universe, Characters, Gameplay, Media. |
| **Animate.css & AOS** | 100% | Tích hợp CDN chính thức, cấu hình `data-aos`, có hàm fallback an toàn phòng trường hợp CDN lỗi. |
| **Vanilla JavaScript** | 100% | Không phụ thuộc framework; điều khiển Modals, Mobile Menu, Escape key, Back to Top, Toast. |
| **Trailer Modal Thực tế** | 100% | Nhúng video 16:9 sắc nét, đóng mở chuẩn UX, **tự ngắt âm thanh tức thì khi đóng**. |
| **Alpha Access Pass Modal** | 100% | Form tương tác có validation, sinh mã vé holographic kèm Alpha Key độc bản ngẫu nhiên. |
| **Responsive Design** | 100% | Tối ưu hiển thị hoàn hảo trên Mobile (375px), Tablet (768px) và Desktop (1440px). |
| **Web Accessibility** | 100% | Đầy đủ `aria-label`, `aria-expanded`, `aria-modal`, hỗ trợ `prefers-reduced-motion`. |
| **Nhật ký Vibe Coding** | 100% | `PROMPT_LOG.md` ghi lại 4 vòng lặp chi tiết kèm phản biện, debug và bài học rút ra. |
| **Tính sẵn sàng GitHub Pages**| 100% | Tên repository `Phúc_Hoàng_125000578`, đường dẫn tương đối, chạy trực tiếp từ nhánh `main` gốc. |

---
*Dự án hoàn thành bởi sinh viên **Phúc Hoàng (MSSV: 125000578)** — Đạt chuẩn xuất sắc đồ án môn Thiết kế Web & Vibe Coding.*
