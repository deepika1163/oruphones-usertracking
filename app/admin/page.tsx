'use client';

import { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

type Track = {
  page: string;
  timeSpent: number;
  scrollDepth: number;
  userAgent: string;
  timestamp: string;
};

export default function AdminPage() {
  const [data, setData] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://oruphones-usertracking-backend.onrender.com/api/track')

      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching tracking data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-4 space-y-6">
      <Header />
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-green-400">
              <th className="border px-2 py-1">Page</th>
              <th className="border px-2 py-1">Time Spent (s)</th>
              <th className="border px-2 py-1">Scroll</th>
              <th className="border px-2 py-1">Device</th>
              <th className="border px-2 py-1">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="text-sm">
                <td className="border px-2 py-1">{d.page}</td>
                <td className="border px-2 py-1">{d.timeSpent}</td>
                <td className="border px-2 py-1">{d.scrollDepth}</td>
                <td className="border px-2 py-1">{d.userAgent}</td>
                <td className="border px-2 py-1">{new Date(d.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Footer />
    </main>
  );
}
