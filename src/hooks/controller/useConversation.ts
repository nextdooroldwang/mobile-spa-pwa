import { Client } from '@twilio/conversations';
import { useMount } from 'ahooks';

export default function useConversation() {
  useMount(() => {
    const conversationsClient = new Client('');
    conversationsClient.on('stateChanged', (state) => {
      console.log(state);
      if (state === 'initialized') {
        // Use the client
        console.log(state);
      }
    });
  });
  return {};
}
