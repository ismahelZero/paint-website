// src/components/NewsSection.tsx
import Image from 'next/image';

const newsItems = [
    {
        id: 1,
        title: 'We incorporate the formation of plans...',
        image: '/images/news/news1.png',
    },
    {
        id: 2,
        title: 'We provide scalable marketing...',
        image: '/images/news/news2.png',
    },
    {
        id: 3,
        title: 'We specialize in growing brands...',
        image: '/images/news/news3.png',
    },
];

const NewsSection = () => {
    return (
        <section className="bg-black text-white py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold">News</h2>
                    <button className="bg-primary px-5 py-2 rounded-full text-sm text-white mt-4 md:mt-0">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 bg-dark p-4 rounded-lg">
                        <Image src="/images/news/main.png" alt="Main News" width={600} height={400} className="rounded-lg mb-4" />
                        <p className="text-gray-300 text-sm">
                            We specialize in fostering effective partnerships with supportive companies to drive mutual success.
                        </p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 gap-4">
                        {newsItems.map((item) => (
                            <div key={item.id} className="flex gap-4 items-center bg-dark p-3 rounded-lg">
                                <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
                                <p className="text-gray-300 text-sm">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
