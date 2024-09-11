export const showNotification = (
  $q,
  type,
  message,
  position = "top-right",
  timeout = 5000
) =>
  $q.notify({
    type: type,
    message: message,
    position: position,
    timeout: timeout,
  });
