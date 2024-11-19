import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function App() {
  console.log("App Component");
  return (
    <div>
      <Header />
      <Menu />
      {/*  <Footer />  */}
    </div>
  );
}

function Header() {
  // We can add Style as variable like mentioned Here

  // const test = {
  //   color: "red",
  //   textAlign: "center",
  //   fontSize: "50px",
  //   textTransform: "uppercase",
  // };

  // return <h1 style={}>Our Pizza Menu</h1>;

  return (
    <header className="header">
      <h1>Our Pizza Menu</h1>
    </header>
  );
}

function Menu() {
  console.log("test ");
  return (
    <main className="menu">
      {/* <Header /> */}
      <h2>Our Menu</h2>
      <Pizza
        Name="Pizza Spinaci"
        photoName="pizzas/funghi.jpg"
        ingredients="Tomato, mozarella, and pepperoni"
      />
      <Footer />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div>
      <img src={"pizzas/funghi.jpg"} alt="PizzaImage"></img>
      <h3>{[props.Name]}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 9;
  // const CloseHour = 21;
  // const isOpen = hour >= openHour && hour <= CloseHour;

  //If we want to alert on the begining of the page

  // if (hour >= openHour && hour <= CloseHour) alert("We are Open..!!");
  // else alert("Sorry, We are Closed..!!!");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are Currently Open...!!!
    </footer>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
