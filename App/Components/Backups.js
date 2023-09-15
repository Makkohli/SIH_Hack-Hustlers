import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const BackupScreen = () => {
  const [backupEnabled, setBackupEnabled] = React.useState(false);
  const [dailyBackup, setDailyBackup] = React.useState(false);
  const [cloudBackup, setCloudBackup] = React.useState(false);

  const toggleBackup = () => {
    setBackupEnabled(!backupEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Backup</Text>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Enable Backup</Text>
        <Switch
          value={backupEnabled}
          onValueChange={toggleBackup}
          thumbColor="#007BFF" // Blue thumb color
          trackColor={{ true: '#007BFF80', false: '#B0B0B0' }} // Blue when enabled, gray when disabled
        />
      </View>
      {backupEnabled && (
        <>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>Backup Frequency</Text>
            <Switch
              value={dailyBackup}
              onValueChange={() => setDailyBackup(!dailyBackup)}
              thumbColor="#007BFF" // Blue thumb color
              trackColor={{ true: '#007BFF80', false: '#B0B0B0' }} // Blue when enabled, gray when disabled
            />
            <Text style={styles.optionSubText}>Daily</Text>
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>Backup Location</Text>
            <Switch
              value={cloudBackup}
              onValueChange={() => setCloudBackup(!cloudBackup)}
              thumbColor="#007BFF" // Blue thumb color
              trackColor={{ true: '#007BFF80', false: '#B0B0B0' }} // Blue when enabled, gray when disabled
            />
            <Text style={styles.optionSubText}>Cloud</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f2f2f2', // Light gray background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark gray text color
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#333', // Dark gray text color
  },
  optionSubText: {
    fontSize: 16,
    color: '#555', // Gray text color
  },
});

export default BackupScreen;
