import React from 'react';

const Committee = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Conference Chair Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#d9534f', fontWeight: 'bold' }}>
          <span style={{ marginRight: '10px' }}>⦿</span>Conference Chair
        </h2>
        <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Lek Wantha</span>
            <span>Suranaree University of Technology, Thailand</span>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Adrian Flood</span>
            <span>Vidyasirimedhi Institute of Science and Technology, Thailand</span>
          </li>
        </ul>
      </div>

      {/* Local Organizing Committee Section */}
      <div>
        <h2 style={{ color: '#d9534f', fontWeight: 'bold' }}>
          <span style={{ marginRight: '10px' }}>⦿</span>Local Organizing Committee
        </h2>
        <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Lek Wantha</span>
            <span>Suranaree University of Technology, Thailand</span>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Adrian Flood</span>
            <span>Vidyasirimedhi Institute of Science and Technology, Thailand</span>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Atthaphon Maneedaeng</span>
            <span>Suranaree University of Technology, Thailand</span>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Aroonsri Nuchitprasittichai</span>
            <span>Suranaree University of Technology, Thailand</span>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Amporn Ladnongkhun</span>
            <span>Suranaree University of Technology, Thailand</span>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Kanaphol Amornrattanaket</span>
            <span>Suranaree University of Technology, Thailand</span>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Saran Dokmaikun</span>
            <span>Suranaree University of Technology, Thailand</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Committee;
