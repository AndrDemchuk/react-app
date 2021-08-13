import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Meal Delivery Service for the Eleks Company</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy your lunch or dinner at the office.
      </p>
      <p>
        All our meals are selected from high-quality restaurants, be absolutely
        sure to receive your order just in time with the best freshness
        available!
      </p>
    </section>
  );
};

export default MealsSummary;
