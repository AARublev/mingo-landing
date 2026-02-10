export async function sendToTelegram(name: string, phone: string) {
  try {
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone }),
    });
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Telegram error:', error);
    return false;
  }
}