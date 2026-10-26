import React from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'react-apexcharts';

export default function Dashboard() {
  const navigate = useNavigate();

  // عملية تسجيل الخروج
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // إعدادات الرسم البياني الخطي (Sales Chart)
  const lineChartOptions = {
    chart: { id: 'sales-chart', toolbar: { show: false } },
    xaxis: { categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'] },
    colors: ['#2563eb'],
    stroke: { curve: 'smooth' }
  };
  const lineChartSeries = [
    { name: 'المبيعات (SAR)', data: [30, 40, 45, 50, 49, 60] }
  ];

  // إعدادات الرسم البياني الدائري (Pie Chart)
  const pieChartOptions = {
    labels: ['المنتجات', 'الخدمات', 'الاشتراكات'],
    colors: ['#2563eb', '#10b981', '#f59e0b']
  };
  const pieChartSeries = [44, 55, 13];

  return (
    <div style={styles.container}>
      {/* الشريط العلوي */}
      <header style={styles.header}>
        <h1 style={styles.logo}>Matrix Group Dashboard</h1>
        <button onClick={handleLogout} style={styles.logoutBtn}>تسجيل الخروج</button>
      </header>

      {/* المحتوى الرئيسي */}
      <main style={styles.main}>
        <h2 style={styles.welcomeTitle}>نظرة عامة على الأداء</h2>

        {/* بطاقات الإحصائيات */}
        <div style={styles.statsGrid}>
          <div style={styles.card}>
            <p style={styles.cardTitle}>إجمالي المبيعات</p>
            <h3 style={styles.cardValue}>124,500 ر.س</h3>
          </div>
          <div style={styles.card}>
            <p style={styles.cardTitle}>المستخدمين النشطين</p>
            <h3 style={styles.cardValue}>1,280</h3>
          </div>
          <div style={styles.card}>
            <p style={styles.cardTitle}>الطلبات الجديدة</p>
            <h3 style={styles.cardValue}>45</h3>
          </div>
        </div>

        {/* قسم الرسوم البيانية */}
        <div style={styles.chartsGrid}>
          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>نمو المبيعات الشهرية</h3>
            <Chart 
              options={lineChartOptions} 
              series={lineChartSeries} 
              type="line" 
              height={300} 
            />
          </div>

          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>توزيع الإيرادات</h3>
            <Chart 
              options={pieChartOptions} 
              series={pieChartSeries} 
              type="pie" 
              height={300} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    direction: 'rtl',
    fontFamily: 'system-ui, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: '15px 30px',
  },
  logo: {
    fontSize: '20px',
    margin: 0,
  },
  logoutBtn: {
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  main: {
    padding: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  welcomeTitle: {
    color: '#1f2937',
    marginBottom: '20px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  cardTitle: {
    margin: 0,
    color: '#6b7280',
    fontSize: '14px',
  },
  cardValue: {
    margin: '10px 0 0 0',
    color: '#111827',
    fontSize: '24px',
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px',
  },
  chartCard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  chartTitle: {
    marginTop: 0,
    marginBottom: '15px',
    color: '#374151',
    fontSize: '16px',
  }
};