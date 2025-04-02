interface Props {
  promotion: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

export default function PromotionCard({ promotion }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={promotion.image}
        alt={promotion.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{promotion.title}</h3>
        <p className="text-gray-700 mt-2">{promotion.description}</p>
      </div>
    </div>
  );
}
