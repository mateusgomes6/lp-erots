import { ShoppingBag, ShoppingCart, CreditCard } from "lucide-react";

export const HomeFeatures = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 max-w-[1440px] mx-auto"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
              Recursos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Tudo que sua loja precisa para vender online
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A Erots oferece todas as ferramentas necessárias para criar um
              catálogo de produtos profissional e começar a vender online.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-gray-100 p-3">
              <ShoppingBag className="h-6 w-6 text-black" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Catálogo Personalizado</h3>
              <p className="text-muted-foreground">
                Crie um catálogo de produtos atraente e personalizado com sua
                marca, cores e estilo.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-gray-100 p-3">
              <ShoppingCart className="h-6 w-6 text-black" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Carrinho de Compras</h3>
              <p className="text-muted-foreground">
                Ofereça aos seus clientes uma experiência de compra simples e
                intuitiva com nosso carrinho integrado.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-gray-100 p-3">
              <CreditCard className="h-6 w-6 text-black" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Pagamentos Seguros</h3>
              <p className="text-muted-foreground">
                Aceite diversos métodos de pagamento com total segurança e sem
                complicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
