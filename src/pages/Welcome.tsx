import {
  IonContent,
  IonPage,
  IonButton,
  IonText,
  IonIcon
} from '@ionic/react';
import { arrowForwardOutline, sparklesOutline } from 'ionicons/icons';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <IonPage>
      <IonContent fullscreen forceOverscroll={false}>
        <div className="welcome-content" style={{
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(37, 117, 252, 0.1) 0%, transparent 70%)'
        }}>
          <div className="animate-float" style={{
            width: '120px',
            height: '120px',
            background: 'var(--premium-gradient)',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(37, 117, 252, 0.3)',
            marginBottom: '40px'
          }}>
            <IonIcon icon={sparklesOutline} style={{ fontSize: '60px', color: 'white' }} />
          </div>

          <div className="animate-fade-in">
            <IonText>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1', marginBottom: '10px' }}>
                Brave <span className="premium-gradient-text">Studio</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--ion-color-medium)', marginBottom: '50px' }}>
                Next-gen performance tracking & roadmap management.
              </p>
            </IonText>

            <IonButton
              expand="block"
              className="premium-button"
              onClick={onStart}
              style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}
            >
              Get Started
              <IonIcon slot="end" icon={arrowForwardOutline} />
            </IonButton>

            <IonText color="medium" style={{ fontSize: '0.8rem', marginTop: '20px', display: 'block' }}>
              Powering production excellence.
            </IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
