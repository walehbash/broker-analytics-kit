
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
export default function Datasets(){
  const datasets = [
    'broker_user_signups.csv','trading_transactions.csv','portfolio_performance.csv','suspicious_trades.csv',
    'stock_price_history.csv','customer_retention.csv','crypto_trading.csv','user_demographics.csv','daily_revenue.csv','social_sentiment.csv'
  ];
  const [selected, setSelected] = useState(null);
  const [rows, setRows] = useState([]);
  useEffect(()=>{
    if(!selected) return;
    Papa.parse('/assets/' + selected, {download:true, header:true, dynamicTyping:true, complete: (res)=> setRows(res.data.slice(0,200))});
  },[selected]);
  return (
    <div className="container">
      <h1>Datasets</h1>
      <div style={{display:'flex',gap:20}}>
        <div style={{width:300}} className="card">
          {datasets.map(d=> <div key={d} style={{padding:8,borderBottom:'1px solid rgba(255,255,255,0.03)'}}><button onClick={()=>setSelected(d)} style={{background:'none',border:'none',color:'#06b6d4'}}>{d}</button></div>)}
        </div>
        <div style={{flex:1}} className="card">
          <h3>Preview: {selected}</h3>
          <div style={{maxHeight:500,overflow:'auto'}}>
            <table><thead><tr>{rows[0] && Object.keys(rows[0]).map(h=> <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{rows.map((r,i)=>(<tr key={i}>{Object.values(r).map((v,ii)=>(<td key={ii}>{String(v)}</td>))}</tr>))}</tbody></table>
          </div>
        </div>
      </div>
    </div>
  )
}
