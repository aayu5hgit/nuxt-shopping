<template>
  <div>
    <div class="flex justify-center mb-4">
      <div class="radio-inputs">
		<label>
			<input class="radio-input" type="radio" name="engine">
				<span class="radio-tile">
					<span class="radio-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20q-2.3 0-3.9-1.6T4 14.5q0-2.3 1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4h6ZM9.5 11q-1.45 0-2.475 1.025T6 14.5q0 1.45 1.025 2.475T9.5 18q1.45 0 2.475-1.025T13 14.5q0-1.45-1.025-2.475T9.5 11Z"/></svg>
					</span>
					<span class="radio-label">Male</span>
				</span>
		</label>
		<label>
			<input checked="" class="radio-input" type="radio" name="engine">
			<span class="radio-tile">
				<span class="radio-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-2H9v-2h2v-2.1q-1.975-.35-3.238-1.888T6.5 9.45q0-2.275 1.613-3.862T12 4q2.275 0 3.888 1.588T17.5 9.45q0 2.025-1.263 3.563T13 14.9V17h2v2h-2v2h-2Zm1-8q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13Z"/></svg>
				</span>
				<span class="radio-label">Female</span>
			</span>
		</label>
		<label>
			<input class="radio-input" type="radio" name="engine">
			<span class="radio-tile">
				<span class="radio-icon">
    			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50"><path fill="currentColor" d="m46.476 20.662l-.013-.101a1.27 1.27 0 0 0-.127-.362L40 10s-.808-1-1-1H12L3.88 19.853l-.096.1l-.013.047a1.78 1.78 0 0 0-.168.35l-.033.097a1.575 1.575 0 0 0 .013.95l.038.109c.051.129.114.247.188.352L23.44 46.725l.04.057c.101.13.224.245.374.35l.114.071c.112.07.229.126.399.188l.111.037c.192.049.359.072.522.072c.165 0 .326-.022.543-.078l.133-.047c.13-.046.247-.103.388-.19l.088-.055c.151-.107.272-.223.339-.314l19.656-24.893a1.747 1.747 0 0 0 .33-.79l.015-.129l.008-.102l-.024-.24zM35.936 20l2.798-5.063L41.53 20h-5.594zm-1.678 3h6.638L29.832 37.015L34.258 23zm-1.642-4.518L28.575 13h7.07l-3.029 5.482zM19.672 23h10.659L25 39.877L19.672 23zm1.057-3L25 14.204L29.271 20h-8.542zm-3.008-1.972L15.869 13h5.557l-3.705 5.028zm2.449 18.988L9.105 23h6.639l4.426 14.016zm-7.505-22.044L14.518 20H8.96l3.705-5.028z"/></svg>
				</span>
				<span class="radio-label">Jewelery</span>
			</span>
		</label>
</div>
    </div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
//  fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
definePageMeta({
  layouts: "products",
});
</script>

<style>
.radio-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio-inputs > * {
  margin: 6px;
}

.radio-input:checked + .radio-tile {
  border-color: #12b488;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #12b488;
}

.radio-input:checked + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
  background-color: #12b488;
  border-color: #12b488;
}

.radio-input:checked + .radio-tile .radio-icon svg {
  fill: #12b488;
}

.radio-input:checked + .radio-tile .radio-label {
  color: #12b488;
}

.radio-input:focus + .radio-tile {
  border-color: #12b488;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
}

.radio-input:focus + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
}

.radio-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  min-height: 80px;
  border-radius: 0.5rem;
  border: 2px solid #b5bfd9;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;
}

.radio-tile:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid #b5bfd9;
  background-color: #fff;
  border-radius: 50%;
  top: 0.25rem;
  left: 0.25rem;
  opacity: 0;
  transform: scale(0);
  transition: 0.25s ease;
}

.radio-tile:hover {
  border-color: #12b488;
}

.radio-tile:hover:before {
  transform: scale(1);
  opacity: 1;
}

.radio-icon svg {
  width: 2rem;
  height: 2rem;
  fill: #494949;
}

.radio-label {
  color: #707070;
  transition: 0.375s ease;
  text-align: center;
  font-size: 13px;
}

.radio-input {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>