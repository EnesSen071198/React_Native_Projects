/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import {ErrorBoundary} from 'react-error-boundary'
import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from 'react-query';

import Navigation from './src/navigation/navigation'
import * as Queries from './src/utils/queries'
// import './src/utils/axios';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
    },
  }
});

// use https://www.npmjs.com/package/react-native-global-props if need more default props

const QueryProvider = () => {
    const errorFallbackRender = () => <></>

  return (
        <QueryClientProvider client={queryClient}>
            <QueryErrorResetBoundary>
                {({reset}) => (
                    <ErrorBoundary onReset={reset} fallbackRender={errorFallbackRender}>
                        <React.Suspense fallback={<></>}>
                            <App />
                        </React.Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </QueryClientProvider>
    );
}

const App = () => (
    <SafeAreaView style={styles.safeArea}>
        <StatusBar hidden backgroundColor="transparent" />
        <Navigation />
    </SafeAreaView>
)

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
  }
});

export default QueryProvider
