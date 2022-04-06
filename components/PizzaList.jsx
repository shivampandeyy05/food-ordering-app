import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pizzas with 2X Toppings</h1>
      <p className={styles.desc}>
        ver looked at Pizza Toppings and wondered, "WHY SO LESS"?
        Well, we did. And we definitely wanted more! So, we immediately took it upon ourselves to fix it, and made the pizzas that we all deserve - PIZZAS LOADED WITH 2X TOPPINGS.
        And that's how Pizzahunt was born, to make sure that you Never Settle For Less.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
