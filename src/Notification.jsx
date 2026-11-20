function Notification(props) {

  // 1. Display a notification
  return (
    <div className="notification">

      <div className="avatar">
        ✉
      </div>

      <div className="notification-content">
        <h3>{props.name}</h3>
        <p>{props.children}</p>
      </div>

      <button
        className="clear-button"
        onClick={props.onClear}
      >
        ×
      </button>

    </div>
  )
}

export default Notification