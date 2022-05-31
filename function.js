
    function fetchData() {
      fetch("https://fe-assignment.vaimo.net/")
      .then(response => {
        if (!response.ok) {
          throw Error("ERROR")
        }
        return response.json();
      })
      .then(data => {
        console.log(data);

        let img = document.createElement("img");
        img.src = data.product.gallery[0].main;

        let div = document.querySelector('.drone');
        div.appendChild(img);

        document.querySelector('.header').innerHTML = `
        <h1>${data.product.name} 
        <span class="tag-line">Hot sale products</span></h1> `

        document.querySelector('.stars').innerHTML =
          `${data.product.reviews.rating}`
          
        document.querySelector('.reviews').innerHTML =
          `<p>7 Reviews</p>`

        document.querySelector('.buyers').innerHTML =  
          `${data.product.reviews.total_buyers} buyers`

        document.querySelector('.discount-amount').innerHTML = `
         ${data.product.discount.amount} OFF`
        
         let countDownDate = new Date(`${data.product.discount.end_date}`).getTime();
         let x = setInterval(function() {
           let now = new Date().getTime();
           let distance = countDownDate - now;
           let days = Math.floor(distance / (1000 * 60 * 60 * 24));
           let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           let seconds = Math.floor((distance % (1000 * 60)) / 1000);

           document.querySelector(".discount-date").innerHTML = days + "d " + hours + "h "
           + minutes + "m " + seconds + "s ";
         })

         document.querySelector(".product1-lable").innerHTML = `
         ${data.product.options['1080p'].label}`

         document.querySelector(".product1-price").innerHTML = `${data.product.options['1080p'].price.currency.symbol} ${data.product.options['1080p'].price.value}`

         document.querySelector(".product2-lable").innerHTML = `${data.product.options['4k'].label}`

         document.querySelector(".product2-price").innerHTML = `${data.product.options['4k'].price.currency.symbol} ${data.product.options['4k'].price.value}`

         document.querySelector(".product3-lable").innerHTML = `${data.product.options.battery_accessories.label}`

         document.querySelector(".product3-price").innerHTML = `${data.product.options.battery_accessories.price.currency.symbol} ${data.product.options.battery_accessories.price.value}`

         let btnAdd = document.querySelector('.plus');
         let btnSubtract = document.querySelector('.minus');
         let input = document.querySelector('input');

         btnAdd.addEventListener('click', () =>{
          input.value = parseInt(input.value) + 1;
         });
         btnSubtract.addEventListener('click', () =>{
          input.value = parseInt(input.value) - 1;
          });

          document.querySelector('.ship-location').innerHTML = `<p>Ship to <span class="SA">${data.product.shipping.method.country}</span></p> 
          <p class="ship-company">by ${data.product.shipping.method.title}</p>`

          let amount = `${data.product.shipping.method.cost.value}`;
          let result = Number(amount).toFixed(2)
          document.querySelector('.ship-amount').innerHTML = `${data.product.shipping.method.cost.currency.symbol} ${result}`

         document.querySelector('.lead-time').innerHTML = `<p>Lead Time ${data.product.shipping.lead_time.value}</p> <img class="info-icon" src="/Images/info-icon.png">`
   
          document.querySelector('.ship-time').innerHTML = `<p>Shipping time ${data.product.shipping.method.shipping_time.value}</p> <img class="info-icon" src="/Images/info-icon.png">`

      })
      .catch(error => {
        console.log(error);
      });
    }


    
    fetchData();
