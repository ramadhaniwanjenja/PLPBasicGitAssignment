import React from 'react';
import { Avatar } from './components/Avatar';
import { IconButton } from './components/IconButton';
import styles from './styles/LiveChatRoom.module.css';

export const LiveChatRoom = () => {
  const controlIcons = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fb2f3924b580efdfc16716695776085f2f32080e2858399d64118b5456002c3?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694', alt: 'Control option 1' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d26a780c0a77196ebdec856aef1ae03519ba2868cd439c5ad7a8c86ac7320e72?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694', alt: 'Control option 2' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/061d4e98de18ae7633ce1357f01f5569d27abbd7c37e1c10c31e4c09724a66ba?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694', alt: 'Control option 3' }
  ];

  return (
    <main className={styles.chatRoom}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <Avatar 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bb5d6a0822dd331b120b28171769390fa8677469ad6d7e009d037ba94d7a9e8?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694"
            alt="Patel manav profile picture"
            size="medium"
          />
          <h1 className={styles.userName}>Patel manav</h1>
        </div>
        <nav className={styles.controls}>
          <div className={styles.statusIndicator} role="status" aria-label="Online status indicator" />
          {controlIcons.map((icon, index) => (
            <IconButton
              key={index}
              src={icon.src}
              alt={icon.alt}
              size={index === 0 ? 'small' : 'medium'}
            />
          ))}
        </nav>
      </header>

      <div className={styles.statusMessage} role="status" aria-live="polite">
        Patel is online...
      </div>

      <form className={styles.messageArea} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className={styles.messageInput}
          placeholder="Message"
          aria-label="Type your message"
        />
        <button 
          type="submit" 
          className={styles.sendButton}
          aria-label="Send message"
        />
      </form>
    </main>
  );
};
export default LiveChatRoom;