import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { gridOutline, listOutline, personOutline } from 'ionicons/icons';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';

import Welcome from './pages/Welcome';
import { useState } from 'react';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return (
      <IonApp>
        <Welcome onStart={() => setShowWelcome(false)} />
      </IonApp>
    );
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/tasks">
              <Tasks />
            </Route>
            <Route path="/profile">
              <Profile onSignOut={() => setShowWelcome(true)} />
            </Route>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className="glass-card" style={{
            margin: '20px 20px 30px 20px',
            borderRadius: '24px',
            border: '1px solid var(--premium-glass-border)',
            height: '70px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon aria-hidden="true" icon={gridOutline} />
              <IonLabel>Hub</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tasks" href="/tasks">
              <IonIcon aria-hidden="true" icon={listOutline} />
              <IonLabel>Roadmap</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon aria-hidden="true" icon={personOutline} />
              <IonLabel>Studio</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
