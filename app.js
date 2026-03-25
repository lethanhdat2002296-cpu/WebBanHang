const products = [
  {
    id: "nx-noi-ceramic",
    name: "Noi chao ceramic 3 mon",
    category: "Nau nuong",
    price: 689000,
    originalPrice: 845000,
    rating: 4.9,
    badge: "Ban chay",
    description: "Chat lieu chong dinh ben, ton mau kem nau phu hop can bep toi gian.",
    tags: ["Chong dinh", "Bep tu", "3 mon"],
    glyph: "PAN",
    color: "#f1b37b"
  },
  {
    id: "nx-hop-thuc-pham",
    name: "Hop dung thuc pham 6 mon",
    category: "Luu tru",
    price: 259000,
    originalPrice: 329000,
    rating: 4.8,
    badge: "Tiet kiem",
    description: "Nap kin, trong suot, phu hop tu lanh va meal prep hang tuan.",
    tags: ["Nap kin", "BPA free", "6 hop"],
    glyph: "BOX",
    color: "#c9ddb4"
  },
  {
    id: "nx-may-xay-mini",
    name: "May xay mini da nang",
    category: "Dien gia dung",
    price: 519000,
    originalPrice: 620000,
    rating: 4.7,
    badge: "Moi ve",
    description: "Xay sinh to, sot va gia vi nhanh gon, de thao roi de ve sinh.",
    tags: ["500W", "2 coc", "Nho gon"],
    glyph: "MIX",
    color: "#f7d2a6"
  },
  {
    id: "nx-ke-chen-dia",
    name: "Ke up chen dia tang 2",
    category: "Luu tru",
    price: 349000,
    originalPrice: 415000,
    rating: 4.6,
    badge: "Gon nha",
    description: "Thiet ke tach khay hung nuoc, giup khu vuc bon rua sach va kho hon.",
    tags: ["Thep son tinh dien", "2 tang", "De lap"],
    glyph: "RCK",
    color: "#b4d5d4"
  },
  {
    id: "nx-cay-lau-spray",
    name: "Cay lau nha binh xit",
    category: "Ve sinh",
    price: 219000,
    originalPrice: 279000,
    rating: 4.8,
    badge: "Tien loi",
    description: "Binh xit tich hop, dau lau xoay 360 do, hop voi can ho va phong tro.",
    tags: ["360 do", "De thao nuoc", "Nhe tay"],
    glyph: "MOP",
    color: "#b5cff4"
  },
  {
    id: "nx-binh-giu-nhiet",
    name: "Binh giu nhiet inox 1L",
    category: "Phong an",
    price: 285000,
    originalPrice: 345000,
    rating: 4.9,
    badge: "Yeu thich",
    description: "Giu nong lanh lau, tay cam chac chan, dung dep cho ban an gia dinh.",
    tags: ["1 lit", "Inox 304", "Giu nhiet 12h"],
    glyph: "MUG",
    color: "#f4d28a"
  },
  {
    id: "nx-may-hut-bui",
    name: "May hut bui cam tay mini",
    category: "Ve sinh",
    price: 799000,
    originalPrice: 950000,
    rating: 4.8,
    badge: "Cao cap",
    description: "Luc hut on dinh, phu hop ghe sofa, o to va cac khe nho trong nha.",
    tags: ["Khong day", "3 dau hut", "Sac USB-C"],
    glyph: "VAC",
    color: "#d8c1ef"
  },
  {
    id: "nx-bo-khan-bep",
    name: "Bo khan bep cotton 4 chiec",
    category: "Phong an",
    price: 129000,
    originalPrice: 169000,
    rating: 4.7,
    badge: "Gia tot",
    description: "Tham hut tot, mau trung tinh, de phoi hop phong cach bep toi gian.",
    tags: ["Cotton", "4 chiec", "Mau trung tinh"],
    glyph: "COT",
    color: "#f1c2bc"
  }
];

const bundleProduct = {
  id: "nx-combo-bep-mini",
  name: "Combo setup bep mini",
  category: "Combo",
  price: 1290000,
  originalPrice: 1580000,
  rating: 5,
  badge: "Combo tiet kiem",
  description: "Gom 4 mat hang can thiet cho can bep moi setup.",
  tags: ["4 mon", "Tiet kiem 18%", "Tang qua tan gia"],
  glyph: "SET",
  color: "#ecc18d"
};

const STORAGE_KEY = "nha-xinh-mart-cart";
const SHIPPING_THRESHOLD = 499000;
const SHIPPING_FEE = 30000;
const DOMESTIC_BANKS = ["BIDV", "VCB", "OCB", "Techcombank", "VPBank", "Agribank"];
const VISA_PROVIDERS = ["BIDV", "VCB", "OCB", "Techcombank", "HomeCredit", "SaigonHD", "Mcredit"];

const state = {
  search: "",
  category: "Tat ca",
  sort: "featured",
  cart: loadCart(),
  checkoutStep: "cart",
  paymentMethod: "cod",
  checkoutData: getDefaultCheckoutData()
};

const productGrid = document.getElementById("product-grid");
const categoryFilters = document.getElementById("category-filters");
const resultCount = document.getElementById("result-count");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const subtotalNode = document.getElementById("subtotal");
const shippingNode = document.getElementById("shipping");
const totalNode = document.getElementById("total");
const checkoutSubtotalNode = document.getElementById("checkout-subtotal");
const checkoutShippingNode = document.getElementById("checkout-shipping");
const checkoutTotalNode = document.getElementById("checkout-total");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const cartDrawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");
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

const categories = ["Tat ca", ...new Set(products.map((item) => item.category))];

renderFilters();
renderProducts();
renderCart();
renderDrawerStage();

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim().toLowerCase();
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

cartLaunch.addEventListener("click", () => toggleCart(true));
closeCartBtn.addEventListener("click", () => toggleCart(false));
overlay.addEventListener("click", () => toggleCart(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleCart(false);
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
  const { target } = event;

  if (target instanceof HTMLElement && target.matches("[data-filter-target]")) {
    state.category = target.dataset.filterTarget || "Tat ca";
    renderFilters();
    renderProducts();
    document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (target instanceof HTMLElement && target.matches("[data-add-to-cart]")) {
    const productId = target.dataset.addToCart;
    const product = findProduct(productId);
    if (product) {
      addToCart(productId, product);
    }
  }

  if (target instanceof HTMLElement && target.matches("[data-cart-action]")) {
    const action = target.dataset.cartAction;
    const productId = target.dataset.productId;
    handleCartAction(action, productId);
  }
});

function renderFilters() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-chip ${state.category === category ? "active" : ""}"
          type="button"
          data-filter="${category}"
        >
          ${category}
        </button>
      `
    )
    .join("");

  categoryFilters.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.filter || "Tat ca";
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  resultCount.textContent = `${filteredProducts.length} san pham`;

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <article class="empty-state">
        <h3>Khong tim thay san pham phu hop</h3>
        <p>Thu doi tu khoa tim kiem hoac chuyen sang danh muc khac de xem them mat hang.</p>
      </article>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map(
      (product, index) => `
        <article class="product-card" style="animation-delay: ${index * 70}ms">
          <div class="product-visual" style="--visual-color: ${product.color}">
            <span class="panel-label">${product.badge}</span>
            <div class="product-glyph" aria-hidden="true">${product.glyph}</div>
          </div>

          <div>
            <div class="product-meta">
              <span>${product.category}</span>
              <span>${product.rating.toFixed(1)} / 5</span>
            </div>
            <h3>${product.name}</h3>
            <p class="product-desc">${product.description}</p>
          </div>

          <div class="tag-row">
            ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>

          <div class="product-price">
            <div>
              <strong>${formatCurrency(product.price)}</strong>
              <span>${formatCurrency(product.originalPrice)}</span>
            </div>
            <button class="add-btn" type="button" data-add-to-cart="${product.id}">Them vao gio</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCart() {
  const items = state.cart
    .map((cartItem) => {
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
    })
    .join("");

  cartItems.innerHTML =
    items ||
    `
      <article class="empty-state">
        <h3>Gio hang dang trong</h3>
        <p>Chon mot vai mon do gia dung ben duoi de bat dau trai nghiem mua sam.</p>
      </article>
    `;

  const subtotal = state.cart.reduce((total, item) => {
    const product = findProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const shipping = subtotal > 0 && subtotal < SHIPPING_THRESHOLD ? SHIPPING_FEE : 0;
  const total = subtotal + shipping;
  const quantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!quantity && state.checkoutStep === "checkout") {
    state.checkoutStep = "cart";
  }

  cartCount.textContent = String(quantity);
  subtotalNode.textContent = formatCurrency(subtotal);
  shippingNode.textContent = shipping ? formatCurrency(shipping) : "Mien phi";
  totalNode.textContent = formatCurrency(total);
  persistCart();
  renderDrawerStage();
}

function getFilteredProducts() {
  return [...products]
    .filter((product) => state.category === "Tat ca" || product.category === state.category)
    .filter((product) => {
      if (!state.search) {
        return true;
      }

      const searchTarget = `${product.name} ${product.category} ${product.description} ${product.tags.join(" ")}`.toLowerCase();
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
          return 0;
      }
    });
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

  checkoutOrderList.innerHTML = state.cart
    .map((cartItem) => {
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
    })
    .join("");

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
          <input
            name="domesticCardNumber"
            type="text"
            inputmode="numeric"
            placeholder="9704 0000 0000 0000"
            autocomplete="cc-number"
            value="${escapeHtml(state.checkoutData.domesticCardNumber)}"
          >
        </label>

        <label class="form-field full-row">
          <span>Ho ten chu the</span>
          <input
            name="domesticCardName"
            type="text"
            placeholder="NGUYEN VAN A"
            autocomplete="cc-name"
            value="${escapeHtml(state.checkoutData.domesticCardName)}"
          >
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
          <input
            name="visaCardNumber"
            type="text"
            inputmode="numeric"
            placeholder="4111 1111 1111 1111"
            autocomplete="cc-number"
            value="${escapeHtml(state.checkoutData.visaCardNumber)}"
          >
        </label>

        <label class="form-field full-row">
          <span>Ho ten chu the</span>
          <input
            name="visaCardName"
            type="text"
            placeholder="NGUYEN VAN A"
            autocomplete="cc-name"
            value="${escapeHtml(state.checkoutData.visaCardName)}"
          >
        </label>

        <label class="form-field">
          <span>Ngay het han</span>
          <input
            name="visaExpiry"
            type="text"
            inputmode="numeric"
            placeholder="MM/YY"
            autocomplete="cc-exp"
            value="${escapeHtml(state.checkoutData.visaExpiry)}"
          >
        </label>

        <label class="form-field">
          <span>Ma the / CVV</span>
          <input
            name="visaCvv"
            type="password"
            inputmode="numeric"
            placeholder="123"
            autocomplete="cc-csc"
            value="${escapeHtml(state.checkoutData.visaCvv)}"
          >
        </label>
      </div>
      <p class="payment-hint">Ho tro the Visa tu BIDV, VCB, OCB, HomeCredit, SaigonHD va mot so don vi khac.</p>
    `;
    return;
  }

  paymentDetail.innerHTML = `
    <div class="payment-note-box">
      <p class="payment-hint">
        Ban se thanh toan bang tien mat cho nhan vien giao hang khi don duoc giao thanh cong. Khong can nhap thong tin the.
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

  if (
    !(target instanceof HTMLInputElement) &&
    !(target instanceof HTMLTextAreaElement) &&
    !(target instanceof HTMLSelectElement)
  ) {
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
  renderCheckout();
  showToast(`Da ghi nhan don hang thanh toan bang ${paymentLabel}. Day la thao tac mo phong frontend.`);
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
  overlay.hidden = !isOpen;
  document.body.classList.toggle("cart-open", isOpen);
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

function formatCurrency(value) {
  return `${new Intl.NumberFormat("vi-VN").format(value)}d`;
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
  return options
    .map((option) => `<option value="${option}" ${option === selectedValue ? "selected" : ""}>${option}</option>`)
    .join("");
}

function formatPhoneInput(value) {
  return value.replace(/\D/g, "").slice(0, 11);
}

function formatCardNumberInput(value) {
  return value
    .replace(/\D/g, "")
    .slice(0, 19)
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
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
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}
