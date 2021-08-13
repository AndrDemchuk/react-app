import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi Set (Yapona Hata Restaurant / Svobody Avenue 29)",
    description: "Finest fish and veggies",
    price: 309.99,
  },
  {
    id: "m2",
    name: "Big Mac (McDonald's / Volodymyra Velykoho 24)",
    description: "The fastest arriving time available!",
    price: 175.4,
  },
  {
    id: "m3",
    name: "wings Bucket (KFC / Svobody Avenue 19)",
    description: "American, raw, meaty",
    price: 199.99,
  },
  {
    id: "m4",
    name: "Green Bowl (Arsen / Zelena 149)",
    description: "Healthy...and green...",
    price: 119.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
