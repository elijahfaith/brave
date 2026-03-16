import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText
} from '@ionic/react';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle size="large" className="premium-gradient-text">Brave Studio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="animate-fade-in" style={{ padding: '0 16px' }}>
          <IonText color="medium">
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', margin: '0 0 4px 0' }}>Hi, Faith</h2>
            <p style={{ margin: '0 0 24px 0' }}>You're on a 12-day winning streak! 🔥</p>
          </IonText>

          <IonGrid className="ion-no-padding">
            <IonRow>
              <IonCol size="12">
                <IonCard className="glass-card" style={{ margin: '0 0 16px 0', padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                      <div className="stat-label">Project Completion</div>
                      <div className="stat-value">84%</div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', marginTop: '10px' }}>
                        <div style={{ width: '84%', height: '100%', background: 'var(--premium-gradient)', borderRadius: '3px', boxShadow: '0 0 15px rgba(37, 117, 252, 0.5)' }} />
                      </div>
                    </div>
                    <div style={{ marginLeft: '20px', width: '80px', height: '80px', position: 'relative' }}>
                      <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#grad1)"
                          strokeWidth="3"
                          strokeDasharray="84, 100"
                        />
                        <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#6a11cb', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#2575fc', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '12px', fontWeight: '800' }}>
                        TOP
                      </div>
                    </div>
                  </div>
                </IonCard>
              </IonCol>
            </IonRow>

            <IonRow style={{ margin: '0 -8px' }}>
              <IonCol size="6" style={{ padding: '0 8px' }}>
                <IonCard className="glass-card" style={{ margin: '0 0 16px 0' }}>
                  <IonCardContent>
                    <div className="stat-label">Active Tasks</div>
                    <div className="stat-value">14</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6" style={{ padding: '0 8px' }}>
                <IonCard className="glass-card" style={{ margin: '0 0 16px 0' }}>
                  <IonCardContent>
                    <div className="stat-label">Hours Logged</div>
                    <div className="stat-value">128</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonCard className="glass-card" style={{ margin: '0' }}>
                  <IonCardHeader>
                    <IonCardTitle style={{ fontSize: '1rem', fontWeight: '700' }}>Performance Insight</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div style={{
                      height: '140px',
                      background: 'rgba(255,255,255,0.01)',
                      borderRadius: '16px',
                      border: '1px dashed var(--premium-glass-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--ion-color-medium)'
                    }}>
                      <div style={{ fontSize: '24px', marginBottom: '8px' }}>📊</div>
                      <div style={{ fontSize: '0.8rem' }}>AI analyzing your workflow...</div>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
