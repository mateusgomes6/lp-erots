import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Card = (props: {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col rounded-lg border shadow-sm ${
        props.isPopular ? "bg-black text-white" : "bg-card text-card-foreground"
      }`}
    >
      {props.isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-gray-800 px-3 py-1 text-xs font-bold">
          Popular
        </div>
      )}
      <div
        className={`p-6 pt-8 ${
          props.isPopular ? "text-muted-foreground" : "text-black"
        }`}
      >
        <h3 className="text-lg font-bold">{props.title}</h3>
        <div className="mt-4 flex items-baseline text-4xl font-bold">
          R${props.price}
          <span className="ml-1 text-sm font-normal">/mês</span>
        </div>
        <p className="mt-2 text-sm text-left">{props.description}</p>
      </div>
      <div className="flex flex-col justify-between p-6 pt-0 h-full">
        <ul className="space-y-2">
          {props.features.map((feature) => (
            <li className="flex items-center gap-2">
              <Check
                className={`h-4 w-4 ${
                  props.isPopular ? "text-gray-400" : "text-black"
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button
            variant={props.isPopular ? "ghost" : "secondary"}
            className={`w-full ${
              props.isPopular
                ? "bg-white text-black hover:bg-sky-800 hover:text-white"
                : ""
            }`}
          >
            Começar Agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export const HomePrices = () => {
  const data = [
    {
      title: "Iniciante",
      price: 49,
      description: "Perfeito para pequenas lojas começando online.",
      features: [
        "Até 50 produtos",
        "1 usuário administrador",
        "Domínio personalizado",
        "Suporte por email",
      ],
    },
    {
      title: "Profissional",
      price: 99,
      description: "Ideal para lojas em crescimento.",
      features: [
        "Até 500 produtos",
        "3 usuários administradores",
        "Domínio personalizado",
        "Suporte prioritário",
        "Relatórios avançados",
      ],
      isPopular: true,
    },
    {
      title: "Empresarial",
      price: 199,
      description: "Para lojas estabelecidas com grande volume de vendas.",
      features: [
        "Produtos ilimitados",
        "10 usuários administradores",
        "Domínio personalizado",
        "Suporte 24/7",
        "Integrações avançadas",
        "API personalizada",
      ],
    },
  ];

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
              Preços
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Planos acessíveis para lojas de todos os tamanhos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Escolha o plano que melhor atende às necessidades da sua loja.
              Todos os planos incluem suporte técnico.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {data.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                description={item.description}
                features={item.features}
                isPopular={item.isPopular}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
