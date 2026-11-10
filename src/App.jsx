import { NavLink, Route, Routes } from 'react-router-dom'
import heroImage from './assets/hero.png'

const screens = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Lab', path: '/lab' },
]

function PlaceholderScreen({ title, description }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
        Robot Explorer
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">{title}</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">{description}</p>
    </section>
  )
}

function HomeScreen() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Meet the robot
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            A robot that sees obstacles and finds its way around them.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Robot Explorer is an interactive guide to an obstacle-avoidance robot.
            Learn how its sensors, motors, and Bluetooth controller work together,
            then explore the assembled prototype.
          </p>
          <a
            className="mt-8 inline-flex rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
            href="https://wokwi.com/"
            rel="noreferrer"
            target="_blank"
          >
            Open robot simulation
          </a>
        </div>
        <div className="flex justify-center rounded-3xl bg-slate-900 p-8 shadow-xl">
          <img
            className="h-auto max-h-80 w-auto"
            src={heroImage}
            alt="Illustration of the obstacle-avoidance robot"
          />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 p-6">
            <p className="mb-3 text-2xl" aria-hidden="true">
              ◉
            </p>
            <h2 className="text-xl font-bold text-slate-900">Obstacle avoidance</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Distance sensors scan the path ahead. When the robot detects an
              obstacle, its controller changes the motor directions so it can
              stop, turn, and continue moving safely.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-6">
            <p className="mb-3 text-2xl" aria-hidden="true">
              Bluetooth
            </p>
            <h2 className="text-xl font-bold text-slate-900">Bluetooth control</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Bluetooth provides a wireless connection between a controller and
              the robot. Commands such as forward, reverse, left, and right are
              sent to the prototype without a physical cable.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink className="text-lg font-bold text-slate-900" to="/">
            Robot Explorer
          </NavLink>
          <div className="flex gap-2">
            {screens.map((screen) => (
              <NavLink
                key={screen.path}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
                to={screen.path}
              >
                {screen.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomeScreen />}
          />
          <Route
            path="/explore"
            element={
              <PlaceholderScreen
                title="Explore the assembled robot."
                description="This screen will become the interactive 3D robot viewer."
              />
            }
          />
          <Route
            path="/lab"
            element={
              <PlaceholderScreen
                title="Experiment in the robot lab."
                description="This screen will let you detach components and inspect their connections."
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
