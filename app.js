const products = [
  { id: "ke-gia-vi-3-tang", name: "Kệ gia vị 3 tầng khung thép", category: "Kệ & Giá", room: "Nhà Bếp", price: 289000, originalPrice: 355000, rating: 4.8, stock: 12, featuredRank: 1, badge: "Bán chạy", description: "Kệ gia vị nhỏ gọn giúp sắp xếp chai lọ và dụng cụ nấu ăn theo chiều dọc gọn mắt.", tags: ["3 tầng", "Thép sơn", "Lắp nhanh", "Kệ tủ gia vị"], glyph: "KE3", color: "#d7c29f" },
  { id: "tu-vai-2-canh", name: "Tủ vải 2 cánh khung kim loại", category: "Tủ & Lưu trữ", room: "Phòng Ngủ", price: 599000, originalPrice: 720000, rating: 4.7, stock: 8, featuredRank: 2, badge: "Mới về", description: "Màu be trung tính, có ngăn treo và kệ gấp phù hợp phòng trọ hoặc căn hộ mini.", tags: ["2 cánh", "Khung sắt", "Phòng ngủ"], glyph: "TU2", color: "#c9baa7" },
  { id: "bo-noi-inox-5-day", name: "Bộ nồi inox 5 đáy 3 món", category: "Nồi & Chảo", room: "Nhà Bếp", price: 849000, originalPrice: 1020000, rating: 4.9, stock: 10, featuredRank: 3, badge: "Nổi bật", description: "Bộ nồi inox đáy dày, dùng được trên bếp từ và bếp gas, phù hợp gia đình trẻ.", tags: ["Inox 5 đáy", "3 món", "Bếp từ", "Dụng cụ làm bếp"], glyph: "NOI", color: "#d5d8dc" },
  { id: "chao-sau-long-da", name: "Chảo sâu lòng phủ đá 28cm", category: "Nồi & Chảo", room: "Nhà Bếp", price: 379000, originalPrice: 449000, rating: 4.8, stock: 15, featuredRank: 4, badge: "Giá tốt", description: "Lòng chảo sâu, dễ xào nấu, lớp phủ đá hạn chế bám dính và dễ vệ sinh sau bữa ăn.", tags: ["28cm", "Phủ đá", "Cán gỗ", "Bếp ga"], glyph: "CHA", color: "#cdb6a2" },
  { id: "ke-sach-go-mini", name: "Kệ sách gỗ mini 4 tầng", category: "Kệ & Giá", room: "Phòng Khách", price: 729000, originalPrice: 860000, rating: 4.7, stock: 6, featuredRank: 5, badge: "Phong cách", description: "Kệ sách đa năng có thể dùng làm kệ trang trí, kệ cây nhỏ hoặc để hộp lưu trữ.", tags: ["4 tầng", "Gỗ công nghiệp", "Kệ trang trí", "Tranh"], glyph: "SHE", color: "#d9bf96" },
  { id: "tu-giay-3-tang", name: "Tủ giày 3 tầng cửa lật", category: "Tủ & Lưu trữ", room: "Phòng Khách", price: 459000, originalPrice: 559000, rating: 4.6, stock: 11, featuredRank: 6, badge: "Gọn nhà", description: "Màu gỗ đậm, để ngay cửa ra vào, giữ giày dép gọn gàng và ít bám bụi hơn.", tags: ["3 tầng", "Cửa lật", "Kệ tivi", "Phòng khách"], glyph: "TUG", color: "#bea590" },
  { id: "gia-treo-nha-tam", name: "Giá treo nhà tắm hút chân không", category: "Vệ sinh & Phụ trợ", room: "Nhà Vệ Sinh", price: 169000, originalPrice: 219000, rating: 4.7, stock: 17, featuredRank: 7, badge: "Tiện lợi", description: "Để sữa tắm, dầu gội và khăn tắm mà không cần khoan tường, phù hợp nhà thuê.", tags: ["Hút chân không", "Chống rỉ", "Nhà tắm", "Dụng cụ vệ sinh cá nhân"], glyph: "TRE", color: "#c9d8e8" },
  { id: "xe-day-don-dep", name: "Xe đẩy dọn dẹp 3 ngăn", category: "Vệ sinh & Phụ trợ", room: "Nhà Kho", price: 649000, originalPrice: 790000, rating: 4.8, stock: 5, featuredRank: 8, badge: "Đa năng", description: "Để xếp nước lau, khăn, bình xịt và phụ kiện dọn dẹp theo từng ngăn riêng biệt.", tags: ["3 ngăn", "Có bánh xe", "Dọn dẹp", "Nhà kho"], glyph: "XED", color: "#d1c4df" },
  { id: "ke-lo-vi-song", name: "Kệ để lò vi sóng 2 tầng", category: "Kệ & Giá", room: "Nhà Bếp", price: 399000, originalPrice: 475000, rating: 4.6, stock: 13, featuredRank: 9, badge: "Tiết kiệm diện tích", description: "Tầng dưới để lò vi sóng, tầng trên để bát đĩa và gia vị giúp bàn bếp gọn hơn.", tags: ["2 tầng", "Bếp", "Chịu lực", "Bồn rửa rau củ"], glyph: "KLV", color: "#d9ccb6" },
  { id: "tu-dau-giuong-mini", name: "Tủ đầu giường mini 2 ngăn", category: "Tủ & Lưu trữ", room: "Phòng Ngủ", price: 519000, originalPrice: 620000, rating: 4.7, stock: 9, featuredRank: 10, badge: "Tối giản", description: "Kích thước vừa cạnh giường 1m6, để đèn ngủ, sách và các vật dụng cá nhân nhỏ gọn.", tags: ["2 ngăn", "Phòng ngủ", "Gỗ MDF", "Đèn ngủ"], glyph: "TDN", color: "#d8c6b7" },
  { id: "may-hut-bui-cam-tay", name: "Máy hút bụi cầm tay mini", category: "Điện gia dụng", room: "Phòng Khách", price: 789000, originalPrice: 930000, rating: 4.8, stock: 7, featuredRank: 11, badge: "Cao cấp", description: "Lực hút ổn định, phù hợp ghế sofa, rèm cửa, kệ sách và những vị trí khó tiếp cận.", tags: ["Không dây", "Sạc USB-C", "3 đầu hút", "Sofa"], glyph: "VAC", color: "#cdd6e7" },
  { id: "hop-luu-tru-trong-suot", name: "Hộp lưu trữ trong suốt 6 món", category: "Tủ & Lưu trữ", room: "Nhà Bếp", price: 249000, originalPrice: 315000, rating: 4.9, stock: 20, featuredRank: 12, badge: "Yêu thích", description: "Đựng gạo, nui, gia vị khô hoặc thực phẩm khô, giữ căn bếp sạch và dễ quan sát.", tags: ["6 món", "Trong suốt", "Nắp kín", "Tủ lạnh"], glyph: "BOX", color: "#dce5d4" },
  { id: "ban-an-gap-gon-mini", name: "Bàn ăn gấp gọn mini 4 chỗ", category: "Bàn ăn & Phòng khách", room: "Nhà Bếp", price: 1290000, originalPrice: 1490000, rating: 4.6, stock: 4, featuredRank: 13, badge: "Căn hộ nhỏ", description: "Bàn ăn gấp gọn có thể sát tường khi không sử dụng, giúp tối ưu không gian sống.", tags: ["Gấp gọn", "4 chỗ", "Căn hộ mini", "Bàn ăn"], glyph: "BAN", color: "#dcc4a5" },
  { id: "binh-giu-nhiet-gia-dinh", name: "Bình giữ nhiệt gia đình 1.5L", category: "Bàn ăn & Phòng khách", room: "Nhà Bếp", price: 329000, originalPrice: 399000, rating: 4.8, stock: 14, featuredRank: 14, badge: "Bán chạy", description: "Dùng trên bàn ăn, giữ nóng lâu, tay cầm chắc và vỏ ngoài trung tính để phối nội thất.", tags: ["1.5L", "Inox 304", "Bàn ăn"], glyph: "BNH", color: "#e2d2ad" },
  { id: "sofa-bang-mini", name: "Sofa băng mini 3 chỗ bọc nỉ", category: "Bàn ăn & Phòng khách", room: "Phòng Khách", price: 3590000, originalPrice: 4190000, rating: 4.7, stock: 3, featuredRank: 15, badge: "Phòng khách", description: "Kích thước hợp căn hộ 2 phòng, màu kem dễ phối với tranh và đèn chùm.", tags: ["Sofa", "Phòng khách", "Đèn chùm"], glyph: "SOF", color: "#d9c9c0" },
  { id: "voi-sen-tang-ap", name: "Vòi sen tăng áp 3 chế độ", category: "Vệ sinh & Phụ trợ", room: "Nhà Vệ Sinh", price: 259000, originalPrice: 319000, rating: 4.8, stock: 16, featuredRank: 16, badge: "Dễ lắp", description: "Tăng áp lực nước, dễ tháo lắp, phù hợp căn hộ và nhà phố.", tags: ["Vòi sen", "Bồn rửa mặt", "Nhà vệ sinh"], glyph: "SEN", color: "#d4e1ef" },
  { id: "choi-quet-san-ban-lon", name: "Chổi quét sàn bản lớn", category: "Vệ sinh & Phụ trợ", room: "Nhà Kho", price: 139000, originalPrice: 179000, rating: 4.6, stock: 18, featuredRank: 17, badge: "Nhà kho", description: "Cán dài, lông chổi bền, hợp để quét nhà kho, sân thượng và lối đi rộng.", tags: ["Chổi quét nhà", "Quét sàn", "Nhà kho"], glyph: "CHO", color: "#d8d3c7" },
  { id: "voi-tuoi-cay-cuon", name: "Vòi tưới cây cuộn 15m", category: "Vệ sinh & Phụ trợ", room: "Sân Vườn", price: 469000, originalPrice: 545000, rating: 4.7, stock: 9, featuredRank: 18, badge: "Sân vườn", description: "Dây tưới mềm, cuộn gọn, có đầu phun nhiều chế độ để chăm cây và rửa sân.", tags: ["Vòi tưới cây", "Sân vườn", "Tưới cây"], glyph: "VOI", color: "#cadfb8" },
  { id: "ghe-gap-san-vuon", name: "Ghế gấp sân vườn khung sắt", category: "Bàn ăn & Phòng khách", room: "Sân Vườn", price: 389000, originalPrice: 459000, rating: 4.5, stock: 7, featuredRank: 19, badge: "Ngoài trời", description: "Ghế gấp dễ xếp gọn sau khi sử dụng, phù hợp sân vườn nhỏ và ban công.", tags: ["Ghế sân vườn", "Ngoài trời", "Gấp gọn"], glyph: "GHE", color: "#c3d3b6" }
];


const STORAGE_KEY = "nha-xinh-mart-cart";
const SHIPPING_THRESHOLD = 699000;
const SHIPPING_FEE = 30000;
const PAGE_SIZE = 6;
const DOMESTIC_BANKS = ["BIDV", "VCB", "OCB", "Techcombank", "VPBank", "Agribank"];
const VISA_PROVIDERS = ["BIDV", "VCB", "OCB", "Techcombank", "HomeCredit", "SaigonHD", "Mcredit"];
const ALL_ROOM_GROUP = "Tất cả nhóm con";
const megaMenuData = {
  "Phòng Khách": [
    { title: "Nội thất chính", items: ["Tivi", "Sofa", "Bàn trà", "Kệ tivi"] },
    { title: "Ánh sáng & trang trí", items: ["Đèn chùm", "Đèn cây", "Tranh treo", "Rèm cửa"] },
    { title: "Tiện ích phòng khách", items: ["Máy lọc không khí", "Quạt đứng", "Kệ sách", "Tủ giày"] }
  ],
  "Nhà Bếp": [
    { title: "Dụng cụ làm bếp", items: ["Nồi", "Chảo", "Dao kéo", "Máy xay"] },
    { title: "Khu nấu ăn", items: ["Bếp từ", "Bếp ga", "Tủ lạnh", "Bồn rửa rau củ"] },
    { title: "Bàn ăn & lưu trữ", items: ["Bàn ăn", "Gia vị", "Kệ tủ gia vị", "Hộp lưu trữ"] }
  ],
  "Nhà Vệ Sinh": [
    { title: "Vệ sinh cá nhân", items: ["Kệ sữa tắm", "Khăn tắm", "Gương", "Bồn rửa mặt"] },
    { title: "Dụng cụ dọn dẹp", items: ["Cây cọ toilet", "Bàn chải chà", "Nước rửa", "Kéo gạt nước"] },
    { title: "Thiết bị nước", items: ["Vòi sen", "Vòi rửa", "Giá treo", "Tủ đựng đồ"] }
  ],
  "Phòng Ngủ": [
    { title: "Nội thất ngủ", items: ["Nệm", "Giường", "Tủ đầu giường", "Tủ vải"] },
    { title: "Chăm sóc cá nhân", items: ["Bàn trang điểm", "Gương", "Hộp trang sức", "Kệ đựng mỹ phẩm"] },
    { title: "Ánh sáng & mềm mại", items: ["Đèn ngủ", "Bao gối", "Chăn ga", "Rèm che"] }
  ],
  "Nhà Kho": [
    { title: "Vệ sinh kho", items: ["Chổi quét nhà", "Quét sàn", "Ký hốt rác", "Xe đẩy dọn dẹp"] },
    { title: "Sắp xếp vật dụng", items: ["Kệ kho", "Thùng nhựa", "Móc treo", "Tủ đựng đồ"] },
    { title: "Dụng cụ hỗ trợ", items: ["Vòi tưới cây", "Dây nối", "Bao tay", "Kệ sắt"] }
  ],
  "Sân Vườn": [
    { title: "Chăm cây", items: ["Vòi tưới cây", "Bình tưới", "Kệ trồng cây", "Chậu cây"] },
    { title: "Ngoài trời", items: ["Ghế sân vườn", "Bàn gấp", "Đèn sân vườn", "Kéo cắt lá"] },
    { title: "Làm sạch sân", items: ["Chổi sân", "Kéo gạt nước", "Hộp đựng dụng cụ", "Kệ để ngoài trời"] }
  ]
};

const storeMenuData = {
  "Hồ Chí Minh": [
    {
      name: "Chi nhánh Quận 1",
      address: "123 Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh",
      phone: "028 7300 6868",
      hours: "08:00 - 21:00"
    },
    {
      name: "Chi nhánh Thủ Đức",
      address: "88 Võ Văn Ngân, Phường Bình Thọ, TP. Thủ Đức, TP. Hồ Chí Minh",
      phone: "028 7300 6869",
      hours: "08:00 - 21:00"
    }
  ],
  "Hà Nội": [
    {
      name: "Chi nhánh Cầu Giấy",
      address: "45 Trần Thái Tông, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
      phone: "024 7300 6868",
      hours: "08:00 - 21:00"
    },
    {
      name: "Chi nhánh Hà Đông",
      address: "210 Quang Trung, Hà Cầu, Hà Đông, Hà Nội",
      phone: "024 7300 6869",
      hours: "08:00 - 21:00"
    }
  ],
  "Đà Nẵng": [
    {
      name: "Chi nhánh Hải Châu",
      address: "169 Nguyễn Văn Linh, Nam Dương, Hải Châu, Đà Nẵng",
      phone: "0236 730 6868",
      hours: "08:00 - 20:30"
    },
    {
      name: "Chi nhánh Thanh Khê",
      address: "52 Điện Biên Phủ, Chính Gián, Thanh Khê, Đà Nẵng",
      phone: "0236 730 6869",
      hours: "08:00 - 20:30"
    }
  ]
};

const serviceMenuData = {
  "Chăm sóc KH 24/7": [
    {
      title: "Khiếu nại",
      description: "Tiếp nhận và theo dõi các vấn đề về giao hàng, sản phẩm lỗi, sai mẫu hoặc trải nghiệm chưa như mong đợi.",
      note: "Hotline ưu tiên: 1900 5301"
    },
    {
      title: "Gọi đặt hàng",
      description: "Đặt nhanh qua tổng đài khi cần tư vấn ngay về tồn kho, giao nhanh hoặc gói phù hợp cho từng không gian.",
      note: "Nhận đơn từ 08:00 - 21:00"
    },
    {
      title: "Tư vấn dịch vụ",
      description: "Hỗ trợ lắp đặt, đổi trả, bảo hành mô phỏng và tư vấn lựa chọn gói giao nhận cho đồ gia dụng cồng kềnh.",
      note: "Phản hồi trong giờ làm việc"
    }
  ],
  "Đăng ký thành viên": [
    {
      title: "Đăng ký thành viên",
      description: "Tạo tài khoản thành viên để lưu thông tin mua hàng, nhận ưu đãi sinh nhật, tích điểm và cập nhật ưu đãi mới sớm hơn.",
      note: "Đăng ký miễn phí",
      action: "open-register"
    }
  ]
};

const promotionPrograms = [
  {
    badge: "Thành viên mới",
    title: "Tivi phòng khách giảm 15% cho khách hàng vừa đăng ký",
    description: "Áp dụng cho tài khoản thành viên mới trong 7 ngày đầu, ưu tiên nhóm tivi, kệ tivi và trang trí phòng khách.",
    offer: "Giảm 15%",
    scope: "Đơn đầu tiên",
    note: "Tặng phiếu ưu đãi lắp đặt 200.000đ",
    chips: ["Tivi treo tường", "Kệ tivi", "Thành viên mới"]
  },
  {
    badge: "Hóa đơn lớn",
    title: "Thanh toán hóa đơn trên 5.000.000đ được giảm thêm 5%",
    description: "Tự động áp dụng cho đơn gia dụng giá trị cao như sofa, tủ lưu trữ, kệ sách và các set nội thất phòng khách.",
    offer: "Thêm 5%",
    scope: "Đơn từ 5 triệu",
    note: "Áp dụng cả thanh toán thẻ ngân hàng",
    chips: ["Sofa", "Tủ lưu trữ", "Hóa đơn giá trị cao"]
  },
  {
    badge: "Ưu đãi nhà bếp",
    title: "Bộ nồi chảo và dụng cụ nấu ăn mua 2 món giảm 10%",
    description: "Dành cho người mới bố trí căn bếp, có thể kết hợp nồi inox, chảo sâu lòng, kệ gia vị và hộp lưu trữ trong cùng đợt khuyến mãi.",
    offer: "Giảm 10%",
    scope: "Kết hợp 2 món bất kỳ",
    note: "Tặng miễn phí giao nhanh nội thành",
    chips: ["Nồi inox", "Chảo chống dính", "Kệ gia vị"]
  },
  {
    badge: "Không tiền mặt",
    title: "Quẹt thẻ ngân hàng hoặc Visa nhận phiếu ưu đãi 300.000đ",
    description: "Áp dụng cho đơn từ 3.500.000đ trở lên, phù hợp khi mua tủ, kệ, bộ bếp và các mặt hàng gia dụng cồng kềnh.",
    offer: "Phiếu ưu đãi 300k",
    scope: "Đơn từ 3,5 triệu",
    note: "Dùng cho lần mua tiếp theo",
    chips: ["Thẻ ngân hàng", "Thẻ Visa", "Phiếu ưu đãi"]
  }
];

const state = {
  search: "",
  category: "Tất cả",
  room: "Tất cả không gian",
  roomGroup: ALL_ROOM_GROUP,
  sort: "featured",
  view: "grid",
  page: 1,
  promotionIndex: 0,
  isMegaMenuOpen: false,
  isStoreMenuOpen: false,
  isServiceMenuOpen: false,
  isAuthModalOpen: false,
  megaMenuRoom: "Phòng Khách",
  cart: loadCart(),
  storeCity: "Hồ Chí Minh",
  serviceGroup: "Chăm sóc KH 24/7",
  authView: "login",
  showAuthSocials: false,
  checkoutStep: "cart",
  paymentMethod: "cod",
  checkoutData: getDefaultCheckoutData()
};

const categories = ["Tất cả", ...new Set(products.map((item) => item.category))];
const rooms = ["Tất cả không gian", ...new Set(products.map((item) => item.room))];

const resultCount = document.getElementById("result-count");
const roomFilters = document.getElementById("room-filters");
const roomGroupFilters = document.getElementById("room-group-filters");
const productGrid = document.getElementById("product-grid");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const viewButtons = document.querySelectorAll("[data-view]");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const subtotalNode = document.getElementById("subtotal");
const shippingNode = document.getElementById("shipping");
const totalNode = document.getElementById("total");
const checkoutSubtotalNode = document.getElementById("checkout-subtotal");
const checkoutShippingNode = document.getElementById("checkout-shipping");
const checkoutTotalNode = document.getElementById("checkout-total");
const cartDrawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");
const categoryTrigger = document.getElementById("category-trigger");
const megaMenu = document.getElementById("mega-menu");
const megaRoomList = document.getElementById("mega-room-list");
const megaMenuTitle = document.getElementById("mega-menu-title");
const megaMenuColumns = document.getElementById("mega-menu-columns");
const megaMenuViewRoom = document.getElementById("mega-menu-view-room");
const storeTrigger = document.getElementById("store-trigger");
const storeMenu = document.getElementById("store-menu");
const storeCityList = document.getElementById("store-city-list");
const storeMenuTitle = document.getElementById("store-menu-title");
const storeBranchList = document.getElementById("store-branch-list");
const serviceTrigger = document.getElementById("service-trigger");
const serviceMenu = document.getElementById("service-menu");
const serviceGroupList = document.getElementById("service-group-list");
const serviceMenuTitle = document.getElementById("service-menu-title");
const serviceCardList = document.getElementById("service-card-list");
const promotionCarousel = document.getElementById("promotion-carousel");
const promotionTrack = document.getElementById("promotion-track");
const promotionDots = document.getElementById("promotion-dots");
const promotionStatus = document.getElementById("promotion-status");
const promotionPrevBtn = document.getElementById("promotion-prev");
const promotionNextBtn = document.getElementById("promotion-next");
const backToTopButton = document.getElementById("back-to-top");
const cartLaunch = document.getElementById("cart-launch");
const closeCartBtn = document.getElementById("close-cart");
const checkoutBtn = document.getElementById("checkout-btn");
const cartStage = document.getElementById("cart-stage");
const checkoutStage = document.getElementById("checkout-stage");
const checkoutForm = document.getElementById("checkout-form");
const backToCartBtn = document.getElementById("back-to-cart");
const paymentDetail = document.getElementById("payment-detail");
const checkoutOrderList = document.getElementById("checkout-order-list");
const bundleCtaBtn = document.getElementById("bundle-cta");
const stageSwitchButtons = document.querySelectorAll("[data-stage-switch]");
const paymentOptionButtons = document.querySelectorAll("[data-payment-method]");
const authTrigger = document.getElementById("auth-trigger");
const authModal = document.getElementById("auth-modal");
const authCloseBtn = document.getElementById("auth-close");
const authLoginView = document.getElementById("auth-login-view");
const authRegisterView = document.getElementById("auth-register-view");
const authLoginForm = document.getElementById("auth-login-form");
const authRegisterForm = document.getElementById("auth-register-form");
const authSocialToggle = document.getElementById("auth-social-toggle");
const authSocials = document.getElementById("auth-socials");
let promotionAutoplayId = null;

renderTopFilters();
renderMegaMenu();
renderStoreMenu();
renderServiceMenu();
renderAuthModal();
renderPromotionCarousel();
startPromotionAutoplay();
renderProducts();
renderCart();
renderDrawerStage();
updateBackToTopButton();

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim().toLowerCase();
  state.page = 1;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  state.page = 1;
  renderProducts();
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view || "grid";
    renderViewButtons();
    renderProducts();
  });
});

cartLaunch.addEventListener("click", () => {
  toggleMegaMenu(false);
  toggleStoreMenu(false);
  toggleServiceMenu(false);
  toggleAuthModal(false);
  toggleCart(true);
});
closeCartBtn.addEventListener("click", () => toggleCart(false));
overlay.addEventListener("click", () => {
  toggleMegaMenu(false);
  toggleStoreMenu(false);
  toggleServiceMenu(false);
  toggleCart(false);
  toggleAuthModal(false);
});
categoryTrigger.addEventListener("click", () => {
  const nextOpen = !state.isMegaMenuOpen;
  if (nextOpen) {
    toggleCart(false);
    toggleStoreMenu(false);
    toggleServiceMenu(false);
    toggleAuthModal(false);
  }
  toggleMegaMenu(nextOpen);
});
storeTrigger.addEventListener("click", () => {
  const nextOpen = !state.isStoreMenuOpen;
  if (nextOpen) {
    toggleCart(false);
    toggleMegaMenu(false);
    toggleServiceMenu(false);
    toggleAuthModal(false);
  }
  toggleStoreMenu(nextOpen);
});
serviceTrigger.addEventListener("click", () => {
  const nextOpen = !state.isServiceMenuOpen;
  if (nextOpen) {
    toggleCart(false);
    toggleMegaMenu(false);
    toggleStoreMenu(false);
    toggleAuthModal(false);
  }
  toggleServiceMenu(nextOpen);
});
authTrigger.addEventListener("click", () => {
  toggleCart(false);
  toggleMegaMenu(false);
  toggleStoreMenu(false);
  toggleServiceMenu(false);
  toggleAuthModal(true, "login");
});
authCloseBtn.addEventListener("click", () => toggleAuthModal(false));
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
megaMenuViewRoom.addEventListener("click", () => {
  state.search = "";
  searchInput.value = "";
  setRoomFilter(state.megaMenuRoom);
  toggleMegaMenu(false);
  document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("scroll", updateBackToTopButton);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopPromotionAutoplay();
    return;
  }

  startPromotionAutoplay();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleCart(false);
    toggleMegaMenu(false);
    toggleStoreMenu(false);
    toggleServiceMenu(false);
    toggleAuthModal(false);
  }
});

checkoutBtn.addEventListener("click", () => {
  if (!state.cart.length) {
    showToast("Giỏ hàng đang trống. Thêm sản phẩm trước khi đặt hàng nhé.");
    return;
  }

  setCheckoutStep("checkout");
});

bundleCtaBtn.addEventListener("click", () => {
  const kitchenProduct = products.find((product) => product.category === "Nồi & Chảo") || products.find((product) => product.room === "Nhà Bếp");
  if (kitchenProduct) {
    setRoomFilter(kitchenProduct.room);
  }

  document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
});

promotionPrevBtn.addEventListener("click", () => {
  changePromotionSlide(-1);
  restartPromotionAutoplay();
});

promotionNextBtn.addEventListener("click", () => {
  changePromotionSlide(1);
  restartPromotionAutoplay();
});

promotionDots.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement) || !target.matches("[data-promotion-index]")) {
    return;
  }

  setPromotionSlide(Number(target.dataset.promotionIndex));
  restartPromotionAutoplay();
});

promotionCarousel.addEventListener("mouseenter", stopPromotionAutoplay);
promotionCarousel.addEventListener("mouseleave", startPromotionAutoplay);

stageSwitchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCheckoutStep(button.dataset.stageSwitch || "cart");
  });
});

paymentOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.paymentMethod = button.dataset.paymentMethod || "cod";
    renderPaymentOptions();
    renderPaymentDetail();
  });
});

backToCartBtn.addEventListener("click", () => {
  setCheckoutStep("cart");
});

checkoutForm.addEventListener("input", handleCheckoutFieldUpdate);
checkoutForm.addEventListener("change", handleCheckoutFieldUpdate);
checkoutForm.addEventListener("submit", handleCheckoutSubmit);
authLoginForm.addEventListener("submit", handleAuthLoginSubmit);
authRegisterForm.addEventListener("submit", handleAuthRegisterSubmit);
authModal.addEventListener("click", handleAuthModalClick);
serviceMenu.addEventListener("keydown", handleServiceMenuKeydown);

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (!target.closest("#mega-menu") && !target.closest("#category-trigger")) {
    toggleMegaMenu(false);
  }

  if (!target.closest("#store-menu") && !target.closest("#store-trigger")) {
    toggleStoreMenu(false);
  }

  if (!target.closest("#service-menu") && !target.closest("#service-trigger")) {
    toggleServiceMenu(false);
  }

  if (target.matches("[data-filter-target]")) {
    setCategoryFilter(target.dataset.filterTarget || "Tất cả");
    document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (target.matches("[data-menu-room]")) {
    state.megaMenuRoom = target.dataset.menuRoom || "Phòng Khách";
    renderMegaMenu();
  }

  if (target.matches("[data-menu-item]")) {
    const room = target.dataset.menuRoom || state.megaMenuRoom;
    const item = target.dataset.menuItem || "";
    const hasMatch = products.some((product) => {
      const searchTarget = `${product.name} ${product.description} ${product.tags.join(" ")}`.toLowerCase();
      return searchTarget.includes(item.toLowerCase());
    });

    state.category = "Tất cả";
    state.room = room;
    state.roomGroup = ALL_ROOM_GROUP;
    state.search = hasMatch ? item.toLowerCase() : "";
    searchInput.value = hasMatch ? item : "";
    state.page = 1;
    renderProducts();
    toggleMegaMenu(false);

    if (!hasMatch) {
      showToast(`Đã chuyển sang ${room}. Bạn có thể bổ sung thêm sản phẩm cho nhóm ${item} sau.`);
    }

    document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (target.matches("[data-store-city]")) {
    state.storeCity = target.dataset.storeCity || "Hồ Chí Minh";
    renderStoreMenu();
  }

  const serviceGroupButton = target.closest("[data-service-group]");
  if (serviceGroupButton instanceof HTMLElement) {
    const nextGroup = serviceGroupButton.dataset.serviceGroup || "Chăm sóc KH 24/7";
    state.serviceGroup = nextGroup;
    renderServiceMenu();

    if (nextGroup === "Đăng ký thành viên") {
      toggleServiceMenu(false);
      toggleAuthModal(true, "register");
    }
  }

  const serviceActionCard = target.closest("[data-service-action]");
  if (serviceActionCard instanceof HTMLElement && serviceActionCard.dataset.serviceAction === "open-register") {
    toggleServiceMenu(false);
    toggleAuthModal(true, "register");
  }

  if (target.matches("[data-category-filter]")) {
    setCategoryFilter(target.dataset.categoryFilter || "Tất cả");
  }

  if (target.matches("[data-room-filter]")) {
    setRoomFilter(target.dataset.roomFilter || "Tất cả không gian");
  }

  if (target.matches("[data-room-group]")) {
    setRoomGroup(target.dataset.roomGroup || ALL_ROOM_GROUP);
  }

  if (target.matches("[data-add-to-cart]")) {
    const productId = target.dataset.addToCart;
    const product = findProduct(productId);
    if (product) {
      addToCart(productId, product);
    }
  }

  if (target.matches("[data-preview-product]")) {
    const productId = target.dataset.previewProduct;
    const product = findProduct(productId);
    if (product) {
      showToast(`${product.name} đang ở chế độ mô phỏng giao diện. Bạn có thể mở rộng sang trang chi tiết sau.`);
    }
  }

  if (target.matches("[data-page-number]")) {
    const page = Number(target.dataset.pageNumber);
    if (Number.isFinite(page)) {
      state.page = page;
      renderProducts();
      document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (target.matches("[data-page-action]")) {
    handlePageAction(target.dataset.pageAction);
  }

  if (target.matches("[data-cart-action]")) {
    handleCartAction(target.dataset.cartAction, target.dataset.productId);
  }
});

function renderMegaMenu() {
  const roomNames = Object.keys(megaMenuData);
  const groups = megaMenuData[state.megaMenuRoom] || megaMenuData[roomNames[0]];

  megaRoomList.innerHTML = roomNames.map((room) => `
    <button class="mega-room-btn ${state.megaMenuRoom === room ? "active" : ""}" type="button" data-menu-room="${room}">
      ${room}
    </button>
  `).join("");

  megaMenuTitle.textContent = state.megaMenuRoom;
  megaMenuColumns.innerHTML = groups.map((group) => `
    <article class="mega-menu-group">
      <h4>${group.title}</h4>
      <div class="mega-menu-links">
        ${group.items.map((item) => `
          <button class="mega-menu-item" type="button" data-menu-room="${state.megaMenuRoom}" data-menu-item="${item}">
            ${item}
          </button>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderStoreMenu() {
  const cityNames = Object.keys(storeMenuData);
  const branches = storeMenuData[state.storeCity] || storeMenuData[cityNames[0]];

  storeCityList.innerHTML = cityNames.map((city) => `
    <button class="store-city-btn ${state.storeCity === city ? "active" : ""}" type="button" data-store-city="${city}">
      ${city}
    </button>
  `).join("");

  storeMenuTitle.textContent = state.storeCity;
  storeBranchList.innerHTML = branches.map((branch) => `
    <article class="store-branch-card">
      <h4>${branch.name}</h4>
      <p class="store-branch-address">${branch.address}</p>
      <div class="store-branch-meta">
        <p><strong>Hotline:</strong> ${branch.phone}</p>
        <p><strong>Giờ mở cửa:</strong> ${branch.hours}</p>
      </div>
    </article>
  `).join("");
}

function renderServiceMenu() {
  const groupNames = Object.keys(serviceMenuData);
  const cards = serviceMenuData[state.serviceGroup] || serviceMenuData[groupNames[0]];

  serviceGroupList.innerHTML = groupNames.map((group) => `
    <button class="service-group-btn ${state.serviceGroup === group ? "active" : ""}" type="button" data-service-group="${group}">
      ${group}
    </button>
  `).join("");

  serviceMenuTitle.textContent = state.serviceGroup;
  serviceCardList.innerHTML = cards.map((card) => `
    <article class="service-card ${card.action ? "interactive" : ""}" ${card.action ? `tabindex="0" role="button" data-service-action="${card.action}"` : ""}>
      <h4>${card.title}</h4>
      <p>${card.description}</p>
      <span class="service-card-note">${card.note}</span>
    </article>
  `).join("");
}

function renderAuthModal() {
  setAuthView(state.authView);
  authSocials.hidden = !state.showAuthSocials || state.authView !== "login";
  authSocialToggle.setAttribute("aria-expanded", String(state.showAuthSocials && state.authView === "login"));
  authModal.classList.toggle("open", state.isAuthModalOpen);
  authModal.setAttribute("aria-hidden", String(!state.isAuthModalOpen));
  document.body.classList.toggle("auth-open", state.isAuthModalOpen);
}

function renderPromotionCarousel() {
  promotionTrack.innerHTML = promotionPrograms.map((program) => `
    <article class="promotion-slide">
      <div class="promotion-copy">
        <span class="promotion-badge">${program.badge}</span>
        <h3>${program.title}</h3>
        <p>${program.description}</p>
        <div class="promotion-chip-row">
          ${program.chips.map((chip) => `<span class="promotion-chip">${chip}</span>`).join("")}
        </div>
      </div>

      <div class="promotion-summary">
        <div class="promotion-highlight">
          <span>Ưu đãi nổi bật</span>
          <strong>${program.offer}</strong>
          <p>${program.note}</p>
        </div>

        <div class="promotion-metrics">
          <article class="promotion-metric">
            <span>Áp dụng</span>
            <strong>${program.scope}</strong>
            <p>Ưu đãi tự động đối với các đơn hàng nằm trong điều kiện của chương trình.</p>
          </article>
          <article class="promotion-metric">
            <span>Danh mục</span>
            <strong>${program.badge}</strong>
            <p>Bạn có thể dùng khu vực lọc sản phẩm ở trên để tìm nhanh những món đang được ưu đãi.</p>
          </article>
        </div>
      </div>
    </article>
  `).join("");

  updatePromotionCarousel();
}

function updatePromotionCarousel() {
  const totalPromotions = promotionPrograms.length;
  const currentPromotion = promotionPrograms[state.promotionIndex];

  promotionTrack.style.transform = `translateX(-${state.promotionIndex * 100}%)`;
  promotionDots.innerHTML = promotionPrograms.map((program, index) => `
    <button
      class="promotion-dot ${state.promotionIndex === index ? "active" : ""}"
      type="button"
      data-promotion-index="${index}"
      aria-label="Xem khuyến mãi ${index + 1}: ${program.badge}"
      aria-pressed="${state.promotionIndex === index}"
    ></button>
  `).join("");
  promotionStatus.textContent = `Đang hiển ${state.promotionIndex + 1}/${totalPromotions}: ${currentPromotion.title}`;
}

function setPromotionSlide(index) {
  if (!Number.isFinite(index)) {
    return;
  }

  const totalPromotions = promotionPrograms.length;
  state.promotionIndex = (index + totalPromotions) % totalPromotions;
  updatePromotionCarousel();
}

function changePromotionSlide(direction) {
  setPromotionSlide(state.promotionIndex + direction);
}

function startPromotionAutoplay() {
  stopPromotionAutoplay();

  promotionAutoplayId = window.setInterval(() => {
    changePromotionSlide(1);
  }, 5200);
}

function stopPromotionAutoplay() {
  if (promotionAutoplayId === null) {
    return;
  }

  window.clearInterval(promotionAutoplayId);
  promotionAutoplayId = null;
}

function restartPromotionAutoplay() {
  stopPromotionAutoplay();
  startPromotionAutoplay();
}

function toggleMegaMenu(isOpen) {
  state.isMegaMenuOpen = isOpen;
  megaMenu.classList.toggle("open", isOpen);
  megaMenu.setAttribute("aria-hidden", String(!isOpen));
  categoryTrigger.classList.toggle("active", isOpen);
  categoryTrigger.setAttribute("aria-expanded", String(isOpen));
  syncMenuState();
  syncOverlay();
}

function toggleStoreMenu(isOpen) {
  state.isStoreMenuOpen = isOpen;
  storeMenu.classList.toggle("open", isOpen);
  storeMenu.setAttribute("aria-hidden", String(!isOpen));
  storeTrigger.classList.toggle("active", isOpen);
  storeTrigger.setAttribute("aria-expanded", String(isOpen));
  syncMenuState();
  syncOverlay();
}

function toggleServiceMenu(isOpen) {
  state.isServiceMenuOpen = isOpen;
  serviceMenu.classList.toggle("open", isOpen);
  serviceMenu.setAttribute("aria-hidden", String(!isOpen));
  serviceTrigger.classList.toggle("active", isOpen);
  serviceTrigger.setAttribute("aria-expanded", String(isOpen));
  syncMenuState();
  syncOverlay();
}

function syncMenuState() {
  document.body.classList.toggle("menu-open", state.isMegaMenuOpen || state.isStoreMenuOpen || state.isServiceMenuOpen);
}

function setAuthView(view) {
  state.authView = view === "register" ? "register" : "login";
  if (state.authView !== "login") {
    state.showAuthSocials = false;
  }
  authLoginView.hidden = state.authView !== "login";
  authRegisterView.hidden = state.authView !== "register";
}

function toggleAuthModal(isOpen, view = state.authView) {
  setAuthView(view);
  if (!isOpen || state.authView !== "login") {
    state.showAuthSocials = false;
  }
  state.isAuthModalOpen = isOpen;
  renderAuthModal();
  syncOverlay();

  if (!isOpen) {
    return;
  }

  const focusSelector = state.authView === "register" ? 'input[name="registerLastName"]' : 'input[name="loginUser"]';
  const focusTarget = authModal.querySelector(focusSelector);

  window.setTimeout(() => {
    if (focusTarget instanceof HTMLInputElement) {
      focusTarget.focus();
    }
  }, 40);
}

function renderTopFilters() {
  roomFilters.innerHTML = rooms.map((room) => `
    <button class="room-pill ${state.room === room ? "active" : ""}" type="button" data-room-filter="${room}">
      ${room}
    </button>
  `).join("");

  const activeRoomGroups = getActiveRoomGroups();
  roomGroupFilters.hidden = activeRoomGroups.length === 0;
  roomGroupFilters.innerHTML = activeRoomGroups.length ? [
    `<button class="room-group-pill ${state.roomGroup === ALL_ROOM_GROUP ? "active" : ""}" type="button" data-room-group="${ALL_ROOM_GROUP}">${ALL_ROOM_GROUP}</button>`,
    ...activeRoomGroups.map((group) => `
      <button class="room-group-pill ${state.roomGroup === group.title ? "active" : ""}" type="button" data-room-group="${group.title}">
        ${group.title}
      </button>
    `)
  ].join("") : "";

  renderViewButtons();
}

function getActiveRoomGroups() {
  if (state.room === "Tất cả không gian") {
    return [];
  }

  return megaMenuData[state.room] || [];
}

function renderViewButtons() {
  viewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));

  if (state.page > pageCount) {
    state.page = pageCount;
  }

  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = filteredProducts.slice(start, start + PAGE_SIZE);

  resultCount.textContent = `${filteredProducts.length} sản phẩm`;
  productGrid.classList.toggle("list-mode", state.view === "list");
  renderTopFilters();

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <article class="empty-state">
        <h3>Không tìm thấy sản phẩm phù hợp</h3>
        <p>Thử đổi từ khóa tìm kiếm hoặc chuyển qua nhóm kệ, tủ, nồi chảo khác để xem thêm mặt hàng.</p>
      </article>
    `;
    pagination.innerHTML = "";
    return;
  }

  productGrid.innerHTML = pageItems.map((product, index) => `
    <article class="product-card" style="animation-delay: ${index * 60}ms">
      <div class="product-media" style="--visual-color: ${product.color}">
        <span class="product-badge">${product.badge}</span>
        <span class="product-stock">Còn ${product.stock}</span>
        <div class="product-icon" aria-hidden="true">${product.glyph}</div>
      </div>

      <div class="product-body">
        <div class="product-topline">
          <span>${product.category}</span>
          <span>${product.room} · ${product.rating.toFixed(1)}/5</span>
        </div>

        <div>
          <h3>${product.name}</h3>
          <p class="product-desc">${product.description}</p>
        </div>

        <div class="tag-row">
          ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>

        <div class="product-footer">
          <div class="price-stack">
            <strong>${formatCurrency(product.price)}</strong>
            <span>${formatCurrency(product.originalPrice)}</span>
          </div>

          <div class="product-actions">
            <button class="link-btn" type="button" data-preview-product="${product.id}">Xem nhanh</button>
            <button class="add-btn" type="button" data-add-to-cart="${product.id}">Thêm giỏ</button>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  renderPagination(filteredProducts.length, pageCount);
}

function renderPagination(totalItems, pageCount) {
  if (totalItems <= PAGE_SIZE) {
    pagination.innerHTML = "";
    return;
  }

  const pageButtons = [];
  pageButtons.push(`
    <button class="page-btn" type="button" data-page-action="prev" ${state.page === 1 ? "disabled" : ""}>
      Trước
    </button>
  `);

  for (let page = 1; page <= pageCount; page += 1) {
    pageButtons.push(`
      <button class="page-btn ${state.page === page ? "active" : ""}" type="button" data-page-number="${page}">
        ${page}
      </button>
    `);
  }

  pageButtons.push(`
    <button class="page-btn" type="button" data-page-action="next" ${state.page === pageCount ? "disabled" : ""}>
      Sau
    </button>
  `);

  pagination.innerHTML = pageButtons.join("");
}

function handlePageAction(action) {
  const filteredProducts = getFilteredProducts();
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));

  if (action === "prev" && state.page > 1) {
    state.page -= 1;
  }

  if (action === "next" && state.page < pageCount) {
    state.page += 1;
  }

  renderProducts();
  document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setCategoryFilter(category) {
  state.category = category;
  state.page = 1;
  renderProducts();
}

function setRoomFilter(room) {
  state.category = "Tất cả";
  state.room = room;
  state.roomGroup = ALL_ROOM_GROUP;
  state.page = 1;
  renderProducts();
}

function setRoomGroup(group) {
  state.roomGroup = group;
  state.page = 1;
  renderProducts();
}

function getFilteredProducts() {
  return [...products]
    .filter((product) => state.category === "Tất cả" || product.category === state.category)
    .filter((product) => state.room === "Tất cả không gian" || product.room === state.room)
    .filter((product) => {
      if (state.room === "Tất cả không gian" || state.roomGroup === ALL_ROOM_GROUP) {
        return true;
      }

      const roomGroups = megaMenuData[state.room] || [];
      const activeGroup = roomGroups.find((group) => group.title === state.roomGroup);
      if (!activeGroup) {
        return true;
      }

      const groupKeywords = [activeGroup.title, ...activeGroup.items].map((item) => item.toLowerCase());
      const searchTarget = `${product.name} ${product.category} ${product.room} ${product.description} ${product.tags.join(" ")}`.toLowerCase();

      return groupKeywords.some((keyword) => searchTarget.includes(keyword));
    })
    .filter((product) => {
      if (!state.search) {
        return true;
      }

      const searchTarget = `${product.name} ${product.category} ${product.room} ${product.description} ${product.tags.join(" ")}`.toLowerCase();
      return searchTarget.includes(state.search);
    })
    .sort((left, right) => {
      switch (state.sort) {
        case "price-asc":
          return left.price - right.price;
        case "price-desc":
          return right.price - left.price;
        case "rating":
          return right.rating - left.rating;
        default:
          return left.featuredRank - right.featuredRank;
      }
    });
}

function renderCart() {
  const items = state.cart.map((cartItem) => {
    const product = findProduct(cartItem.id);

    if (!product) {
      return "";
    }

    return `
      <article class="cart-item">
        <div class="cart-thumb" aria-hidden="true">${product.glyph}</div>
        <div>
          <h3>${product.name}</h3>
          <p>${formatCurrency(product.price)} x ${cartItem.quantity}</p>
          <div class="quantity-controls">
            <button class="quantity-btn" type="button" data-cart-action="decrease" data-product-id="${product.id}">-</button>
            <strong>${cartItem.quantity}</strong>
            <button class="quantity-btn" type="button" data-cart-action="increase" data-product-id="${product.id}">+</button>
          </div>
            <button class="remove-btn" type="button" data-cart-action="remove" data-product-id="${product.id}">Xóa sản phẩm</button>
        </div>
        <strong>${formatCurrency(product.price * cartItem.quantity)}</strong>
      </article>
    `;
  }).join("");

  cartItems.innerHTML = items || `
    <article class="empty-state">
      <h3>Giỏ hàng đang trống</h3>
      <p>Thêm một vài món kệ, tủ, nồi chảo hoặc phụ kiện nhà cửa để tiếp tục thanh toán.</p>
    </article>
  `;

  const totals = getCartTotals();

  if (!totals.quantity && state.checkoutStep === "checkout") {
    state.checkoutStep = "cart";
  }

  cartCount.textContent = String(totals.quantity);
  subtotalNode.textContent = formatCurrency(totals.subtotal);
  shippingNode.textContent = totals.shipping ? formatCurrency(totals.shipping) : "Miễn phí";
  totalNode.textContent = formatCurrency(totals.total);
  persistCart();
  renderDrawerStage();
}

function addToCart(productId, product) {
  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }

  renderCart();
  showToast(`Đã thêm ${product.name} vào giỏ hàng.`);
}

function handleCartAction(action, productId) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) {
    return;
  }

  if (action === "increase") {
    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;
  }

  if (action === "remove" || item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== productId);
  }

  renderCart();
}

function renderDrawerStage() {
  const totals = getCartTotals();
  const isCheckout = state.checkoutStep === "checkout" && totals.quantity > 0;

  cartStage.hidden = isCheckout;
  checkoutStage.hidden = !isCheckout;
  cartStage.classList.toggle("active", !isCheckout);
  checkoutStage.classList.toggle("active", isCheckout);
  checkoutBtn.disabled = totals.quantity === 0;

  stageSwitchButtons.forEach((button) => {
    const targetStep = button.dataset.stageSwitch || "cart";
    const isCheckoutButton = targetStep === "checkout";
    button.disabled = isCheckoutButton && totals.quantity === 0;
    button.classList.toggle("active", targetStep === (isCheckout ? "checkout" : "cart"));
  });

  if (isCheckout) {
    renderCheckout();
  }
}

function renderCheckout() {
  const totals = getCartTotals();
  syncCheckoutBaseFields();
  renderPaymentOptions();
  renderPaymentDetail();

  checkoutOrderList.innerHTML = state.cart.map((cartItem) => {
    const product = findProduct(cartItem.id);
    if (!product) {
      return "";
    }

    return `
      <article class="order-item">
        <div>
          <strong>${product.name}</strong>
          <span class="order-meta">${formatCurrency(product.price)} x ${cartItem.quantity}</span>
        </div>
        <strong>${formatCurrency(product.price * cartItem.quantity)}</strong>
      </article>
    `;
  }).join("");

  checkoutSubtotalNode.textContent = formatCurrency(totals.subtotal);
  checkoutShippingNode.textContent = totals.shipping ? formatCurrency(totals.shipping) : "Miễn phí";
  checkoutTotalNode.textContent = formatCurrency(totals.total);
}

function renderPaymentOptions() {
  paymentOptionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.paymentMethod === state.paymentMethod);
  });
}

function renderPaymentDetail() {
  if (state.paymentMethod === "bank-card") {
    paymentDetail.innerHTML = `
      <div class="field-grid">
        <label class="form-field">
          <span>Chọn ngân hàng</span>
          <select name="domesticBank">
            ${buildOptionMarkup(DOMESTIC_BANKS, state.checkoutData.domesticBank)}
          </select>
        </label>

        <label class="form-field">
          <span>Số thẻ</span>
          <input name="domesticCardNumber" type="text" inputmode="numeric" placeholder="9704 0000 0000 0000" autocomplete="cc-number" value="${escapeHtml(state.checkoutData.domesticCardNumber)}">
        </label>

        <label class="form-field full-row">
          <span>Họ tên chủ thẻ</span>
          <input name="domesticCardName" type="text" placeholder="NGUYỄN VĂN A" autocomplete="cc-name" value="${escapeHtml(state.checkoutData.domesticCardName)}">
        </label>
      </div>
      <p class="payment-hint">Hỗ trợ thanh toán qua BIDV, VCB, OCB và các ngân hàng nội địa khác.</p>
    `;
    return;
  }

  if (state.paymentMethod === "visa") {
    paymentDetail.innerHTML = `
      <div class="field-grid">
        <label class="form-field">
          <span>Ngân hàng / công ty phát hành</span>
          <select name="visaProvider">
            ${buildOptionMarkup(VISA_PROVIDERS, state.checkoutData.visaProvider)}
          </select>
        </label>

        <label class="form-field">
          <span>Số thẻ</span>
          <input name="visaCardNumber" type="text" inputmode="numeric" placeholder="4111 1111 1111 1111" autocomplete="cc-number" value="${escapeHtml(state.checkoutData.visaCardNumber)}">
        </label>

        <label class="form-field full-row">
          <span>Họ tên chủ thẻ</span>
          <input name="visaCardName" type="text" placeholder="NGUYỄN VĂN A" autocomplete="cc-name" value="${escapeHtml(state.checkoutData.visaCardName)}">
        </label>

        <label class="form-field">
          <span>Ngày hết hạn</span>
          <input name="visaExpiry" type="text" inputmode="numeric" placeholder="MM/YY" autocomplete="cc-exp" value="${escapeHtml(state.checkoutData.visaExpiry)}">
        </label>

        <label class="form-field">
          <span>Mã thẻ / CVV</span>
          <input name="visaCvv" type="password" inputmode="numeric" placeholder="123" autocomplete="cc-csc" value="${escapeHtml(state.checkoutData.visaCvv)}">
        </label>
      </div>
      <p class="payment-hint">Hỗ trợ thẻ Visa từ BIDV, VCB, OCB, HomeCredit, SaigonHD và một số đơn vị khác.</p>
    `;
    return;
  }

  paymentDetail.innerHTML = `
    <div class="payment-note-box">
      <p class="payment-hint">
        Bạn sẽ thanh toán bằng tiền mặt cho nhân viên giao hàng sau khi nhận đủ sản phẩm. Không cần nhập thông tin thẻ.
      </p>
    </div>
  `;
}

function setCheckoutStep(step) {
  if (step === "checkout" && !state.cart.length) {
    showToast("Giỏ hàng đang trống. Thêm sản phẩm trước khi sang bước thanh toán.");
    return;
  }

  state.checkoutStep = step === "checkout" ? "checkout" : "cart";
  renderDrawerStage();
}

function handleCheckoutFieldUpdate(event) {
  const target = event.target;

  if (!(target instanceof HTMLInputElement) && !(target instanceof HTMLTextAreaElement) && !(target instanceof HTMLSelectElement)) {
    return;
  }

  if (!target.name) {
    return;
  }

  let { value } = target;

  if (target.name === "customerPhone") {
    value = formatPhoneInput(value);
    target.value = value;
  }

  if (target.name === "domesticCardNumber" || target.name === "visaCardNumber") {
    value = formatCardNumberInput(value);
    target.value = value;
  }

  if (target.name === "visaExpiry") {
    value = formatExpiryInput(value);
    target.value = value;
  }

  if (target.name === "visaCvv") {
    value = value.replace(/\D/g, "").slice(0, 4);
    target.value = value;
  }

  state.checkoutData[target.name] = value;
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (!state.cart.length) {
    showToast("Giỏ hàng đang trống. Không thể tạo đơn hàng.");
    state.checkoutStep = "cart";
    renderDrawerStage();
    return;
  }

  const errorMessage = validateCheckout();
  if (errorMessage) {
    showToast(errorMessage);
    return;
  }

  const paymentLabel = getPaymentMethodLabel(state.paymentMethod);
  state.cart = [];
  state.checkoutStep = "cart";
  state.paymentMethod = "cod";
  state.checkoutData = getDefaultCheckoutData();
  renderCart();
  showToast(`Đã ghi nhận đơn hàng đồ gia dụng thanh toán bằng ${paymentLabel}. Đây là thao tác mô phỏng giao diện.`);
}

function validateCheckout() {
  const formData = state.checkoutData;
  const phoneDigits = formData.customerPhone.replace(/\D/g, "");

  if (!formData.customerName.trim()) {
    return "Vui lòng nhập họ tên người nhận.";
  }

  if (phoneDigits.length < 9) {
    return "Vui lòng nhập số điện thoại hợp lệ.";
  }

  if (!formData.customerAddress.trim()) {
    return "Vui lòng nhập địa chỉ giao hàng.";
  }

  if (state.paymentMethod === "bank-card") {
    if (formData.domesticCardNumber.replace(/\D/g, "").length < 12) {
      return "Vui lòng nhập số thẻ ngân hàng hợp lệ.";
    }

    if (!formData.domesticCardName.trim()) {
      return "Vui lòng nhập họ tên chủ thẻ ngân hàng.";
    }
  }

  if (state.paymentMethod === "visa") {
    if (formData.visaCardNumber.replace(/\D/g, "").length < 13) {
      return "Vui lòng nhập số thẻ Visa hợp lệ.";
    }

    if (!formData.visaCardName.trim()) {
      return "Vui lòng nhập họ tên chủ thẻ Visa.";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.visaExpiry)) {
      return "Vui lòng nhập ngày hết hạn theo định dạng MM/YY.";
    }

    if (!/^\d{3,4}$/.test(formData.visaCvv)) {
      return "Vui lòng nhập mã CVV hợp lệ.";
    }
  }

  return "";
}

function toggleCart(isOpen) {
  cartDrawer.classList.toggle("open", isOpen);
  cartDrawer.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("cart-open", isOpen);
  syncOverlay();
}

function syncOverlay() {
  const shouldShowOverlay = state.isMegaMenuOpen || state.isStoreMenuOpen || state.isServiceMenuOpen || state.isAuthModalOpen || cartDrawer.classList.contains("open");
  overlay.hidden = !shouldShowOverlay;
  overlay.classList.toggle("visible", shouldShowOverlay);
}

function handleAuthModalClick(event) {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const authViewTrigger = target.closest("[data-auth-view]");
  if (authViewTrigger instanceof HTMLElement) {
    toggleAuthModal(true, authViewTrigger.dataset.authView || "login");
    return;
  }

  const socialToggleTrigger = target.closest("#auth-social-toggle");
  if (socialToggleTrigger instanceof HTMLElement) {
    state.showAuthSocials = !state.showAuthSocials;
    renderAuthModal();
    return;
  }

  const socialTrigger = target.closest("[data-social-login]");
  if (socialTrigger instanceof HTMLElement) {
    const provider = socialTrigger.dataset.socialLogin || "mạng xã hội";
    showToast(`Đăng nhập bằng ${provider} đang ở chế độ mô phỏng giao diện.`);
    toggleAuthModal(false, "login");
  }
}

function handleServiceMenuKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const serviceActionCard = target.closest("[data-service-action]");
  if (!(serviceActionCard instanceof HTMLElement) || serviceActionCard.dataset.serviceAction !== "open-register") {
    return;
  }

  event.preventDefault();
  toggleServiceMenu(false);
  toggleAuthModal(true, "register");
}

function handleAuthLoginSubmit(event) {
  event.preventDefault();

  const formData = new FormData(authLoginForm);
  const loginUser = String(formData.get("loginUser") || "").trim();
  const loginPass = String(formData.get("loginPass") || "").trim();

  if (!loginUser || !loginPass) {
    showToast("Vui lòng nhập đầy đủ tài khoản và mật khẩu để đăng nhập.");
    return;
  }

  authLoginForm.reset();
  toggleAuthModal(false, "login");
  showToast(`Đã đăng nhập mô phỏng cho tài khoản ${loginUser}.`);
}

function handleAuthRegisterSubmit(event) {
  event.preventDefault();

  const formData = new FormData(authRegisterForm);
  const registerLastName = String(formData.get("registerLastName") || "").trim();
  const registerFirstName = String(formData.get("registerFirstName") || "").trim();
  const registerPhone = String(formData.get("registerPhone") || "").replace(/\D/g, "");
  const registerEmail = String(formData.get("registerEmail") || "").trim();
  const registerUser = String(formData.get("registerUser") || "").trim();
  const registerPass = String(formData.get("registerPass") || "").trim();
  const registerOtp = String(formData.get("registerOtp") || "").trim();

  if (!registerLastName || !registerFirstName || !registerPhone || !registerEmail || !registerUser || !registerPass || !registerOtp) {
    showToast("Vui lòng điền đầy đủ họ tên, SĐT, email, tài khoản, mật khẩu và mã OTP.");
    return;
  }

  if (!/^\d{9,11}$/.test(registerPhone)) {
    showToast("Số điện thoại chưa hợp lệ. Bạn hãy nhập 9 đến 11 chữ số.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerEmail)) {
    showToast("Email chưa đúng định dạng. Bạn kiểm tra lại nhé.");
    return;
  }

  if (registerPass.length < 6) {
    showToast("Mật khẩu mô phỏng cần ít nhất 6 ký tự.");
    return;
  }

  if (!/^\d{4,8}$/.test(registerOtp)) {
    showToast("Mã OTP chỉ nên gồm 4 đến 8 chữ số.");
    return;
  }

  const memberName = `${registerLastName} ${registerFirstName}`.trim();
  authRegisterForm.reset();
  toggleAuthModal(false, "login");
  showToast(`Đã tạo tài khoản mô phỏng cho ${memberName || registerUser}.`);
}

function loadCart() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function persistCart() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
}

function findProduct(productId) {
  return products.find((product) => product.id === productId) || null;
}

function getCartTotals() {
  const subtotal = state.cart.reduce((total, item) => {
    const product = findProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
  const shipping = subtotal > 0 && subtotal < SHIPPING_THRESHOLD ? SHIPPING_FEE : 0;

  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
    quantity: state.cart.reduce((sum, item) => sum + item.quantity, 0)
  };
}

function getDefaultCheckoutData() {
  return {
    customerName: "",
    customerPhone: "",
    customerAddress: "",
    customerNote: "",
    domesticBank: DOMESTIC_BANKS[0],
    domesticCardNumber: "",
    domesticCardName: "",
    visaProvider: VISA_PROVIDERS[0],
    visaCardNumber: "",
    visaCardName: "",
    visaExpiry: "",
    visaCvv: ""
  };
}

function syncCheckoutBaseFields() {
  setFieldValue("customerName", state.checkoutData.customerName);
  setFieldValue("customerPhone", state.checkoutData.customerPhone);
  setFieldValue("customerAddress", state.checkoutData.customerAddress);
  setFieldValue("customerNote", state.checkoutData.customerNote);
}

function setFieldValue(name, value) {
  const field = checkoutForm.elements.namedItem(name);
  if (field && "value" in field) {
    field.value = value;
  }
}

function buildOptionMarkup(options, selectedValue) {
  return options.map((option) => `<option value="${option}" ${option === selectedValue ? "selected" : ""}>${option}</option>`).join("");
}

function formatCurrency(value) {
  return `${new Intl.NumberFormat("vi-VN").format(value)}d`;
}

function formatPhoneInput(value) {
  return value.replace(/\D/g, "").slice(0, 11);
}

function formatCardNumberInput(value) {
  return value.replace(/\D/g, "").slice(0, 19).replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function formatExpiryInput(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length < 3) {
    return digits;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function getPaymentMethodLabel(method) {
  if (method === "bank-card") {
    return "Thẻ ngân hàng";
  }

  if (method === "visa") {
    return "Thẻ Visa";
  }

  return "Tiền mặt khi nhận hàng";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2400);
}

function updateBackToTopButton() {
  backToTopButton.classList.toggle("visible", window.scrollY > 600);
}
