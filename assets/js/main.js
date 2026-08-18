
const SITE_CONFIG = {
  currency:'USD',
  stripeCheckoutUrl:'https://buy.stripe.com/fZu28r9ON72Y83mcyzffy00'
};

const products = {
  closeted: {id:'closeted',title:'Closeted Hearts',image:'assets/images/closeted-hearts.webp',formats:[
    {name:'Paperback',price:16.99,checkout:'https://buy.stripe.com/fZu28r9ON72Y83mcyzffy00'}
  ]}
};

const money = v => new Intl.NumberFormat('en-US',{style:'currency',currency:SITE_CONFIG.currency}).format(v);
let cart = JSON.parse(localStorage.getItem('teejayeCart') || '[]');
function saveCart(){localStorage.setItem('teejayeCart',JSON.stringify(cart));updateCartUI()}
function addToCart(id,formatName){const p=products[id]; if(!p)return; const f=p.formats.find(x=>x.name===formatName)||p.formats[0]; const key=id+'|'+f.name; const ex=cart.find(x=>x.key===key); if(!ex)cart.push({key,id,title:p.title,image:p.image,format:f.name,price:f.price,checkout:f.checkout,qty:1}); saveCart();openCart()}
function removeCart(key){cart=cart.filter(x=>x.key!==key);saveCart()}
function updateCartUI(){document.querySelectorAll('.cart-count').forEach(el=>el.textContent=cart.reduce((a,b)=>a+b.qty,0)); const box=document.querySelector('.cart-items'); if(!box)return; box.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><img src="${i.image}" alt=""><div><strong>${i.title}</strong><br><small>${i.format} × ${i.qty}</small></div><div>${money(i.price*i.qty)}<br><button class="text-link" onclick="removeCart('${i.key}')">Remove</button></div></div>`).join(''):'<p>Your cart is empty.</p>'; const total=cart.reduce((a,b)=>a+b.price*b.qty,0); document.querySelector('.cart-total strong').textContent=money(total); const checkout=document.querySelector('#cart-checkout'); if(checkout){checkout.disabled=!cart.length;}}
let lastFocusedElement=null;
function openCart(){const drawer=document.querySelector('.cart-drawer');lastFocusedElement=document.activeElement;drawer?.classList.add('open');drawer?.setAttribute('aria-hidden','false');document.querySelector('.cart-overlay')?.classList.add('show');document.body.classList.add('cart-open');drawer?.querySelector('[data-close-cart]')?.focus()}
function closeCart(){const drawer=document.querySelector('.cart-drawer');drawer?.classList.remove('open');drawer?.setAttribute('aria-hidden','true');document.querySelector('.cart-overlay')?.classList.remove('show');document.body.classList.remove('cart-open');lastFocusedElement?.focus()}
function checkout(){
  if(!cart.length)return;
  if(cart.length===1 && cart[0].checkout){location.href=cart[0].checkout;return;}
  if(SITE_CONFIG.stripeCheckoutUrl){location.href=SITE_CONFIG.stripeCheckoutUrl;return;}
  alert('Checkout is temporarily unavailable. Please try again later.');
}
function wireForms(){
  document.querySelectorAll('form[data-config="contact"]').forEach(form=>{
    form.addEventListener('submit',async e=>{
      e.preventDefault();
      const status=form.querySelector('.form-status');
      const button=form.querySelector('button[type="submit"]');
      const originalLabel=button.textContent;
      button.disabled=true;
      button.textContent='Sending…';
      if(status)status.textContent='Sending your message…';

      try{
        const response=await fetch(form.getAttribute('action')||'/',{
          method:'POST',
          headers:{'Content-Type':'application/x-www-form-urlencoded'},
          body:new URLSearchParams(new FormData(form)).toString()
        });
        if(!response.ok)throw new Error('Submission failed');
        form.innerHTML='<div class="contact-card form-success" role="status"><div class="eyebrow">Message received</div><h3>Thank you for reaching out.</h3><p>Your message has been sent successfully. I’ll respond as soon as I can.</p></div>';
      }catch(error){
        button.disabled=false;
        button.textContent=originalLabel;
        if(status)status.textContent='Your message could not be sent. Please check your connection and try again.';
      }
    });
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  cart=cart.filter(item=>products[item.id]).map(item=>({...item,qty:1,price:products[item.id].formats[0].price,checkout:products[item.id].formats[0].checkout}));saveCart();
  const menuButton=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav-links');
  menuButton?.addEventListener('click',()=>{const open=nav?.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(Boolean(open)))});
  nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}));
  document.querySelectorAll('[data-open-cart]').forEach(x=>x.addEventListener('click',e=>{e.preventDefault();openCart()}));
  document.querySelectorAll('[data-close-cart]').forEach(x=>x.addEventListener('click',closeCart));
  document.querySelectorAll('[data-add]').forEach(btn=>btn.addEventListener('click',()=>{const card=btn.closest('[data-product]');addToCart(card.dataset.product,card.querySelector('select').value)}));
  document.querySelector('#cart-checkout')?.addEventListener('click',checkout);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(document.querySelector('.cart-drawer.open'))closeCart();if(nav?.classList.contains('open')){nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.focus()}}});
  updateCartUI();wireForms();
});
