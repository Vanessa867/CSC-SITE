// components/Education.tsx
const levels = [
  { title: "Educação Infantil", img: "/infantil.jpg" },
  { title: "Ensino Fundamental", subtitle: "Anos Iniciais", img: "/fund1.jpg" },
  { title: "Ensino Fundamental", subtitle: "Anos Finais", img: "/fund2.jpg" },
  { title: "Ensino Médio", img: "/medio.jpg" },
];

export default function Education() {
  return (
    <section className="bg-blue-50/30 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12 uppercase">
          Ensino
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((item, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64 w-full">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="bg-blue-900 p-4 text-center text-white h-24 flex flex-col justify-center">
                <h4 className="font-bold leading-tight">{item.title}</h4>
                {item.subtitle && <p className="text-xs mt-1 opacity-80">{item.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}