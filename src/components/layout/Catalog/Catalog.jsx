import { useContext, useState } from "react";
import CoffeeContext from "../../Store/coffee-context";
import Container from "../../UI/Container/Container";
import "./Catalog.scss";
import CatalogTeaList from "./CatalogTeaList/CatalogTeaList";

const Catalog = (props) => {
  const CoffeeCTX = useContext(CoffeeContext);

  const teaStore = CoffeeCTX.tea;
  const coffeeStore = CoffeeCTX.coffee;

  const [inputName, setInput] = useState("");

  const changeinput = (event) => {
    setInput(event.target.value);
  };

  const [selected, setSelected] = useState(true);

  return (
    <div className="catalog">
      <Container>
        <div className="catalog-header">
          <div className="catalog-header-content">
            <div className="catalog-header-btns">
              <div
                onClick={() => setSelected(true)}
                className={`catalog-header-btn ${
                  selected ? "header-btn-select" : ""
                }`}
              >
                Кава
              </div>
              <div
                className={`catalog-header-btn ${
                  selected ? "" : "header-btn-select"
                }`}
                onClick={() => setSelected(false)}
              >
                Чай
              </div>
            </div>
            <input onChange={changeinput} value={inputName} />
          </div>
        </div>
        <section className="catalog-section">
          <CatalogTeaList
            getInfoHandler={props.getInfoHandler}
            orderInfo={props.orderInfo}
            store={selected ? coffeeStore : teaStore}
            inputName={inputName}
          />
        </section>
      </Container>
    </div>
  );
};

export default Catalog;
