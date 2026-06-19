import './App.css'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Profile from './components/Profile'

function App() {

  const developer = {
    exp: "10 Years",
    contact: 9096767713,
  }

  return (
    <div>
      <h1>Hello Pradeep</h1>
      <p>Welcome back to React</p>
      <Welcome />
      <Counter />
      <Profile name="Pradeep Kamble" profession="Software Developer" age={39} details={developer}/>
    </div>
  )
}

export default App
