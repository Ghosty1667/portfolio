const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-2">
              <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate Web Developer 
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a full-stack developer who loves creating innovative solutions and learning new technologies. 
              My journey started with curiosity about how websites work, and it has evolved into a passion for 
              building scalable, user-friendly applications.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source 
              projects, or mentoring aspiring developers. I believe in writing clean, maintainable code and 
              creating exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-slate-300">Projects</div>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-slate-300">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;