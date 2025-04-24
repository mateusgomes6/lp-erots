import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeHero } from "./s-hero";
import { HomePartners } from "./s-partners";
import { HomeFeatures } from "./s-features";
import { HomePrices } from "./s-prices";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <main className="flex-1">
        <HomeHero />
        <HomePartners />
        <HomeFeatures />
        {/* Product Showcase Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-[1440px] mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
                    Gerenciamento Simples
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Gerencie seu catálogo com facilidade
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Adicione, edite e organize seus produtos em minutos. Sem
                    conhecimentos técnicos necessários.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-black" />
                    <span>Upload de imagens em massa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-black" />
                    <span>Categorias e subcategorias ilimitadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-black" />
                    <span>Controle de estoque integrado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-black" />
                    <span>Importação e exportação de produtos</span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="relative w-full max-w-[500px] bg-white rounded-lg overflow-hidden border shadow-xl">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-black flex items-center px-3">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="pt-10 p-4">
                    <div className="flex items-center justify-between mb-4 border-b pb-2">
                      <div className="text-lg font-semibold text-black">
                        Gerenciador de Produtos
                      </div>
                      <Button size="sm" variant="secondary">
                        Adicionar Produto
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-3">
                        <div className="flex items-center p-2 border rounded-md hover:bg-gray-50">
                          <div className="w-12 h-12 bg-gray-200 rounded-md mr-3 flex items-center justify-center text-xs text-gray-500">
                            Foto
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              Camiseta Sua Marca
                            </div>
                            <div className="text-xs text-gray-500">
                              R$ 79,90 | Estoque: 25
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </div>
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                              >
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center p-2 border rounded-md hover:bg-gray-50">
                          <div className="w-12 h-12 bg-gray-200 rounded-md mr-3 flex items-center justify-center text-xs text-gray-500">
                            Foto
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              Calça Jeans Premium
                            </div>
                            <div className="text-xs text-gray-500">
                              R$ 149,90 | Estoque: 12
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </div>
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                              >
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center p-2 border rounded-md hover:bg-gray-50">
                          <div className="w-12 h-12 bg-gray-200 rounded-md mr-3 flex items-center justify-center text-xs text-gray-500">
                            Foto
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              Tênis Esportivo
                            </div>
                            <div className="text-xs text-gray-500">
                              R$ 229,90 | Estoque: 8
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </div>
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                              >
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center p-2 border rounded-md hover:bg-gray-50">
                          <div className="w-12 h-12 bg-gray-200 rounded-md mr-3 flex items-center justify-center text-xs text-gray-500">
                            Foto
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              Bolsa Casual
                            </div>
                            <div className="text-xs text-gray-500">
                              R$ 89,90 | Estoque: 15
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </div>
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                              >
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Responsive Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 max-w-[1440px] mx-auto">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto order-2 lg:order-1">
                <div className="relative w-[280px] h-[560px] bg-black rounded-[3rem] p-4 border-[8px] border-gray-900 shadow-xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
                  <div className="h-full w-full bg-white rounded-[2rem] overflow-hidden">
                    <div className="h-12 bg-black flex items-center justify-center">
                      <Image
                        src="/logo.png"
                        alt="Erots Logo"
                        width={80}
                        height={30}
                        className="h-6 w-auto"
                      />
                    </div>
                    <div className="p-3 space-y-3">
                      <div className="h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm font-medium text-black">
                            Sua Loja Online
                          </div>
                          <div className="text-xs text-gray-500">
                            Produtos em destaque
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 rounded-md p-2 flex flex-col">
                          <div className="bg-gray-200 h-20 rounded-md mb-2 flex items-center justify-center text-xs text-gray-500">
                            Produto
                          </div>
                          <div className="text-xs font-medium">
                            Camiseta Básica
                          </div>
                          <div className="text-xs text-gray-500">R$ 49,90</div>
                          <div className="mt-1 flex justify-between items-center">
                            <div className="text-xs text-black">★★★★☆</div>
                            <div className="h-4 w-4 bg-black rounded-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 .553-.894L9 2"></path>
                                <path d="M21 12V5.618a1 1 0 0 0-.553-.894L15 2v20l5.447-2.724A1 1 0 0 0 21 18.382V12z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-md p-2 flex flex-col">
                          <div className="bg-gray-200 h-20 rounded-md mb-2 flex items-center justify-center text-xs text-gray-500">
                            Produto
                          </div>
                          <div className="text-xs font-medium">
                            Jaqueta Jeans
                          </div>
                          <div className="text-xs text-gray-500">R$ 159,90</div>
                          <div className="mt-1 flex justify-between items-center">
                            <div className="text-xs text-black">★★★★★</div>
                            <div className="h-4 w-4 bg-black rounded-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 .553-.894L9 2"></path>
                                <path d="M21 12V5.618a1 1 0 0 0-.553-.894L15 2v20l5.447-2.724A1 1 0 0 0 21 18.382V12z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-md p-2 flex flex-col">
                          <div className="bg-gray-200 h-20 rounded-md mb-2 flex items-center justify-center text-xs text-gray-500">
                            Produto
                          </div>
                          <div className="text-xs font-medium">
                            Tênis Casual
                          </div>
                          <div className="text-xs text-gray-500">R$ 199,90</div>
                          <div className="mt-1 flex justify-between items-center">
                            <div className="text-xs text-black">★★★★☆</div>
                            <div className="h-4 w-4 bg-black rounded-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 .553-.894L9 2"></path>
                                <path d="M21 12V5.618a1 1 0 0 0-.553-.894L15 2v20l5.447-2.724A1 1 0 0 0 21 18.382V12z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-md p-2 flex flex-col">
                          <div className="bg-gray-200 h-20 rounded-md mb-2 flex items-center justify-center text-xs text-gray-500">
                            Produto
                          </div>
                          <div className="text-xs font-medium">
                            Boné Estiloso
                          </div>
                          <div className="text-xs text-gray-500">R$ 39,90</div>
                          <div className="mt-1 flex justify-between items-center">
                            <div className="text-xs text-black">★★★★★</div>
                            <div className="h-4 w-4 bg-black rounded-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 .553-.894L9 2"></path>
                                <path d="M21 12V5.618a1 1 0 0 0-.553-.894L15 2v20l5.447-2.724A1 1 0 0 0 21 18.382V12z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
                    100% Responsivo
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Perfeito em qualquer dispositivo
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Seu catálogo se adapta automaticamente a smartphones,
                    tablets e desktops, oferecendo a melhor experiência para
                    seus clientes.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-black" />
                    <span>Design responsivo em todos os dispositivos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-black" />
                    <span>Carregamento rápido em conexões móveis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-black" />
                    <span>Experiência de compra otimizada para touch</span>
                  </li>
                </ul>
                <div>
                  <Button variant="secondary">Ver Demonstração Mobile</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomePrices />

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32  max-w-[1440px] mx-auto"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  O que nossos clientes dizem
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Centenas de pequenas lojas já transformaram seus negócios com
                  a Erots.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-gray-200 w-12 h-12"></div>
                  <div>
                    <h4 className="font-semibold">Maria Silva</h4>
                    <p className="text-sm text-muted-foreground">
                      Loja de Roupas
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "A Erots transformou meu pequeno negócio. Agora tenho um
                  catálogo online profissional e minhas vendas aumentaram 70% em
                  apenas três meses!"
                </p>
                <div className="flex mt-4 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-gray-200 w-12 h-12"></div>
                  <div>
                    <h4 className="font-semibold">Carlos Oliveira</h4>
                    <p className="text-sm text-muted-foreground">
                      Loja de Artesanato
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Nunca imaginei que seria tão fácil criar um e-commerce. A
                  plataforma é intuitiva e o suporte é excelente. Meus clientes
                  adoram a experiência de compra!"
                </p>
                <div className="flex mt-4 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-gray-200 w-12 h-12"></div>
                  <div>
                    <h4 className="font-semibold">Ana Ferreira</h4>
                    <p className="text-sm text-muted-foreground">
                      Loja de Cosméticos
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "A Erots me ajudou a expandir meu negócio para além da minha
                  cidade. Agora vendo para todo o Brasil e meu faturamento
                  triplicou em um ano!"
                </p>
                <div className="flex mt-4 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 text-white">
          <div className="container px-4 md:px-6  max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para transformar sua loja?
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de pequenas lojas que já estão vendendo
                  online com a Erots.
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
                  Agendar Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
