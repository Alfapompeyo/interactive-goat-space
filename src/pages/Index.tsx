import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barra de navegación principal */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="futbol" className="w-full">
            <TabsList className="w-full justify-start border-b">
              <TabsTrigger value="futbol" className="px-8">Fútbol</TabsTrigger>
              <TabsTrigger value="medica" className="px-8">Parte Médica</TabsTrigger>
              <TabsTrigger value="fisica" className="px-8">Parte Física</TabsTrigger>
              <TabsTrigger value="cerrar" className="ml-auto">Cerrar Sesión</TabsTrigger>
            </TabsList>

            {/* Contenido de la pestaña Fútbol */}
            <TabsContent value="futbol">
              <div className="py-4">
                <Tabs defaultValue="jugadores">
                  <TabsList>
                    <TabsTrigger value="jugadores">Jugadores</TabsTrigger>
                    <TabsTrigger value="categorias">Categorías</TabsTrigger>
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="jugadores" className="mt-4">
                    <Button className="mb-4">
                      <Plus className="mr-2 h-4 w-4" />
                      Añadir Jugador
                    </Button>
                    <div className="bg-white rounded-lg shadow p-4">
                      <div className="border-b pb-4 mb-4">
                        <h3 className="text-lg font-semibold">Renato Martinez Parra</h3>
                        <p className="text-gray-600">Entrenador</p>
                        <p className="text-sm text-gray-500">Categoría: Sub-17</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="categorias" className="mt-4">
                    <Button className="mb-4">
                      <Plus className="mr-2 h-4 w-4" />
                      Añadir Categoría
                    </Button>
                  </TabsContent>

                  <TabsContent value="personal" className="mt-4">
                    <Button className="mb-4">
                      <Plus className="mr-2 h-4 w-4" />
                      Añadir Personal
                    </Button>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>

            {/* Contenido de la pestaña Parte Médica */}
            <TabsContent value="medica">
              <div className="py-4">
                <h2 className="text-2xl font-bold mb-4">Parte Médica</h2>
                {/* Aquí irá el contenido de la parte médica */}
              </div>
            </TabsContent>

            {/* Contenido de la pestaña Parte Física */}
            <TabsContent value="fisica">
              <div className="py-4">
                <h2 className="text-2xl font-bold mb-4">Parte Física</h2>
                {/* Aquí irá el contenido de la parte física */}
              </div>
            </TabsContent>

            {/* Contenido de la pestaña Cerrar Sesión */}
            <TabsContent value="cerrar">
              <div className="py-4">
                <Button variant="destructive">Cerrar Sesión</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </nav>
    </div>
  );
};

export default Index;