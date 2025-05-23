const Skills = () => {
  const skills = [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "TypeScript", level: 90, icon: "📘" },
    { name: "Node.js", level: 88, icon: "🟢" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "AWS", level: 80, icon: "☁️" },
    { name: "React Native", level: 75, icon: "📱" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-slate-400 text-sm mt-2">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;