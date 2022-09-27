import rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header>
      <img src={rocket} alt="Foguete colorido" />
      <h1>To do</h1>
    </header>
  )
}