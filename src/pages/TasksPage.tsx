import React, { useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonCheckbox, 
  IonItemSliding, 
  IonItemOptions, 
  IonItemOption,
  IonIcon,
  IonFab,
  IonFabButton,
  IonAlert,
  IonBadge,
  IonText
} from '@ionic/react';
import { addOutline, trashOutline, flameOutline, checkmarkDoneOutline } from 'ionicons/icons';
import { usePersistence } from '../hooks/usePersistence';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = usePersistence<Task[]>('user_tasks', [
    { id: 1, title: 'Finalize Brave UI Design', completed: true, priority: 'High' },
    { id: 2, title: 'Integrate Capacitor Camera', completed: false, priority: 'High' },
  ]);
  const [showAlert, setShowAlert] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const toggleTask = async (id: number) => {
    await Haptics.impact({ style: ImpactStyle.Light });
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = async (id: number) => {
    await Haptics.impact({ style: ImpactStyle.Medium });
    setTasks(tasks.filter(t => t.id !== id));
  };

  const addTask = async (title: string, priority: 'High' | 'Medium' | 'Low' = 'Medium') => {
    await Haptics.impact({ style: ImpactStyle.Heavy });
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      priority
    };
    setTasks([...tasks, newTask]);
    setShowAlert(false);
  };

  const updateTask = async (id: number, title: string, priority: any) => {
    await Haptics.impact({ style: ImpactStyle.Medium });
    setTasks(tasks.map(t => t.id === id ? { ...t, title, priority } : t));
    setEditingTask(null);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="premium-gradient-text">Brave Roadmap</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ padding: '0 16px', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <IonIcon icon={flameOutline} color="warning" style={{ fontSize: '24px' }} />
          <IonText color="light" style={{ marginLeft: '8px', fontWeight: '600' }}>
            {tasks.filter(t => !t.completed).length} Tasks remaining
          </IonText>
        </div>

        {tasks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '100px 40px', color: 'var(--ion-color-medium)' }}>
            <IonIcon icon={checkmarkDoneOutline} style={{ fontSize: '64px', opacity: '0.2' }} />
            <h2 style={{ fontSize: '1.2rem', marginTop: '16px' }}>All caught up!</h2>
            <p>Add a new task to get started.</p>
          </div>
        ) : (
          <IonList lines="none" style={{ background: 'transparent' }}>
            {tasks.map(task => (
              <IonItemSliding key={task.id}>
                <IonItemOptions side="start">
                  <IonItemOption color="primary" onClick={() => setEditingTask(task)}>
                    <IonIcon slot="icon-only" icon={addOutline} />
                  </IonItemOption>
                </IonItemOptions>

                <IonItem className="glass-card" style={{ margin: '8px 16px' }}>
                  <IonCheckbox 
                    slot="start" 
                    checked={task.completed} 
                    onIonChange={() => toggleTask(task.id)}
                  />
                  <IonLabel onClick={() => setEditingTask(task)}>
                    <h2 style={{ 
                      color: task.completed ? 'var(--ion-color-medium)' : 'var(--ion-color-light)', 
                      textDecoration: task.completed ? 'line-through' : 'none',
                      fontWeight: '700'
                    }}>
                      {task.title}
                    </h2>
                    <IonBadge color={task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'primary' : 'success'} style={{ marginTop: '4px', fontSize: '10px' }}>
                      {task.priority}
                    </IonBadge>
                  </IonLabel>
                  {task.completed && <IonIcon icon={checkmarkDoneOutline} color="success" slot="end" />}
                </IonItem>

                <IonItemOptions side="end">
                  <IonItemOption color="danger" onClick={() => deleteTask(task.id)}>
                    <IonIcon slot="icon-only" icon={trashOutline} />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        )}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton className="premium-button" onClick={() => setShowAlert(true)}>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>

        {/* Add Task Alert */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="New Objective"
          cssClass="premium-alert"
          inputs={[
            { name: 'title', type: 'text', placeholder: 'Build the future...' }
          ]}
          buttons={[
            { text: 'Cancel', role: 'cancel' },
            {
              text: 'Add',
              handler: (data) => {
                if (data.title) addTask(data.title);
              }
            }
          ]}
        />

        {/* Edit Task Alert */}
        <IonAlert
          isOpen={!!editingTask}
          onDidDismiss={() => setEditingTask(null)}
          header="Edit Roadmap"
          inputs={[
            { name: 'title', type: 'text', value: editingTask?.title, placeholder: 'Update goal...' }
          ]}
          buttons={[
            { text: 'Delete', role: 'destructive', cssClass: 'danger', handler: () => deleteTask(editingTask!.id) },
            {
              text: 'Save',
              handler: (data) => {
                if (data.title) updateTask(editingTask!.id, data.title, editingTask!.priority);
              }
            }
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
