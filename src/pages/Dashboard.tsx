import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema for category form validation
const categorySchema = z.object({
  name: z.string().min(1, "El nombre de la categoría es requerido"),
});

type CategoryFormValues = z.infer<typeof categorySchema>;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("futbol");
  const [activeSubTab, setActiveSubTab] = useState("categorias");
  const [categories, setCategories] = useState<string[]>([]);

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: CategoryFormValues) => {
    setCategories([...categories, data.name]);
    form.reset();
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
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
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-[#D3E4FD] p-6">
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
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-[#D3E4FD] p-6">
            {activeTab === "futbol" && activeSubTab === "categorias" && (
              <div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="mb-6">
                      <Plus className="mr-2 h-4 w-4" />
                      Añadir Categoría
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Añadir Nueva Categoría</SheetTitle>
                    </SheetHeader>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre de la Categoría</FormLabel>
                              <FormControl>
                                <Input placeholder="Ingrese el nombre" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <Button type="submit">Crear Categoría</Button>
                      </form>
                    </Form>
                  </SheetContent>
                </Sheet>

                {/* Categories Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-[#8B5CF6] text-white p-4 rounded-lg shadow-md flex items-center justify-center"
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "medica" && (
              <h2 className="text-2xl font-bold">Parte Médica</h2>
            )}
            {activeTab === "fisica" && (
              <h2 className="text-2xl font-bold">Parte Física</h2>
            )}
          </div>

          {/* Footer */}
          <div className="h-12 bg-[#FEF7CD]"></div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;