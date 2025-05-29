function App() {
  return (
    <div className="min-h-screen bg-granient-to-br from-yellow.100 to-orange.200 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-center">
        <img 
          src="https://i.pravatar.cc/150?img=8"
          alt="avatar"
          className="rounded-full mx-auto mb-4 w-24 h-24 object-cover"
          />
          <h1 className="text-xl font-bold text-gray.700">Miguel Ángel</h1>
          <p className="text-sm text-gray.500 mb-4">Fullstack Developer</p>
          <button className="bg-yellow.400 hover:bg-yellow.500 text-white font-medium py-2 px-4 rounded-lg">
            Conectar
          </button>
      </div>
    </div>
  );
}

export default App;
