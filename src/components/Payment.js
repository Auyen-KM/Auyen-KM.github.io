import "./Payment.css";

function Payment() {
  return (
    <div className="Payment">
      <div className="main">
        <h2>Название фильма</h2>
        {/* <form>
                <input placeholder="Номер карты" type=""></input>
                <input type="month"></input>
                <input placeholder="CVV"></input>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" class="pk-pay-link pk-btn pk-btn-3 pk-btn-sm pk-btn-b">Перейти к Оплате</a>
            </form> */}
        <form method="POST" action="https://demo.paykeeper.ru/create/">
          Введите сумму оплаты:
          <input type="text" name="sum" value="100" /> <br />
          Введите номер заказа:
          <input type="text" name="orderid" value="123456" /> <br />
          Введите название услуги:
          <input type="text" name="service_name" value="Тестовая оплата" />{" "}
          <br />
          <input type="submit" value="Перейти к оплате" />
        </form>
      </div>
    </div>
  );
}
export default Payment;
