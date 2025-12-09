import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [progress] = useState({
    html: 50,
    css: 40,
    js: 30,
    react: 10,
    backend: 0,
  });

  const [tasks, setTasks] = useState([]);
  const [xp, setXP] = useState(0);

  // -----------------------------------
  // FULL ANIMATIONS (Particles + Stars)
  // -----------------------------------
  useEffect(() => {
    const container = document.getElementById("particles");

    // ⭐ DUST PARTICLES
    for (let i = 0; i < 70; i++) {
      const p = document.createElement("div");
      p.classList.add("particle");
      p.style.left = Math.random() * window.innerWidth + "px";
      p.style.top = Math.random() * window.innerHeight + 1000 + "px";
      p.style.animationDuration = 8 + Math.random() * 10 + "s";
      container.appendChild(p);
    }

    // 🌠 SHOOTING STARS
    const interval = setInterval(() => {
      const star = document.createElement("div");
      star.classList.add("shooting-star");
      star.style.top = Math.random() * window.innerHeight * 0.6 + "px";
      star.style.left = Math.random() * window.innerWidth * 0.6 + "px";
      document.body.appendChild(star);

      setTimeout(() => star.remove(), 1600);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const addTask = () => {
    const t = prompt("Enter a new task:");
    if (t) {
      setTasks([...tasks, t]);
      setXP((xp) => xp + 10);
    }
  };

  return (
    <div className="pb-20 relative">

      {/* BACKGROUND ELEMENTS */}
      <div className="planet" style={{ top: "15%", left: "-10%" }}></div>
      <div className="planet" style={{ bottom: "8%", right: "-10%" }}></div>

      <div className="nebula" style={{ top: "20%", left: "-20%" }}></div>
      <div className="nebula" style={{ bottom: "5%", right: "-20%" }}></div>

      <div className="grid-lines"></div>
      <div id="particles"></div>

      {/* TITLE */}
      <h1 className="text-center text-5xl font-bold text-cyan-300 py-10 title-glow">
        🚀 Cosmic Progress Dashboard
      </h1>

      {/* XP MODULE */}
      <div className="relative mx-auto w-[180px] flex flex-col items-center">
        <div className="xp-orbit"></div>
        <div className="xp-core">{xp}</div>
        <p className="text-center text-cyan-200 mt-3 text-sm">Total XP Earned</p>
      </div>

      {/* PROGRESS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 px-10">
        {Object.entries(progress).map(([name, value]) => (
          <div key={name} className="glass-card">
            <h2 className="text-xl font-semibold capitalize">{name} Progress</h2>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${value}%` }}></div>
            </div>

            <p className="mt-3 text-purple-200 text-sm">{value}% Completed</p>
          </div>
        ))}
      </div>

      {/* TASKS */}
      <div className="glass-card mx-10 mt-20">
        <h2 className="text-2xl text-cyan-300">Weekly Tasks</h2>

        {tasks.length === 0 ? (
          <p className="text-gray-300 mt-3 italic">No tasks yet. Add some!</p>
        ) : (
          <ul className="space-y-3 mt-4">
            {tasks.map((t, i) => (
              <li key={i} className="bg-white/10 p-3 rounded-md">
                {t}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={addTask}
          className="mt-5 px-5 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition text-white"
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}
