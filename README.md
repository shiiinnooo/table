# Vue 餐具電商網站 － TAbLe
> TAbLe 為您打造質感有溫度的餐桌，此網站為 Vue 獨立開發的電商網站。

![](https://i.imgur.com/rXNxv3v.png)

## Demo
[https://shiiinnooo.github.io/table/#/](https://shiiinnooo.github.io/table/#/)

## 簡介
網站主要為餐具販售，具備前台、後台。
#### 前台
* 電商展示（包含商品列表及分類功能 )、單一商品介紹
* 購物車結帳
* 商品收藏功能
* 管理者登入


#### 後台
* 商品管理（產品列表、新增、編輯、刪除）
* 訂單列表查詢 ( 付款連結功能 )

## 使用技術
* Vue.js
* Vue CLI
* Vue Router
* Vue Components
* RESTful APIs
* Bootstrap 
* JavaScript ( ES6、LocalStorage )
* RWD + SCSS

## 使用 Plugin
* [vue-axios](https://github.com/imcvampire/vue-axios)
* [VeeValidate](https://github.com/logaretm/vee-validate)
* [Vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay)
* [mitt](https://github.com/developit/mitt)
* [wow.js](https://github.com/matthieua/WOW)
* [Swiper](https://github.com/nolimits4web/swiper)

## 詳細說明
### 首頁
- 首頁由 Swiper 輪播圖片，圖片中下方有導購按鈕。
- Navbar 導覽列分別為：左方首頁、產品頁、關於我們，右方我的最愛頁、和購物車。

![](https://i.imgur.com/7iJ3dYl.png)

![](https://i.imgur.com/ijFfdXy.png)
- 首頁下方有做分類導覽，有 hover 效果。
- 當畫面滑過特定比例，右下方出現回到頂部按鈕。

---

### 產品列表頁
![](https://i.imgur.com/oInZ0x2.png)
* 點擊商品圖片或是商品名稱，即可跳轉至單一商品介紹頁。
* 商品圖片 hover 後出現我的最愛 icon 即可加入最愛，卡片下方有加入購物車按鈕。

---

### 單一產品介紹頁
![](https://i.imgur.com/hRzCucx.png)

- 採用大圖示展示產品，右側欄可選擇數量加入購物車，亦可加入我的最愛收藏產品。

---

### 我的最愛頁
![](https://i.imgur.com/fA6xx7B.png)

- 收藏商品簡單呈現，點選商品名稱即可前往此產品頁面。在此頁可將最愛商品加入購物車，也可移除最愛商品。

---
### 購物車
![](https://i.imgur.com/qbSrbPV.png)
- 購物車為右側畫布效果，點選「前往結帳」，前往結帳頁面。

---
### 結帳頁
- STEP1 可調整購物車商品，點選 Continue 前往下一步。

![](https://i.imgur.com/MhqyAo9.png)

- STEP2 填寫訂購資料 ( 表單驗證 )。

![](https://i.imgur.com/PFAAfbg.png)

- STEP3 完成訂單並前往付款。

![](https://i.imgur.com/ATu9RMG.png)

---
### 後台登入頁面

![](https://i.imgur.com/Wlt3dn8.png)
 > [name= 帳號 smile0919a@gmail.com | 密碼 table000]
---

### 後台產品列表
![](https://i.imgur.com/8BNCkQo.png)

![](https://i.imgur.com/aTCgRGi.png)

![](https://i.imgur.com/pe56Dve.png)
- 星號可將圖片設定為主圖。

---
### 後台訂單
![](https://i.imgur.com/U3FPr7f.png)

![](https://i.imgur.com/zLdDZVs.png)
- 未付款訂單，點選付款連結即可複製連結。

---
### 歡迎至 Demo 網站觀看其餘細節
https://shiiinnooo.github.io/table/#/


