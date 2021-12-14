<template>
  <div class="checkout bg-light py-1 py-lg-4" style="min-height: 80vh;">
    <div class="container-xl px-3 px-sm-5">
      <div class="checkout-list w-75 mx-auto d-none d-lg-block">
        <ul class="d-flex justify-content-between px-0">
          <li class="me-3 px-4 py-3 rounded w-100 d-flex"
          :class="[$route.path.includes('step1') ? 'bg-primary' : 'bg-white']">
            <p class="w-25 fs-2 fw-bold m-0">01</p>
            <div class="w-75 m-0">
              <p class="m-0">確認購物清單</p>
              <p class="m-0">Check cart</p>
            </div>
          </li>
          <li class="me-3 px-4 py-3 rounded w-100 d-flex"
          :class="[$route.path.includes('step2') ? 'bg-primary' : 'bg-white']">
            <p class="w-25 fs-2 fw-bold m-0">02</p>
            <div class="w-75 m-0">
              <p class="m-0">填寫訂購資料</p>
              <p class="m-0">Shipping info</p>
            </div>
          </li>
          <li class="px-4 py-3 rounded w-100 d-flex"
          :class="[$route.path.includes('step3') ? 'bg-primary' : 'bg-white']">
            <p class="w-25 fs-2 fw-bold m-0">03</p>
            <div class="w-75 m-0">
              <p class="m-0">建立訂單及付款</p>
              <p class="m-0">Order & Payment</p>
            </div>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
