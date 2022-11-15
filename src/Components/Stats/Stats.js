import React, {useEffect, useState} from 'react';
import {Container, Stat, StatItem, Application} from './Style';
import {useSelector, useDispatch} from 'react-redux';
import {getStats} from '../../Redux/AllJobs';
import {MdPendingActions} from 'react-icons/md';
import {AiFillSchedule} from 'react-icons/ai';
import {BsBugFill} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

export default function Stats() {
  let dispatch = useDispatch();
  let dataStats = useSelector((state) => state.AllJobs.stats);
  let application = useSelector((state) => state.AllJobs.monthlyApplications);

  let [chart, setChart] = useState(true);

  let data = [
    {
      type: dataStats.pending,
      icon: <MdPendingActions />,
      text: 'Jobs Declined',
      color: '#E9B949',
      back: '#FCEFC7',
    },
    {
      type: dataStats.interview,
      icon: <AiFillSchedule />,
      text: 'Interviews Scheduled',
      color: '#647ACB',
      back: '#E0E8F9',
    },
    {
      type: dataStats.declined,
      icon: <BsBugFill />,
      text: 'Pending Applications',

      color: '#D66A6A',
      back: '#FFEEEE',
    },
  ];
  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  return (
    <Container>
      <Stat>
        {data.map((item, index) => (
          <StatItem
            style={{borderBottom: `5px solid ${item.color}`}}
            key={index}
          >
            <div className="top" style={{color: item.color}}>
              <h4>{item.type}</h4>
              <div style={{backgroundColor: item.back}}>{item.icon}</div>
            </div>
            <p>{item.text}</p>
          </StatItem>
        ))}
      </Stat>
      <Application>
        <h2>Monthly Applications</h2>
        <button onClick={() => setChart(!chart)}>
          {chart ? 'Area Chart' : 'Bar Chart'}
        </button>
        {!chart ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={application} margin={{top: 50}}>
              <CartesianGrid strokeDasharray="3 3 " />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" barSize={75} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={application} margin={{top: 50}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#1e3a8a"
                fill="#3b82f6"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Application>
    </Container>
  );
}
