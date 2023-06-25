<template>
  <div class="container">
  <div class="card">
    <img
      :src="`${product.image}`"
      class="w-28 h-28 self-center hover:scale-110 tansition duration-300 cursor-pointer"
      @click="navigateTo(`/products/${product.id}`)"
    />
    <div class="card-title">{{ product.title }} <br> 
      <!-- <span class="text-xsm text-[#12b488] "> {{product.category}}</span> <br/> -->
      <div class="flex justify-content-center mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#111827" d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"/></svg>&nbsp;<span class="text-xsm text-[#12b488]"> {{product.rating.rate}}</span>
     <span class="text-xsm text-[#12b488] flex md:flex md:flex-grow flex-row-reverse space-x-1">
       {{product.rating.count}}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50"><path fill="#111827" d="M25.577 8.938c2.297.169 4.306-1.468 4.488-3.648c.184-2.191-1.53-4.108-3.827-4.277c-2.3-.167-4.309 1.46-4.487 3.651c-.179 2.19 1.536 4.103 3.826 4.274zM42.783 41l-1.388-12h-2.252c.021-1 .018-1.111-.051-1.718c-.067-.621-.264-1.075-.585-1.218c.263-.28.438-.636.472-1.037a1.76 1.76 0 0 0-.74-1.575l-5.732-3.768l-4.22-7.946c-.699-1.04-1.883-1.879-3.312-1.999c-1.098-.076-2.108.287-2.925.827l-8.374 6.482a1.658 1.658 0 0 0-.577.865l-1.951 7.851l-.148.233V26h-.016c-.327 0-.625.312-.739.725c-.11.405-.245.94-.245 1.373V29H7.826L6.438 41h5.609l-2.459 3.935c-.16.305-.348.736-.381 1.152c-.121 1.49 1.039 2.785 2.594 2.904c1.111.074 2.067-.462 2.648-1.318L18.599 41h.543l-.085-.737l1.151-1.852c.125-.248.522-.855.566-1.143l1.406-6.11l6.001 6.273l1.884 9.431c.301 1.115 1.263 2.035 2.543 2.129c1.557.118 2.92-.981 3.044-2.468l-.017-.548L34.651 41h8.132zM10.957 27.99c.056-.473.233-.742.545-.742l.117-.002c.315.381.783.642 1.323.686a1.904 1.904 0 0 0 1.553-.633a.677.677 0 0 1 .197.326c.083.287.131.616.131.887c0 .162-.008.488-.019.488h-3.876c-.013 0-.009-.643.029-1.01zM16.688 29h-1.185c.025-1 .018-1.111-.047-1.718c-.056-.52-.203-.922-.436-1.128l1.479-6.442l2.917-2.257L16.688 29zm21.758 0h-3.879c-.016 0-.011-.643.029-1.01c.052-.473.232-.742.545-.742c.449 0 .856-.014 1.217-.022c.363-.013.858-.031 1.481-.031c.239 0 .401.142.491.431c.086.287.132.616.132.887l-.016.487zM25.9 26.717l1.88-7.936l1.581 2.983c.125.205.273.374.468.533L35.476 26h-.853c-.327 0-.447.312-.56.725c-.107.405-.063.94-.063 1.373V29h-2.532l-.409 3.53l-5.159-5.813z"/></svg></span></div>
    </div>

    <hr class="card-divider" />
    <div class="card-footer">
      <div class="card-price">${{ product.price }}</div>
      <NuxtLink :to="`/products/${product.id}`">
        <button class="card-btn">View</button>
      </NuxtLink>
    </div>
  </div>
</div>
</template>


<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.card {
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #111827;
  --main-focus: #12b488;
  width: 230px;
  height: 300px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  gap: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.container:hover .card{
  filter: grayscale();
}
.container .card:hover{
  filter: grayscale(0);
  /* transform:rotateZ(2deg); */
  transition: 300ms ease-in-out;
  border: 2px solid var(--main-focus);
  box-shadow: 0 0 var(--main-focus);
}
@media only screen and (max-width: 600px) {
  .card {
    --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #111827;
  --main-focus: #12b488;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

.card-title {
  display: none;
}

.card-divider {
display: none;
}

.card-footer {
display: none;

}

.card-price {
display: none;
}

.card-btn {
  height: 10px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  transition: all 0.3s;
  font-weight: 500;
  display: none;
}

}
.card:last-child {
  justify-content: flex-end;
}

.card-title {
  font-size: 13px;
  font-weight: 500;
  text-align: start;
  color: var(--font-color);
}

.card-divider {
  width: 100%;
  border: 1px solid var(--main-color);
  border-radius: 50px;
}

.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card-price {
  font-size: 18px;
  font-weight: 500;
  color: var(--font-color);
}

.card-btn {
  height: 35px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 0 15px;
  transition: all 0.3s;
  font-weight: 500;
}

.card-btn svg {
  width: 100%;
  height: 100%;
  fill: var(--main-color);
  transition: all 0.3s;
}

.card-img:hover {
  transform: translateY(-3px);
}

.card-btn:hover {
  border: 2px solid var(--main-focus);
}

.card-btn:hover svg {
  fill: var(--main-focus);
}

.card-btn:active {
  transform: translateY(3px);
}
</style>
