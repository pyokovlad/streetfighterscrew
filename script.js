const events = [
  {
    id: "turbonoch-2026",
    title: "#ТУРБОНОЧЬ",
    date: "05.09.2026",
    status: "past",
    type: "ФЕСТИВАЛЬ",
    description: "Автомобильный фестиваль #ТУРБОНОЧЬ от Street Fighters Crew.",
    video: "assets/events/turbonoch.mp4"
  }
];

const NO_PHOTO = "assets/no-photo.png";

// ФОТОГРАФИИ ТОВАРОВ:
// Первая фотография в images[] = главная фотография карточки и первое фото в модальном окне.
// Остальные фотографии = галерея внутри модального окна.
// Если images:[] — автоматически используется assets/no-photo.png.
// Пример:
// images:[
//   "assets/products/13-call-police-hoodie/main.jpg",
//   "assets/products/13-call-police-hoodie/02.jpg",
//   "assets/products/13-call-police-hoodie/03.jpg"
// ]
//
// Структура папок товаров находится в assets/products/.
// ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ (НЕОБЯЗАТЕЛЬНО):
// video: "assets/products/13-call-police-hoodie/video.mp4" — если есть видеообзор.
// sizeChart: "assets/products/13-call-police-hoodie/size-chart.jpg" — если нужна размерная сетка.
// Если video: null или sizeChart: null, соответствующий блок в модальном окне НЕ ПОКАЗЫВАЕТСЯ.
// sizes: [] — если размеры не нужны.
const products = [
  {
    id:1, name:"SFC LIGHT", type:"Светильник", category:"lamps", variant:"lamp",
    price:"ЦЕНА ПО ЗАПРОСУ", description:"Фирменный светильник STREET FIGHTERS CREW.",
    images:[], video:"assets/products/01-sfc-light/video.mov", sizes:[], sizeChart:""
  },
  {
    id:2, name:"CALL POLICE LIGHT", type:"Светильник", category:"lamps", variant:"lamp call",
    price:"ЦЕНА ПО ЗАПРОСУ", description:"Светильник в стилистике лимитированной серии CALL POLICE.",
    images:[], video:null, sizes:[], sizeChart:""
  },

  {id:3,name:"LANYARD / 01",type:"Ланьярд",category:"lanyards",variant:"lanyard blue",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/03-lanyard-01/main.jpg"],video:"",sizes:[],sizeChart:""},
  {id:4,name:"LANYARD / 02",type:"Ланьярд",category:"lanyards",variant:"lanyard red",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/04-lanyard-02/main.jpg"],video:"",sizes:[],sizeChart:""},
  {id:5,name:"LANYARD / 03",type:"Ланьярд",category:"lanyards",variant:"lanyard orange",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/05-lanyard-03/main.jpg"],video:"",sizes:[],sizeChart:""},
  {id:6,name:"LANYARD / 04",type:"Ланьярд",category:"lanyards",variant:"lanyard blue",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/06-lanyard-04/main.jpg"],video:"",sizes:[],sizeChart:""},
  {id:7,name:"LANYARD / 05",type:"Ланьярд",category:"lanyards",variant:"lanyard red",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/07-lanyard-05/main.jpg"],video:"",sizes:[],sizeChart:""},
  {id:8,name:"LANYARD / 06",type:"Ланьярд",category:"lanyards",variant:"lanyard orange",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/08-lanyard-06/main.jpg"],video:"",sizes:[],sizeChart:""},
  {id:9,name:"LANYARD / 07",type:"Ланьярд",category:"lanyards",variant:"lanyard blue",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/09-lanyard-07/main.jpg"],video:"",sizes:[],sizeChart:""},
  {id:10,name:"LANYARD / 08",type:"Ланьярд",category:"lanyards",variant:"lanyard red",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/10-lanyard-08/main.jpg"],video:"",sizes:[],sizeChart:""},
  {id:11,name:"LANYARD / 09",type:"Ланьярд",category:"lanyards",variant:"lanyard orange",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/11-lanyard-09/main.jpg"],video:"",sizes:[],sizeChart:""},
  {id:12,name:"LANYARD / 10",type:"Ланьярд",category:"lanyards",variant:"lanyard blue",price:"ЦЕНА ПО ЗАПРОСУ",description:"Фирменный ланьярд Street Fighters Crew.",images:["assets/products/12-lanyard-10/main.jpg"],video:"",sizes:[],sizeChart:""},

  {
    id:13,name:"CALL POLICE HOODIE",type:"Лимитированное худи",category:"hoodies",variant:"hoodie red",
    price:"ЦЕНА ПО ЗАПРОСУ",description:"Лимитированное худи CALL POLICE. Коллекционный выпуск Street Fighters Crew.",
    images:["assets/products/13-call-police-hoodie/main.jpg", "assets/products/13-call-police-hoodie/2.jpg"],video:"assets/products/13-call-police-hoodie/video.mp4",sizes:["S","M","L","XL","XXL"],sizeChart:"assets/products/13-call-police-hoodie/size-chart.jpg"
  },
  {
    id:14,name:"CALL POLICE TEE / BLACK",type:"Футболка",category:"tshirts",variant:"tshirt black",
    variantGroup:"call-police-tee", color:"ЧЁРНАЯ", colorKey:"black",
    price:"ЦЕНА ПО ЗАПРОСУ",description:"Футболка CALL POLICE из фирменной серии Street Fighters Crew.",
    images:["assets/products/14-call-police-tee/main.jpg"],video:"",sizes:["S","M","L","XL","XXL"],sizeChart:"assets/products/14-call-police-tee/size-chart.jpg"
  },
];

// ПРИМЕР ДОБАВЛЕНИЯ ВТОРОГО ЦВЕТА:
// {
//   id:16, name:"CALL POLICE TEE / WHITE", type:"Футболка", category:"tshirts", variant:"tshirt white",
//   variantGroup:"call-police-tee", color:"БЕЛАЯ", colorKey:"white",
//   price:"ЦЕНА ПО ЗАПРОСУ", description:"Футболка CALL POLICE в белом цвете.",
//   images:["assets/products/16-call-police-tee-white/main.jpg"],
//   video:null, sizes:["S","M","L","XL","XXL"], sizeChart:null
// }

const productsEl=document.getElementById("products");
const modal=document.getElementById("productModal");
const modalCategory=document.getElementById("modalCategory");
const modalName=document.getElementById("modalName");
const modalDescription=document.getElementById("modalDescription");
const modalPrice=document.getElementById("modalPrice");
const colorBlock=document.getElementById("colorBlock");
const modalColors=document.getElementById("modalColors");
const modalSizes=document.getElementById("modalSizes");
const sizesBlock=document.getElementById("sizesBlock");
const videoBlock=document.getElementById("videoBlock");
const productModalVideo=document.getElementById("productModalVideo");
const productVideoPlaceholder=document.getElementById("productVideoPlaceholder");
const galleryStage=document.getElementById("galleryStage");
const galleryThumbs=document.getElementById("galleryThumbs");
const galleryPrev=document.getElementById("galleryPrev");
const galleryNext=document.getElementById("galleryNext");
const galleryCounter=document.getElementById("galleryCounter");
const sizeChartBlock=document.getElementById("sizeChartBlock");
const sizeChartToggle=document.getElementById("sizeChartToggle");
const sizeChartContent=document.getElementById("sizeChartContent");
const sizeChartImage=document.getElementById("sizeChartImage");
const sizeChartImageButton=document.getElementById("sizeChartImageButton");

const imageLightbox=document.getElementById("imageLightbox");
const lightboxImage=document.getElementById("lightboxImage");
const lightboxPrev=document.getElementById("lightboxPrev");
const lightboxNext=document.getElementById("lightboxNext");

const categoryNames={lamps:"СВЕТИЛЬНИК",lanyards:"ЛАНЬЯРД",hoodies:"ХУДИ",tshirts:"ФУТБОЛКА"};
let currentProduct=null;
let currentImageIndex=0;
let lightboxIndex=0;

function shape(product){
  if(product.category==="lamps") return `<div class="product-shape lamp-shape ${product.variant.includes("call")?"call":""}></div>`;
  if(product.category==="lanyards") return `<div class="product-shape lanyard-shape ${product.variant.includes("red")?"red":product.variant.includes("orange")?"orange":""}></div>`;
  const white=product.variant.includes("white");
  const hoodie=product.category==="hoodies";
  return `<div class="product-shape clothing ${hoodie?"hoodie-shape":""} ${white?"white":hoodie?"black":"black"}><span class="clothing-text">CALL POLICE</span></div>`;
}

function getImages(product){
  return Array.isArray(product.images)&&product.images.length ? product.images : [NO_PHOTO];
}

function render(filter="all"){
  const list=filter==="all"?products:products.filter(p=>p.category===filter);
  productsEl.innerHTML=list.map(p=>{
    const hasImages=Array.isArray(p.images)&&p.images.length>0;
    return `<article class="product" data-id="${p.id}">
      <div class="product-image ${p.category} ${hasImages?"has-photo":"no-photo"}">
        ${p.video?'<span class="product-tag">VIDEO</span>':""}
        ${hasImages?`<img class="product-card-photo" src="${p.images[0]}" alt="${p.name}">`:''}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-type">${p.type}</div>
        <div class="product-bottom"><span>ОТКРЫТЬ</span><b>${p.price}</b></div>
      </div>
    </article>`;
  }).join("");

  productsEl.querySelectorAll(".product-card-photo").forEach(img=>{
    img.addEventListener("error",()=>{
      img.src=NO_PHOTO;
      img.classList.add("is-placeholder");
    });
  });
}

function renderGallery(){
  if(!currentProduct)return;
  const images=getImages(currentProduct);
  const src=images[currentImageIndex]||NO_PHOTO;
  const isPlaceholder=src===NO_PHOTO;
  galleryStage.innerHTML=isPlaceholder
    ? `<img class="gallery-photo placeholder-photo" src="${NO_PHOTO}" alt="Фотографии нет">`
    : `<img class="gallery-photo" src="${src}" alt="${currentProduct.name}">`;

  galleryCounter.textContent=`${String(currentImageIndex+1).padStart(2,"0")} / ${String(images.length).padStart(2,"0")}`;
  galleryPrev.style.display=images.length>1?"grid":"none";
  galleryNext.style.display=images.length>1?"grid":"none";

  galleryThumbs.innerHTML=images.map((image,index)=>`
    <button class="gallery-thumb ${index===currentImageIndex?"active":""}" data-gallery-index="${index}" type="button">
      <img src="${image}" alt="Фото ${index+1}">
    </button>`).join("");

  galleryThumbs.querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>img.src=NO_PHOTO));
  galleryThumbs.querySelectorAll(".gallery-thumb").forEach(btn=>btn.addEventListener("click",()=>{
    currentImageIndex=Number(btn.dataset.galleryIndex);
    renderGallery();
  }));

  const mainImage=galleryStage.querySelector(".gallery-photo");
  mainImage?.addEventListener("error",()=>{
    mainImage.src=NO_PHOTO;
    mainImage.classList.add("placeholder-photo");
  });
  mainImage?.addEventListener("click",()=>openLightbox(currentImageIndex));
}

function getVariants(product){
  if(!product.variantGroup) return [product];
  return products.filter(item=>item.variantGroup===product.variantGroup);
}

function renderColorVariants(product){
  const variants=getVariants(product);
  if(variants.length<=1){
    colorBlock.style.display="none";
    modalColors.innerHTML="";
    return;
  }

  colorBlock.style.display="block";
  modalColors.innerHTML=variants.map(item=>`
    <button type="button" class="color-option ${item.id===product.id?"active":""}" data-product-id="${item.id}">
      <span class="color-dot ${item.colorKey||"default"}"></span>
      <span>${item.color||item.name}</span>
    </button>
  `).join("");

  modalColors.querySelectorAll(".color-option").forEach(button=>{
    button.addEventListener("click",()=>{
      const next=products.find(item=>item.id===Number(button.dataset.productId));
      if(next) switchProductVariant(next);
    });
  });
}

function switchProductVariant(product){
  currentProduct=product;
  currentImageIndex=0;
  modalCategory.textContent=`${categoryNames[product.category]} / STREET SHOP`;
  modalName.textContent=product.name;
  modalDescription.textContent=product.description;
  modalPrice.textContent=product.price;
  renderColorVariants(product);
  renderGallery();

  if(product.sizes.length){
    sizesBlock.style.display="block";
    modalSizes.innerHTML=product.sizes.map(s=>`<b>${s}</b>`).join("");
  }else{
    sizesBlock.style.display="none";
    modalSizes.innerHTML="";
  }

  if(product.sizeChart){
    sizeChartBlock.style.display="block";
    sizeChartContent.classList.remove("open");
    sizeChartToggle.classList.remove("open");
    sizeChartImage.src=product.sizeChart;
  }else{
    sizeChartBlock.style.display="none";
  }

  if(product.video){
    videoBlock.style.display="block";
    productModalVideo.style.display="block";
    productVideoPlaceholder.style.display="none";
    productModalVideo.src=product.video;
    productModalVideo.load();
    productModalVideo.onerror=()=>{
      productModalVideo.style.display="none";
      productVideoPlaceholder.style.display="grid";
    };
  }else{
    videoBlock.style.display="none";
    productModalVideo.pause();
    productModalVideo.removeAttribute("src");
    productModalVideo.load();
  }
}

function openProduct(id){
  const p=products.find(x=>x.id===Number(id));
  if(!p)return;
  switchProductVariant(p);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeProduct(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  productModalVideo.pause();
  productModalVideo.removeAttribute("src");
  productModalVideo.load();
  document.body.classList.remove("modal-open");
}

galleryPrev.addEventListener("click",e=>{e.stopPropagation();const images=getImages(currentProduct);currentImageIndex=(currentImageIndex-1+images.length)%images.length;renderGallery();});
galleryNext.addEventListener("click",e=>{e.stopPropagation();const images=getImages(currentProduct);currentImageIndex=(currentImageIndex+1)%images.length;renderGallery();});

productsEl.addEventListener("click",e=>{
  const card=e.target.closest(".product");
  if(card)openProduct(card.dataset.id);
});

document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".filter.active")?.classList.remove("active");
    btn.classList.add("active");
    render(btn.dataset.filter);
  });
});

document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeProduct));

sizeChartToggle.addEventListener("click",()=>{
  const open=sizeChartContent.classList.toggle("open");
  sizeChartToggle.classList.toggle("open",open);
});

function openLightbox(index=0){
  if(!currentProduct)return;
  const images=getImages(currentProduct);
  lightboxIndex=index;
  lightboxImage.src=images[lightboxIndex];
  lightboxImage.alt=currentProduct.name;
  lightboxPrev.style.display=images.length>1?"grid":"none";
  lightboxNext.style.display=images.length>1?"grid":"none";
  imageLightbox.classList.add("open");
  imageLightbox.setAttribute("aria-hidden","false");
}
function closeLightbox(){
  imageLightbox.classList.remove("open");
  imageLightbox.setAttribute("aria-hidden","true");
}
function moveLightbox(dir){
  if(!currentProduct)return;
  const images=getImages(currentProduct);
  lightboxIndex=(lightboxIndex+dir+images.length)%images.length;
  lightboxImage.src=images[lightboxIndex];
}
sizeChartImageButton.addEventListener("click",()=>{
  lightboxImage.src=sizeChartImage.src;
  lightboxImage.alt="Размерная сетка";
  lightboxPrev.style.display="none";
  lightboxNext.style.display="none";
  imageLightbox.classList.add("open");
  imageLightbox.setAttribute("aria-hidden","false");
});
lightboxPrev.addEventListener("click",()=>moveLightbox(-1));
lightboxNext.addEventListener("click",()=>moveLightbox(1));
document.querySelectorAll("[data-lightbox-close]").forEach(el=>el.addEventListener("click",closeLightbox));

const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

render();

function renderEvents(filter="upcoming"){
  const list=events.filter(event=>event.status===filter);
  const eventsList=document.getElementById("eventsList");
  if(!eventsList)return;
  if(!list.length){
    eventsList.innerHTML=`<div class="events-empty">В ЭТОМ РАЗДЕЛЕ ПОКА НЕТ МЕРОПРИЯТИЙ</div>`;
    return;
  }
  eventsList.innerHTML=list.map(event=>`
    <article class="event-card ${event.status}" data-event-id="${event.id}">
      <div class="event-image turbonoch">
        <span class="event-index">SFC / 01</span>
        <span class="event-status">ПРОШЕДШЕЕ</span>
        <div class="event-word">#ТУРБО<br><b>НОЧЬ</b></div>
      </div>
      <div class="event-info">
        <div>
          <h3>${event.title}</h3>
          <div class="event-date">${event.date} · ${event.type}</div>
          <p>${event.description}</p>
        </div>
        <b>↗</b>
      </div>
    </article>
  `).join("");
}

function openEvent(id){
  const event=events.find(x=>x.id===id);
  const modal=document.getElementById("eventModal");
  if(!event||!modal)return;
  document.getElementById("eventModalTitle").textContent=event.title;
  document.getElementById("eventModalDate").textContent=event.date;
  document.getElementById("eventModalDescription").textContent=event.description;
  document.getElementById("eventModalStatus").textContent=event.status === "past" ? "ПРОШЕДШЕЕ МЕРОПРИЯТИЕ / SFC" : "ПРЕДСТОЯЩЕЕ МЕРОПРИЯТИЕ / SFC";
  document.getElementById("eventModalType").textContent=event.type;
  const video=document.getElementById("eventModalVideo");
  const placeholder=document.getElementById("eventVideoPlaceholder");
  video.src=event.video;
  video.style.display="block";
  placeholder.style.display="none";
  video.load();
  video.addEventListener("error",()=>{
    video.style.display="none";
    placeholder.style.display="grid";
  },{once:true});
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeEvent(){
  const modal=document.getElementById("eventModal");
  const video=document.getElementById("eventModalVideo");
  if(!modal)return;
  video.pause();
  video.removeAttribute("src");
  video.load();
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

document.getElementById("eventsList")?.addEventListener("click",e=>{
  const card=e.target.closest(".event-card");
  if(card)openEvent(card.dataset.eventId);
});

document.querySelectorAll(".event-filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".event-filter.active")?.classList.remove("active");
    btn.classList.add("active");
    renderEvents(btn.dataset.eventFilter);
  });
});

document.querySelectorAll("[data-event-close]").forEach(el=>el.addEventListener("click",closeEvent));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeProduct();closeEvent()}});
renderEvents("upcoming");

// Hero intro: video starts immediately, then the SFC logo and actions appear after 3 seconds.
const heroIntro = document.getElementById("heroIntro");
const heroLoading = document.getElementById("heroLoading");
const heroVideo = document.getElementById("heroVideo");

function showHeroIntro() {
  heroLoading?.classList.add("hidden");
  heroIntro?.classList.add("visible");
}

if (heroVideo) {
  heroVideo.muted = true;
  const playPromise = heroVideo.play();
  if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
}

window.setTimeout(showHeroIntro, 3000);
