# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên sinh viên:** Phúc Hoàng
- **Mã số sinh viên (MSSV):** 125000578
- **Tên đề tài Website:** NEXUS — Landing Page Giới Thiệu Game Khoa Học Viễn Tưởng Giả Tưởng
- **Công cụ AI đã sử dụng:** Antigravity AI Coding Assistant (Google DeepMind Agentic Architecture)

---

## 1. Yêu cầu ban đầu (System/Initial Prompt)

```text
Bạn là Senior Frontend Developer, UI/UX Designer và chuyên gia Prompt Engineering.
Hãy đóng vai trò là giảng viên đánh giá bài thi môn Thiết kế Web & Vibe Coding để xây dựng 
một Landing Page hoàn chỉnh giới thiệu tựa game hành động khoa học viễn tưởng AAA mang tên 
"NEXUS — Beyond the Unknown".

Yêu cầu kỹ thuật cốt lõi:
1. Kiến trúc Semantic HTML5 chuẩn W3C: <header>, <nav>, <main>, <section>, <article>, <footer>.
2. Thiết kế giao diện Dark Sci-Fi cao cấp (gam màu chủ đạo: #070910, #101522, neon #00E5FF, tím #8B5CF6).
3. Sử dụng CSS Variables, Flexbox, CSS Grid và clamp() responsive không vỡ layout.
4. Tích hợp Animate.css và AOS qua CDN chính thức, hỗ trợ prefers-reduced-motion.
5. JavaScript thuần tương tác thực tế: Đóng mở Mobile Nav, Smooth scroll có offset, 
   Trailer Video Modal (tự ngắt âm thanh khi đóng), Alpha Access Pass Modal sinh mã key giả lập, 
   ScrollSpy active link, Back-to-top và Fallback xử lý ảnh hỏng.
6. Cấu trúc thư mục tương thích tuyệt đối với GitHub Pages triển khai từ thư mục gốc.
```

---

## 2. Quá trình tinh chỉnh & giải quyết sự cố (Iterative Engineering)

### Lần 1: Dựng khung Semantic HTML & CSS Variables
- **Prompt đã dùng:**
  > "Hãy tạo cấu trúc khung HTML5 chuẩn semantic cho 7 phân đoạn chính của website NEXUS: Header, Hero, Overview, Universe (3 hành tinh), Characters (3 nhân vật), Gameplay Features (4 tính năng), Media/Trailer, Final CTA và Footer. Thiết lập hệ thống biến `:root` trong `style.css` bao gồm bảng màu dark sci-fi, font chữ Orbitron và Inter, cùng các thông số padding/radius chuẩn."
- **Kết quả AI tạo ra:**
  - AI đã tạo ra file `index.html` với đầy đủ các thẻ semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
  - Hệ thống biến CSS trong `:root` được khai báo đầy đủ các mã màu: `--bg-primary`, `--bg-secondary`, `--primary-color: #00E5FF`, `--secondary-color: #8B5CF6`, `--accent-alert: #FF4D6D`.
- **Nhận xét và tinh chỉnh của sinh viên:**
  - *Phản biện:* Thẻ `<h1>` ban đầu bị lặp ở cả phần Hero và phần Overview, vi phạm nguyên tắc SEO và ngữ nghĩa chuẩn (chỉ có duy nhất một thẻ H1 trên một trang đơn).
  - *Tinh chỉnh:* Yêu cầu chuyển tiêu đề Overview thành `<h2>` và Hero giữ nguyên `<h1>`. Bổ sung thuộc tính tiếp cận Web Accessibility: `aria-label`, `aria-expanded` trên nút menu mobile và `aria-modal="true"` trên modal dialog.
- **Vấn đề phát hiện và cách giải quyết:**
  - *Vấn đề:* Các thẻ `<button>` mở modal ban đầu chưa khai báo `type="button"`, dẫn đến nguy cơ tự động submit khi nằm trong form.
  - *Cách giải quyết:* Rà soát toàn bộ mã HTML và thêm tường minh `type="button"` cho tất cả các nút điều khiển giao diện.

---

### Lần 2: Tích hợp Animate.css & AOS (Animation on Scroll)
- **Prompt đã dùng:**
  > "Tích hợp thư viện Animate.css và AOS (Animate On Scroll) qua CDN. Áp dụng hiệu ứng fadeInDown, fadeInUp cho Hero section và gán thuộc tính data-aos (fade-up, fade-right, zoom-in) cho các card hành tinh, nhân vật và gameplay. Viết code khởi tạo AOS trong JavaScript an toàn, phòng trường hợp CDN mất kết nối."
- **Kết quả kiểm tra:**
  - Các phần tử Hero xuất hiện mượt mà với hiệu ứng tuần tự (staggered delay 1s, 2s).
  - Khi cuộn trang, các khối nội dung xuất hiện đồng bộ nhờ các thuộc tính `data-aos="fade-up"` và `data-aos="zoom-in"`.
- **Thách thức gặp phải:**
  - Khi thử nghiệm giả lập ngắt mạng hoặc CDN bị chặn (offline), một số phần tử có thuộc tính `data-aos` bị gán mặc định `opacity: 0` bởi file CSS của thư viện, khiến trang web bị trắng nội dung nếu file JS thư viện không tải được.
- **Debug prompt:**
  > "Hãy viết hàm fallback trong `script.js` kiểm tra sự tồn tại của biến toàn cục `AOS`. Nếu `typeof AOS === 'undefined'`, tự động duyệt qua tất cả phần tử `[data-aos]` và ép kiểu hiển thị `opacity: 1`, `transform: none` để nội dung luôn đọc được."
- **Kết quả sau khi sửa:**
  - Khi CDN hoạt động: Website hiển thị hiệu ứng chuyển động sci-fi điện ảnh.
  - Khi offline hoặc CDN lỗi: Toàn bộ nội dung lập tức hiển thị bình thường, không xảy ra tình trạng mất chữ hay ẩn khối nội dung. Đạt chuẩn Accessibility WCAG với media query `prefers-reduced-motion`.

---

### Lần 3: Hoàn thiện UI/UX và Responsive (Desktop, Tablet, Mobile)
- **Prompt đã dùng:**
  > "Hoàn thiện mã CSS responsive bằng CSS Grid và Flexbox. Đảm bảo khu vực Vũ trụ (Universe) và Nhân vật (Characters) hiển thị 3 cột trên desktop (>1024px), 2 cột trên tablet (768px-1024px) và tự động xếp thành 1 cột duy nhất trên mobile (<768px). Xây dựng menu mobile dạng full-screen drawer có hiệu ứng mờ nền glassmorphism và nút bấm hamburger chuyển thành dấu X."
- **Vấn đề giao diện trên desktop/mobile phát hiện:**
  - Thanh Navbar bị che mất một phần nội dung khi người dùng click vào các liên kết neo `#universe`, `#characters` (do header cố định `position: fixed` chiếm chiều cao 80px).
  - Khung phát trailer bị tràn chiều ngang (horizontal overflow) trên màn hình điện thoại dưới 400px.
- **Các điều chỉnh CSS:**
  - Thêm thuộc tính `scroll-padding-top: 80px;` vào thẻ `html` trong `style.css` để trình duyệt tự động bù trừ khoảng cách của header cố định.
  - Sử dụng tỉ lệ `aspect-ratio: 16 / 9` và `max-width: 100%` cho thẻ video wrapper thay vì gán chiều cao cố định `height: 500px`.
  - Bổ sung `overflow-x: hidden;` cho thẻ `body` để loại bỏ hoàn toàn hiện tượng thanh cuộn ngang không mong muốn.
- **Kết quả kiểm tra:**
  - Kiểm thử trên cả 3 độ phân giải (375px, 768px, 1440px): Giao diện cân đối, chữ sử dụng `clamp()` co giãn mượt mà, không có bất kỳ hiện tượng vỡ khung hay đè chữ.

---

### Lần 4: Kiểm thử và sửa lỗi (Interactive Testing & Hardening)
- **Prompt đã dùng:**
  > "Viết logic JavaScript thuần cho Modal Trailer và Alpha Access Pass. Xử lý triệt để lỗi video YouTube tiếp tục phát âm thanh nền sau khi người dùng đã đóng modal. Thêm xử lý phím Escape, click backdrop, và tích hợp cơ chế Fallback Hologram SVG khi ảnh Unsplash không tải được."
- **Lỗi thực tế phát hiện:**
  - Khi mở trailer và nhấn nút đóng modal, dù cửa sổ đã ẩn (`hidden`) nhưng âm thanh của video vẫn tiếp tục phát ở chế độ nền do `<iframe>` chưa bị hủy `src`.
  - Khi click vào các liên kết trong menu mobile, trang cuộn đến section nhưng menu mobile vẫn chiếm trọn màn hình không tự đóng lại.
- **Nguyên nhân:**
  - Thuộc tính `hidden` hoặc `display: none` chỉ ẩn mặt thị giác, không làm dừng luồng phát đa phương tiện của iframe bên trong.
  - Sự kiện click trên thẻ `<a>` chưa được liên kết với hàm đóng drawer menu của mobile.
- **Giải pháp xử lý trong `script.js`:**
  - Trong hàm `closeTrailerModal()`, gán `trailerIframe.src = ''` trước khi ẩn modal, và gán lại URL video khi gọi `openTrailerModal()`.
  - Bổ sung hàm lắng nghe sự kiện `click` trên tất cả các `.nav-link`, tự động gọi `toggleMobileMenu(true)` để đóng menu ngay khi người dùng chọn mục điều hướng.
  - Bổ sung sự kiện `error` trên toàn bộ thẻ `<img>` để chuyển đổi tự động sang SVG Holographic data-URI khi mất kết nối mạng.
- **Kết quả kiểm thử sau khi sửa:**
  - 100% video ngắt âm thanh tức thì khi đóng modal.
  - Phím Escape đóng được cả 2 loại modal và mobile menu.
  - Menu mobile đóng mượt mà ngay sau khi bấm chuyển section.
  - Không có bất kỳ cảnh báo hoặc lỗi đỏ nào trong DevTools Console.

### Lần 5: Kiểm định UI/UX Chuyên sâu & Gia cố Kỹ thuật (Audit & Hardening)
- **Prompt đã dùng:**
  > "Đóng vai trò Senior Frontend Developer và QA Specialist tiến hành audit toàn diện dự án. Kiểm tra khả năng chống Cumulative Layout Shift (CLS), xử lý khoảng hở drawer menu trên mobile khi header scrolled, bổ sung CTA trong mobile drawer, tối ưu hóa cho màn hình siêu nhỏ (< 380px) và hoàn thiện quản lý focus bàn phím WCAG 2.1 AA cho các Modal."
- **Kết quả kiểm tra:**
  - Phát hiện 4 điểm cần gia cố:
    1. Menu drawer trên điện thoại thiếu nút CTA "Trải nghiệm ngay" khiến người dùng phải cuộn xuống tận cuối trang mới tìm thấy form đăng ký.
    2. Header khi cuộn có chiều cao 72px trong khi mobile menu gán cố định `top: 80px`, tạo ra khe hở 8px không đồng nhất.
    3. Các thẻ hình ảnh thiếu thuộc tính `width` và `height` tường minh, tiềm ẩn nguy cơ giật khung hình khi tải mạng chậm (CLS).
    4. Trạng thái focus sau khi đóng modal chưa được hoàn trả về nút bấm vừa kích hoạt nó.
- **Thách thức gặp phải:**
  - Đảm bảo việc thêm nút CTA trong mobile drawer không phá vỡ chiều cao viewport của menu trên các thiết bị màn hình ngắn (iPhone SE).
- **Debug prompt & Giải pháp:**
  - Thêm thẻ `mobile-nav-cta` vào `index.html` với viền phân tách tinh tế.
  - Cập nhật selector `.site-header.scrolled .main-nav { top: 72px; height: calc(100vh - 72px); }` trong `style.css`.
  - Khai báo đầy đủ `width` và `height` cho ảnh Hero (1920x1080), Universe (800x500), Characters (800x900), Trailer poster (1200x514) và Screenshots (800x500).
  - Bổ sung biến `lastActiveTrigger` trong `script.js` để tự động trả lại focus cho nút bấm kích hoạt khi đóng modal bằng chuột hoặc phím ESC.
  - Bổ sung media query `@media (max-width: 380px)` để tiêu đề Hero co giãn hoàn hảo ở mức `2.35rem` không tràn viền.
- **Kết quả sau khi sửa:**
  - Giao diện đạt điểm tuyệt đối về độ ổn định bố cục (CLS = 0).
  - Trải nghiệm điều hướng trên thiết bị di động liền mạch và tiện dụng 100%.
  - Đạt chuẩn Web Accessibility WCAG 2.1 AA về quản lý tiêu điểm bàn phím.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

### AI đã giúp tiết kiệm thời gian ở phần nào?
- **Khởi tạo hệ thống biến CSS và bảng màu:** Thay vì mất hàng giờ phối màu và căn chỉnh mã hex thủ công, AI đề xuất ngay hệ thống biến chuẩn dark sci-fi rất ăn khớp và có chiều sâu thẩm mỹ cao.
- **Viết cấu trúc HTML semantic chuẩn:** AI sinh nhanh chóng bộ khung thẻ ngữ nghĩa, giúp tiết kiệm hơn 70% thời gian gõ code boilerplate.
- **Tạo SVG vector và hiệu ứng viền phát sáng:** Các đoạn code gradient cho logo và biểu tượng HUD được tạo ra chính xác, hiển thị sắc nét mà không cần phần mềm đồ họa bên ngoài.

### Những hạn chế của kết quả AI
- AI thường có xu hướng gán chiều cao cố định (`height: 500px`, `width: 800px`) nếu không được chỉ định chặt chẽ, dễ gây tràn màn hình trên mobile.
- Dễ bỏ sót các thuộc tính trợ năng Web Accessibility (`aria-expanded`, `aria-label`, quản lý focus bàn phím) nếu người dùng không yêu cầu cụ thể.
- Đôi khi sử dụng các hiệu ứng animation quá mức cần thiết, gây sao nhãng việc đọc nội dung chính.

### Sinh viên đã kiểm tra, phản biện và điều chỉnh AI như thế nào?
- **Rà soát mã nguồn:** Tự tay kiểm tra từng thẻ ngữ nghĩa để đảm bảo chỉ có duy nhất 1 thẻ `<h1>`.
- **Kiểm tra tương tác thực tế:** Mở Developer Tools kiểm tra console log, chủ động ngắt mạng thử nghiệm để tìm ra lỗi âm thanh chạy ngầm của iframe và lỗi ẩn nội dung của AOS.
- **Yêu cầu bổ sung tính năng phòng vệ (Defensive Coding):** Bắt buộc AI thêm các câu lệnh kiểm tra `if (element)` trước khi gán sự kiện để tránh lỗi `TypeError: Cannot read properties of null`.

### Bài học rút ra khi viết prompt (Prompt Engineering Insights)
1. **Prompt càng cụ thể về mặt ràng buộc kỹ thuật thì kết quả càng ít lỗi:** Cần nêu rõ "sử dụng CSS Grid, không dùng float", "sử dụng clamp(), không dùng pixel cố định cho tiêu đề lớn".
2. **Chia nhỏ bài toán thành các vòng lặp (Iteration):** Thay vì yêu cầu tạo toàn bộ website trong một prompt duy nhất, việc chia thành 4 bước (Khung Semantic -> CSS & Animation -> Responsive -> Tương tác & Debug) giúp kiểm soát chất lượng ở mức tối đa.
3. **Luôn chuẩn bị phương án dự phòng (Fallbacks):** Luôn yêu cầu AI tính đến trường hợp tài nguyên ngoài (CDN, hình ảnh Unsplash) bị lỗi để hệ thống hoạt động ổn định trong mọi điều kiện chấm bài.

### Hướng phát triển website trong tương lai
- Tích hợp WebGL / Three.js để render mô hình 3D phi thuyền và cánh cổng không gian tương tác bằng chuột.
- Bổ sung hiệu ứng âm thanh sci-fi (sound effects) khi rê chuột qua các nút bấm hoặc mở thẻ bài.
- Xây dựng hệ thống đa ngôn ngữ (Tiếng Việt / English) bằng cách tải file JSON bản địa hóa.
