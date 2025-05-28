'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const barData = [
    { name: 'Service A', value: 400 },
    { name: 'Service B', value: 300 },
];

const pieData = [
    { name: 'New', value: 70 },
    { name: 'Returning', value: 30 },
];

const COLORS = ['#9333ea', '#e5e7eb'];

const StatsAndCharts = () => {
    return (
        <section className="bg-black text-white py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                    We bear the responsibility of developing the sector.
                </h2>
                <div className="text-gray-400 max-w-2xl mx-auto mb-16">
                    Our mission is to push innovation and bring top-notch service that helps industries grow and evolve in a dynamic market.
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h3 className="text-3xl font-bold text-primary">1,200+</h3>
                        <p className="text-sm text-gray-400">Clients Served</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary">20+</h3>
                        <p className="text-sm text-gray-400">Industries</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary">200+</h3>
                        <p className="text-sm text-gray-400">Campaigns</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary">315+</h3>
                        <p className="text-sm text-gray-400">Projects</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="bg-dark rounded-lg p-4">
                        <h4 className="text-lg font-semibold mb-2">Performance</h4>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={barData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#9333ea" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-dark rounded-lg p-4">
                        <h4 className="text-lg font-semibold mb-2">Client Type</h4>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsAndCharts;
