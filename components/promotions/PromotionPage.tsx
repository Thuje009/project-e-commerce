import PromotionList from './PromotionList';

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Current Promotions</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <PromotionList />
      </main>
    </div>
  );
}
