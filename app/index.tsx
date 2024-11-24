/* eslint-disable import/order */
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container } from '~/components/Container';
import { MultiSelect } from './components/MultiSelect';
import React from 'react';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Screen options={{ title: 'Character Search' }} />
      <Container>
        <MultiSelect />
      </Container>
    </QueryClientProvider>
  );
}
