import React, { useEffect, useState } from 'react';
import Card from './Card';
import Report from './Report';
import RecentSales from './RecentSales';
import './dashboard.css';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';
import WebTraffic from './WebTraffic';
import News from './News';
import Cards from './Cards'

function Dashboard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <section className='dashboard section'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            <Cards />
            {cards.map(card => (
              <div className='col-12' key={card._id}>
                <Card card={card} />
              </div>
            ))}
            <div className='col-12'>
              <Report />
            </div>
            <div className='col-12'>
              <RecentSales />
            </div>
            <div className='col-12'>
              <TopSelling />
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
