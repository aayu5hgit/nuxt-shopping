<template>
    <!-- <div class="card text-center">
      <img :src="`${product.image}`" class="thumb" />
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">View Details</p>
      </NuxtLink>
    </div> -->
    <div class="card ">
    <img :src="`${product.image}`" class="w-28 h-28 self-center hover:scale-110 tansition duration-300 cursor-pointer"/>
    <div class="card-title">{{ product.title }}</div>
   
    <hr class="card-divider">
    <div class="card-footer">
        <div class="card-price">${{product.price}}</div>
        <NuxtLink :to="`/products/${product.id}`">
        <button class="card-btn">
          View
        </button>
    </NuxtLink>
    </div>
</div>
  </template>
  
  <script setup>
    const { product } = defineProps(['product'])
  </script>
  
  <style scoped>
   .card {
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #111827;
  --main-focus: #12B488;
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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