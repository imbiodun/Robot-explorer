import { NavLink, Route, Routes } from 'react-router-dom'

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
            element={
              <PlaceholderScreen
                title="Discover how an obstacle-avoidance robot works."
                description="The home screen will introduce the robot and link to its simulation."
              />
            }
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
