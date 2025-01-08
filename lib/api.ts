interface MessageData {
  name: string;
  email: string;
  message: string;
}

export async function sendMessage(data: MessageData): Promise<void> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }
}

