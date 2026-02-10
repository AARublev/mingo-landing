import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();
    
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    
    // Проверка переменных окружения
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('❌ Отсутствуют переменные окружения:', {
        hasBotToken: !!BOT_TOKEN,
        hasChatId: !!CHAT_ID
      });
      return NextResponse.json(
        { success: false, error: 'Ошибка конфигурации сервера' }, 
        { status: 500 }
      );
    }
    
    const message = `🎯 Новая заявка!\n\n👨 Имя: ${name}\n📞 Телефон: ${phone}`;
    
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    console.log('📤 Отправка в Telegram...');
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error('❌ Ошибка Telegram API:', data);
      return NextResponse.json(
        { success: false, error: data.description || 'Telegram API error' }, 
        { status: 500 }
      );
    }
    
    console.log('✅ Сообщение отправлено успешно');
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('❌ Ошибка при отправке:', error);
    return NextResponse.json(
      { success: false, error: String(error) }, 
      { status: 500 }
    );
  }
}
