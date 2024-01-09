
var a=[
	  {id:1,img:"img/e.jpg",dish:"Salem Biriyani",village:"Bakery, Desserts",rating:"4.3",min:25,total:300,rs:300,color:"bg-success",val:1},
	  {id:2,img:"img/f.jpg",dish:"Moonlight Takeaway",village:"Indian, Chinese, Tandoor",rating:"4.3",min:22,total:340,rs:340,color:"bg-success",val:1},
	  {id:3,img:"img/g.jpg",dish:"A1 Ambur Biriyani",village:"Biryani, Chinese",rating:"2.3",min:5,total:300,rs:300,color:"bg-danger",val:1},
	  {id:4,img:"img/h.jpg",dish:"KFC",village:"South Indian, Kerala",rating:"4.3",min:45,total:200,rs:200,color:"bg-success",val:1},
	  {id:5,img:"img/i.jpg",dish:"Burger King",village:"Burgers, American",rating:"3.2",min:43,total:320,rs:320,color:"bg-warning",val:1},
	  {id:6,img:"img/j.jpg",dish:"Zaitoon",village:"North Indian, Arabian, Chinese",rating:"4.3",min:25,total:100,rs:100,color:"bg-success",val:1},
	  {id:7,img:"img/k.jpg",dish:"Bhai Biryani",village:"South Indian",rating:"5.2",min:20,total:500,rs:500,color:"bg-success",val:1},
	  {id:8,img:"img/l.jpg",dish:"Hotel Santosi",village:"Biryani, Chettinad, Chinese",rating:"1.5",min:50,total:400,rs:400,color:"bg-danger",val:1},
	  {id:9,img:"img/m.jpg",dish:"Sri Krishna Bhavan",village:"South Indian, North Indian",rating:"4.1",min:25,total:800,rs:800,color:"bg-success",val:1},
	  {id:10,img:"img/n.jpg",dish:"That Mallu Joint",village:"Biryani, South Indian",rating:"4.3",min:3,total:30,rs:30,color:"bg-success",val:1},
	  {id:11,img:"img/o.jpg",dish:"Copper Kitchen",village:"North Indian, Chinese, Biryani",rating:"4.5",min:65,total:130,rs:130,color:"bg-success",val:1},
	  {id:12,img:"img/p.jpg",dish:"Hyderabad Biryani",village:"South Indian, Chinese",rating:"5.3",min:85,total:460,rs:460,color:"bg-success",val:1},
	  {id:13,img:"img/q.jpg",dish:"Desi Mane",village:"Biryani, Chettinad, Barbecue",rating:"6.5",min:68,total:90,rs:90,color:"bg-success",val:1},
	  {id:14,img:"img/r.jpg",dish:"Theobroma",village:"Bakery, Desserts",rating:"5.5",min:25,total:800,rs:800,color:"bg-success",val:1},
	  {id:15,img:"img/s.jpg",dish:"Gowri Krishnaa",village:"Indian, Chinese, South Indian",rating:3.4,min:5,total:700,rs:700,color:"bg-warning",val:1},
	  {id:16,img:"img/t.jpg",dish:"Andhikkadai",village:"South Indian, North Indian",rating:"4.3",min:25,total:400,rs:400,color:"bg-success",val:1}
	  ]




				var colum=document.getElementById("colum")
	
	function call(b) {

		b.map(function (e) {

			colum.innerHTML+=`
			<div class="col-lg-3 col-12 col-md-6 mt-3" id="hide" data-aos="fade-up"data-aos-anchor-placement="top-bottom"data-aos-duration="1500">
				<div class="zoom-border rounded p-3 anime">
					<img src="${e.img}" class="w-100">
					<p class="fw-bold fs-5 mb-0">${e.dish}</p>
					<p class="mb-0">${e.village}</p>
					<div style="font-size: 13px;" class="d-flex justify-content-around align-items-center py-3 border-show">
						<div class=" ${e.color} text-light" id="raja"><span class="px-1 rounded "><i class="fa fa-star" aria-hidden="true"></i> <span>${e.rating}</span></span></div>
						<span class="fw-bold">.</span>
						<div>${e.min} mins </div>
						<span class="fw-bold">.</span>
						<div><i class="fa fa-inr" aria-hidden="true"></i><span  class="price">${e.rs}</span> for two</div>
					</div>
					<button onclick="add(${e.id})" class="border-0 bg-warning  py-2 text-center rounded active text-light w-100 mt-2 opacityy add_card">Order</button>
				</div>
			</div>`

		}
	)}

	call(a)
		
	function relevance() {
		colum.innerHTML=""
		call(a)
		open.classList.add('closecard')
		open.classList.remove('opencard')
	}

	function rating() {
			a.sort((a,b)=>b.rating-a.rating)
			colum.innerHTML="";
			call(a)
			open.classList.add('closecard')
			open.classList.remove('opencard')
	}


	function h_to_l() {
			a.sort((a,b)=>b.rs-a.rs)
			colum.innerHTML=""
			call(a)
			open.classList.add('closecard')
			open.classList.remove('opencard')
	}


	function l_to_h() {
			a.sort((a,b)=>a.rs-b.rs)
			colum.innerHTML=""
			call(a)
			open.classList.add('closecard')
			open.classList.remove('opencard')
	}

	function delivertime() {
		a.sort((a,b)=>a.min-b.min)
		colum.innerHTML=""
		call(a)
		open.classList.add('closecard')
		open.classList.remove('opencard')		
	}



			//............................ menucard open

	const open = document.querySelector(".open")
	let o = 0

	function openmenu() {
		o++
		if (o===1) {
			open.classList.remove('d-none')
			open.classList.remove('closecard')
			open.classList.add('opencard')			
		}
		else{
			o=0
			open.classList.add('closecard')
			open.classList.remove('opencard')
		}
	}

	function menuclose() {
		open.classList.add('closecard')
		open.classList.remove('opencard')
		
	}





/*......................................................aad to card................................................................
...................................................................................................................................*/

			let placeorder=document.querySelector(".placeorder")
			let cardcount=document.querySelectorAll(".cardcount")

			// let empty = []
				
		function selectcard() {
			
				placeorder.classList.remove("d-none")			
				placeorder.classList.remove("anime1")
		}


		function orderclose() {
			placeorder.classList.add("anime1")
		}
		
		let total = document.querySelector(".total")
		let list = document.querySelector(".orderslist")
		let arr = JSON.parse(localStorage.getItem('store')) || []

		function add(id) {
			if (arr.find(e=>e.id===id)) {
				alert("already add")
				return
			}
				
			else{
			const fil = a.find(e=>e.id===id)
			arr.push(fil)
			localStorage.setItem('store',JSON.stringify(arr))
			cardAdd()
			}
		}

		function cardAdd() {
			list.innerHTML=""
		arr.map((e)=>{
			list.innerHTML+=`
				<div class="mt-3 row align-items-center a">		
				<div class="col-4">
					<img src="${e.img}" alt="" class="w-100">
				</div>
				<div class="col-4">
					<h6 class="name">${e.dish}</h6>
					<h6 class="price">${e.rs} Price</h6>
				</div>
				<div class="col-2 px-0">
					<div class="d-flex justify-content-center">
						<i class="bi bi-plus-lg" onclick="increase(${e.id})"></i>
					</div>
						<p class="my-2 text-center">${e.val}</p>
					<div class="d-flex justify-content-center">
						<i class="bi bi-dash-lg" onclick="decrease(${e.id})"></i>
					</div>
				</div>
				<div class="col-2 px-0 text-center">
					<i class="bi bi-trash3 fs-5 text-danger del" style="cursor: pointer;" onclick="del(${e.id})" ></i>
				</div>
			</div>`
	
			})
			Total()
			cardcount.forEach((e)=>{
				e.innerHTML=arr.length
			})
		}
		cardAdd()

		function del(id) {
			arr = arr.filter(e=>e.id!==id)
			localStorage.setItem("store",JSON.stringify(arr))
			cardAdd()
		}

		function increase(id) {
			const a = arr.map((e)=>{
				return e.id===id ? {...e,val:e.val+1} :e
 			})
			arr = a.map((e)=>{
				return e.id===id ? {...e,total:e.rs*e.val}:e
			})
			localStorage.setItem("store",JSON.stringify(arr))
			cardAdd()
		}

		function decrease(id) {
			const a = arr.map((e)=>{
				return e.id===id ? e.val===1 ? {...e,val:1}:{...e,val:e.val-1}:e
 			})
			arr = a.map((e)=>{
				return e.id===id ? {...e,total:e.rs*e.val}:e
			})
			localStorage.setItem("store",JSON.stringify(arr))
			cardAdd()
		}

		function Total() {
			const a = arr.reduce((e,p)=>{
				return e+p.total
			},0)
			total.innerHTML=`Total : ${a}`
		}

	
// 	let add_card = document.querySelectorAll(".add_card")
// 	let sum=0
// 	let sum1=0
// 	let sum2=0
// 	let count=0		
	
// 	add_card.forEach((e)=>{
// 		e.addEventListener("click",addCard)
// 	})


// 	function addCard() {


// 		let food = this.parentElement.parentElement
		
// 		let name = food.querySelector(".fw-bold").innerHTML
// 		let price = food.querySelector(".price").innerHTML
// 		let imgSrc = food.querySelector(".w-100").src

// 		let total = document.querySelector(".total")


// 		let all ={name,price,imgSrc}

// 		if (empty.find((e)=>e.name==all. name)) {

// 			alert("already add to card")

// 			return 

// 		} else {
// 			empty.push(all)
// 			sum1+=parseInt(price)
// 			total.innerHTML="Total "+ sum1
// 			count++
// 			cardcount.innerHTML=count
// 		}




// 	let add = document.querySelector(".orderslist")
// 	let addproduct = createcardproduct(name,price,imgSrc)

// 	let div = document.createElement("div")
// 	add.append(div)
// 	div.innerHTML=addproduct
// 	show()



// 	function createcardproduct(a,b,c) {
		
// 		return`
// 		<div class="mt-3 row align-items-center a">		
// 			<div class="col-4">
// 				<img src="${c}" alt="" class="w-100">
// 			</div>
// 			<div class="col-4">
// 				<h6 class="name">${a}</h6>
// 				<h6 class="price">${b} Price</h6>
// 			</div>
// 			<div class="col-2 px-0"><input type="number" value=1 class="w-100 addingItems"></div>
// 			<div class="col-2 px-0 text-center">
// 				<i class="bi bi-trash3 fs-5 text-danger del" style="cursor: pointer;" ></i>
// 			</div>
// 		</div>`
	
// 	}


// //..........................input number change...........................



// 		let addingItems = document.querySelectorAll(".addingItems")
			
// 			addingItems.forEach((input)=>{

// 				input.addEventListener("change",countaddCard)
// 			})

// 			function countaddCard() {

// 				if (this.value<1||isNaN(this.value)) {
// 					this.value=1
// 				}
// 				addindTotal()
// 			}


// 			function addindTotal() {
// 				sum=0		
// 				let adding = document.querySelectorAll(".a")
// 				let total = document.querySelector(".total")

// 				adding.forEach((e)=>{
					
// 					let priceElement = e.querySelector(".price")
// 					let price = parseInt(priceElement.innerHTML.replace("price",""))
// 					let a = e.querySelector(".addingItems").value
// 					sum+=price*parseInt(a)
// 					total.innerHTML="Total "+sum
// 					sum1 = sum	
// 				})
					
				

// 			}


// //.......................delete.............


// 	function show() {

// 			let del =document.querySelectorAll(".del")
// 				del.forEach((e)=>{
// 				e.addEventListener("click",RemoveItems)
// 			})

// 	}	
// 		function RemoveItems() {


// 				let name = this.parentElement.parentElement.querySelector(".name").innerHTML
// 				let price = parseInt(this.parentElement.parentElement.querySelector(".price").innerHTML.replace("price",""))
// 				let inputNumber =this.parentElement.parentElement.querySelector(".addingItems").value
// 				let a = this.parentElement.parentElement.querySelector(".addingItems").value
				
// 				let total = document.querySelector(".total")

// 				let PriceDel = empty.find((e)=>{
// 							return e.name==name
// 					})
// 					if (PriceDel) {
// 						sum2=price*parseInt(a)
// 						sum1=sum1-sum2
// 						total.innerHTML="Total "+sum1
// 						count--
// 						cardcount.innerHTML=count	
// 					}


// 				empty=empty.filter(e=>e.name!=name)
// 				this.parentElement.parentElement.remove()


// 		}
	


// 	}









	//......................................filters.......................................................


	let fill = document.querySelector(".filterposition")

	function filters() {
		
	
			fill.classList.remove("d-none")
			fill.classList.remove("anime1")	
			let div =document.createElement("div")
				div.classList.add("backfix")
			document.body.append(div)
		
	

			div.addEventListener("click",()=>{

				fill.classList.add("anime1")
				var remo = document.querySelector(".backfix")
				remo.remove("backfix")
			})
		
	}

			let filterClose = document.querySelector(".fa-times")
		

			filterClose.addEventListener("click",()=>{
				fill.classList.add("anime1")
				var remo = document.querySelector(".backfix")
				remo.remove("backfix")	
			})


			let filtersSort = document.querySelector(".filtersSort")
			let filtersDelivery = document.querySelector(".filtersDelivery")
			let filtersCuisine = document.querySelector(".filtersCuisine")
			let filtersExplore = document.querySelector(".filtersExplore")
			let filtersRating = document.querySelector(".filtersRating")
			let filtersVegnonVeg = document.querySelector(".filtersVegnonVeg")
		

			filtersSort.classList.add("left")

			filtersSort.addEventListener("click",()=>{

					filtersSort.classList.add("left")
					filtersDelivery.classList.remove("left")
					filtersCuisine.classList.remove("left")
					filtersExplore.classList.remove("left")
					filtersRating.classList.remove("left")
					filtersVegnonVeg.classList.remove("left")

			})

			filtersDelivery.addEventListener("click",()=>{

				filtersDelivery.classList.add("left")
				filtersSort.classList.remove("left")
				filtersCuisine.classList.remove("left")
				filtersExplore.classList.remove("left")
				filtersRating.classList.remove("left")
				filtersVegnonVeg.classList.remove("left")

			})


			filtersCuisine.addEventListener("click",()=>{

				filtersCuisine.classList.add("left")
				filtersDelivery.classList.remove("left")
				filtersSort.classList.remove("left")
				filtersExplore.classList.remove("left")
				filtersRating.classList.remove("left")
				filtersVegnonVeg.classList.remove("left")


			})

			filtersExplore.addEventListener("click",()=>{

				filtersExplore.classList.add("left")
				filtersCuisine.classList.remove("left")
				filtersDelivery.classList.remove("left")
				filtersSort.classList.remove("left")
				filtersRating.classList.remove("left")
				filtersVegnonVeg.classList.remove("left")


			})


			filtersRating.addEventListener("click",()=>{

				filtersRating.classList.add("left")
				filtersExplore.classList.remove("left")
				filtersCuisine.classList.remove("left")
				filtersDelivery.classList.remove("left")
				filtersSort.classList.remove("left")
				filtersVegnonVeg.classList.remove("left")


			})


			filtersVegnonVeg.addEventListener("click",()=>{

				filtersVegnonVeg.classList.add("left")
				filtersRating.classList.remove("left")
				filtersExplore.classList.remove("left")
				filtersCuisine.classList.remove("left")
				filtersDelivery.classList.remove("left")
				filtersSort.classList.remove("left")


			})









