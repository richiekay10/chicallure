
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-24 w-18 h-18 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/4 right-12 w-22 h-22 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-24 left-1/5 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-10 h-10 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full opacity-35 animate-pulse" style={{animationDelay: '4s'}}></div>
    </div>
  );
};

export default AnimatedBackground;
