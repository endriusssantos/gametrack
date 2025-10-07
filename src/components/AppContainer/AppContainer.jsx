const AppContainer = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 font-[Poppins]">
      {children}
    </div>
  );
};

export default AppContainer;
