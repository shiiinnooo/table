<template>
  <!-- <div class="accordion accordion-flush me-2" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          所有商品
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> class. This is the first
          item's accordion body.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          餐桌
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>馬克杯</li>
            <li>碗</li>
            <li>盤子</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          廚房
        </button>
      </h2>
      <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> class. This is the third
          item's accordion body. Nothing more exciting happening here in terms
          of content, but just filling up the space to make it look, at least at
          first glance, a bit more representative of how this would look in a
          real-world application.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingFour">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFour"
          aria-expanded="false"
          aria-controls="flush-collapseFour"
        >
          其他
        </button>
      </h2>
      <div
        id="flush-collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingFour"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> class. This is the third
          item's accordion body. Nothing more exciting happening here in terms
          of content, but just filling up the space to make it look, at least at
          first glance, a bit more representative of how this would look in a
          real-world application.
        </div>
      </div>
    </div>
  </div> -->
  <div class="product-menu">
    <ul>
      <li class="my-2">
        <a class="fw-bold" href="#">所有商品</a>
      </li>
      <li class="my-2">
        <a class="fw-bold" href="#">餐桌</a>
        <ul class="sub-product-menu">
          <li class="my-1"><a href="#">玻璃杯</a></li>
          <li class="my-1"><a href="#">馬克杯</a></li>
          <li class="my-1"><a href="#">碗</a></li>
          <li class="my-1"><a href="#">盤子</a></li>
          <li class="my-1"><a href="#">其他餐具</a></li>
        </ul>
      </li>
      <li class="my-2">
        <a class="fw-bold" href="#">廚房</a>
        <ul class="sub-product-menu">
          <li class="my-1"><a href="#">鍋子</a></li>
          <li class="my-1"><a href="#">砧板</a></li>
          <li class="my-1"><a href="#">托盤</a></li>
        </ul>
      </li>
      <li class="my-2">
        <a class="fw-bold" href="#">香氛系列</a>
      </li>
      <li class="my-2">
        <a class="fw-bold" href="#">TAbLe 選物</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.sub-product-menu li {
  text-indent: -1.5rem;
}
</style>
