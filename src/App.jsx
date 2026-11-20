import { useState } from 'react'
import notificationData from './notifications'
import Notification from './Notification'
import './App.css'

function App() {

  // 1. Store notifications
  const [notifications, setNotifications] = useState(notificationData)

  // 2. Clear one notification
  function clearNotification(id) {
    const updatedNotifications = notifications.filter(function(notification) {
      return notification.id !== id
    })

    setNotifications(updatedNotifications)
  }

  // 3. Clear all notifications
  function clearAll() {
    setNotifications([])
  }

  // 4. Display notifications
  return (
    <div className="container">

      <header>
        <div className="logo">
          little inbox /
        </div>
      </header>

      <div className="intro">
        <p className="eyebrow">INBOX / 001</p>

        <h1>
          Your notifications<span className="period">.</span>
        </h1>

        <p className="description">
          Everything in one place.
        </p>
      </div>

      <div className="notification-header">
        <span className="count">
          <span className="count-number">
            {notifications.length}
          </span>
          {notifications.length === 1 ? 'notification' : 'notifications'}
        </span>

        <button
          className="clear-all"
          onClick={clearAll}
          disabled={notifications.length === 0}
        >
          Clear all ↗
        </button>
      </div>

      <div className="notification-list">
        {notifications.length === 0 ? (
          <div className="empty">
            <h2>All caught up.</h2>
            <p>You have no new notifications.</p>
          </div>
        ) : (
          notifications.map(function(notification) {
            return (
              <Notification
                key={notification.id}
                name={notification.name}
                onClear={function() {
                  clearNotification(notification.id)
                }}
              >
                {notification.message}
              </Notification>
            )
          })
        )}
      </div>

      <footer>
        <span>little inbox /</span>
        <span>2026</span>
      </footer>

    </div>
  )
}

export default App