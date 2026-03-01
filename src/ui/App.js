import React from 'react';

const Dashboard = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'monospace', backgroundColor: '#0d1117', color: '#58a6ff', height: '100vh' }}>
            <h1 style={{ color: '#f0f6fc' }}>LEGEND // CTF_DASHBOARD</h1>
            <hr style={{ borderColor: '#30363d' }} />
            <section>
                <h2>Active Challenges</h2>
                <ul>
                    <li>[WEB] SQL Injection 101 - <span style={{ color: '#3fb950' }}>ACTIVE</span></li>
                    <li>[PWN] Stack Overflow - <span style={{ color: '#3fb950' }}>ACTIVE</span></li>
                    <li>[CRYPTO] XOR Basics - <span style={{ color: '#3fb950' }}>ACTIVE</span></li>
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;
