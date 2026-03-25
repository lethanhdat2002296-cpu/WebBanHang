const products = [
  { id: "ke-gia-vi-3-tang", name: "Ke gia vi 3 tang khung thep", category: "Ke & Gia", room: "Nhà Bếp", price: 289000, originalPrice: 355000, rating: 4.8, stock: 12, featuredRank: 1, badge: "Ban chay", description: "Ke gia vi nho gon giup sap xep chai lo va dung cu nau an theo chieu doc gon mat.", tags: ["3 tang", "Thep son", "Lap nhanh", "Ke tu gia vi"], glyph: "KE3", color: "#d7c29f" },
  { id: "tu-vai-2-canh", name: "Tu vai 2 canh khung kim loai", category: "Tu & Luu tru", room: "Phòng Ngủ", price: 599000, originalPrice: 720000, rating: 4.7, stock: 8, featuredRank: 2, badge: "Moi ve", description: "Mau be trung tinh, co ngan treo va ke gap phu hop phong tro hoac can ho mini.", tags: ["2 canh", "Khung sat", "Phong ngu"], glyph: "TU2", color: "#c9baa7" },
  { id: "bo-noi-inox-5-day", name: "Bo noi inox 5 day 3 mon", category: "Noi & Chao", room: "Nhà Bếp", price: 849000, originalPrice: 1020000, rating: 4.9, stock: 10, featuredRank: 3, badge: "Noi bat", description: "Bo noi inox day dan, dung duoc tren bep tu va bep gas, phu hop gia dinh tre.", tags: ["Inox 5 day", "3 mon", "Bep tu", "Dung cu lam bep"], glyph: "NOI", color: "#d5d8dc" },
  { id: "chao-sau-long-da", name: "Chao sau long phu da 28cm", category: "Noi & Chao", room: "Nhà Bếp", price: 379000, originalPrice: 449000, rating: 4.8, stock: 15, featuredRank: 4, badge: "Gia tot", description: "Long chao sau, de xao nau, lop phu da han che bam dinh va de ve sinh sau bua an.", tags: ["28cm", "Phu da", "Can go", "Bep ga"], glyph: "CHA", color: "#cdb6a2" },
  { id: "ke-sach-go-mini", name: "Ke sach go mini 4 tang", category: "Ke & Gia", room: "Phòng Khách", price: 729000, originalPrice: 860000, rating: 4.7, stock: 6, featuredRank: 5, badge: "Phong cach", description: "Ke sach da nang co the dung lam ke decor, ke cay nho hoac de hop luu tru.", tags: ["4 tang", "Go cong nghiep", "Ke trang tri", "Tranh"], glyph: "SHE", color: "#d9bf96" },
  { id: "tu-giay-3-tang", name: "Tu giay 3 tang cua lat", category: "Tu & Luu tru", room: "Phòng Khách", price: 459000, originalPrice: 559000, rating: 4.6, stock: 11, featuredRank: 6, badge: "Gon nha", description: "Mau go dam, de ngay cua ra vao, giu giay dep gon gang va it bam bui hon.", tags: ["3 tang", "Cua lat", "Ke tivi", "Phong khach"], glyph: "TUG", color: "#bea590" },
  { id: "gia-treo-nha-tam", name: "Gia treo nha tam hut chan khong", category: "Ve sinh & Phu tro", room: "Nhà Vệ Sinh", price: 169000, originalPrice: 219000, rating: 4.7, stock: 17, featuredRank: 7, badge: "Tien loi", description: "De sua tam, dau goi va khan tam ma khong can khoan tuong, phu hop nha thue.", tags: ["Hut chan khong", "Chong ri", "Nha tam", "Dung cu ve sinh ca nhan"], glyph: "TRE", color: "#c9d8e8" },
  { id: "xe-day-don-dep", name: "Xe day don dep 3 ngan", category: "Ve sinh & Phu tro", room: "Nhà Kho", price: 649000, originalPrice: 790000, rating: 4.8, stock: 5, featuredRank: 8, badge: "Da nang", description: "De xep nuoc lau, khan, binh xit va phu kien don dep theo tung ngan rieng biet.", tags: ["3 ngan", "Co banh xe", "Don dep", "Nha kho"], glyph: "XED", color: "#d1c4df" },
  { id: "ke-lo-vi-song", name: "Ke de lo vi song 2 tang", category: "Ke & Gia", room: "Nhà Bếp", price: 399000, originalPrice: 475000, rating: 4.6, stock: 13, featuredRank: 9, badge: "Tiet kiem dien tich", description: "Tang duoi de lo vi song, tang tren de bat dia va gia vi giup ban bep gon hon.", tags: ["2 tang", "Bep", "Chiu luc", "Bon rua rau cu"], glyph: "KLV", color: "#d9ccb6" },
  { id: "tu-dau-giuong-mini", name: "Tu dau giuong mini 2 ngan", category: "Tu & Luu tru", room: "Phòng Ngủ", price: 519000, originalPrice: 620000, rating: 4.7, stock: 9, featuredRank: 10, badge: "Toi gian", description: "Kich thuoc vua canh giuong 1m6, de den ngu, sach va cac vat dung ca nhan nho gon.", tags: ["2 ngan", "Phong ngu", "Go MDF", "Den ngu"], glyph: "TDN", color: "#d8c6b7" },
  { id: "may-hut-bui-cam-tay", name: "May hut bui cam tay mini", category: "Dien gia dung", room: "Phòng Khách", price: 789000, originalPrice: 930000, rating: 4.8, stock: 7, featuredRank: 11, badge: "Cao cap", description: "Luc hut on dinh, phu hop ghe sofa, rem cua, ke sach va nhung vi tri kho tiep can.", tags: ["Khong day", "Sac USB-C", "3 dau hut", "Sofa"], glyph: "VAC", color: "#cdd6e7" },
  { id: "hop-luu-tru-trong-suot", name: "Hop luu tru trong suot 6 mon", category: "Tu & Luu tru", room: "Nhà Bếp", price: 249000, originalPrice: 315000, rating: 4.9, stock: 20, featuredRank: 12, badge: "Yeu thich", description: "Dung gao, nui, gia vi kho hoac thuc pham kho, giu can bep sach va de quan sat.", tags: ["6 mon", "Trong suot", "Nap kin", "Tu lanh"], glyph: "BOX", color: "#dce5d4" },
  { id: "ban-an-gap-gon-mini", name: "Ban an gap gon mini 4 cho", category: "Ban an & Phong khach", room: "Nhà Bếp", price: 1290000, originalPrice: 1490000, rating: 4.6, stock: 4, featuredRank: 13, badge: "Can ho nho", description: "Ban an gap gon co the sat tuong khi khong su dung, giup toi uu khong gian song.", tags: ["Gap gon", "4 cho", "Can ho mini", "Ban an"], glyph: "BAN", color: "#dcc4a5" },
  { id: "binh-giu-nhiet-gia-dinh", name: "Binh giu nhiet gia dinh 1.5L", category: "Ban an & Phong khach", room: "Nhà Bếp", price: 329000, originalPrice: 399000, rating: 4.8, stock: 14, featuredRank: 14, badge: "Ban chay", description: "Dung tren ban an, giu nong lau, tay cam chac va vo ngoai trung tinh de phoi noi that.", tags: ["1.5L", "Inox 304", "Ban an"], glyph: "BNH", color: "#e2d2ad" },
  { id: "sofa-bang-mini", name: "Sofa bang mini 3 cho boc ni", category: "Ban an & Phong khach", room: "Phòng Khách", price: 3590000, originalPrice: 4190000, rating: 4.7, stock: 3, featuredRank: 15, badge: "Phong khach", description: "Kich thuoc hop can ho 2 phong, mau kem de phoi voi tranh va den chum.", tags: ["Sofa", "Phong khach", "Den chum"], glyph: "SOF", color: "#d9c9c0" },
  { id: "voi-sen-tang-ap", name: "Voi sen tang ap 3 che do", category: "Ve sinh & Phu tro", room: "Nhà Vệ Sinh", price: 259000, originalPrice: 319000, rating: 4.8, stock: 16, featuredRank: 16, badge: "De lap", description: "Tang ap luc nuoc, de thao lap, phu hop can ho va nha pho.", tags: ["Voi sen", "Bon rua mat", "Nha ve sinh"], glyph: "SEN", color: "#d4e1ef" },
  { id: "choi-quet-san-ban-lon", name: "Choi quet san ban lon", category: "Ve sinh & Phu tro", room: "Nhà Kho", price: 139000, originalPrice: 179000, rating: 4.6, stock: 18, featuredRank: 17, badge: "Nha kho", description: "Can dai, long choi ben, hop de quet nha kho, san thuong va loi di rong.", tags: ["Choi quet nha", "Quet san", "Nha kho"], glyph: "CHO", color: "#d8d3c7" },
  { id: "voi-tuoi-cay-cuon", name: "Voi tuoi cay cuon 15m", category: "Ve sinh & Phu tro", room: "Sân Vườn", price: 469000, originalPrice: 545000, rating: 4.7, stock: 9, featuredRank: 18, badge: "San vuon", description: "Day tuoi mem, cuon gon, co dau phun nhieu che do de cham cay va rua san.", tags: ["Voi tuoi cay", "San vuon", "Tuoi cay"], glyph: "VOI", color: "#cadfb8" },
  { id: "ghe-gap-san-vuon", name: "Ghe gap san vuon khung sat", category: "Ban an & Phong khach", room: "Sân Vườn", price: 389000, originalPrice: 459000, rating: 4.5, stock: 7, featuredRank: 19, badge: "Ngoai troi", description: "Ghe gap de xep gon sau khi su dung, phu hop san vuon nho va ban cong.", tags: ["Ghe san vuon", "Ngoai troi", "Gap gon"], glyph: "GHE", color: "#c3d3b6" }
];

const bundleProduct = { id: "combo-bep-nha-moi", name: "Combo can bep nha moi", category: "Combo", room: "Nhà Bếp", price: 1390000, originalPrice: 1690000, rating: 5, stock: 5, featuredRank: 0, badge: "Combo tiet kiem", description: "Gom bo noi mini, ke gia vi, hop luu tru va khan bep cho can ho moi setup.", tags: ["4 mon", "Nha Bep", "Tiet kiem 18%"], glyph: "SET", color: "#e8c38d" };

const STORAGE_KEY = "nha-xinh-mart-cart";
const SHIPPING_THRESHOLD = 699000;
const SHIPPING_FEE = 30000;
const PAGE_SIZE = 6;
const DOMESTIC_BANKS = ["BIDV", "VCB", "OCB", "Techcombank", "VPBank", "Agribank"];
const VISA_PROVIDERS = ["BIDV", "VCB", "OCB", "Techcombank", "HomeCredit", "SaigonHD", "Mcredit"];
const megaMenuData = {
  "Phòng Khách": [
    { title: "Noi that chinh", items: ["Tivi", "Sofa", "Ban tra", "Ke tivi"] },
    { title: "Anh sang & decor", items: ["Den chum", "Den cay", "Tranh treo", "Rem cua"] },
    { title: "Tien ich phong khach", items: ["May loc khong khi", "Quat dung", "Ke sach", "Tu giay"] }
  ],
  "Nhà Bếp": [
    { title: "Dung cu lam bep", items: ["Noi", "Chao", "Dao keo", "May xay"] },
    { title: "Khu nau an", items: ["Bep tu", "Bep ga", "Tu lanh", "Bon rua rau cu"] },
    { title: "Ban an & luu tru", items: ["Ban an", "Gia vi", "Ke tu gia vi", "Hop luu tru"] }
  ],
  "Nhà Vệ Sinh": [
    { title: "Ve sinh ca nhan", items: ["Ke sua tam", "Khan tam", "Guong", "Bon rua mat"] },
    { title: "Dung cu don dep", items: ["Cay co toilet", "Ban chai chan", "Nuoc rua", "Keo gat nuoc"] },
    { title: "Thiet bi nuoc", items: ["Voi sen", "Voi rua", "Gia treo", "Tu dung do"] }
  ],
  "Phòng Ngủ": [
    { title: "Noi that ngu", items: ["Nem", "Giuong", "Tu dau giuong", "Tu vai"] },
    { title: "Cham soc ca nhan", items: ["Ban trang diem", "Guong", "Hop trang suc", "Ke dung my pham"] },
    { title: "Anh sang & mem mai", items: ["Den ngu", "Bao goi", "Chan ga", "Rem che"] }
  ],
  "Nhà Kho": [
    { title: "Ve sinh kho", items: ["Choi quet nha", "Quet san", "Ky hot rac", "Xe day don dep"] },
    { title: "Sap xep vat dung", items: ["Ke kho", "Thung nhua", "Moc treo", "Tu dung do"] },
    { title: "Dung cu ho tro", items: ["Voi tuoi cay", "Day noi", "Bao tay", "Ke sat"] }
  ],
  "Sân Vườn": [
    { title: "Cham cay", items: ["Voi tuoi cay", "Binh tuoi", "Ke trong cay", "Chau cay"] },
    { title: "Ngoai troi", items: ["Ghe san vuon", "Ban gap", "Den san vuon", "Keo cat la"] },
    { title: "Lam sach san", items: ["Choi san", "Keo gat nuoc", "Hop dung dung cu", "Ke de ngoai troi"] }
  ]
};

const storeMenuData = {
  "Ho Chi Minh": [
    {
      name: "Showroom Quan 1",
      address: "123 Nguyen Thi Minh Khai, Phuong Ben Thanh, Quan 1, TP. Ho Chi Minh",
      phone: "028 7300 6868",
      hours: "08:00 - 21:00"
    },
    {
      name: "Showroom Thu Duc",
      address: "88 Vo Van Ngan, Phuong Binh Tho, TP. Thu Duc, TP. Ho Chi Minh",
      phone: "028 7300 6869",
      hours: "08:00 - 21:00"
    }
  ],
  "Ha Noi": [
    {
      name: "Showroom Cau Giay",
      address: "45 Tran Thai Tong, Dich Vong Hau, Cau Giay, Ha Noi",
      phone: "024 7300 6868",
      hours: "08:00 - 21:00"
    },
    {
      name: "Showroom Ha Dong",
      address: "210 Quang Trung, Ha Cau, Ha Dong, Ha Noi",
      phone: "024 7300 6869",
      hours: "08:00 - 21:00"
    }
  ],
  "Da Nang": [
    {
      name: "Showroom Hai Chau",
      address: "169 Nguyen Van Linh, Nam Duong, Hai Chau, Da Nang",
      phone: "0236 730 6868",
      hours: "08:00 - 20:30"
    },
    {
      name: "Showroom Thanh Khe",
      address: "52 Dien Bien Phu, Chinh Gian, Thanh Khe, Da Nang",
      phone: "0236 730 6869",
      hours: "08:00 - 20:30"
    }
  ]
};

const serviceMenuData = {
  "Cham soc KH 24/7": [
    {
      title: "Khieu nai",
      description: "Tiep nhan va theo doi cac van de ve giao hang, san pham loi, sai mau hoac trai nghiem chua nhu mong doi.",
      note: "Hotline uu tien: 1900 5301"
    },
    {
      title: "Goi dat hang",
      description: "Dat nhanh qua tong dai khi can tu van ngay ve ton kho, giao nhanh hoac combo phu hop cho tung khong gian.",
      note: "Nhan don tu 08:00 - 21:00"
    },
    {
      title: "Tu van dich vu",
      description: "Ho tro lap dat, doi tra, bao hanh mo phong va tu van lua chon goi giao nhan cho do gia dung cong kenh.",
      note: "Phan hoi trong gio lam viec"
    }
  ],
  "Dang ky thanh vien": [
    {
      title: "Dang ky thanh vien",
      description: "Tao tai khoan thanh vien de luu thong tin mua hang, nhan uu dai sinh nhat, tich diem va cap nhat deal moi som hon.",
      note: "Dang ky mien phi"
    }
  ]
};

const promotionPrograms = [
  {
    badge: "Thanh vien moi",
    title: "Tivi phong khach giam 15% cho khach hang vua dang ky",
    description: "Ap dung cho tai khoan thanh vien moi trong 7 ngay dau, uu tien nhom tivi, ke tivi va decor phong khach.",
    offer: "Giam 15%",
    scope: "Don dau tien",
    note: "Tang voucher lap dat 200.000d",
    chips: ["Tivi treo tuong", "Ke tivi", "Thanh vien moi"]
  },
  {
    badge: "Hoa don lon",
    title: "Thanh toan hoa don tren 5.000.000d duoc giam them 5%",
    description: "Tu dong ap dung cho don gia dung gia tri cao nhu sofa, tu luu tru, ke sach va cac set noi that phong khach.",
    offer: "Them 5%",
    scope: "Don tu 5 trieu",
    note: "Ap dung ca thanh toan the ngan hang",
    chips: ["Sofa", "Tu luu tru", "Hoa don gia tri cao"]
  },
  {
    badge: "Deal nha bep",
    title: "Bo noi chao va dung cu nau an mua 2 mon giam 10%",
    description: "Danh cho nguoi moi setup can bep, co the mix noi inox, chao sau long, ke gia vi va hop luu tru trong cung dot sale.",
    offer: "Giam 10%",
    scope: "Mix 2 mon bat ky",
    note: "Tang mien phi giao nhanh noi thanh",
    chips: ["Noi inox", "Chao chong dinh", "Ke gia vi"]
  },
  {
    badge: "Khong tien mat",
    title: "Quet the ngan hang hoac Visa nhan voucher 300.000d",
    description: "Ap dung cho don tu 3.500.000d tro len, phu hop khi mua tu, ke, combo bep va cac mat hang gia dung cong kenh.",
    offer: "Voucher 300k",
    scope: "Don tu 3,5 trieu",
    note: "Dung cho lan mua tiep theo",
    chips: ["The ngan hang", "The Visa", "Voucher uu dai"]
  }
];

const state = {
  search: "",
  category: "Tat ca",
  room: "Tat ca khong gian",
  sort: "featured",
  view: "grid",
  page: 1,
  promotionIndex: 0,
  isMegaMenuOpen: false,
  isStoreMenuOpen: false,
  isServiceMenuOpen: false,
  megaMenuRoom: "Phòng Khách",
  cart: loadCart(),
  storeCity: "Ho Chi Minh",
  serviceGroup: "Cham soc KH 24/7",
  checkoutStep: "cart",
  paymentMethod: "cod",
  checkoutData: getDefaultCheckoutData()
};

const categories = ["Tat ca", ...new Set(products.map((item) => item.category))];
const rooms = ["Tat ca khong gian", ...new Set(products.map((item) => item.room))];

const resultCount = document.getElementById("result-count");
const categoryFilters = document.getElementById("category-filters");
const roomFilters = document.getElementById("room-filters");
const sidebarCategoryFilters = document.getElementById("sidebar-category-filters");
const sidebarRoomFilters = document.getElementById("sidebar-room-filters");
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
const addBundleBtn = document.getElementById("add-bundle");
const bundleCtaBtn = document.getElementById("bundle-cta");
const stageSwitchButtons = document.querySelectorAll("[data-stage-switch]");
const paymentOptionButtons = document.querySelectorAll("[data-payment-method]");
let promotionAutoplayId = null;

renderSidebarFilters();
renderTopFilters();
renderMegaMenu();
renderStoreMenu();
renderServiceMenu();
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
  toggleCart(true);
});
closeCartBtn.addEventListener("click", () => toggleCart(false));
overlay.addEventListener("click", () => {
  toggleMegaMenu(false);
  toggleStoreMenu(false);
  toggleServiceMenu(false);
  toggleCart(false);
});
categoryTrigger.addEventListener("click", () => {
  const nextOpen = !state.isMegaMenuOpen;
  if (nextOpen) {
    toggleCart(false);
    toggleStoreMenu(false);
    toggleServiceMenu(false);
  }
  toggleMegaMenu(nextOpen);
});
storeTrigger.addEventListener("click", () => {
  const nextOpen = !state.isStoreMenuOpen;
  if (nextOpen) {
    toggleCart(false);
    toggleMegaMenu(false);
    toggleServiceMenu(false);
  }
  toggleStoreMenu(nextOpen);
});
serviceTrigger.addEventListener("click", () => {
  const nextOpen = !state.isServiceMenuOpen;
  if (nextOpen) {
    toggleCart(false);
    toggleMegaMenu(false);
    toggleStoreMenu(false);
  }
  toggleServiceMenu(nextOpen);
});
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
  }
});

checkoutBtn.addEventListener("click", () => {
  if (!state.cart.length) {
    showToast("Gio hang dang trong. Them san pham truoc khi dat hang nhe.");
    return;
  }

  setCheckoutStep("checkout");
});

addBundleBtn.addEventListener("click", () => {
  addToCart(bundleProduct.id, bundleProduct);
  toggleCart(true);
});

bundleCtaBtn.addEventListener("click", () => {
  document.getElementById("promo").scrollIntoView({ behavior: "smooth", block: "center" });
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
    setCategoryFilter(target.dataset.filterTarget || "Tat ca");
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

    state.room = room;
    state.search = hasMatch ? item.toLowerCase() : "";
    searchInput.value = hasMatch ? item : "";
    state.page = 1;
    renderProducts();
    toggleMegaMenu(false);

    if (!hasMatch) {
      showToast(`Da chuyen sang ${room}. Ban co the bo sung them san pham cho nhom ${item} sau.`);
    }

    document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (target.matches("[data-store-city]")) {
    state.storeCity = target.dataset.storeCity || "Ho Chi Minh";
    renderStoreMenu();
  }

  if (target.matches("[data-service-group]")) {
    state.serviceGroup = target.dataset.serviceGroup || "Cham soc KH 24/7";
    renderServiceMenu();
  }

  if (target.matches("[data-category-filter]")) {
    setCategoryFilter(target.dataset.categoryFilter || "Tat ca");
  }

  if (target.matches("[data-room-filter]")) {
    setRoomFilter(target.dataset.roomFilter || "Tat ca khong gian");
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
      showToast(`${product.name} dang o che do demo frontend. Ban co the mo rong sang trang chi tiet sau.`);
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
        <p><strong>Gio mo cua:</strong> ${branch.hours}</p>
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
    <article class="service-card">
      <h4>${card.title}</h4>
      <p>${card.description}</p>
      <span class="service-card-note">${card.note}</span>
    </article>
  `).join("");
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
          <span>Uu dai noi bat</span>
          <strong>${program.offer}</strong>
          <p>${program.note}</p>
        </div>

        <div class="promotion-metrics">
          <article class="promotion-metric">
            <span>Ap dung</span>
            <strong>${program.scope}</strong>
            <p>Uu dai tu dong doi voi cac don hang nam trong dieu kien cua chuong trinh.</p>
          </article>
          <article class="promotion-metric">
            <span>Danh muc</span>
            <strong>${program.badge}</strong>
            <p>Ban co the dung khu vuc loc san pham o tren de tim nhanh nhung mon dang duoc uu dai.</p>
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
      aria-label="Xem khuyen mai ${index + 1}: ${program.badge}"
      aria-pressed="${state.promotionIndex === index}"
    ></button>
  `).join("");
  promotionStatus.textContent = `Dang hien ${state.promotionIndex + 1}/${totalPromotions}: ${currentPromotion.title}`;
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

function renderSidebarFilters() {
  sidebarCategoryFilters.innerHTML = categories.map((category) => `
    <button class="sidebar-filter-btn ${state.category === category ? "active" : ""}" type="button" data-category-filter="${category}">
      ${category}
    </button>
  `).join("");

  sidebarRoomFilters.innerHTML = rooms.map((room) => `
    <button class="sidebar-filter-btn ${state.room === room ? "active" : ""}" type="button" data-room-filter="${room}">
      ${room}
    </button>
  `).join("");
}

function renderTopFilters() {
  categoryFilters.innerHTML = categories.map((category) => `
    <button class="filter-chip ${state.category === category ? "active" : ""}" type="button" data-category-filter="${category}">
      ${category}
    </button>
  `).join("");

  roomFilters.innerHTML = rooms.map((room) => `
    <button class="room-pill ${state.room === room ? "active" : ""}" type="button" data-room-filter="${room}">
      ${room}
    </button>
  `).join("");

  renderViewButtons();
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

  resultCount.textContent = `${filteredProducts.length} san pham`;
  productGrid.classList.toggle("list-mode", state.view === "list");
  renderSidebarFilters();
  renderTopFilters();

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <article class="empty-state">
        <h3>Khong tim thay san pham phu hop</h3>
        <p>Thu doi tu khoa tim kiem hoac chuyen qua nhom ke, tu, noi chao khac de xem them mat hang.</p>
      </article>
    `;
    pagination.innerHTML = "";
    return;
  }

  productGrid.innerHTML = pageItems.map((product, index) => `
    <article class="product-card" style="animation-delay: ${index * 60}ms">
      <div class="product-media" style="--visual-color: ${product.color}">
        <span class="product-badge">${product.badge}</span>
        <span class="product-stock">Con ${product.stock}</span>
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
            <button class="add-btn" type="button" data-add-to-cart="${product.id}">Them gio</button>
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
      Truoc
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
  state.room = room;
  state.page = 1;
  renderProducts();
}

function getFilteredProducts() {
  return [...products]
    .filter((product) => state.category === "Tat ca" || product.category === state.category)
    .filter((product) => state.room === "Tat ca khong gian" || product.room === state.room)
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
          <button class="remove-btn" type="button" data-cart-action="remove" data-product-id="${product.id}">Xoa san pham</button>
        </div>
        <strong>${formatCurrency(product.price * cartItem.quantity)}</strong>
      </article>
    `;
  }).join("");

  cartItems.innerHTML = items || `
    <article class="empty-state">
      <h3>Gio hang dang trong</h3>
      <p>Them mot vai mon ke, tu, noi chao hoac phu kien nha cua de tiep tuc checkout.</p>
    </article>
  `;

  const totals = getCartTotals();

  if (!totals.quantity && state.checkoutStep === "checkout") {
    state.checkoutStep = "cart";
  }

  cartCount.textContent = String(totals.quantity);
  subtotalNode.textContent = formatCurrency(totals.subtotal);
  shippingNode.textContent = totals.shipping ? formatCurrency(totals.shipping) : "Mien phi";
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
  showToast(`Da them ${product.name} vao gio hang.`);
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
  checkoutShippingNode.textContent = totals.shipping ? formatCurrency(totals.shipping) : "Mien phi";
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
          <span>Chon ngan hang</span>
          <select name="domesticBank">
            ${buildOptionMarkup(DOMESTIC_BANKS, state.checkoutData.domesticBank)}
          </select>
        </label>

        <label class="form-field">
          <span>So the</span>
          <input name="domesticCardNumber" type="text" inputmode="numeric" placeholder="9704 0000 0000 0000" autocomplete="cc-number" value="${escapeHtml(state.checkoutData.domesticCardNumber)}">
        </label>

        <label class="form-field full-row">
          <span>Ho ten chu the</span>
          <input name="domesticCardName" type="text" placeholder="NGUYEN VAN A" autocomplete="cc-name" value="${escapeHtml(state.checkoutData.domesticCardName)}">
        </label>
      </div>
      <p class="payment-hint">Ho tro thanh toan qua BIDV, VCB, OCB va cac ngan hang noi dia khac.</p>
    `;
    return;
  }

  if (state.paymentMethod === "visa") {
    paymentDetail.innerHTML = `
      <div class="field-grid">
        <label class="form-field">
          <span>Ngan hang / cong ty phat hanh</span>
          <select name="visaProvider">
            ${buildOptionMarkup(VISA_PROVIDERS, state.checkoutData.visaProvider)}
          </select>
        </label>

        <label class="form-field">
          <span>So the</span>
          <input name="visaCardNumber" type="text" inputmode="numeric" placeholder="4111 1111 1111 1111" autocomplete="cc-number" value="${escapeHtml(state.checkoutData.visaCardNumber)}">
        </label>

        <label class="form-field full-row">
          <span>Ho ten chu the</span>
          <input name="visaCardName" type="text" placeholder="NGUYEN VAN A" autocomplete="cc-name" value="${escapeHtml(state.checkoutData.visaCardName)}">
        </label>

        <label class="form-field">
          <span>Ngay het han</span>
          <input name="visaExpiry" type="text" inputmode="numeric" placeholder="MM/YY" autocomplete="cc-exp" value="${escapeHtml(state.checkoutData.visaExpiry)}">
        </label>

        <label class="form-field">
          <span>Ma the / CVV</span>
          <input name="visaCvv" type="password" inputmode="numeric" placeholder="123" autocomplete="cc-csc" value="${escapeHtml(state.checkoutData.visaCvv)}">
        </label>
      </div>
      <p class="payment-hint">Ho tro the Visa tu BIDV, VCB, OCB, HomeCredit, SaigonHD va mot so don vi khac.</p>
    `;
    return;
  }

  paymentDetail.innerHTML = `
    <div class="payment-note-box">
      <p class="payment-hint">
        Ban se thanh toan bang tien mat cho nhan vien giao hang sau khi nhan du san pham. Khong can nhap thong tin the.
      </p>
    </div>
  `;
}

function setCheckoutStep(step) {
  if (step === "checkout" && !state.cart.length) {
    showToast("Gio hang dang trong. Them san pham truoc khi sang buoc thanh toan.");
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
    showToast("Gio hang dang trong. Khong the tao don hang.");
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
  showToast(`Da ghi nhan don hang do gia dung thanh toan bang ${paymentLabel}. Day la thao tac mo phong frontend.`);
}

function validateCheckout() {
  const formData = state.checkoutData;
  const phoneDigits = formData.customerPhone.replace(/\D/g, "");

  if (!formData.customerName.trim()) {
    return "Vui long nhap ho ten nguoi nhan.";
  }

  if (phoneDigits.length < 9) {
    return "Vui long nhap so dien thoai hop le.";
  }

  if (!formData.customerAddress.trim()) {
    return "Vui long nhap dia chi giao hang.";
  }

  if (state.paymentMethod === "bank-card") {
    if (formData.domesticCardNumber.replace(/\D/g, "").length < 12) {
      return "Vui long nhap so the ngan hang hop le.";
    }

    if (!formData.domesticCardName.trim()) {
      return "Vui long nhap ho ten chu the ngan hang.";
    }
  }

  if (state.paymentMethod === "visa") {
    if (formData.visaCardNumber.replace(/\D/g, "").length < 13) {
      return "Vui long nhap so the Visa hop le.";
    }

    if (!formData.visaCardName.trim()) {
      return "Vui long nhap ho ten chu the Visa.";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.visaExpiry)) {
      return "Vui long nhap ngay het han theo dinh dang MM/YY.";
    }

    if (!/^\d{3,4}$/.test(formData.visaCvv)) {
      return "Vui long nhap ma CVV hop le.";
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
  const shouldShowOverlay = state.isMegaMenuOpen || state.isStoreMenuOpen || state.isServiceMenuOpen || cartDrawer.classList.contains("open");
  overlay.hidden = !shouldShowOverlay;
  overlay.classList.toggle("visible", shouldShowOverlay);
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
  return products.find((product) => product.id === productId) || (bundleProduct.id === productId ? bundleProduct : null);
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
    return "the ngan hang";
  }

  if (method === "visa") {
    return "the Visa";
  }

  return "tien mat khi nhan hang";
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
