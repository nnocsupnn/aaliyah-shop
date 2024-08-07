<template>
	<div class="shop">
		<ShopHeader/>
		<div class="select">
			<select v-model="selectedCategory">
				<option v-for="deal in categories" :key="deal" :value="deal">{{ deal }}</option>
			</select>
		</div>
		<div class="grid-container">
			<ShopItem class="grid-item" v-for="item in paginatedItems" :key="item.id" :item="item"/>
		</div>

		<div class="pagination">
			<button class="pagination-btn" @click="prevPage" :disabled="currentPage === 1">Previous</button>
			<span>Page {{ currentPage }} of {{ totalPages }}</span>
			<button class="pagination-btn" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
		</div>

		<ShopFooter/>
	</div>
	<!-- <div class="grid-container">
		<div class="grid-item">
			<ShopItem v-for="item in paginatedItems" :key="item.id" :item="item" />
		</div>
	</div>
	<div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div> -->
</template>

<script>
import ShopItem from './ShopItem.vue';
import ShopHeader from './ShopHeader.vue';
import deals from '../../deals.json'
import { computed, ref } from 'vue';
import ShopFooter from './ShopFooter.vue';

export default {
	name: 'ShopList',
	components: {
		ShopItem,
		ShopHeader,
		ShopFooter
	},
	setup() {
		const selectedCategory = ref(Object.keys(deals)[0]);

		let items = ref(Object.entries(deals).reduce((acc, [key, itemsx]) => {
				const dealsItems = []
				for (let deal of itemsx) {
					if (deal.Deals == undefined) continue;
					const dealsValues = deal.Deals.split('\n')
					let [ name ] = dealsValues
					let [_rate, _ratings] = dealsValues[dealsValues.length -1].split(',')
					console.log((dealsValues.length >= 3) ? dealsValues[2] : 0)

					dealsItems.push({
						category: key,
						id: deal.Seq,
						name: name,
						promo_code: deal.Code,
						ratings: {
							rate: (_rate == undefined) ? 0.0 : parseFloat(_rate.split(' ')[1]),
							ratings: (_ratings == undefined) ? '' : _ratings.split(' ')[1]
						},
						description: deal.Deals,
						img_link: deal.Imagelink,
						product_link: deal['Product link'],
						price: (dealsValues.length >= 3) ? dealsValues[2].split('(')[0] : 0,
						full_price: (dealsValues.length >= 3) ? dealsValues[2] : 0
					})
				}

				return acc.concat(dealsItems);
			}, []))

		console.log(items.value)
			

		const categories = computed(() => Object.keys(deals));

		const currentPage = ref(1);
		const itemsPerPage = 9;

		// const flattenedItems = computed(() => {
		// 	return Object.entries(deals).reduce((acc, [key, itemsx]) => {
		// 		itemsx.forEach(item => item.category = key);
		// 		return acc.concat(itemsx);
		// 	}, []);
		// });

		const filteredItems = computed(() => {
			if (!selectedCategory.value) {
				return items.value;
			}
			return items.value.filter(item => item.category === selectedCategory.value);
		});

		const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage));

		const paginatedItems = computed(() => {
			const start = (currentPage.value - 1) * itemsPerPage;
			const end = start + itemsPerPage;
			return filteredItems.value.slice(start, end);
		});

		console.log(paginatedItems)

		const prevPage = () => {
			if (currentPage.value > 1) {
				currentPage.value--;
			}
		};

		const nextPage = () => {
			if (currentPage.value < totalPages.value) {
				currentPage.value++;
			}
		};

		return {
			items,
			categories,
      		selectedCategory,
			currentPage,
			totalPages,
			paginatedItems,
			prevPage,
			nextPage
		};
	},
	mounted() {
		console.log(this.paginatedItems)
	}
}
</script>

<style scoped>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #a53c036b;
    background-image: none;
	font-size: 24px;
}

/* Remove IE arrow */
select::-ms-expand {
    display: none;
}

/* Custom Select */
.select {
    position: relative;
    display: flex;
    width: 100%;
    height: 3em;
    line-height: 3;
    background-image: linear-gradient(15deg, #37005a69 10%, #a53c036b 100%);
    overflow: hidden;
    border-radius: .25em;
	margin: 3% 0;
}

select {
    flex: 1;
    padding: 0 .5em;
    color: #fff;
    cursor: pointer;
}

/* Arrow */
.select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #a53c036b;
    cursor: pointer;
    pointer-events: none;
    transition: .25s all ease;
}

/* Transition */
.select:hover::after {
    color: #f39c12;
}
/* .shop-list {
	display: flex;
	flex-direction: column;
	align-items: center;
} */
.pagination-btn {
  align-self: center;
  background-color: #d6ab97;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.pagination-btn:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

.pagination-btn:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;
	/* Adjust the gap between items as needed */
}

.grid-item {
	padding: 20px;
	text-align: center;
}

.pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
}

.pagination button {
	margin: 0 5px;
	padding: 5px 10px;
}

.pagination span {
	margin: 0 10px;
}
</style>