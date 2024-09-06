import "./App.scss";

function App() {
  return (
    <div className="pageWrapper">
      <div className="overlay">
        <div className="drawer">
          <div className="cartTitle">
            <h2> Корзина </h2>
            <img className="removeBtn" src="/img/remove.svg" />
          </div>

          <div className="cartItems">
            <div className="cartItem">
              <img
                className="itemImage"
                width={70}
                height={60}
                src="/img/sneakers/2.jpg"
              />
              <div className="itemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/remove.svg" />
            </div>
          </div>

          <ul className="totalCost">
            <li className="costItem">
              <span>Итого:</span>
              <div className="dashedLine"></div>
              <b>21 498 руб.</b>
            </li>
            <li className="costItem">
              <span>Налог 5%:</span>
              <div className="dashedLine"></div>
              <b>1 074 руб.</b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ
            <img src="/img/arrow.svg" />
          </button>
        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img src="/img/logo.png" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="headerRight">
          <div className="headerButton">
            <img src="./img/cart.svg" />
            <p>1205 руб.</p>
          </div>
          <div className="headerButton">
            <img src="./img/favorite.svg" />
            <p>Закладки</p>
            <span></span>
          </div>
          <div className="headerButton">
            <img src="./img/profile.svg" />
            <p>Профиль</p>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="contentHeader">
          <h1> Все кроссовки </h1>
          <input type="search" placeholder="Поиск..." />
        </div>

        <div className="productCards">
          <div className="productCard">
            <img
              className="favoriteBtn"
              width={30}
              height={30}
              src="/img/favoriteInactive.svg"
            />
            <img width={130} height={110} src="/img/sneakers/1.jpg" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardAction">
              <div className="productCost">
                <span>ЦЕНА:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/plus.svg" />
              </button>
            </div>
          </div>

          <div className="productCard">
            <img
              className="favoriteBtn"
              width={30}
              height={30}
              src="/img/favoriteInactive.svg"
            />
            <img width={130} height={110} src="/img/sneakers/2.jpg" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardAction">
              <div className="productCost">
                <span>ЦЕНА:</span>
                <b>12 999 руб.</b>
              </div>
              <img className="addButton" src="/img/addButton.svg" />
            </div>
          </div>

          <div className="productCard">
            <img
              className="favoriteBtn"
              width={30}
              height={30}
              src="/img/favoriteInactive.svg"
            />
            <img width={130} height={110} src="/img/sneakers/3.jpg" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardAction">
              <div className="productCost">
                <span>ЦЕНА:</span>
                <b>12 999 руб.</b>
              </div>
              <img className="addButton" src="/img/addButton.svg" />
            </div>
          </div>

          <div className="productCard">
            <img
              className="favoriteBtn"
              width={30}
              height={30}
              src="/img/favoriteInactive.svg"
            />
            <img width={130} height={110} src="/img/sneakers/4.jpg" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardAction">
              <div className="productCost">
                <span>ЦЕНА:</span>
                <b>12 999 руб.</b>
              </div>
              <img className="addButton" src="/img/addButton.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
