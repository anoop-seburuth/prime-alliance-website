interface FlavorCardProps {
  flavor: {
    name: string;
    description: string;
    color: string;
    emoji: string;
  };
  index: number;
}

export default function FlavorCard({ flavor, index }: FlavorCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`h-48 bg-gradient-to-br ${flavor.color} flex items-center justify-center`}>
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {flavor.emoji}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{flavor.name}</h3>
        <p className="text-gray-600 mb-4">{flavor.description}</p>
        <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
          Learn More →
        </button>
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-sm font-semibold text-gray-700">NEW</span>
      </div>
    </div>
  );
}