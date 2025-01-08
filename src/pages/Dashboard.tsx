import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("futbol");
  const [activeSubTab, setActiveSubTab] = useState("categorias");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#D3E4FD]">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarContent>
            <div className="p-4 mb-4">
              <img 
                src="/lovable-uploads/87d87936-b1d9-412f-bc00-fd522ee278d7.png" 
                alt="O'Higgins Logo" 
                className="w-24 mx-auto"
              />
            </div>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => setActiveTab("futbol")}
                  isActive={activeTab === "futbol"}
                >
                  Fútbol
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => setActiveTab("medica")}
                  isActive={activeTab === "medica"}
                >
                  Parte Médica
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => setActiveTab("fisica")}
                  isActive={activeTab === "fisica"}
                >
                  Parte Física
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => setActiveTab("cerrar")}
                  isActive={activeTab === "cerrar"}
                >
                  Cerrar Sesión
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white p-6">
            {/* Subtabs for Fútbol section */}
            {activeTab === "futbol" && (
              <div className="space-y-4">
                <div className="flex space-x-4 border-b pb-4">
                  <Button
                    variant={activeSubTab === "categorias" ? "default" : "ghost"}
                    onClick={() => setActiveSubTab("categorias")}
                  >
                    Categorías
                  </Button>
                  <Button
                    variant={activeSubTab === "personal" ? "default" : "ghost"}
                    onClick={() => setActiveSubTab("personal")}
                  >
                    Personal
                  </Button>
                </div>

                {activeSubTab === "categorias" && (
                  <div>
                    <Button className="mb-4">
                      <Plus className="mr-2 h-4 w-4" />
                      Añadir Categoría
                    </Button>
                  </div>
                )}

                {activeSubTab === "personal" && (
                  <div>
                    <Button className="mb-4">
                      <Plus className="mr-2 h-4 w-4" />
                      Añadir Personal
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Content for other tabs */}
            {activeTab === "medica" && (
              <h2 className="text-2xl font-bold">Parte Médica</h2>
            )}
            {activeTab === "fisica" && (
              <h2 className="text-2xl font-bold">Parte Física</h2>
            )}
          </div>
          {/* Yellow bottom bar */}
          <div className="fixed bottom-0 w-full h-12 bg-[#FEF7CD]"></div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;