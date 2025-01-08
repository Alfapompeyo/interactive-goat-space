import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D3E4FD]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/87d87936-b1d9-412f-bc00-fd522ee278d7.png" 
            alt="O'Higgins Logo" 
            className="w-32"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input type="email" placeholder="Correo electrónico" required />
          </div>
          <div>
            <Input type="password" placeholder="Contraseña" required />
          </div>
          <Button type="submit" className="w-full">
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;