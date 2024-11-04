import React, { useState } from 'react';
    import { Line } from 'react-chartjs-2';
    import './App.css';

    function App() {
      const [data, setData] = useState(null);

      const fetchData = async () => {
        // Placeholder for FRED API call
        const mockData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'GDP',
            data: [10, 12, 15, 13, 16],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4
          }]
        };
        setData(mockData);
      };

      return (
        <div className="app-container">
          <div className="left-panel">
            <button onClick={fetchData}>Fetch Data</button>
          </div>
          <div className="right-panel">
            {data && <Line data={data} />}
          </div>
        </div>
      );
    }

    export default App;
