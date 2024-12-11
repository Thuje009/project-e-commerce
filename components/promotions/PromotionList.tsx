import PromotionCard from './PromotionCard';

const promotions = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Up to 50% off on selected items!',
    image: '/images/summer-sale.jpg',
  },
  {
    id: 2,
    title: 'Buy One Get One Free',
    description: 'Limited-time offer on select products.',
    image: '/images/bogo.jpg',
  },
];

export default function PromotionList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {promotions.map((promotion) => (
        <PromotionCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  );
}
