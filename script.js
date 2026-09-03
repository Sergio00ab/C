const CATEGORIES = [
  { id: "all", name: "Todo" },
  { id: "TOYOTA", name: "Toyota" },
  { id: "SUZUKI", name: "Suzuki" },
  { id: "CHEVROLET", name: "Chevrolet" },
 { id: "MAZDA", name: "Mazda" }
];

const VENDORS = [
 {
   id: "v1",
   name: "Toyota LC 300",
   category: "TOYOTA",
   rating: 4.8,
   price: 680000000,
   fee: 350000,
   year: 2023,
   km: 24000,
   fuel: "Diésel",
   transmission: "Automática",
   status: "Disponible",
   banner: "lc300.png",
   hero: "lc300.png",
   description: "SUV premium con gran capacidad, motor V8 y acabado de lujo pensado para viajar con confort y presencia.",
   features: ["4x4", "Aire acondicionado", "Cámara 360°", "Asientos de cuero"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Toyota%20LC%20300",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v2",
   name: "Toyota LC 250",
   category: "TOYOTA",
   rating: 9.8,
   price: 260900000,
   fee: 320000,
   year: 2021,
   km: 54000,
   fuel: "Diésel",
   transmission: "Automática",
   status: "Oferta",
   banner: "lc250.jpg",
   hero: "lc250.jpg",
   description: "Versión robusta, ideal para uso familiar y caminos difíciles con seguridad, tecnología y resistencia.",
   features: ["7 puestos", "Control de tracción", "Bluetooth", "Faros LED"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Toyota%20LC%20250",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v3",
   name: "Suzuki Swift",
   category: "SUZUKI",
   rating: 9.8,
   price: 60900000,
   fee: 120000,
   year: 2022,
   km: 30000,
   fuel: "Gasolina",
   transmission: "Manual",
   status: "Nuevo",
    banner: "swift.jpg",
   hero: "swift.jpg",
   description: "Compacto, ágil y económico, perfecto para la ciudad con excelente rendimiento y ahorro de combustible.",
   features: ["A/C", "Audio Bluetooth", "ABS", "Cierre central"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Suzuki%20Swift",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v4",
   name: "Suzuki Swift Sport",
   category: "SUZUKI",
   rating: 7.8,
   price: 69900000,
   fee: 120000,
   year: 2021,
   km: 42000,
   fuel: "Gasolina",
   transmission: "Automática",
   status: "Disponible",
   banner: "swift.jpg",
   hero: "swift.jpg",
   description: "Más dinamismo, diseño moderno y gran respuesta en carretera para quienes buscan un auto con carácter.",
   features: ["Económico", "Llantas 16\"", "Sensores", "Asistente de parqueo"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Suzuki%20Swift%20Sport",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v5",
   name: "Suzuki Swift GL",
   category: "SUZUKI",
   rating: 7.8,
   price: 61900000,
   fee: 120000,
   year: 2020,
   km: 39000,
   fuel: "Gasolina",
   transmission: "Manual",
   status: "Disponible",
   banner: "swift.jpg",
   hero: "swift.jpg",
   description: "Versión práctica y equilibrada para uso diario con buena economía, comodidad y diseño funcional.",
   features: ["Urbano", "Ajuste de altura", "Vidrios eléctricos", "Buen consumo"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Suzuki%20Swift%20GL",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v6",
   name: "Suzuki Swift Plus",
   category: "SUZUKI",
   rating: 6.8,
   price: 58900000,
   fee: 120000,
   year: 2019,
   km: 52000,
   fuel: "Gasolina",
   transmission: "Manual",
   status: "Disponible",
   banner: "swift.jpg",
   hero: "swift.jpg",
   description: "Opción inteligente para quienes quieren economía, confiabilidad y un estilo moderno sin complicaciones.",
   features: ["Uso diario", "Cilindrada 1.2", "Seguro", "Manejo ligero"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Suzuki%20Swift%20Plus",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v7",
   name: "Chevrolet Captiva",
   category: "CHEVROLET",
   rating: 2.8,
   price: 39000000,
   fee: 150000,
   year: 2018,
   km: 98000,
   fuel: "Gasolina",
   transmission: "Automática",
   status: "Disponible",
   banner: "captiva.jpg",
   hero: "captiva.jpg",
   description: "SUV versátil con espacio interior para la familia y excelente capacidad de carga para viajes urbanos y largos.",
   features: ["7 puestos", "A/C dual", "Sistema multimedia", "Cofre amplio"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Chevrolet%20Captiva",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v8",
   name: "Chevrolet Captiva LT",
   category: "CHEVROLET",
   rating: 5.8,
   price: 44000000,
   fee: 150000,
   year: 2019,
   km: 76000,
   fuel: "Gasolina",
   transmission: "Automática",
   status: "Oferta",
   banner: "captiva.jpg",
   hero: "captiva.jpg",
   description: "Más confort, más estilo y mejor equipo para quienes necesitan un SUV práctico sin perder calidad.",
   features: ["Faros LED", "Sensores", "Pantalla multimedia", "Espacio familiar"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Chevrolet%20Captiva%20LT",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v9",
   name: "Chevrolet Captiva Premier",
   category: "CHEVROLET",
   rating: 4.8,
   price: 47000000,
   fee: 150000,
   year: 2020,
   km: 64000,
   fuel: "Gasolina",
   transmission: "Automática",
   status: "Disponible",
   banner: "captiva.jpg",
   hero: "captiva.jpg",
   description: "Equilibrio perfecto entre espacio, tecnología y desempeño para una experiencia familiar más moderna.",
   features: ["Airbag total", "Control de clima", "Rines 18\"", "USB"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Chevrolet%20Captiva%20Premier",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v10",
   name: "Mazda 2",
   category: "MAZDA",
   rating: 7.8,
   price: 89000000,
   fee: 140000,
   year: 2023,
   km: 18000,
   fuel: "Gasolina",
   transmission: "Automática",
   status: "Nuevo",
   banner: "mazda2.jpg",
   hero: "mazda2.jpg",
   description: "Sedán urbano con diseño elegante, buena eficiencia y acabado refinado para desplazamientos diarios.",
   features: ["A/C", "Sistema de sonido", "Sensores", "Eficiencia alta"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Mazda%202",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v11",
   name: "Mazda 2 Touring",
   category: "MAZDA",
   rating: 7.8,
   price: 95000000,
   fee: 140000,
   year: 2024,
   km: 12000,
   fuel: "Gasolina",
   transmission: "Automática",
   status: "Disponible",
   banner: "mazda2.jpg",
   hero: "mazda2.jpg",
   description: "Estilo premium y experiencia de manejo amena con ese toque de sofisticación que distingue a Mazda.",
   features: ["Económico", "Asistente inteligente", "Control de estabilidad", "Cámara"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Mazda%202%20Touring",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 },
 {
   id: "v12",
   name: "Mazda 3",
   category: "MAZDA",
   rating: 7.8,
   price: 119000000,
   fee: 170000,
   year: 2023,
   km: 26000,
   fuel: "Gasolina",
   transmission: "Automática",
   status: "Disponible",
   banner: "mazda3.jpg",
   hero: "mazda3.jpg",
   description: "Vehículo moderno y elegante con excelente experiencia de conducción y detalles de diseño premium.",
   features: ["Equipado", "Ajuste de iluminación", "Conectividad", "Rendimiento óptimo"],
   whatsapp: "https://wa.me/573163971630?text=Hola%2C%20me%20interesa%20el%20Mazda%203",
   phone: "tel:+573163971630",
   email: "mailto:ventas@yennygaleano.com"
 }
];

/* -------------------------
   State & Storage
--------------------------*/
const STATE = {
  theme: load("theme", "light"),
  activeCategory: "all",
  activeTab: "home",
  sort: "recommended",
  vendorSearch: "",
  globalSearch: "",
  currentVendorId: null,
  cart: load("cart", { vendorId: null, items: [] }), // items: {productId, vendorId, name, price, qty, img}
};

function save(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function load(key, fallback){ try{ return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch{ return fallback; } }
function moneyCOP(n){ return n.toLocaleString("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}); }

/* -------------------------
   DOM Refs
--------------------------*/
const el = (sel) => document.querySelector(sel);
const vendorGrid = el("#vendorGrid");
const productGrid = el("#productGrid");
const vendorView = el("#vendorView");
const vendorHero = el("#vendorHero");
const vendorInfo = el("#vendorInfo");
const categoryChips = el("#categoryChips");
const searchInput = el("#searchInput");
const vendorSearch = el("#vendorSearch");
const sortSelect = el("#sortSelect");
const gridTitle = el("#gridTitle");
const cartDrawer = el("#cartDrawer");
const cartOverlay = el("#cartOverlay");
const cartBadge = el("#cartBadge");
const cartItems = el("#cartItems");
const sumSubtotal = el("#sumSubtotal");
const sumDelivery = el("#sumDelivery");
const sumService = el("#sumService");
const sumTotal = el("#sumTotal");
const btnCheckout = el("#btnCheckout");
const cartVendorNote = el("#cartVendorNote");

/* -------------------------
   Init
--------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  // Theme
  if(STATE.theme === "dark") document.documentElement.classList.add("dark");

  renderCategoryChips();
  renderVendors();
  updateCartBadge();
  wireEvents();
});

/* -------------------------
   Rendering
--------------------------*/
function renderCategoryChips(){
  categoryChips.innerHTML = "";
  CATEGORIES.forEach(c=>{
    const b = document.createElement("button");
    b.className = "chip" + (STATE.activeCategory===c.id?" active":"");
    b.textContent = c.name;
    b.dataset.id = c.id;
    b.addEventListener("click", ()=>{
      STATE.activeCategory = c.id;
      document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      vendorView.classList.add("hidden");
      vendorView.setAttribute("aria-hidden","true");
      renderVendors();
    });
    categoryChips.appendChild(b);
  });
}

function renderVendors(){
  const q = STATE.globalSearch.trim().toLowerCase();
  let list = VENDORS.filter(v=>{
    const byCat = STATE.activeCategory==="all" || v.category===STATE.activeCategory;
    const bySearch = !q || v.name.toLowerCase().includes(q) || v.description.toLowerCase().includes(q) || v.features.join(" ").toLowerCase().includes(q);
    return byCat && bySearch;
  });

  list = list.slice().sort((a,b)=>{
    switch(STATE.sort){
      case "rating_desc": return b.rating - a.rating;
      case "price_asc": return a.price - b.price;
      case "price_desc": return b.price - a.price;
      default: return (b.rating*100 - a.rating*100) + (a.price - b.price)/1000000;
    }
  });

  gridTitle.textContent = STATE.activeCategory==="all" ? "Nuestro catálogo" : CATEGORIES.find(c=>c.id===STATE.activeCategory)?.name || "Vehículos";

  vendorGrid.innerHTML = list.map(v=>vendorCardHTML(v)).join("");

  vendorGrid.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("click", ()=>{
      openVehicleDetail(card.dataset.id);
    });
  });
}

function vendorCardHTML(v){
  return `
  <article class="card" data-id="${v.id}" tabindex="0" role="button" aria-label="${v.name}">
    <div class="card-image-wrap">
      <img class="banner" src="${v.banner}" alt="${v.name}" />
      <span class="status-badge">${v.status}</span>
    </div>
    <div class="body">
      <div class="card-head">
        <h3 class="title">${v.name}</h3>
        <span class="rating-pill">⭐ ${v.rating.toFixed(1)}</span>
      </div>
      <p class="card-subtitle">${v.year} · ${v.km.toLocaleString("es-CO")} km</p>
      <div class="meta">
        <span class="price">${moneyCOP(v.price)}</span>
        <span class="pill">${v.transmission}</span>
      </div>
      <div class="spec-line">
        <span>${v.fuel}</span>
        <span>${v.category}</span>
      </div>
    </div>
  </article>`;
}

function openVehicleDetail(vendorId){
  const v = VENDORS.find(x=>x.id===vendorId);
  if(!v) return;

  STATE.currentVendorId = v.id;
  modalTitle.textContent = v.name;
  vehicleDetail.innerHTML = `
    <div class="vehicle-gallery">
      <img src="${v.hero || v.banner}" alt="${v.name}" />
    </div>
    <div class="vehicle-summary">
      <div class="summary-top">
        <span class="status-badge">${v.status}</span>
        <span class="rating-pill">⭐ ${v.rating.toFixed(1)}</span>
      </div>
      <h4>${v.name}</h4>
      <p class="vehicle-price">${moneyCOP(v.price)}</p>
      <p class="vehicle-copy">${v.description}</p>
      <div class="vehicle-specs">
        <div><span>Año</span><strong>${v.year}</strong></div>
        <div><span>Kilometraje</span><strong>${v.km.toLocaleString("es-CO")} km</strong></div>
        <div><span>Transmisión</span><strong>${v.transmission}</strong></div>
        <div><span>Combustible</span><strong>${v.fuel}</strong></div>
      </div>
      <div class="feature-list">
        ${v.features.map(f => `<span>${f}</span>`).join("")}
      </div>
    </div>
  `;

  contactWhatsApp.href = v.whatsapp;
  contactCall.href = v.phone;
  contactEmail.href = v.email;

  if(typeof productModal.showModal === "function"){
    productModal.showModal();
  }
}

/* -------------------------
   Product Modal
--------------------------*/
const productModal = el("#productModal");
const modalTitle = el("#modalTitle");
const vehicleDetail = el("#vehicleDetail");
const contactWhatsApp = el("#contactWhatsApp");
const contactCall = el("#contactCall");
const contactEmail = el("#contactEmail");
const closeVehicleModal = el("#closeVehicleModal");

if(closeVehicleModal && productModal){
  closeVehicleModal.addEventListener("click", () => productModal.close());
}

productModal?.addEventListener("click", (event) => {
  const rect = productModal.getBoundingClientRect();
  const clickedOutside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if(clickedOutside) productModal.close();
});

/* -------------------------
   Cart
--------------------------*/
function openCart(){
  if(!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("show");
  renderCart();
}
function closeCart(){
  if(!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("show");
}

function updateCartBadge(){
  const count = STATE.cart.items.reduce((a,b)=>a+b.qty,0);
  if(cartBadge){ cartBadge.textContent = count; }
  document.title = (count ? `(${count}) ` : "") + "YENNY GALEANO";
}

function renderCart(){
  if(!cartVendorNote || !cartItems || !sumSubtotal || !sumDelivery || !sumService || !sumTotal || !btnCheckout) return;

  const v = VENDORS.find(x=>x.id === STATE.cart.vendorId);
  cartVendorNote.classList.toggle("hidden", !v);
  cartVendorNote.innerHTML = v ? `Tienda: <strong>${v.name}</strong> · Envío ${moneyCOP(v.fee)}` : "";

  cartItems.innerHTML = "";

  if(STATE.cart.items.length === 0){
    cartItems.innerHTML = `<p class="muted">Tu carrito está vacío.</p>`;
  }else{
    STATE.cart.items.forEach(it=>{
      const row = document.createElement("div");
      row.className = "citem";
      row.innerHTML = `
        <img src="${it.img}" alt="${it.name}"/>
        <div>
          <div class="name">${it.name}</div>
          <div class="muted">${moneyCOP(it.price)} c/u</div>
        </div>
        <div class="qty">
          <button class="btn" data-act="minus">−</button>
          <output style="min-width:2ch;text-align:center">${it.qty}</output>
          <button class="btn" data-act="plus">+</button>
          <button class="btn ghost" data-act="remove" title="Eliminar">✕</button>
        </div>
      `;
      // events
      const [btnMinus, , btnPlus, btnRemove] = row.querySelectorAll("button");
      btnMinus.addEventListener("click", ()=> changeQty(it.key, -1));
      btnPlus.addEventListener("click", ()=> changeQty(it.key, +1));
      btnRemove.addEventListener("click", ()=> removeItem(it.key));

      cartItems.appendChild(row);
    });
  }

  // totals
  const subtotal = STATE.cart.items.reduce((a,b)=> a + b.price*b.qty, 0);
  const delivery = VENDORS.find(x=>x.id===STATE.cart.vendorId)?.fee ?? 0;
  const service = Math.round(subtotal * 0.07); // 7% servicio simulado
  const total = subtotal + (STATE.cart.items.length ? (delivery + service) : 0);

  sumSubtotal.textContent = moneyCOP(subtotal);
  sumDelivery.textContent = moneyCOP(STATE.cart.items.length ? delivery : 0);
  sumService.textContent = moneyCOP(STATE.cart.items.length ? service : 0);
  sumTotal.textContent = moneyCOP(total);

  btnCheckout.disabled = STATE.cart.items.length === 0;
}

function changeQty(key, delta){
  const it = STATE.cart.items.find(i=>i.key===key);
  if(!it) return;
  it.qty += delta;
  if(it.qty <= 0){
    STATE.cart.items = STATE.cart.items.filter(i=>i.key!==key);
  }
  save("cart", STATE.cart);
  updateCartBadge();
  renderCart();
}
function removeItem(key){
  STATE.cart.items = STATE.cart.items.filter(i=>i.key!==key);
  if(STATE.cart.items.length === 0) STATE.cart.vendorId = null;
  save("cart", STATE.cart);
  updateCartBadge();
  renderCart();
}

/* -------------------------
   Events
--------------------------*/
function wireEvents(){
 const btnAddress = document.getElementById("btnAddress");
  const addressDialog = document.getElementById("addressDialog");
 const saveAddressBtn = document.getElementById("saveAddressBtn");
 const btnTheme = document.getElementById("btnTheme");
 const btnClearSearch = document.getElementById("btnClearSearch");
 const btnBackToList = document.getElementById("btnBackToList");
 const btnCart = document.getElementById("btnCart");

 if(btnAddress && addressDialog){
   btnAddress.addEventListener("click", ()=> addressDialog.showModal());
 }
 if(saveAddressBtn && addressDialog){
   saveAddressBtn.addEventListener("click", (e)=>{
     e.preventDefault();
     const input = document.getElementById("addressInput");
     const val = input ? input.value.trim() : "";
     if(!val) return;
     STATE.address = val; save("address", val);
     const addressText = document.getElementById("addressText");
     if(addressText) addressText.textContent = val;
     addressDialog.close();
   });
 }

 if(btnTheme){
   btnTheme.addEventListener("click", ()=>{
     const root = document.documentElement;
     const dark = root.classList.toggle("dark");
     STATE.theme = dark ? "dark" : "light";
     save("theme", STATE.theme);
   });
 }

 if(searchInput){
   searchInput.addEventListener("input", debounce((e)=>{
     STATE.globalSearch = e.target.value;
     renderVendors();
   }, 120));
 }
 if(btnClearSearch && searchInput){
   btnClearSearch.addEventListener("click", ()=>{
     STATE.globalSearch = "";
     searchInput.value = "";
     renderVendors();
   });
 }

 if(vendorSearch){
   vendorSearch.addEventListener("input", debounce((e)=>{
     const v = VENDORS.find(x=>x.id===STATE.currentVendorId);
     renderProducts(v, e.target.value);
   }, 120));
 }

 document.querySelectorAll(".bottom-tabs .tab").forEach(tab=>{
   tab.addEventListener("click", ()=>{
     document.querySelectorAll(".bottom-tabs .tab").forEach(t=>t.classList.remove("active"));
     tab.classList.add("active");
     STATE.activeTab = tab.dataset.tab;
     STATE.activeCategory = tab.dataset.tab === "home" ? "all" : tab.dataset.tab;
     renderCategoryChips();
     renderVendors();
     if(vendorView){
       vendorView.classList.add("hidden");
       vendorView.setAttribute("aria-hidden","true");
     }
   });
 });

 if(sortSelect){
   sortSelect.addEventListener("change", (e)=>{
     STATE.sort = e.target.value;
     renderVendors();
   });
 }

 if(btnBackToList && vendorView){
   btnBackToList.addEventListener("click", ()=>{
     vendorView.classList.add("hidden");
     vendorView.setAttribute("aria-hidden","true");
     window.scrollTo({top:0, behavior:"smooth"});
   });
 }

 if(btnCart && cartDrawer && cartOverlay){
   btnCart.addEventListener("click", () => {
     cartDrawer.classList.add("open");
     cartOverlay.classList.add("active");
   });
 }

 if(btnCheckout){
   btnCheckout.addEventListener("click", ()=>{
     alert("✅ Pedido simulado. Aquí integrarías tu pasarela de pagos.");
     STATE.cart = { vendorId:null, items:[] };
     save("cart", STATE.cart);
     updateCartBadge();
     renderCart();
     closeCart();
   });
 }
}

/* -------------------------
   Utils
--------------------------*/
function debounce(fn, wait=150){
  let t; return (...args)=>{ clearTimeout(t); t = setTimeout(()=>fn(...args), wait); };
}
// Splash screen: siempre aparece al recargar
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main-app").style.display = "block";
  }, 2000); // 2.0 segundos
});
