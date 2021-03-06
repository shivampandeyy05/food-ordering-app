import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PIZZAS WITH <span style={{color: "#d1411e"}}>2X TOPPINGS</span></h1>
      <p className={styles.desc}>
        {/* Ever looked at Pizza Toppings and wondered, "WHY SO LESS"?
        Well, we did. And we definitely wanted more! So, we immediately took it upon ourselves to fix it, and made the pizzas that we all deserve. */}
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