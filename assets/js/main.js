
const SITE_CONFIG = {
  currency:'USD',
  stripeCheckoutUrl:'', // Optional: one Stripe Payment Link / hosted checkout URL for cart fallback.
  contactEndpoint:'',   // Add Formspree endpoint, e.g. https://formspree.io/f/xxxxxxx
  newsletterEndpoint:'' // Add newsletter form endpoint from Mailchimp, Buttondown, etc.
};

const products = {
  closeted: {id:'closeted',title:'Closeted Hearts',image:'assets/images/closeted-hearts.webp',formats:[
    {name:'Paperback',price:14.99,checkout:''},
    {name:'Signed Paperback',price:19.99,checkout:''},
    {name:'Ebook',price:4.99,checkout:''}
  ]},
  borrowed: {id:'borrowed',title:'Borrowed for the Holidays',image:'assets/images/borrowed-for-the-holidays.webp',formats:[
    {name:'Paperback',price:12.99,checkout:''},
    {name:'Signed Paperback',price:17.99,checkout:''},
    {name:'Ebook',price:3.99,checkout:''}
  ]}
};

const money = v => new Intl.NumberFormat('en-US',{style:'currency',currency:SITE_CONFIG.currency}).format(v);
let cart = JSON.parse(localStorage.getItem('teejayeCart') || '[]');
function saveCart(){localStorage.setItem('teejayeCart',JSON.stringify(cart));updateCartUI()}
function addToCart(id,formatName){const p=products[id]; if(!p)return; const f=p.formats.find(x=>x.name===formatName)||p.formats[0]; const key=id+'|'+f.name; const ex=cart.find(x=>x.key===key); if(ex)ex.qty++; else cart.push({key,id,title:p.title,image:p.image,format:f.name,price:f.price,checkout:f.checkout,qty:1}); saveCart();openCart()}
function removeCart(key){cart=cart.filter(x=>x.key!==key);saveCart()}
function updateCartUI(){document.querySelectorAll('.cart-count').forEach(el=>el.textContent=cart.reduce((a,b)=>a+b.qty,0)); const box=document.querySelector('.cart-items'); if(!box)return; box.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><img src="${i.image}" alt=""><div><strong>${i.title}</strong><br><small>${i.format} × ${i.qty}</small></div><div>${money(i.price*i.qty)}<br><button class="text-link" onclick="removeCart('${i.key}')">Remove</button></div></div>`).join(''):'<p>Your cart is empty.</p>'; const total=cart.reduce((a,b)=>a+b.price*b.qty,0); document.querySelector('.cart-total strong').textContent=money(total); const checkout=document.querySelector('#cart-checkout'); if(checkout){checkout.disabled=!cart.length;}}
function openCart(){document.querySelector('.cart-drawer')?.classList.add('open');document.querySelector('.cart-overlay')?.classList.add('show')}
function closeCart(){document.querySelector('.cart-drawer')?.classList.remove('open');document.querySelector('.cart-overlay')?.classList.remove('show')}
function checkout(){
  if(!cart.length)return;
  if(cart.length===1 && cart[0].checkout){location.href=cart[0].checkout;return;}
  if(SITE_CONFIG.stripeCheckoutUrl){location.href=SITE_CONFIG.stripeCheckoutUrl;return;}
  alert('Direct checkout is ready for your payment link. Add Stripe or PayPal checkout URLs in assets/js/main.js before launch.');
}
function wireForms(){
  document.querySelectorAll('form[data-config]').forEach(form=>{
    form.addEventListener('submit',e=>{
      const kind=form.dataset.config; const url=kind==='contact'?SITE_CONFIG.contactEndpoint:SITE_CONFIG.newsletterEndpoint;
      if(!url){e.preventDefault(); const s=form.querySelector('.form-status'); if(s)s.textContent='Form design is complete. Add your '+(kind==='contact'?'Formspree':'newsletter')+' endpoint in assets/js/main.js to activate submissions.';return;}
      form.action=url;
    })
  })
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));
  document.querySelectorAll('[data-open-cart]').forEach(x=>x.addEventListener('click',e=>{e.preventDefault();openCart()}));
  document.querySelectorAll('[data-close-cart]').forEach(x=>x.addEventListener('click',closeCart));
  document.querySelectorAll('[data-add]').forEach(btn=>btn.addEventListener('click',()=>{const card=btn.closest('[data-product]');addToCart(card.dataset.product,card.querySelector('select').value)}));
  document.querySelector('#cart-checkout')?.addEventListener('click',checkout);
  updateCartUI();wireForms();
});
