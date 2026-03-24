import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { BottomTabBar } from './src/components/BottomTabBar';
import { productCopy } from './src/content/productCopy';
import { AppHomeScreen } from './src/screens/AppHomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { MoreScreen } from './src/screens/MoreScreen';
import { ReportsScreen } from './src/screens/ReportsScreen';
import { TicketsScreen } from './src/screens/TicketsScreen';
import type { AppTab } from './src/types/onboarding';

const DEMO_EMAIL = 'agent@demo.com';
const DEMO_PASSWORD = 'Field123!';
const SIGN_IN_DELAY_MS = 900;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [activeTab, setActiveTab] = useState<AppTab>('home');

  const handleSignIn = async (email: string, password: string) => {
    if (isSigningIn) {
      return false;
    }

    setIsSigningIn(true);

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, SIGN_IN_DELAY_MS);
      });

      const normalizedEmail = email.trim().toLowerCase();
      const normalizedPassword = password.trim();
      const isValid =
        normalizedEmail === DEMO_EMAIL.toLowerCase() &&
        normalizedPassword === DEMO_PASSWORD;

      if (isValid) {
        setIsAuthenticated(true);
        setActiveTab('home');
        return true;
      }

      return false;
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleOpenTickets = () => {
    setActiveTab('tickets');
  };

  const handleLogOut = () => {
    setIsAuthenticated(false);
    setActiveTab('home');
  };

  const tabItems = useMemo(
    () => [
      { key: 'home' as const, label: productCopy.tabs.home, shortLabel: 'Home' },
      {
        key: 'tickets' as const,
        label: productCopy.tabs.tickets,
        shortLabel: 'Tickets',
      },
      {
        key: 'reports' as const,
        label: productCopy.tabs.reports,
        shortLabel: 'Reports',
      },
      { key: 'more' as const, label: productCopy.tabs.more, shortLabel: 'More' },
    ],
    [],
  );

  if (!isAuthenticated) {
    return <LoginScreen isLoading={isSigningIn} onSignIn={handleSignIn} />;
  }

  return (
    <View style={styles.appShell}>
      {activeTab === 'home' ? <AppHomeScreen onReportIssue={handleOpenTickets} /> : null}
      {activeTab === 'tickets' ? <TicketsScreen /> : null}
      {activeTab === 'reports' ? <ReportsScreen /> : null}
      {activeTab === 'more' ? <MoreScreen onLogOut={handleLogOut} /> : null}

      <View style={styles.tabBarWrap}>
        <BottomTabBar
          items={tabItems}
          activeTab={activeTab}
          onTabPress={setActiveTab}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appShell: {
    flex: 1,
  },
  tabBarWrap: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
  },
});
