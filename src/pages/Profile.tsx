import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonButton,
  IonText,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonModal,
  IonToggle,
  IonInput
} from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import {
  cameraOutline,
  settingsOutline,
  shieldCheckmarkOutline,
  logOutOutline,
  personCircleOutline,
  lockClosedOutline,
  notificationsOutline,
  eyeOutline,
  closeOutline
} from 'ionicons/icons';

interface ProfileProps {
  onSignOut: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onSignOut }) => {
  const [photo, setPhoto] = useState<string | undefined>('https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?s=250&d=identicon&r=PG');
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const takePhoto = async () => {
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      setPhoto(image.webPath);
    } catch (e) {
      console.log('User cancelled or camera failed');
    }
  };

  const handleLogout = async () => {
    await Haptics.impact({ style: ImpactStyle.Heavy });
    onSignOut();
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="premium-gradient-text">Studio Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0' }}>
          <div style={{ position: 'relative' }}>
            <IonAvatar style={{ width: '130px', height: '130px', border: '4px solid var(--premium-glass-border)', boxShadow: 'var(--premium-shadow)' }}>
              <img src={photo} alt="Profile" />
            </IonAvatar>
            <IonButton
              size="small"
              onClick={takePhoto}
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                '--border-radius': '50%',
                width: '40px',
                height: '40px',
                '--padding-start': '0',
                '--padding-end': '0',
                '--background': 'var(--premium-gradient)'
              }}
            >
              <IonIcon icon={cameraOutline} />
            </IonButton>
          </div>

          <IonText className="premium-gradient-text" style={{ fontSize: '1.8rem', marginTop: '20px', fontWeight: '800' }}>
            Faith Elijah
          </IonText>
          <IonText color="medium" style={{ fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px' }}>
            FULLSTACK ARCHITECT
          </IonText>
        </div>

        <IonList lines="none" className="glass-card" style={{ marginTop: '30px', padding: '10px' }}>
          <IonItem button onClick={() => setShowAccountModal(true)} detail={false} className="animate-fade-in" style={{ '--animation-delay': '0.1s' }}>
            <div style={{ padding: '10px', background: 'rgba(56, 128, 255, 0.1)', borderRadius: '12px', marginRight: '15px' }}>
              <IonIcon icon={settingsOutline} color="primary" />
            </div>
            <IonLabel>
              <h3 style={{ fontWeight: '700' }}>Account settings</h3>
              <p style={{ fontSize: '0.8rem' }}>Manage your profile data</p>
            </IonLabel>
          </IonItem>

          <IonItem button onClick={() => setShowPrivacyModal(true)} detail={false} className="animate-fade-in" style={{ '--animation-delay': '0.2s' }}>
            <div style={{ padding: '10px', background: 'rgba(45, 211, 111, 0.1)', borderRadius: '12px', marginRight: '15px' }}>
              <IonIcon icon={shieldCheckmarkOutline} color="success" />
            </div>
            <IonLabel>
              <h3 style={{ fontWeight: '700' }}>Privacy & Security</h3>
              <p style={{ fontSize: '0.8rem' }}>Control your visibility</p>
            </IonLabel>
          </IonItem>

          <IonItem button onClick={handleLogout} detail={false} className="animate-fade-in" style={{ '--animation-delay': '0.3s' }}>
            <div style={{ padding: '10px', background: 'rgba(235, 68, 90, 0.1)', borderRadius: '12px', marginRight: '15px' }}>
              <IonIcon icon={logOutOutline} color="danger" />
            </div>
            <IonLabel color="danger">
              <h3 style={{ fontWeight: '700' }}>Sign Out</h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(235, 68, 90, 0.6)' }}>End your current session</p>
            </IonLabel>
          </IonItem>
        </IonList>

        {/* Account Modal */}
        <IonModal isOpen={showAccountModal} onDidDismiss={() => setShowAccountModal(false)} className="glass-card">
          <IonHeader className="ion-no-border">
            <IonToolbar style={{ '--background': 'transparent' }}>
              <IonTitle>Edit Profile</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => setShowAccountModal(false)}>
                <IonIcon icon={closeOutline} color="light" />
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" style={{ '--background': 'transparent' }}>
            <div className="glass-card" style={{ padding: '20px' }}>
              <IonList lines="full" style={{ background: 'transparent' }}>
                <IonItem style={{ '--background': 'transparent' }}>
                  <IonIcon icon={personCircleOutline} slot="start" />
                  <IonLabel position="stacked">Full Name</IonLabel>
                  <IonInput value="Faith Elijah" placeholder="Your name" />
                </IonItem>
                <IonItem style={{ '--background': 'transparent' }}>
                  <IonIcon icon={personCircleOutline} slot="start" />
                  <IonLabel position="stacked">Professional Title</IonLabel>
                  <IonInput value="Fullstack Architect" placeholder="Your title" />
                </IonItem>
              </IonList>
              <IonButton expand="block" className="premium-button" style={{ marginTop: '30px' }} onClick={() => setShowAccountModal(false)}>
                Save Changes
              </IonButton>
            </div>
          </IonContent>
        </IonModal>

        {/* Privacy Modal */}
        <IonModal isOpen={showPrivacyModal} onDidDismiss={() => setShowPrivacyModal(false)} className="glass-card">
          <IonHeader className="ion-no-border">
            <IonToolbar style={{ '--background': 'transparent' }}>
              <IonTitle>Security</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => setShowPrivacyModal(false)}>
                <IonIcon icon={closeOutline} color="light" />
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" style={{ '--background': 'transparent' }}>
            <div className="glass-card" style={{ padding: '20px' }}>
              <IonList lines="none" style={{ background: 'transparent' }}>
                <IonItem style={{ '--background': 'transparent' }}>
                  <IonIcon icon={lockClosedOutline} slot="start" color="primary" />
                  <IonLabel>Two-Factor Auth</IonLabel>
                  <IonToggle slot="end" checked={true} />
                </IonItem>
                <IonItem style={{ '--background': 'transparent' }}>
                  <IonIcon icon={notificationsOutline} slot="start" color="success" />
                  <IonLabel>Login Notifications</IonLabel>
                  <IonToggle slot="end" checked={true} />
                </IonItem>
                <IonItem style={{ '--background': 'transparent' }}>
                  <IonIcon icon={eyeOutline} slot="start" color="warning" />
                  <IonLabel>Private Profile</IonLabel>
                  <IonToggle slot="end" />
                </IonItem>
              </IonList>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
