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
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#111827" d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"/></svg>&nbsp;<span class="text-xsm text-[#12b488]"> {{product.rating.rate}}/5</span></div>
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
  opacity: 0.6;
  filter: blur(3px);
}
.container .card:hover{
  opacity: 1;
  filter: blur(0px);
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
