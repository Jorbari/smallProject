<template>
  <div class="container">
    <header>
      <h2 class="logo">{{userProfile?.first_name}}</h2>
      <button>
        Add new product
      </button>
    </header>
    <main>
      <table class="products">
        <tr>
          <th>NAME OF PRODUCTS</th>
          <th>PRICE</th>
          <th>NAME OF SUPPLIER</th>
          <th></th>
        </tr>
        <tr>
          <td>Beats Soloe</td>
          <td>$90</td>
          <td>Global Online Store</td>
          <td>
            <div class="row">
              <img src="../assets/icons/trash.svg" alt="" />
              <img src="../assets/icons/trash.svg" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Beats Soloe</td>
          <td>$90</td>
          <td>Global Online Store</td>
          <td>
            <div class="row">
              <img src="../assets/icons/trash.svg" alt="" />
              <img src="../assets/icons/trash.svg" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Beats Soloe</td>
          <td>$90</td>
          <td>Global Online Store</td>
          <td>
            <div class="row">
              <img src="../assets/icons/trash.svg" alt="" />
              <img src="../assets/icons/trash.svg" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Beats Soloe</td>
          <td>$90</td>
          <td>Global Online Store</td>
          <td>
            <div class="row">
              <img src="../assets/icons/trash.svg" alt="" />
              <img src="../assets/icons/trash.svg" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Beats Soloe</td>
          <td>$90</td>
          <td>Global Online Store</td>
          <td>
            <div class="row">
              <img src="../assets/icons/trash.svg" alt="" />
              <img src="../assets/icons/trash.svg" alt="" />
            </div>
          </td>
        </tr>
      </table>

      <div class="paginator">
        <div class="prev row">
          <img src="../assets/icons/Arrow-left.svg" alt="" />
          <p>PREV</p>
        </div>
        <div class="next row">
          <p>NEXT</p>
          <img src="../assets/icons/Arrow-right.svg" alt="" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import userDetails from '../service/getUserProfile';
import { getRequest } from '../service/httpClient';

export default {
  name: "Products",
  data() {
    return {
      userProfile: null,
    }
  },
  mounted() {
    const user_data = userDetails();
    this.userProfile = user_data;

    this.getProducts();
  },
  methods: {

    getProducts() {
      const url = 'products';

      getRequest(url).then(
        res => {
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )

    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 0 5rem;
  font-size: 18px;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 55px 0 74px;
}
header h1 {
  font-size: 25px;
}
header button {
  padding: 18px 50px;
  border: none;
  background: #ffd600;
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}
.products {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.products td,
.products th {
  padding: 20px 8px;
  text-align: initial;
}
.products td:first-of-type,
.products th:first-of-type {
  padding-left: 40px;
}

.products td .row img:first-of-type {
  margin-right: 1rem;
}

.products tr:nth-child(even) {
  background: #f5f5f5;
}

.products th:first-of-type {
  padding-left: 40px;
}

.products th {
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  background-color: #000000;
  color: white;
}

.paginator {
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
}
.paginator .row {
  display: flex;
  align-items: center;
}
.paginator .row p {
  margin: 0 14px;
  font-weight: 600;
  cursor: pointer;
}
</style>
