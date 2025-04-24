import Image from "next/image";

export const HomePartners = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-medium tracking-tight">
              Pequenas lojas que confiam na Erots
            </h2>
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
  );
};
