class Meal {
  constructor(
    id,
    categories,
    title,
    complexity,
    imageUrl,
    ingredients,
    steps,
    Time,
    price
  ) {
    this.id = id;
    this.categories = categories;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.complexity = complexity;
    this.price = price;
    this.Time = Time;
  }
}

export default Meal;
