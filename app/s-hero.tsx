import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HomeHero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container px-4 md:px-6 max-w-[1440px] mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Catálogo de produtos online para sua loja
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-300">
                Transforme sua pequena loja em um e-commerce profissional com
                nossa plataforma simples e poderosa.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
              >
                Começar Grátis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-white hover:bg-gray-800"
              >
                Ver Demo
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] h-[300px] md:h-[400px] bg-white rounded-lg overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-10 bg-black flex items-center px-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="pt-10 h-full">
                <div className="grid grid-cols-2 gap-2 p-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-gray-100 rounded-md p-2 flex flex-col"
                    >
                      <div className="bg-gray-200 h-24 rounded-md mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-1"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="h-4 bg-gray-300 rounded-full w-1/3"></div>
                        <div className="h-6 w-6 bg-black rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
