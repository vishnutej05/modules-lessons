import React, { useState, useEffect } from 'react';
import LeaderboardTable from '../../components/LeaderboardTable';

export default function Course() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    "https://scoretracking-vishnu.onrender.com/leaderboard",
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const responseData = await res.json();

                const sortedData = responseData.sort((a, b) => b.total - a.total);

                console.log(sortedData);

                setData(sortedData);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Ensure loading is set to false on error
            }
        };

        getData();
    }, []);

    // Conditional rendering based on loading state
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <LeaderboardTable data={data} />
        </div>
    );
}
