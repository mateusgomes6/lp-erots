import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, CreditCard, ShoppingBag, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Erots Logo" width={120} height={40} />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Recursos
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Planos
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Depoimentos
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sobre
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
            <Button className="bg-black hover:bg-gray-800">Começar Grátis</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Catálogo de produtos online para sua loja
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-300">
                    Transforme sua pequena loja em um e-commerce profissional com nossa plataforma simples e poderosa.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Começar Grátis <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-gray-800">
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
                        <div key={i} className="bg-gray-100 rounded-md p-2 flex flex-col">
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

        {/* Logos Section */}
        <section className="w-full py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">Pequenas lojas que confiam na Erots</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src={`/placeholder-logo.svg`}
                      alt={`Logo ${i}`}
                      width={120}
                      height={60}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Recursos</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tudo que sua loja precisa para vender online
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A Erots oferece todas as ferramentas necessárias para criar um catálogo de produtos profissional e
                  começar a vender online.
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
                    Crie um catálogo de produtos atraente e personalizado com sua marca, cores e estilo.
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
                    Ofereça aos seus clientes uma experiência de compra simples e intuitiva com nosso carrinho
                    integrado.
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
                    Aceite diversos métodos de pagamento com total segurança e sem complicações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">Gerenciamento Simples</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Gerencie seu catálogo com facilidade
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Adicione, edite e organize seus produtos em minutos. Sem conhecimentos técnicos necessários.
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
                      <div className="text-lg font-semibold text-black">Gerenciador de Produtos</div>
                      <Button size="sm" className="bg-black hover:bg-gray-800">
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
                            <div className="text-sm font-medium">Camiseta Sua Marca</div>
                            <div className="text-xs text-gray-500">R$ 79,90 | Estoque: 25</div>
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
                            <div className="text-sm font-medium">Calça Jeans Premium</div>
                            <div className="text-xs text-gray-500">R$ 149,90 | Estoque: 12</div>
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
                            <div className="text-sm font-medium">Tênis Esportivo</div>
                            <div className="text-xs text-gray-500">R$ 229,90 | Estoque: 8</div>
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
                            <div className="text-sm font-medium">Bolsa Casual</div>
                            <div className="text-xs text-gray-500">R$ 89,90 | Estoque: 15</div>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto order-2 lg:order-1">
                <div className="relative w-[280px] h-[560px] bg-black rounded-[3rem] p-4 border-[8px] border-gray-900 shadow-xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
                  <div className="h-full w-full bg-white rounded-[2rem] overflow-hidden">
                    <div className="h-12 bg-black flex items-center justify-center">
                      <Image src="/logo.png" alt="Erots Logo" width={80} height={30} className="h-6 w-auto" />
                    </div>
                    <div className="p-3 space-y-3">
                      <div className="h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm font-medium text-black">Sua Loja Online</div>
                          <div className="text-xs text-gray-500">Produtos em destaque</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 rounded-md p-2 flex flex-col">
                          <div className="bg-gray-200 h-20 rounded-md mb-2 flex items-center justify-center text-xs text-gray-500">
                            Produto
                          </div>
                          <div className="text-xs font-medium">Camiseta Básica</div>
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
                          <div className="text-xs font-medium">Jaqueta Jeans</div>
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
                          <div className="text-xs font-medium">Tênis Casual</div>
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
                          <div className="text-xs font-medium">Boné Estiloso</div>
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
                  <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">100% Responsivo</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Perfeito em qualquer dispositivo
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Seu catálogo se adapta automaticamente a smartphones, tablets e desktops, oferecendo a melhor
                    experiência para seus clientes.
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
                  <Button className="bg-black hover:bg-gray-800">Ver Demonstração Mobile</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">Preços</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Planos acessíveis para lojas de todos os tamanhos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escolha o plano que melhor atende às necessidades da sua loja. Todos os planos incluem suporte
                  técnico.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {/* Starter Plan */}
              <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 pt-8">
                  <h3 className="text-lg font-bold">Iniciante</h3>
                  <div className="mt-4 flex items-baseline text-4xl font-bold">
                    R$49<span className="ml-1 text-sm font-normal text-muted-foreground">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Perfeito para pequenas lojas começando online.</p>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>Até 50 produtos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>1 usuário administrador</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>Domínio personalizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>Suporte por email</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full bg-black hover:bg-gray-800">Começar Agora</Button>
                  </div>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col rounded-lg border bg-black text-white shadow-lg relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-gray-800 px-3 py-1 text-xs font-bold">
                  Popular
                </div>
                <div className="p-6 pt-8">
                  <h3 className="text-lg font-bold">Profissional</h3>
                  <div className="mt-4 flex items-baseline text-4xl font-bold">
                    R$99<span className="ml-1 text-sm font-normal text-gray-300">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">Ideal para lojas em crescimento.</p>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gray-400" />
                      <span>Até 500 produtos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gray-400" />
                      <span>3 usuários administradores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gray-400" />
                      <span>Domínio personalizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gray-400" />
                      <span>Suporte prioritário</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gray-400" />
                      <span>Relatórios avançados</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full bg-white text-black hover:bg-gray-200">Começar Agora</Button>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 pt-8">
                  <h3 className="text-lg font-bold">Empresarial</h3>
                  <div className="mt-4 flex items-baseline text-4xl font-bold">
                    R$199<span className="ml-1 text-sm font-normal text-muted-foreground">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Para lojas estabelecidas com grande volume de vendas.
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>Produtos ilimitados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>10 usuários administradores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>Domínio personalizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>Integrações avançadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-black" />
                      <span>API personalizada</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full border-black text-black hover:bg-gray-100">
                      Começar Agora
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">Depoimentos</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">O que nossos clientes dizem</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Centenas de pequenas lojas já transformaram seus negócios com a Erots.
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
                    <p className="text-sm text-muted-foreground">Loja de Roupas</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "A Erots transformou meu pequeno negócio. Agora tenho um catálogo online profissional e minhas vendas
                  aumentaram 70% em apenas três meses!"
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
                    <p className="text-sm text-muted-foreground">Loja de Artesanato</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Nunca imaginei que seria tão fácil criar um e-commerce. A plataforma é intuitiva e o suporte é
                  excelente. Meus clientes adoram a experiência de compra!"
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
                    <p className="text-sm text-muted-foreground">Loja de Cosméticos</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "A Erots me ajudou a expandir meu negócio para além da minha cidade. Agora vendo para todo o Brasil e
                  meu faturamento triplicou em um ano!"
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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para transformar sua loja?
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de pequenas lojas que já estão vendendo online com a Erots.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Começar Grátis <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-gray-800">
                  Agendar Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-12 md:py-16 lg:py-20 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Erots Logo" width={120} height={40} />
              </div>
              <p className="text-sm text-gray-400">Transformando pequenas lojas em grandes negócios online.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">Produto</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Casos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Integrações
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">Suporte</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Tutoriais
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Comunidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Erots. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

