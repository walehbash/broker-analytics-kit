
import Link from 'next/link'
export default function Home(){
  const assetsBase = '/assets';
  const datasets = [
    'broker_user_signups.csv','trading_transactions.csv','portfolio_performance.csv','suspicious_trades.csv',
    'stock_price_history.csv','customer_retention.csv','crypto_trading.csv','user_demographics.csv','daily_revenue.csv','social_sentiment.csv'
  ];
  return (
    <div className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:18}}>
        <div><h1 style={{margin:0}}>Broker Analytics Kit</h1><div style={{color:'#94a3b8'}}>Interactive learning — Robinhood-style UI</div></div>
        <div><a className="button" href={assetsBase + '/Data_Analysis_Starter_Kit.zip'}>Download Starter Kit</a></div>
      </div>
      <div className="card" style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:20}}>
        <div>
          <h2>Interactive PDF</h2>
          <p style={{color:'#94a3b8'}}>Open the beginner-friendly guide inside your browser or download it.</p>
          <div style={{marginTop:12}}><a href={assetsBase + '/Data_Analysis_Made_Simple.pdf'} target="_blank" rel="noreferrer">Open PDF Guide (new tab)</a></div>
          <h3 style={{marginTop:18}}>Mini Dashboard</h3>
          <p style={{color:'#94a3b8'}}>Play with a small interactive dashboard demo.</p>
          <div style={{marginTop:8}}><a href={assetsBase + '/mini_dashboard.html'} target="_blank" rel="noreferrer">Open Mini Dashboard</a></div>
        </div>
        <div>
          <h3>Datasets</h3>
          <div className="card" style={{maxHeight:420,overflow:'auto'}}>
            <table><thead><tr><th>Name</th><th>Action</th></tr></thead><tbody>
            {datasets.map(d => (<tr key={d}><td style={{color:'#e6eef6'}}>{d}</td><td><a className="link" href={'/assets/' + d} download>Download</a></td></tr>))}
            </tbody></table>
          </div>
        </div>
      </div>
    </div>
  )
}
