const Login = () => {
  return (
    <div className="bg-gray-200 p-8 w-full">
      <div className="max-w-xl flex flex-col mx-auto">
        <h2 className="text-4xl font-bold mb-8">Login</h2>
        <div className="mb-2">
          <label htmlFor="username" className="text-black">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border border-black rounded"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="text-black">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-black rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
